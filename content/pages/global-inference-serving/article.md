---
title: Production Scale Inference Overview
subtitle: An introduction to production scale inference and the architecture patterns that make it work
category: guidances
published: 2026-03-09
updated: 2026-03-09
authors:
  - Jake Mevorach
reviewers:
  - Kareem Abdol-Hamid
toc: true
description: An introduction to production scale inference and the architecture patterns that make it work
---

You've built an inference system that works. Your model serves requests, returns results, and handles the traffic your team throws at it. But somewhere between "it works on my cluster" and "it serves millions of users across the globe," there's a gap that catches most teams off guard.

Production scale inference is where model serving meets distributed systems engineering. The challenge isn't just making a model fast. It's making an entire system reliable, responsive, and cost-effective when your users span continents, your traffic swings 10x between peak and quiet hours, and your hardware costs tens of thousands of dollars per node.

This article is an introduction to that problem space. We'll walk through the fundamental tensions that make production inference hard, the key questions you need to answer before building anything, and a concrete architecture pattern that addresses them. If you're moving from a working prototype to a production deployment, or if you're evaluating how to expand an existing system globally, this is where to start.

## Why Production Inference Is Its Own Problem

Most teams first encounter inference as a model optimization challenge. You pick a serving engine, tune your batch sizes, maybe apply some quantization, and measure tokens per second. That work matters, but it operates entirely within a single machine or cluster. Production scale inference is what happens around and above that work.

Consider what changes when real users depend on your system. A developer running benchmarks in us-east-1 doesn't care if latency spikes for 30 seconds during a deployment. A customer using your product from Tokyo at 2 AM their time absolutely does. A batch processing pipeline can retry failed requests and absorb the cost. An interactive chatbot that hangs for 10 seconds has already lost the user.

Three tensions define production inference, and every architectural decision you make is ultimately a response to one or more of them.

### Latency vs. Geography

GPU compute is expensive and concentrated. You can't put a cluster in every city. But physics is unforgiving. Light in fiber travels at roughly 200 km/ms<d-cite key="grigorik2013"></d-cite><d-cite key="malitson1965"></d-cite>, which means a round-trip from Singapore to us-east-1 adds around 150ms of network latency before your model processes a single token. For applications targeting sub-100ms time to first token, that network penalty alone can blow your latency budget.

The question isn't whether multi-region matters. It's *when* it starts mattering for your use case, and how many regions you actually need. A product with 95% of users in North America has a very different answer than one with a global user base.

### Availability vs. Complexity

A single-region deployment is simple to reason about. One cluster, one load balancer, one set of health checks. But it's also a single point of failure. If that region has an outage, or if you need to perform maintenance, your entire service goes dark.

Multi-region deployments solve availability but introduce real complexity.<d-cite key="fox1999"></d-cite> You need a way to give users a single stable endpoint, route traffic intelligently across regions, detect failures quickly, and shift load without manual intervention. Each of those requirements adds operational surface area. The goal is to find the architecture that gives you the availability you need without burying your team in operational overhead.

### Cost vs. Responsiveness

GPU nodes are the most expensive line item in any inference deployment. Keeping spare capacity in three regions so you can absorb a traffic spike or a regional failover costs real money. But running too lean means your system degrades under load, and users experience queuing delays or timeouts.

This tension plays out at every layer. How aggressively do you autoscale? How much cold-start latency can you tolerate for new nodes?<d-cite key="serverlessllm2024"></d-cite> Do you reserve capacity or rely on on-demand instances?<d-cite key="spotserve2024"></d-cite><d-cite key="dynamollm2024"></d-cite> There's no universal answer, but understanding where you sit on this curve is essential before choosing an architecture.

## What to Think About Before Building

Before jumping to a specific architecture, it's worth stepping back and asking a few questions that will shape every decision downstream.

**Where are your users?** If you can identify two or three geographic clusters that account for the vast majority of your traffic, you have a clear starting point for region selection. If your users are evenly distributed globally, you'll need a different strategy than if they're concentrated in one area with a long tail elsewhere.

**What are your latency requirements?** Not all inference workloads have the same sensitivity to network latency. A real-time coding assistant needs single-digit millisecond overhead from the network. A document summarization service processing jobs asynchronously can tolerate hundreds of milliseconds. Your latency budget determines how close your compute needs to be to your users.

