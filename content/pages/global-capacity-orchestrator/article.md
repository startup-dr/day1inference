---
title: "Global Capacity Orchestrator: One API, Every Accelerator, Any Region"
subtitle: A multi-region AI/ML orchestration platform for AWS — capacity-aware scheduling, global inference, and a notebook-analytics environment behind a single endpoint
category: tool
subcategory: solutions
published: 2026-06-09
updated: 2026-06-09
authors:
  - Jake Mevorach
toc: true
description: A tour of the Global Capacity Orchestrator (GCO) — how it unifies fragmented multi-region accelerator capacity behind one API, with capacity-aware routing, global inference serving, a goal-directed Mission loop, and an interactive ML & analytics environment.
image: ./assets/request-data-flow.svg
---

Accelerator capacity is not where you want it, when you want it. The instance type your job needs is out of stock in the region you'd prefer, available as spot in a second region, and on-demand only in a third. So the work starts before the work: open a console per region, check what's free right now, and submit wherever you get lucky first.

The [Global Capacity Orchestrator](https://github.com/awslabs/global-capacity-orchestrator-on-aws) (GCO) is an open-source platform that collapses that scramble down to one endpoint and one command. It is multi-region accelerated-compute orchestration for AWS. The capabilities are capacity-aware scheduling, spot fallback, and autoscaling inference endpoints with automatic failover and latency-aware routing. The access surface is the thing that ties them together: all of it sits behind a single REST API and CLI. One stack covers AI/ML end to end — training and batch jobs, global inference, and an optional notebook-analytics environment — and one command stands up every region you define.

This article walks through how it works, the architecture decisions behind it, and the commands you'd actually run. It pairs naturally with the [Production Scale Inference Overview](https://day1inference.com/global-inference-serving), which covers the Global Accelerator + multi-region + EKS pattern in the abstract; GCO is one concrete, deployable implementation of that pattern.

## The capacity problem

The project states the problem plainly, without dressing it up:

> Running GPU workloads at scale is hard. You need to find regions with available capacity, provision clusters, handle authentication, deal with failover, and persist outputs after pods terminate.

Each clause in that sentence is a separate chore, and each one is usually solved by hand. None of them is hard in isolation. The cost is that there are several of them, they recur per region, and they have to stay in sync as regions come and go.

| The challenge | What it looks like by hand |
|---------------|----------------------------|
| GPU availability | Manually check each region for the instance type you need, then submit wherever capacity happens to exist. |
| Node provisioning | Stand up and configure a cluster in every region before any workload can run. |
| Multi-region operations | Operate and watch several clusters at once, each with its own state to reconcile. |
| Authentication | Distribute and rotate a kubeconfig per cluster instead of relying on existing IAM identities. |
| Failover | Notice when a region goes unhealthy and re-route or re-submit the work yourself. |
| Job outputs | Copy results off the node before the pod terminates, or lose them. |
| Inference serving | Deploy and wire up a serving stack in each region separately, then keep them aligned. |

"Manually check each region" is the multi-region GPU scramble in four words: a polling loop run by a human, where the answer expires the moment you get it. Everything below it — provisioning, kubeconfig distribution, failover, output persistence — is the tax you pay for having spread across regions in the first place to find that capacity.

It is a specific crowd that lives with this: teams running accelerated workloads across more than one region, who want capacity discovered for them and access governed by the IAM identities they already have rather than a kubeconfig handed out per cluster.

## The core idea: every region is a nodepool behind one endpoint

GCO spins up EKS Auto Mode clusters across AWS regions and wires them together with AWS Global Accelerator for latency-aware anycast routing and automatic failover. You submit Kubernetes manifests through one REST API or CLI; from there GCO handles capacity-aware scheduling, spot fallback, multi-region autoscaling inference endpoints, and output persistence. The regions stop being separate clusters you babysit and start behaving like nodepools you reach through a single front door.

That front door is a fixed path, and it is worth being precise about it because the shape of the path is the whole idea. A request is signed with AWS Signature Version 4 (SigV4) and enters through API Gateway, which is edge-optimized — fronted by Amazon CloudFront's global edge network, so TLS terminates and requests are absorbed at the nearest CloudFront edge location, with edge caching and DDoS protection in front of the API — and rejects anything without valid IAM credentials. API Gateway hands off to AWS Global Accelerator, which routes the request over anycast to the nearest healthy region and fails over automatically when a region stops answering. Global Accelerator reaches that region's Application Load Balancer, which accepts Global Accelerator IPs only, and the ALB forwards into the region's EKS Auto Mode cluster. Same entry point, same auth, same routing fabric, regardless of how many regions sit behind it.

<figure>
  <img src="/global-capacity-orchestrator/assets/request-data-flow.svg" alt="Top-level request and data flow: Client to API Gateway to Global Accelerator to per-region ALB and EKS Auto Mode cluster, with the GCO control plane drawn off to the side as an advisory element." />
  <figcaption>
    Top-level request and data flow. A request is signed with SigV4 and enters through API Gateway, which hands off to AWS Global Accelerator; Global Accelerator routes over anycast to the nearest healthy region and fails over automatically, reaching that region's ALB (which accepts Global Accelerator IPs only) and then its EKS Auto Mode cluster. GCO's capacity scoring and control element does <strong>not</strong> sit on this synchronous spine: it runs to the side, reading each region's Health Monitor signal and informing submission and routing decisions before a request is placed. Region names and their accelerator mix (NVIDIA GPU, AWS Trainium, AWS Inferentia, Graviton/CPU) are illustrative and configurable via the <code>deployment_regions</code> array in <code>cdk.json</code>.
  </figcaption>
</figure>

Inside each region, the EKS Auto Mode cluster carries the same internal shape. It runs a set of Karpenter nodepools — `system` and `general-purpose` for platform and CPU work, `gpu-x86` and `gpu-arm` for NVIDIA GPU instances on each architecture, a dedicated `inference` pool, an `efa` pool for EFA-enabled distributed training, and a `neuron` pool for Trainium/Inferentia — alongside the services that keep the region honest: a Health Monitor, a Manifest Processor, and an Inference Monitor. Shared storage is EFS, with FSx for Lustre available when a workload needs it. Because the layout is identical region to region, the same manifest lands the same way whether it runs in us-east-1 or ap-northeast-1, and the accelerator behind it can be an NVIDIA GPU (current-generation g5, g6, and g6e, with g4dn and p3 still in the pool for broad availability, plus ARM64 g5g on Graviton), AWS Trainium, AWS Inferentia, or general-purpose CPU on amd64 or Graviton.

The GPU and inference pools look alike but are tuned for opposite lifecycles. The `gpu-x86` and `gpu-arm` pools provision GPU instances for training and batch jobs and can draw on spot for cost; the `inference` pool is on-demand only and consolidates a node only once it is completely empty (Karpenter's `WhenEmpty` policy, with a grace period), so routine scaling never evicts a pod that is mid-request. Node-level autoscaling is Karpenter itself, which EKS Auto Mode runs for you: a pending pod triggers Karpenter to provision a matching instance and bin-pack onto it, while the Horizontal Pod Autoscaler (covered below) handles replica counts on top of that. The two layers compose — HPA decides how many pods, Karpenter decides how many nodes.

Each cluster also ships with an open-source AI/ML stack pre-installed through Helm, so you are not wiring it up yourself: KEDA for event-driven (SQS) autoscaling, the NVIDIA GPU Operator and DRA driver, the AWS EFA and Neuron device plugins, Volcano and Kueue for gang scheduling and job queueing, KubeRay for Ray, and cert-manager. Slurm (via the Slinky operator) and Apache YuniKorn are available as opt-in toggles in `cdk.json` for teams that want HPC-style or hierarchical-queue scheduling.

The set of regions is not fixed in code. The regional stack deploys to any AWS region, and you add or remove regions by editing the `deployment_regions.regional` array in `cdk.json`. Grow from one region to four by changing a list, not by re-architecting how requests get in.

One detail in the diagram matters more than it looks. GCO's scoring and control element is drawn off to the side, not as a hop between API Gateway and Global Accelerator. The request spine carries authentication and routing only. Choosing which region should take a workload is a separate, read-side concern: it is fed by each region's Health Monitor signals rather than by a synchronous call on the data path. The next section follows that scoring path on its own.

## Capacity-aware routing: score every region before you submit

That manual scramble from the opening — checking each region by hand and submitting wherever capacity happens to surface first — is exactly what capacity-aware routing replaces. GCO collapses the human polling loop into a single scored decision.

The narrowest form is a point check. `gco capacity check` asks one region whether a specific instance type has capacity, for spot, on-demand, or both:

```bash
gco capacity check --instance-type g6.xlarge --region us-east-1
```

That answers "does *this* region have it." The more useful question is "which region should I use." `gco capacity recommend-region` inverts the check: it scores the deployed regions and returns the best one. With `--gpu` it recommends across GPU-capable regions without you naming an instance type:

```bash
gco capacity recommend-region --gpu
```

Pass a concrete instance type with `-i`/`--instance-type` and `recommend-region` switches from a simple composite score to **weighted multi-signal scoring**. The score combines five live signals per region: spot placement scores, spot-vs-on-demand pricing, queue depth, GPU utilization, and running job counts. Without an instance type it falls back to the simpler composite. The point is that the recommendation reflects the current state of your fleet, not a static preference list:

```bash
gco capacity recommend-region -i g5.xlarge
# illustrative output — real numbers depend on live capacity
# ✓ Recommended region: us-east-1
#   signals: spot available · queue depth 2 · GPU util 38% · on-demand $1.01/hr
```

Each input maps to a real cost-or-availability risk. Spot placement scores predict whether a spot request will actually be fulfilled; spot-vs-on-demand pricing weighs cost against interruption risk; queue depth and running job counts capture how busy a region already is; GPU utilization shows headroom. Blending them is what lets one command pick a region you would otherwise have to reason about across several consoles.

<figure>
  <img src="/global-capacity-orchestrator/assets/capacity-aware-routing.svg" alt="Capacity-aware routing: per-region Health Monitors publish signals into a weighted score, the highest-scoring region is chosen, and the job is submitted to that region's SQS queue." />
  <figcaption>
    Capacity-aware routing. Every region runs its own Health Monitor that publishes its own signal set: spot placement scores, spot-vs-on-demand pricing, queue depth, GPU utilization, and running job counts. GCO combines those signals into a weighted multi-signal score for each region (the scoring <code>gco capacity recommend-region</code> uses when given an instance type), picks the region with the highest score, and submits the job to <strong>that region's</strong> SQS queue via <code>gco jobs submit-sqs --region</code>. The model is decentralized: signals are per-region and there is no central dispatcher deciding placement.
  </figcaption>
</figure>

A single global brain that ranks regions becomes the bottleneck and the single point of failure. GCO keeps scoring decentralized: each region's Health Monitor runs inside the cluster (in the `gco-system` namespace) and compares its own utilization against configurable `cdk.json` thresholds, reporting `healthy` or `unhealthy`. The recommendation reads those per-region signals; no region depends on a central coordinator staying up.

When the trade-offs are fuzzier than a weighted sum — "train a large model without blowing the budget" — `gco capacity ai-recommend` hands the same live capacity data (spot placement scores and pricing, on-demand availability, cluster utilization, and job counts) to a model on Amazon Bedrock (Claude by default) along with a plain-language workload description:

```bash
gco capacity ai-recommend --workload "Training a large language model"
```

These recommendations are AI-generated and should be validated before making production decisions. Capacity availability and pricing can change rapidly. Once a region wins the score, the job goes to *that region's* SQS queue — the same decentralized path the diagram traces, with no global dispatcher in the middle.

### When you need guaranteed capacity: reservations and Capacity Blocks

Spot and on-demand cover most jobs, but large or time-boxed training runs often need capacity guaranteed in advance. GCO integrates EC2 reserved capacity directly. `gco capacity reservation-check` reports both existing On-Demand Capacity Reservations (ODCRs) and purchasable [Capacity Blocks for ML](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-blocks-using.html) — guaranteed GPU capacity for a fixed window at a known price — and `gco capacity reserve` purchases a block by its offering ID (with `--dry-run` to validate first, since the purchase incurs charges):

```bash
gco capacity reservation-check -i p5.48xlarge --block-duration 48
gco capacity reserve -o cb-0123456789abcdef0 -r us-east-1 --dry-run
```

To actually schedule onto reserved capacity, `gco nodepools create-odcr` generates a Karpenter nodepool pinned to a Capacity Reservation ID or ODCR group, so reserved instances are consumed by your workloads instead of sitting idle:

```bash
gco nodepools create-odcr --name gpu-reserved --region us-east-1 \
  --capacity-reservation-id cr-0123456789abcdef0 --instance-type p5.48xlarge
```

## Global inference: one command, an endpoint in every region

Training is a batch job that ends; an inference endpoint has to stay up everywhere your users are. `gco inference deploy` stands up an autoscaling endpoint across one or more regions from a single command. Left to its default it targets every deployed region, which is the recommended setup: it keeps a healthy endpoint near each user so AWS Global Accelerator always has a nearest region to route to.

```bash
gco inference deploy my-llm -i vllm/vllm-openai:v0.22.0
```

That command does not push manifests into clusters directly. It writes the desired endpoint state to a DynamoDB table (`gco-inference-endpoints`), and each region's `inference_monitor` takes it from there. The monitor polls that desired state every 15 seconds and reconciles the region's Deployment, Service, and Ingress to match — creating what is missing and repairing what has drifted. It is the self-healing reconciliation loop Kubernetes uses internally, lifted to the multi-region level: you declare the endpoint once, and every region converges on it on its own.

### Autoscaling without hand-writing a Horizontal Pod Autoscaler

Replica counts and autoscaling are flags on the same deploy command. Pass `--min-replicas`, `--max-replicas`, and one or more `--autoscale-metric` targets and GCO creates a Kubernetes Horizontal Pod Autoscaler (HPA) that scales the endpoint between those bounds against the metrics you name — here, CPU at 70% and memory at 80%:

```bash
gco inference deploy my-llm -i vllm/vllm-openai:v0.22.0 --replicas 2 --gpu-count 1 --min-replicas 1 --max-replicas 8 --autoscale-metric cpu:70 --autoscale-metric memory:80
```

The autoscaling target is expressed as part of the deploy, so the endpoint's scaling behavior lives with its definition in DynamoDB and is reconciled the same way as everything else.

### Where the weights live

The slow part of multi-region inference is the model weights: every cluster needs them before a pod can serve, and re-pulling a large model into each region on every cold start is the cost you want to avoid. GCO keeps one copy of the weights in a central, KMS-encrypted S3 bucket. When you deploy with `--model-source`, the `inference_monitor` adds an init container that runs `aws s3 sync` to pull the weights from that bucket onto the region's shared EFS volume, which is then mounted into the inference container. This happens automatically in every target region, so model weights are always local to the cluster that serves them — the S3-to-EFS sync is the one-time cost, and later pods in that region read straight from EFS.

### Global Accelerator puts each user on the nearest region

Once the endpoint exists in several regions, AWS Global Accelerator routes each inference request to the nearest healthy region over anycast, reachable at a stable URL of the form `https://<GA_ENDPOINT>/inference/<endpoint-name>/`. A user in London lands on the London region and a user in Tokyo lands on Tokyo, off the same address. If a region stops answering its health checks, Global Accelerator fails over to the next healthy region automatically — there is no DNS record to wait on.

### Canary, promote, rollback

Shipping a new image is a three-move lifecycle, and each move is its own subcommand. A canary routes a weighted slice of traffic — 10% by default — to the new image as a weighted A/B split across every target region; promote swaps the primary over to the canary's image; rollback removes the canary and restores 100% of traffic to the primary.

Start the canary against the same vLLM image tag you are standardizing on:

```bash
gco inference canary my-llm -i vllm/vllm-openai:v0.22.0
# illustrative output — default canary weight is 10%
# ✓ canary created · routing 10% of traffic to the canary across all target regions
#   primary 90% · canary 10% · watch the split with: gco inference status my-llm
```

When the canary holds up, promote it; if it does not, walk it back. Both take `-y` to skip the confirmation prompt:

```bash
gco inference promote my-llm -y
gco inference rollback my-llm -y
```

### Check status and scale

Status reads the reconciled state back across every region the endpoint runs in:

```bash
gco inference status my-llm
# illustrative output — region set and replica counts depend on your deployment
# endpoint my-llm · image vllm/vllm-openai:v0.22.0
#   us-east-1   running   replicas 2/2
#   us-west-2   running   replicas 2/2
#   eu-west-1   running   replicas 1/1
```

And when you want a fixed replica count rather than the autoscaler's decision, scale the endpoint directly:

```bash
gco inference scale my-llm --replicas 3
```

Deploy, autoscale, canary, promote, rollback, status, scale — the whole inference lifecycle is the same `gco inference` command group reconciled out to every region from one declared state, with Global Accelerator deciding who reaches which region.

## GCO Mission: a goal-directed loop with a deterministic verdict

Mission is GCO's goal-directed iteration loop. Instead of running one command and reading the result yourself, you declare a **directive** — a natural-language goal — alongside **success criteria** that are machine-checkable, a **tool allowlist** that bounds what the loop may invoke, and **loop-control caps** that bound how long it may run. Mission then runs five-phase iterations until it reaches a verdict.

The whole feature is gated. Set `GCO_ENABLE_MISSION=true` (or the umbrella `GCO_ENABLE_ALL_TOOLS=true`) before any Mission CLI subcommand or MCP tool will resolve. Nothing in the Mission surface runs until you opt in, so it stays inert in a default install.

```bash
export GCO_ENABLE_MISSION=true
```

Every iteration runs the same five phases in a fixed order. The names are not decoration — each phase has one job, and the output of one is the input to the next:

1. **Propose** — pick the next strategy. This is deterministic by default; advisory sampling only shapes it when sampling is enabled.
2. **Execute** — dispatch that strategy's tool calls, or run a script in the sandbox.
3. **Observe** — normalize the tool results into a single Observation.
4. **Evaluate** — score that Observation against every success Criterion.
5. **Decide** — emit a Verdict and a reason.

<figure>
  <img src="/global-capacity-orchestrator/assets/mission-loop.svg" alt="The GCO Mission five-phase loop: Propose, Execute, Observe, Evaluate, Decide, with a verdict branch that loops back on continue or adjust and exits on complete or terminate." />
  <figcaption>
    The GCO Mission five-phase loop. Each iteration runs the same five phases in order — <strong>Propose</strong> (pick the next strategy), <strong>Execute</strong> (dispatch the strategy's tool calls or run a sandbox script), <strong>Observe</strong> (normalize tool results into a single Observation), <strong>Evaluate</strong> (score that Observation against every success criterion), and <strong>Decide</strong> (emit a verdict and reason). Decide produces one of four verdicts: <code>continue</code> or <code>adjust</code> loop back to Propose for another iteration, while <code>complete</code> or <code>terminate</code> exit the session and emit the <code>Final_Report</code>. The control path is fully deterministic — the verdict comes from a fixed cascade that checks the loop-limit caps first. Sampling is advisory only: when enabled it shapes the next strategy and the closing report notes, but it never changes the verdict, the loop-limit arithmetic, or the criterion evaluation. Mission is off by default and gated behind <code>GCO_ENABLE_MISSION=true</code>.
  </figcaption>
</figure>

The Decide phase emits one of four verdicts. A verdict of `continue` or `adjust` loops back to Propose for another iteration; a verdict of `complete` or `terminate` exits the session and emits the `Final_Report`. Which one fires is not a judgement call: the control path is fully deterministic, and every verdict comes from a fixed cascade that evaluates the loop-limit caps first — so a session always exits the moment a cap on iteration count or wall-clock is breached.

That determinism is what makes the loop safe to hand a goal. Sampling, when you enable it, is advisory only: it shapes the next strategy that Propose picks and the closing notes in the `Final_Report`, and nothing else. It never changes the verdict, the loop-limit arithmetic, or how a criterion is scored. The reasoning can vary run to run; the decision to keep going or stop does not.

The smallest way to see the loop is a no-AWS smoke test that runs Mission against in-memory tools. You give it a directive and one or more allowlisted tools — the allowlist is what keeps the loop inside the boundary you set:

```bash
gco mission run --directive "Find documentation about inference endpoints." --tool-allowlist find_examples --tool-allowlist find_docs
```

Each run is a session with an id. Read its current phase and final verdict back with `gco mission status`, rendered as a table or as JSON:

```bash
gco mission status mission-abc123 --output table
# illustrative output — phase/verdict shape, not a benchmark
# session    mission-abc123
# phase      Decide
# verdict    complete
# criteria   all success criteria satisfied
```

The surface around these two commands stays small and explicit: ten `gco mission` subcommands with matching MCP tools, plus three `mission://sessions/{id}` resource templates for reading a session back. You enable the feature once, declare a directive with its criteria, allowlist, and caps, and let the deterministic cascade decide when the work is done.

## Operate it conversationally: the MCP server

Everything so far has been a command you type. There is a second way in. GCO ships an MCP server that wraps the `gco` CLI and exposes **95 tools by default (up to 127 with all flags enabled)**, so you can drive the same capacity checks, job submissions, and inference lifecycle through natural language in an AI-powered IDE with MCP support like [Kiro](https://kiro.dev).

The server does more than relay commands. It indexes the whole project — docs, examples, source code, Kubernetes manifests, and scripts — so the model answering you is reading the same repository you would otherwise open file by file. That is what makes it an on-ramp: instead of learning the command surface before you can ask a question, you ask the question and let the tools resolve it against real source. The README frames it with two examples worth copying verbatim:

> "How does region recommendation work?" · "Walk me through the inference deployment flow."

Point the IDE at the server and those questions resolve against the actual `recommend-region` scoring code and the `inference_monitor` reconciliation path, not a generic summary. The same connection runs the operational tools too — the capacity checks, job submissions, and inference lifecycle from the earlier sections, driven by conversation instead of remembered flags.

The gap between the two tool counts is a safety boundary, not a marketing number. Some tools are disabled by default and gated behind environment-variable feature flags — deploys, destroys, capacity purchases, model uploads, image publishes, and other destructive operations. They appear only when you set the matching flag (or the umbrella `GCO_ENABLE_ALL_TOOLS`). So a fresh connection can read, recommend, and submit, but it cannot tear down your infrastructure until you explicitly turn that capability on.

## An interactive analytics environment in the same stack

Training, routing, inference, and conversational ops cover the run side of AI/ML. The exploratory side — notebooks, ad-hoc Spark, experiment tracking — usually lives in a separate account or a hand-built SageMaker setup. GCO keeps it in the same project: an optional ML & analytics environment that turns on with one command and tears down just as cleanly, so a single deployment covers the work from data exploration through multi-region serving.

It is off by default and incurs zero cost until you enable it, then deploy its stack:

```bash
gco analytics enable
gco stacks deploy gco-analytics
```

Enabling it provisions a coherent notebook-analytics environment rather than a pile of loose services to wire together:

- **SageMaker Studio** — a Studio domain with per-user JupyterLab apps for interactive notebooks, reached through Cognito-authenticated presigned URLs.
- **EMR Serverless** — a Spark application for distributed data processing, charged per vCPU- and GB-hour of actual job execution and idle at zero cost.
- **Cognito user pool** — identity for Studio access, managed from the CLI, with IDs auto-discovered from stack outputs.
- **`Cluster_Shared_Bucket`** — an always-on S3 bucket every cluster job can read and write — the hand-off point between batch jobs and notebooks.

That shared bucket is the connective tissue. A job running on the cluster writes its output to `Cluster_Shared_Bucket`, and a Studio notebook reads it back under the analytics execution role — no database credentials passed around, no copying between accounts. The repository ships example jobs that demonstrate exactly this hand-off, including an Aurora pgvector export and a dataset-snapshot upload that a notebook then analyzes.

You manage Studio access from the same CLI you use for everything else. Create a user, then print a presigned Studio sign-in URL:

```bash
gco analytics users add --username alice --email alice@example.com
gco analytics studio login --username alice --open
```

Opt-in sub-toggles extend it further when you need them — SageMaker HyperPod for resilient large-scale training, SageMaker Canvas for no-code modeling, and managed MLflow for experiment tracking — each enabled as a flag on `gco analytics enable` rather than a separate project. And because it is the same cost surface as the rest of GCO, spend stays visible from the CLI:

```bash
gco costs summary --days 7
```

Capacity discovery, multi-region scheduling, spot fallback, autoscaling inference, goal-directed Mission runs, optional pgvector / Valkey / FSx data layers, and now interactive notebooks and Spark — all sit behind one CDK app, one CLI, and one IAM-governed front door. GCO is built to be the place AI/ML work happens on AWS end to end, not a single slice of it.

## Security and lifecycle

Opening a multi-region control plane to a single signed API means the authentication story has to be explicit. GCO puts five layers between a caller and a backend service, and each one closes a specific gap rather than restating the one above it.

1. **IAM Authentication** — API Gateway validates AWS credentials (SigV4), so there is no kubeconfig to distribute and rotate per cluster.
2. **Secret Header** — a Lambda injects a rotating token pulled from AWS Secrets Manager onto the request.
3. **IP Restriction** — the regional ALBs only accept Global Accelerator IPs, so the load balancers are not reachable directly from the open internet.
4. **Header Validation** — backend services verify the secret token before acting, catching anything that reached them without passing through the Lambda.
5. **IRSA** — pods use IAM Roles for Service Accounts (IRSA) for their own AWS access, so there are no static credentials sitting inside the cluster.

Read top to bottom, those layers are a single request path: `User → API Gateway (SigV4) → Lambda (adds secret) → Global Accelerator → ALB (GA IPs only) → Services (validate secret)`. IAM proves who you are at the edge, the Lambda stamps a rotating secret, Global Accelerator routes to the nearest healthy region, the ALB refuses traffic that did not arrive through Global Accelerator, and the service confirms the secret is the current one before doing any work.

The same surface that runs a single request runs the whole estate's lifecycle. Standing up every region defined in `cdk.json` is one command, and CDK bootstrap runs automatically for any new region during deploy:

```bash
gco stacks deploy-all -y
```

Tearing it down is the mirror image. `gco stacks destroy-all -y` destroys every stack across every region — the documented scope is "no orphaned resources," and that is the claim, stated no stronger:

```bash
gco stacks destroy-all -y
```

Two scoped facts on assurance, stated the way the docs state them. The CDK app runs CDK-nag checks against the AWS Solutions, HIPAA, NIST 800-53, and PCI DSS rule packs — these are automated checks in the synthesis pipeline, not a compliance certification. And the app is validated across 20+ config-matrix combinations in CI, so the stacks are exercised under many `cdk.json` permutations before release. Both describe verification effort, not a guarantee about your particular deployment.

## Who it's for, and honest about the rest

GCO is aimed at teams running accelerated workloads — LLM training and inference, batch ML, HPC, and general CPU jobs — that need multi-region redundancy, automatic capacity discovery, and IAM-based access without handing out a kubeconfig per cluster. Inference covers serving, and RAG patterns are documented on top of it, with a Valkey semantic cache in front of the optional built-in Aurora pgvector store or a vector store of your choice.

The accelerator mix is the reason the workload framing holds. Each region's pre-wired nodepools span four kinds of compute, so the same submission path can land on whichever one your job needs:

| Accelerator | What it's for |
|-------------|---------------|
| NVIDIA GPU | Current-gen g5, g6, g6e (with g4dn/p3 still supported), plus ARM64 g5g — general GPU training and inference. |
| AWS Trainium | Purpose-built training accelerators; Neuron inference via `--accelerator neuron`. |
| AWS Inferentia | Purpose-built inference accelerators, also served through the Neuron path. |
| CPU / Graviton | General-purpose compute on both amd64 and arm64 / Graviton for non-accelerated jobs. |

The honest version of "is this for me" is a short checklist drawn straight from the project's own framing:

- You run GPU workloads — training, inference, or batch processing.
- You want to deploy inference endpoints across multiple regions with a single command.
- You want multi-region redundancy without managing multiple clusters by hand.
- You prefer IAM authentication over kubeconfig management.
- You need job outputs to persist after a job completes.

An honest fit section names the edges, not only the strengths. Three defaults are worth knowing before you deploy:

- **Storage and data layers are opt-in, not imposed.** GCO ships three optional data/storage toggles, each off by default and switched on with one command: an Aurora Serverless v2 PostgreSQL cluster with the `pgvector` extension (`gco stacks aurora enable`) for RAG, semantic search, and embedding storage; a Valkey serverless cache (`gco stacks valkey enable`) for prompt and session caching; and FSx for Lustre (`gco stacks fsx enable`) for high-throughput training I/O. For RAG retrieval you can use the built-in pgvector or wire up OpenSearch Serverless, Bedrock Knowledge Bases, or a self-hosted store instead — that choice stays yours.
- **kubectl access is usually unnecessary.** The default EKS endpoint mode is `PRIVATE`, so direct kubectl from outside the VPC is off by default, and most users do not need it — you submit work over SQS (`gco jobs submit-sqs`) or API Gateway instead. Direct kubectl means switching the endpoint to `PUBLIC_AND_PRIVATE` in `cdk.json`, which is a deliberate step, not the default.
- **Spot inference can be interrupted.** Spot GPU instances are meaningfully cheaper than on-demand, but they can be reclaimed with 2 minutes notice. So spot suits multi-replica or non-critical endpoints; single-replica production serving belongs on on-demand, which is the default.

## Get started: clone, deploy, and submit your first job

Everything runs from one repository. The shortest path from a clone to a live multi-region cluster goes through the dev container, and the Quick Start guide times that path at under 60 minutes.

> **Prerequisites.** For the recommended container path you need just two things on your host: **an AWS account with credentials configured** (`aws sts get-caller-identity` should succeed) and **a container runtime** — Docker, Finch, or Colima. It also helps to have **an idea of which AWS regions you'll deploy to**, since that is the one value you set in `cdk.json`. The dev container bundles everything else (Python 3.14, Node.js 24, CDK, kubectl, the AWS CLI) at the versions CI uses; you only need those installed on the host if you take the advanced, non-recommended host-install path.

GCO pins exact versions of a long list of Python packages — CDK, the AWS SDKs, FastAPI, mypy, Ruff — so installing them on top of an existing Python environment is the most common source of `ResolutionImpossible` errors. The dev container sidesteps that by shipping a fully resolved toolchain: Python 3.14, Node.js 24, CDK, kubectl, and the AWS CLI at the pinned versions CI uses. Build it once, then work inside it:

```bash
git clone git@github.com:awslabs/global-capacity-orchestrator-on-aws.git
cd global-capacity-orchestrator-on-aws

docker build -f Dockerfile.dev -t gco-dev .
docker run -it --rm \
  -v ~/.aws:/root/.aws:ro \
  -v $(pwd):/workspace \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -w /workspace \
  gco-dev
```

The `/var/run/docker.sock` mount lets `gco stacks deploy-all` bundle Lambda assets through your host Docker daemon. It is host-socket pass-through, not true Docker-in-Docker, so it grants the container root-equivalent access to the host — keep the container on a trusted host.

Rather than retype that `docker run` invocation every time, define the `gco-dev` shell function the docs recommend. It always mounts your clone at `/workspace` (so `gco stacks *` and other commands that need `cdk.json`, `app.py`, and `gco/` at the repo root keep working from any subdirectory), and it gives you not just the `gco` CLI but `cdk`, `npm`, `kubectl`, and the AWS CLI — all at the exact versions GCO pins, so your toolchain matches CI instead of whatever happens to be on your host:

```bash
gco-dev() {
    local project_root="${GCO_HOME:-$(git rev-parse --show-toplevel 2>/dev/null)}"
    if [[ -z "$project_root" \
        || ! -f "$project_root/Dockerfile.dev" \
        || ! -d "$project_root/gco" ]]; then
        echo "gco-dev: not inside the GCO repo. cd into your clone, or set GCO_HOME." >&2
        return 1
    fi
    docker run --rm \
        -v ~/.aws:/root/.aws:ro \
        -v "$project_root:/workspace" \
        -v /var/run/docker.sock:/var/run/docker.sock \
        -w /workspace \
        gco-dev "$@"
}
```

With that in your shell profile, every command below can run through the pinned toolchain by prefixing it with `gco-dev` — for example `gco-dev gco stacks list`, `gco-dev cdk --version`, or `gco-dev aws sts get-caller-identity` — or you can drop into an interactive shell and run them bare.

One command reads the regions in `cdk.json` and stands up an EKS Auto Mode cluster in each one, wiring them together behind Global Accelerator. CDK bootstrap runs automatically for any new region:

```bash
gco stacks deploy-all -y
```

> **A note on cost.** `gco stacks deploy-all -y` is not free to leave running. It stands up an EKS Auto Mode cluster, AWS Global Accelerator, an Application Load Balancer, NAT gateways, and supporting infrastructure in *every* region you list in `cdk.json`, and those resources bill from the moment they exist — before you submit a single job. EKS Auto Mode also adds a management fee on top of every EC2 instance it launches, and GPU/accelerator instances are extra again while a workload holds them. A realistic always-on figure is roughly $290/month per region before any GPU work — see [What a region costs per month](#what-a-region-costs-per-month) for the breakdown. Keep spend visible with `gco costs summary`, and when a trial is done, tear the whole estate back down with `gco stacks destroy-all -y` so nothing keeps billing.

With the regions up, the three things you came for are each a single command. Ask one region whether a specific instance type has capacity right now, deploy a vLLM inference endpoint across your deployed regions, and submit your first batch job to a region's SQS queue:

```bash
gco capacity check --instance-type g6.xlarge --region us-east-1
gco inference deploy my-llm -i vllm/vllm-openai:v0.22.0
gco jobs submit-sqs examples/simple-job.yaml --region us-east-1
```

When you are done, `gco stacks destroy-all -y` tears down every stack across every region with no orphaned resources, so a trial run leaves nothing behind.

### What a region costs per month

The managed services are modest; the compute is what moves the bill. Three numbers matter — the always-on managed services, the compute for the workloads GCO runs by default, and the GPU compute you add on top — all at US East (N. Virginia) on-demand list prices, using the standard 730-hour month.

First, the managed services that bill from the moment `deploy-all` finishes, before a single pod schedules:

| Component (per region) | Rate | Monthly (730 h) |
|---|---|---|
| EKS cluster (control plane, standard support) | $0.10/hr | $73.00 |
| NAT gateways (2, for multi-AZ HA) | $0.045/hr each | $65.70 |
| Application Load Balancer (base hours) | $0.0225/hr | $16.43 |
| **Per-region managed-services subtotal** | | **≈ $155/month** |

AWS Global Accelerator adds a flat $0.025/hr ($18.25/month) once for the whole deployment, not per region.

Second, the default workloads. A fresh cluster is not empty: it runs GCO's own control plane — Health Monitor (2 replicas), Manifest Processor (3 replicas), and Inference Monitor — plus the bundled open-source stack (KEDA, cert-manager, Volcano, Kueue, KubeRay, and the NVIDIA operators). Their CPU/memory *requests* add up to roughly 3 vCPU and ~6 GiB, which EKS Auto Mode bin-packs onto a single general-purpose node. The `cpu-general` pool prefers Graviton, so a representative pick is an `m7g.xlarge` (4 vCPU / 16 GiB) at $0.1632/hr — but Auto Mode adds a **management fee on top of the EC2 price** for every node it launches (roughly 12% for general-purpose instances; the exact rate is published per instance type):

| Default-workload compute (per region) | Rate | Monthly (730 h) |
|---|---|---|
| 1× m7g.xlarge general-purpose node (on-demand) | $0.1632/hr | $119.14 |
| EKS Auto Mode management fee (~12%) | ~$0.0196/hr | ~$14.30 |
| **Default-workload compute subtotal** | | **≈ $133/month** |

So a realistic always-on figure for one region is roughly $155 (managed services) + $133 (default-workload compute) ≈ **$290/month**, plus the ~$18/month Global Accelerator fee shared across the deployment. A two-region deployment lands near **$600/month** before you run any GPU work. Choosing spot for that general-purpose node (the pool's default preference) cuts the compute portion by more than half.

Third, GPU and accelerator compute — the variable cost that dwarfs the rest, billed only while a job or endpoint holds the instance. A `g6.xlarge` (one NVIDIA L4) lists at $0.8048/hr on-demand — about **$587/month if held 24/7**, before the same ~12% Auto Mode fee — while spot for the same instance typically runs near $0.35/hr. Multiply by GPUs per node and nodes per region for your real figure. This is exactly why capacity-aware routing and spot fallback matter, and why the inference pool scales to zero when idle rather than holding GPUs.

These are US East (N. Virginia) list prices and exclude NAT and Global Accelerator data-processing charges, EFS/S3 storage, CloudWatch, and inter-region data transfer, so a real bill runs higher and varies by region and traffic. Model your own case with the [AWS Pricing Calculator](https://calculator.aws/) and the per-service pages — [Amazon EKS and EKS Auto Mode](https://aws.amazon.com/eks/pricing/), [Amazon EC2 On-Demand](https://aws.amazon.com/ec2/pricing/on-demand/), [Amazon VPC (NAT gateway)](https://aws.amazon.com/vpc/pricing/), [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/pricing/), and [AWS Global Accelerator](https://aws.amazon.com/global-accelerator/pricing/) — and track actual spend any time with `gco costs summary`.

### What a custom workload needs

The example job above runs a stock image, but the path for your own workload is the same shape. To deploy something custom on GCO you need:

- **A container image.** Use any public image, or build and push your own to the project's ECR registry with `gco images build ./my-app --name my-app` (or `gco images push` for an image built elsewhere). ECR replication makes it available in every region automatically.
- **A Kubernetes manifest.** A standard Job or Deployment YAML — the quickest start is to copy the closest file under `examples/` and edit it. Submit it with `gco jobs submit-sqs` (queued, production path), `gco jobs submit` (synchronous via API Gateway), or chain several into a pipeline with `gco dag run`.
- **A way to target the right hardware.** Request `nvidia.com/gpu` to land on the GPU pools, pass `--accelerator neuron` (or request Neuron resources) for Trainium/Inferentia, and pin architecture with a `kubernetes.io/arch` node selector if it matters. Karpenter reads those requirements and provisions a matching node.
- **Somewhere for outputs to live.** Mount the `gco-shared-storage` EFS volume so results persist after the pod terminates; for inference, stage model weights once in the central S3 bucket with `gco models upload` and reference them via `--model-source`.

GCO is released under MIT No Attribution (MIT-0), Copyright Amazon.com, Inc. or its affiliates. MIT-0 is a permissive license that drops even the attribution requirement of the standard MIT license, so you can copy, adapt, and ship from it without carrying a notice.

### Further reading

The repository documents each subsystem in depth:

- [GCO on GitHub](https://github.com/awslabs/global-capacity-orchestrator-on-aws) — the CLI, the CDK app, the docs, and the example jobs, all in one place.
- [Core Concepts](https://github.com/awslabs/global-capacity-orchestrator-on-aws/blob/main/docs/CONCEPTS.md) — what GCO does and the vocabulary the rest of the docs assume.
- [Quick Start Guide](https://github.com/awslabs/global-capacity-orchestrator-on-aws/blob/main/QUICKSTART.md) — the end-to-end walkthrough behind the commands above, timed at under 60 minutes.
- [Architecture Details](https://github.com/awslabs/global-capacity-orchestrator-on-aws/blob/main/docs/ARCHITECTURE.md) — the request spine and the per-region EKS Auto Mode internals.
- [CLI Reference](https://github.com/awslabs/global-capacity-orchestrator-on-aws/blob/main/docs/CLI.md) — every `gco` command, flag, and example used here.
- [Inference Guide](https://github.com/awslabs/global-capacity-orchestrator-on-aws/blob/main/docs/INFERENCE.md) — multi-region deploys, canary/promote/rollback, and the S3-to-EFS weight sync.
- [Analytics Guide](https://github.com/awslabs/global-capacity-orchestrator-on-aws/blob/main/docs/ANALYTICS.md) — the SageMaker Studio + EMR Serverless environment end to end.
- [Mission Guide](https://github.com/awslabs/global-capacity-orchestrator-on-aws/blob/main/docs/MISSION.md) — the five-phase loop and the deterministic verdict cascade.
- [MCP Server](https://github.com/awslabs/global-capacity-orchestrator-on-aws/blob/main/mcp/README.md) — the tools that wrap the CLI for an AI-powered IDE.
- [Production Scale Inference Overview](https://day1inference.com/global-inference-serving) — the Global Accelerator + multi-region + EKS pattern that GCO implements, covered in the abstract.