**How critical is availability?** For some applications, a few minutes of downtime during a regional outage is acceptable. For others, even 30 seconds of unavailability has business consequences. Your availability target determines whether you need active-active multi-region with automatic failover, or whether a simpler warm-standby approach is sufficient.

**What does your traffic pattern look like?** Steady, predictable load is the easiest to plan for. Bursty traffic with sharp spikes (common in consumer-facing products) requires either over-provisioning or fast autoscaling. Understanding your traffic shape determines your capacity strategy.

**What's your operational maturity?** A three-person team shipping their first production inference system should not start with a 15-region global deployment. The architecture should match your team's ability to operate it. Starting with two regions and expanding is almost always better than launching with ten and struggling to debug issues across all of them.

These questions don't have right or wrong answers. They have *your* answers, and those answers should drive your architecture choices.

## The Architecture Pattern

With that context, we can look at a concrete pattern that addresses the tensions above. This architecture uses three AWS services in concert: **Global Accelerator** as the global entry point, **Application Load Balancers** in each region, and **EKS clusters** running your inference workloads.

<figure>
  <img src="/global-inference-serving/assets/architecture-diagram.svg" alt="Three-tier architecture: Global Accelerator provides a single global endpoint, ALBs handle regional load balancing, and EKS clusters run inference workloads." />
  <figcaption>The three-tier architecture: Global Accelerator provides a single global endpoint, ALBs handle regional load balancing, and EKS clusters run inference workloads.</figcaption>
</figure>

Each layer exists because it solves a specific problem from the tensions we discussed.

**Global Accelerator** solves the "single stable endpoint" problem. It gives you two static anycast IP addresses<d-cite key="rfc4786"></d-cite> that work from anywhere in the world. Users in Tokyo, London, and São Paulo all connect to the same addresses. From there, traffic enters AWS's private backbone at the nearest edge location and travels to the closest healthy region, rather than bouncing across the public internet.<d-cite key="schlinker2017"></d-cite> AWS's own benchmarks show this can [improve performance by up to 60%](https://aws.amazon.com/blogs/networking-and-content-delivery/measuring-aws-global-accelerator-performance-and-analyzing-results/) compared to public internet routing.<d-cite key="aws_ga_performance"></d-cite><d-cite key="aws_ga_faq"></d-cite> Critically, because these are anycast IPs rather than DNS records, failover is instant. There's no DNS TTL to wait out.

**Application Load Balancers** solve regional traffic distribution. In each region, an ALB sits between Global Accelerator and your Kubernetes services. It handles health checks, SSL termination, and path-based routing. The ALB is created automatically by the AWS Load Balancer Controller in EKS when you deploy an Ingress resource, so it fits naturally into a Kubernetes-native workflow.

**EKS clusters** solve the compute problem. Each region runs an EKS cluster with your inference workloads.<d-cite key="kfserving2020"></d-cite> With EKS Auto Mode, you get automatic node provisioning (including GPU instances) without managing node groups. Karpenter handles scaling based on pending pods, which directly addresses the cost-vs-responsiveness tension: you can scale up quickly when traffic arrives and scale down when it subsides.

### How a Request Flows Through the System

Understanding the request path is important for reasoning about where latency comes from and where failures can happen.

<figure>
  <img src="/global-inference-serving/assets/request-flow.svg" alt="Request flow from client to inference pod through Edge POP, AWS Backbone, ALB, and EKS." />
  <figcaption>Request flow from client to inference pod. Use the <a href="https://speedtest.globalaccelerator.aws">AWS Global Accelerator Speed Comparison Tool</a> to measure actual latency from your location.</figcaption>
</figure>

A client connects to Global Accelerator's anycast IP. The request hits the nearest AWS edge location, where TCP terminates. From there, the request travels over AWS's private backbone to the closest healthy regional ALB. The ALB distributes the request to a healthy inference pod in the EKS cluster. The pod runs the inference, and the response follows the same path back.

The important detail is step three. Once traffic enters AWS's network at the edge, it stays on their private backbone. This avoids the variable routing, congestion, and packet loss that come with traversing the public internet.<d-cite key="ballani2005"></d-cite> For latency-sensitive inference, this difference can be significant.<d-cite key="dean2013"></d-cite>

> Global Accelerator's anycast IPs mean your clients always connect to the same addresses regardless of which region serves them. No DNS propagation delays, no TTL issues. When a region goes unhealthy, new connections route to the next-nearest region immediately.

## Routing Decisions: Client Affinity

One of the first decisions you'll face with this architecture is how Global Accelerator routes repeat requests from the same client. This is controlled by the client affinity setting, and the right choice depends on whether your inference workload is stateless or stateful.

| Mode | Hash Algorithm | Behavior |
|------|---------------|----------|
| `NONE` (default) | 5-tuple (source IP, source port, destination IP, destination port, protocol) | Traffic distributed equally across endpoints. Different connections from the same client may hit different endpoints. |
| `SOURCE_IP` | 2-tuple (source IP, destination IP) | All connections from the same source IP route to the same endpoint. |

**For stateless inference** (each request is independent, no conversation history, no session state), use `NONE`. You want traffic spread across all healthy endpoints. The 5-tuple hash means even a single client with multiple connections gets load-balanced across your infrastructure.<d-cite key="mitzenmacher2001"></d-cite><d-cite key="eisenbud2016"></d-cite> This maximizes utilization and gives you the best failover behavior.

**For stateful inference** (conversational AI with server-side context, or services with client-specific caches), `SOURCE_IP` makes sense. It pins a client to a specific regional endpoint so their state stays colocated with their requests. The tradeoff is that if that endpoint degrades, the client stays pinned to it until health checks fail.<d-cite key="sre_book"></d-cite>

It's worth noting that even with `SOURCE_IP` affinity, AWS [acknowledges](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-listeners-client-affinity.html) that network maintenance or internet routing changes can occasionally shift clients to different edge locations. If your application requires hard session guarantees, you'll need application-level session management on top of affinity.

## Performance and Scale

The performance gains from this architecture come from two sources: reduced network distance through multi-region placement, and improved network quality through AWS's private backbone.

### The Physics of Latency

Light in fiber travels at roughly 200 km/ms (about 67% of the speed of light in a vacuum, due to the refractive index of glass).<d-cite key="grigorik2013"></d-cite> A user in Singapore connecting to us-east-1 has roughly 15,000km to cover. That's 75ms one-way from physics alone, or 150ms+ round-trip before any routing overhead, TCP handshakes, or TLS negotiation. For an application targeting 200ms time to first token, you've already spent most of your budget on the network before the model starts working.

Placing an endpoint in ap-southeast-1 drops that round-trip to single-digit milliseconds for Singapore users.<d-cite key="schmidt2017"></d-cite> That's not an optimization. It's a category change in what your application can feel like.

Global Accelerator compounds this by keeping the traffic on AWS's backbone after it enters the network. Instead of traversing potentially congested public peering points, the traffic takes a direct path.<d-cite key="schlinker2017"></d-cite> The actual improvement depends on your users' locations and ISPs. You can measure it yourself with the [AWS Global Accelerator Speed Comparison Tool](https://speedtest.globalaccelerator.aws).

### How Far This Scales

This pattern works at a range of scales, from a handful of regions to the full set of 30+ AWS regions where EKS is available.

In practice, most teams start with two to three regions covering their primary user concentrations, then expand as traffic patterns become clearer. Adding a region is operationally straightforward: deploy the regional stack (ALB + EKS cluster), and Global Accelerator automatically starts routing nearby traffic there. No client-side changes, no DNS updates, no endpoint reconfiguration.

> With 30+ regions, each supporting up to 100,000 EKS nodes (the hard limit), the architecture has a theoretical ceiling of 3+ million GPU nodes globally. At 8 GPUs per node, that's 24+ million concurrent GPUs. You'd never actually do this, but the point is that the architecture doesn't have a scaling cliff. You won't outgrow the pattern.

### Failover

Global Accelerator health-checks your ALB endpoints every 10 seconds.<d-cite key="aws_health_checks"></d-cite> When a region fails, the sequence is: health check fails (10 to 30 seconds to detect), the endpoint is marked unhealthy, and new connections route to the next-nearest healthy region.<d-cite key="aws_static_stability"></d-cite><d-cite key="aws_avoiding_fallback"></d-cite> With `client_affinity=NONE`, new requests start succeeding immediately after the health check triggers. Total failover time is typically under 60 seconds, and there's no DNS TTL to wait out.

This is one of the strongest arguments for Global Accelerator over DNS-based approaches like Route 53 latency routing. DNS failover depends on clients respecting TTLs, and many don't.<d-cite key="moura2019"></d-cite> Anycast failover just works.

## Implementation Details

For teams building this out, here are the key pieces and practical considerations.

### Global Accelerator Setup

The Global Accelerator itself is a global resource. By convention, deploy it in us-east-1. You create endpoint groups for each region you plan to serve:

```python
# CDK/Python example
accelerator = ga.Accelerator(self, "Accelerator",
    accelerator_name="inference-global",
    enabled=True
)

listener = accelerator.add_listener("Listener",
    port_ranges=[
        ga.PortRange(from_port=80, to_port=80),
        ga.PortRange(from_port=443, to_port=443),
    ],
    protocol=ga.ConnectionProtocol.TCP,
    client_affinity=ga.ClientAffinity.NONE,  # Stateless inference
)

# Create empty endpoint groups for each region
for region in ["us-east-1", "eu-west-1", "ap-northeast-1"]:
    listener.add_endpoint_group(f"EndpointGroup-{region}",
        region=region
    )
```

### Connecting ALBs to Global Accelerator

The ALB in each region is created by the AWS Load Balancer Controller when you deploy a Kubernetes Ingress. That means you don't know its ARN at deploy time. You need a mechanism to register it with Global Accelerator after creation. A Lambda-backed custom resource works well for this:

1. Watch for the Ingress to get an address (indicating the ALB has been created)
2. Look up the ALB ARN from the Ingress status
3. Call `globalaccelerator:AddEndpoints` to register it

```python
# Lambda handler pseudocode
def handler(event, context):
    if event['RequestType'] == 'Create':
        # Get ALB ARN from Kubernetes Ingress
        ingress = k8s_client.read_namespaced_ingress("inference", "default")
        alb_hostname = ingress.status.load_balancer.ingress[0].hostname
        alb_arn = lookup_alb_arn_from_hostname(alb_hostname)

        # Register with Global Accelerator
        ga_client.add_endpoints(
            EndpointGroupArn=os.environ['ENDPOINT_GROUP_ARN'],
            EndpointConfigurations=[{
                'EndpointId': alb_arn,
                'Weight': 100,
            }]
        )
```

### Kubernetes Ingress Configuration

Your Ingress resource needs specific annotations for the AWS Load Balancer Controller:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: inference-ingress
  annotations:
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/healthcheck-path: /health
    alb.ingress.kubernetes.io/healthcheck-interval-seconds: "15"
spec:
  ingressClassName: alb
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: inference-service
            port:
              number: 80
```

The `target-type: ip` annotation matters. It tells the ALB to route directly to pod IPs rather than through NodePorts, which removes an extra network hop and reduces latency.<d-cite key="dean2013"></d-cite>

## Tradeoffs and When to Choose Something Else

This architecture solves a specific set of problems well, but it's not the right choice for every situation. Being honest about the tradeoffs helps you decide whether this is the right path for your system.

### Cost

Global Accelerator costs $0.025/hour per accelerator (roughly $18/month), plus data transfer charges that vary by source and destination region. Check the [AWS Global Accelerator pricing page](https://aws.amazon.com/global-accelerator/pricing/) for current rates. You'll also pay for an ALB in each region. These costs are modest compared to your GPU bill, but they add up for low-traffic applications where the fixed overhead may not be justified.

For low-traffic services, DNS-based routing through Route 53 latency routing is cheaper. The tradeoff is slower failover (TTL-dependent) and no backbone routing improvement.

### When This Pattern Doesn't Fit

If 90% of your traffic comes from one geography, a single region with CloudFront for static assets is simpler and cheaper. The multi-region overhead isn't justified if your users are geographically concentrated.

If your workload is latency-insensitive (batch inference, overnight processing, async pipelines), the network latency savings don't matter. A single large cluster optimized for throughput will serve you better and cost less to operate.

If your team is small and this is your first production inference deployment, start with a single region. Get your serving pipeline, monitoring, and autoscaling right in one place before adding the complexity of multi-region. You can always add Global Accelerator on top of a working single-region deployment later.

### Alternatives Worth Considering

**Route 53 Latency Routing** gives you multi-region traffic distribution through DNS. Cheaper and simpler, but failover depends on DNS TTLs and you don't get AWS backbone routing. Good enough for many workloads where sub-second failover isn't critical.

**CloudFront with Regional Origins** works well if any portion of your inference responses are cacheable, or if you serve a mix of static and dynamic content. It doesn't help for unique real-time inference requests, but it can reduce load on your inference clusters for repeated queries.

## Where to Go from Here

This article is the overview for the Production Scale Inference journey. It's meant to orient you on the problem space, give you a concrete architecture to start from, and help you think about the questions that should shape your deployment.

The deeper articles in this series (coming soon) will cover each dimension in detail: multi-region deployment patterns for high availability and fault tolerance, capacity planning and autoscaling strategies for global inference fleets, and reference architectures you can deploy directly.

If you're starting from scratch, the recommendation is straightforward. Pick two regions based on where your users are. Deploy the pattern described here. Validate that failover works the way you expect. Then expand from there as your traffic and understanding grow.

### Further Reading

**Networking and Latency**
- [High Performance Browser Networking](https://hpbn.co/primer-on-latency-and-bandwidth/) — Ilya Grigorik. The canonical reference for network latency physics, including speed of light in fiber.
- [The Tail at Scale](https://research.google/pubs/the-tail-at-scale/) — Dean & Barroso (CACM, 2013). Foundational paper on why tail latency matters in distributed systems.
- [Engineering Egress with Edge Fabric](https://research.facebook.com/publications/engineering-egress-with-edge-fabric/) — Schlinker et al. (SIGCOMM, 2017). Meta's approach to backbone routing optimization.
- [Cache Me If You Can: Effects of DNS Time-to-Live](https://dl.acm.org/doi/10.1145/3355369.3355568) — Moura et al. (IMC, 2019). Empirical evidence that DNS resolvers don't reliably respect TTLs.

**Load Balancing and Availability**
- [Site Reliability Engineering](https://sre.google/sre-book/table-of-contents/) — Beyer et al. (O'Reilly, 2016). Chapters 19-21 cover DNS vs. anycast load balancing, datacenter load distribution, and overload handling.
- [Maglev: A Fast and Reliable Software Network Load Balancer](https://research.google/pubs/maglev-a-fast-and-reliable-software-network-load-balancer/) — Eisenbud et al. (NSDI, 2016). Google's production load balancer using consistent hashing.
- [AWS Builders' Library: Static Stability Using Availability Zones](https://aws.amazon.com/builders-library/static-stability-using-availability-zones/) — Pre-provisioning for failure without scaling events.
- [AWS Builders' Library: Implementing Health Checks](https://aws.amazon.com/builders-library/implementing-health-checks/) — Balancing thorough checks against false positives.

**Inference Serving Systems**
- [LLM Inference Serving: Survey of Recent Advances and Opportunities](https://arxiv.org/abs/2407.12391) — Li et al. (2024). Comprehensive survey of the inference serving landscape.
- [Efficient Memory Management for LLM Serving with PagedAttention](https://arxiv.org/abs/2309.06180) — Kwon et al. (SOSP, 2023). The vLLM paper—essential context for why inference load balancing differs from web request balancing.
- [SpotServe: Serving LLMs on Preemptible Instances](https://arxiv.org/abs/2311.15566) — Miao et al. (ASPLOS, 2024). Fault tolerance and cost optimization for inference on spot instances.
- [DynamoLLM: Designing LLM Inference Clusters for Performance and Energy Efficiency](https://arxiv.org/abs/2408.00741) — Stojkovic et al. (2024). Dynamic cluster reconfiguration for cost and energy optimization.

**AWS Services**
- [AWS Global Accelerator Documentation](https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html)
- [Amazon EKS User Guide](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html)
- [AWS Load Balancer Controller](https://kubernetes-sigs.github.io/aws-load-balancer-controller/)
- [Karpenter Documentation](https://karpenter.sh/) (for EKS auto-scaling)
