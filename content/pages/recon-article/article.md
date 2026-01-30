---
title: The RECON Stack for LLM Inference
subtitle: Understanding the five layers of modern inference architecture
category: foundations
published: 2025-12-29
updated: 2026-01-21
authors:
  - Kareem Abdol-Hamid
reviewers:
  - AWS ML Team
toc: true
image: ./assets/thumbnail.svg
description: Understanding the five layers of modern inference architecture
teaser: |
  <figure class="teaser">
    <div id="recon-stack-teaser"></div>
    <figcaption>
      Hover over each layer to explore the RECON framework architecture for LLM inference.
    </figcaption>
  </figure>
acknowledgments: |
  We are deeply grateful to Andy Coenen, Brian Lee...
  
author_contributions: |
  All authors contributed to writing...
  
discussion_and_review: |
  Review #1 - Chaitanya K. Joshi
  Review #2 - Patricia Robinson


---

When you send a prompt to a model like Anthropic's Claude, you join hundreds of millions of other users generating billions of requests per day.<d-cite key="chatgpt_stats"></d-cite> Each request routes through models requiring 4 to 8 high-end GPUs<d-cite key="llama_gpu_requirements"></d-cite> (at roughly $30,000 each)<d-cite key="h100_pricing"></d-cite> just to hold the model weights and cache in memory. Traffic patterns swing wildly across timezones and use cases. Peak hours might see 10x the load of quiet periods, yet users expect sub-second response times regardless.

This represents a fundamentally new challenge in computing. For the past two decades, infrastructure teams could choose between two well-understood paradigms depending on their workload. LLM inference fits cleanly into neither. Instead, it demands a hybrid approach that borrows lessons from both worlds while introducing entirely new constraints.

### Two Worlds of Computing

On one side sits model training, which fits squarely into High-Performance Computing (HPC) paradigms. Think weather simulations, molecular dynamics, protein folding. Training workloads share key characteristics. Jobs are scheduled in advance and workloads are known. Optimization targets throughput rather than individual request latency. Resources are assigned for hours or days in static allocation. Success metrics include FLOPS, total compute utilization, and job completion time.

On the other side sit real-time web applications. Consider Netflix, Google Search, or public APIs. These systems handle unpredictable traffic where user requests arrive randomly and traffic patterns are bursty. Optimization targets latency where users expect sub-second responses. Elastic scaling allows systems to spin up instances when load increases and shut down when it drops. Success metrics include p99 latency, requests per second, and user satisfaction.

LLM inference demands both paradigms simultaneously.

<figure>
  <div id="paradigm-viz" class="viz-container"></div>
  <figcaption style="text-align: center; margin-top: 1rem; font-style: italic;">
    Hover over each paradigm to see which characteristics apply. Inference inherits from both HPC and Web.
  </figcaption>
</figure>

From the HPC side, inference inherits expensive hardware constraints where GPUs cost tens of thousands of dollars. Computation is stateful as the KV cache grows with each token generated. Operations are memory-bound where loading model weights dominates performance. Resource efficiency matters because idle GPU cycles represent lost money.

From the web side, inference faces unpredictable request patterns where users do not schedule their prompts. Systems must be latency-sensitive because users will not wait 30 seconds for a response. Load is variable with 10x traffic differences between peak and off-hours. Elasticity becomes necessary because maintaining max capacity 24/7 is prohibitively expensive.

This creates a unique tension. Pure HPC approaches fail because batching requests for hours produces unacceptable latency. Pure web approaches fail because spinning up 100 GPU instances on demand is prohibitively expensive.

### Measuring Inference Performance

Before exploring how to solve this tension, we need to understand how inference performance is measured. Different applications care about different aspects of the serving experience.

<figure>
  <div id="metrics-timeline-viz" class="viz-container"></div>
  <figcaption style="text-align: center; margin-top: 1rem; font-style: italic;">
    Interactive timeline showing how TTFT, TPOT, E2EL, and throughput metrics evolve as 5 concurrent requests progress. Use the slider or play button to scrub through time.
  </figcaption>
</figure>

**Time to First Token (TTFT)** measures how long users wait before seeing any response. This metric captures the prefill phase where the entire prompt is processed. A chatbot needs TTFT under 500ms to feel responsive, while a code completion tool requires under 100ms for seamless developer experience. TTFT grows linearly with prompt length because the attention mechanism must process the entire input sequence to create the KV cache before generation can begin.

**Time per Output Token (TPOT)** represents the average time between consecutive tokens during generation. This determines how smoothly text appears to users in streaming interfaces. The system should ideally match or exceed human reading speed (roughly 50ms per token) to maintain a fluid experience. TPOT captures the decode phase efficiency and grows slightly as the KV cache expands with sequence length.

**End-to-End Latency (E2EL)** spans from submitting a request to receiving the final token. This includes queuing time, network latency, prefill, and all token generation. For batch processing tasks like overnight report generation, even 30 seconds of E2EL may be acceptable. For interactive applications, anything over a few seconds feels broken.

**Throughput** measured in tokens per second or requests per second quantifies how much work the system completes. Input throughput matters for document summarization where prompts contain thousands of tokens. Output throughput matters for creative writing tools generating long responses. Total system throughput increases with concurrent requests until GPU resources saturate, after which performance degrades.

These metrics reveal fundamental tradeoffs. Maximizing throughput means using large batch sizes and shared compute resources, which increases latency for individual requests. Minimizing latency means small batches and dedicated resources, which leaves GPUs underutilized. Different workloads make different choices. A document summarization pipeline processing millions of articles overnight optimizes for throughput. A coding assistant providing real-time completions optimizes for TTFT. An AI customer service agent balances both to maintain conversation flow while serving many users.

### Goodput: Throughput Under Latency Constraints

Traditional metrics create a false dichotomy. Throughput measured in tokens per second captures raw capacity but ignores user experience. Latency metrics like TTFT and TPOT capture responsiveness but ignore efficiency. These metrics suggest optimization must choose between speed and scale.

Goodput provides a unified measure.<d-cite key="distserve_blog"></d-cite> It quantifies the maximum request rate the system can sustain while meeting defined service-level objectives for both TTFT and TPOT. Rather than treating TTFT and TPOT as competing objectives, goodput treats them as constraints. The question becomes: how much throughput can the system deliver while guaranteeing that 95% of requests see TTFT under 300ms and TPOT under 50ms?

This formulation exposes the real tradeoff in inference serving: utilization versus tail latency.<d-cite key="distserve2024"></d-cite> Systems can drive high throughput by pushing GPUs toward saturation with large batches and deep queues, but tail latency rises due to queueing delay and burst amplification. Systems can minimize latency by maintaining slack capacity everywhere, but utilization drops and cost per request explodes. Goodput measures where operators choose to sit on this curve.

Different applications choose different operating points based on their economic and user experience requirements. A summarization service processing millions of documents overnight targets 95% of requests with TTFT under 2 seconds and TPOT under 100ms. This loose constraint allows high utilization and maximum throughput, accepting occasional slow requests as acceptable. A chatbot serving customer support requires 99% of requests with TTFT under 300ms and TPOT under 50ms. This moderate constraint balances utilization with consistent response times to maintain conversation flow. A coding assistant providing real-time completions demands 99.9% of requests with TTFT under 100ms and TPOT under 40ms. This tight constraint requires significant slack capacity and accepts lower utilization to guarantee instant feedback.

<figure>
  <div id="goodput-triangle-viz" class="viz-container"></div>
  <figcaption style="text-align: center; margin-top: 1rem; font-style: italic;">
    Goodput operating points for different applications. Each use case defines SLO constraints on TTFT and TPOT, then maximizes throughput within those bounds. Tighter constraints require more resources and lower utilization.
  </figcaption>
</figure>

This fundamental challenge drives the need for a purpose-built framework.

## What Happens During Inference

Before diving into the framework architecture, let's ground ourselves in the fundamentals. What physically happens when you generate text?

### The Autoregressive Process

LLMs generate text one token at a time where each token depends on all previous tokens. This process is called autoregressive generation.

The prefill phase processes the entire prompt. The system loads model weights (tens of GBs) into GPU memory, runs a forward pass over all prompt tokens, computes Key-Value (KV) pairs for each token, stores KV pairs in cache, and samples the first output token.

The decode phase generates each subsequent token. For every new token, weights are streamed from HBM where sustained memory bandwidth becomes the primary limiter. The system runs a forward pass with just the new token, reuses cached KV pairs from previous tokens, samples the next token, and repeats until done through EOS token, max length, or user stop.

### Why This Matters for Architecture

Three critical characteristics emerge from this process.

First, a memory bottleneck dominates performance in the decode-dominated regime. Loading model weights from memory (HBM to on-chip SRAM) often represents the slowest operation. For a 70B parameter model in FP16 format, approximately 140GB must move through the system. On GPUs with memory bandwidth around 2 to 3 TB/s (such as A100), it takes roughly 50 to 70ms just to load weights, while newer H200 class parts with 4.8 TB/s bandwidth reduce this floor to around 30ms. This operation repeats for every single token during generation.

Second, computation becomes stateful. The KV cache grows with sequence length. KV cache size per token depends on architecture details rather than parameter count alone:

**KV bytes per token ≈ 2 × layers × kv_heads × head_dim × bytes_per_element**

For 70B class architectures, this typically ranges from ~150 to 350 KB per token depending on KV head count and precision (FP16 versus FP8). An 8K context therefore requires roughly 1.2 to 2.8 GB per concurrent request. Supporting 100 concurrent users can demand 120 to 280 GB just for cache storage. Unlike web servers where you can restart anywhere, you cannot lose the KV cache mid-generation. This state must persist across all tokens in the sequence.

Third, sequential dependency limits parallelism. You cannot generate token 10 without first generating tokens 1 through 9. This constraint prevents parallelism within a single request. The only way to increase throughput involves batching multiple requests together, which directly trades off with latency.

### Why Traditional Solutions Fail

Consider the HPC approach of batching 1000 requests and processing them together. The first user must wait for all 1000 requests to arrive, producing terrible latency.

Consider the web approach of spinning up a GPU instance per request. Each instance loads the same 140GB model, creating extreme waste.

Inference requires something new. Systems must batch dynamically as requests arrive (providing web-scale responsiveness) while maximizing GPU utilization (achieving HPC-scale efficiency). This represents the core engineering challenge and motivates the need for RECON.

## Introducing RECON for Inference

Given these constraints of expensive stateful computation requiring both throughput and low latency, we need a specialized framework. This foundational article introduces RECON as follows.

**R**outing, **E**ngine, **C**ache, **O**rchestration, **N**odes.

<figure>
  <div id="recon-stack-viz" class="viz-container"></div>
  <figcaption style="text-align: center; margin-top: 1rem; font-style: italic;">
    The RECON framework showing the five key components of an LLM inference system. Note: This represents logical layers, not literal top-to-bottom request flow. Each layer addresses a different optimization challenge.
  </figcaption>
</figure>

### Layer Functions

Each layer addresses a specific aspect of the inference challenge.

**Routing** provides intelligent load balancing for inference workloads. Unlike traditional web load balancing, inference routing must account for GPU state (model loaded, cache warm), request characteristics (prompt length, model selection), and current load.<d-cite key="vllm_docs"></d-cite><d-cite key="deepspeed_inference"></d-cite> Requests with common system prompts should route to replicas with those prefixes already cached.

**Engine** serves as the optimized runtime where model execution happens. Modern engines implement continuous batching<d-cite key="orca2022"></d-cite>, paged attention<d-cite key="pagedattention2023"></d-cite>, kernel fusion, and quantization to maximize throughput while minimizing latency.<d-cite key="tensorrt_llm"></d-cite> Examples include vLLM, TensorRT-LLM, and llama.cpp.

**Cache** handles storage optimization across multiple levels. KV cache stores intermediate computations within requests.<d-cite key="attention_is_all_you_need"></d-cite> Prefix cache reuses common prompt beginnings across requests. Semantic and API caches reduce redundant processing for similar or identical inputs.<d-cite key="semantic_caching"></d-cite>

**Orchestration** manages infrastructure deployment across nodes and models. This includes service placement, autoscaling, health monitoring, resource allocation, and connectivity management.<d-cite key="ray"></d-cite><d-cite key="ray_serve_docs"></d-cite><d-cite key="kubernetes_gpu"></d-cite> Systems like Ray Serve and Kubernetes handle operational complexity so higher layers interact with a unified serving interface.

**Nodes** encompass the physical hardware and kernel-level software executing inference. Different GPUs offer vastly different capabilities (B200 versus L40S) affecting which models run and how many concurrent requests are served.<d-cite key="nvidia_hopper"></d-cite><d-cite key="nvidia_ada"></d-cite> Capacity planning balances dynamic cloud capacity against reserved commitments for both cost efficiency and availability.<d-cite key="aws_ml_inference"></d-cite><d-cite key="gcp_ml_inference"></d-cite>

### Request Flow Through RECON

Consider what happens when you send the prompt "Write a Python function to calculate fibonacci numbers" through the framework. This example is deliberately simplified to demonstrate how each layer contributes to serving a single request.

**Routing** receives the request and checks replica status. The router notices the system prompt "You are a helpful coding assistant" appears in its prefix cache on replica 2 running Llama 3.1 70B. Despite replica 1 having slightly lower load, the router directs the request to replica 2 to reuse the cached system prompt and save 200ms of prefill time.

**Engine** (vLLM running on replica 2) tokenizes the full prompt into 89 tokens. The engine finds 12 tokens already cached from the system prompt prefix, processes the remaining 77 tokens through the prefill phase, and begins generating. The first output token "def" emerges from the model.

**Cache** stores the newly computed KV pairs for the 77 uncached input tokens. As the engine generates each output token, the cache grows to accommodate the expanding context. The system prompt prefix remains warm for future requests.

**Orchestration** monitors the cluster and notices request queue depth increasing across all replicas. Based on current load patterns, it triggers autoscaling to spin up a third replica. A new pod starts on an available node, loads Llama 3.1 70B weights, and joins the serving pool within 45 seconds.

**Nodes** execute the computation on an H200 GPU with 141GB HBM3e memory. The GPU loads model weights at 4.8 TB/s memory bandwidth, processes attention computations, and generates tokens until the model outputs the stop token after producing a complete 47 token function.

The complete request takes 180ms for first token (including the prefix cache hit) and 52ms per subsequent token, delivering the full response in approximately 2.6 seconds.

### Understanding Framework Tradeoffs

Each layer presents multiple implementation choices with associated tradeoffs between latency and throughput, cost and performance. Layers interact with each other where routing decisions affect cache hit rates and orchestration choices affect where engines run and how they scale.

No single "best" configuration exists. The optimal framework depends on your specific workload (chatbot versus batch processing versus agentic workflows), your constraints (budget, latency SLA, scale requirements), and your infrastructure (cloud versus on-premises, single-GPU versus cluster).

The following sections provide deep dives into each layer, presenting the decision space and helping you reason about these tradeoffs.

## Continue the Series

This article provides the foundation for understanding LLM inference architecture. The following articles dive deep into each RECON layer with implementation details, optimization techniques, and practical examples.

**Part 2: [Routing Layer](https://day1inference.com/routing.html)** explores intelligent load balancing strategies, cache-aware routing algorithms, and how to direct traffic across inference replicas to maximize both throughput and latency.

**Part 3: [Engine Layer](https://day1inference.com/engine.html)** examines inference runtimes like vLLM and TensorRT-LLM, covering continuous batching, paged attention, kernel optimizations, and how engines maximize GPU utilization.

**Part 4: [Cache Layer](https://day1inference.com/cache.html)** analyzes KV caching, prefix caching, semantic caching, and API caching strategies that eliminate redundant computation and dramatically improve response times.

**Part 5: [Orchestration Layer](https://day1inference.com/orchestration.html)** details service deployment, autoscaling policies, health monitoring, and how to manage distributed inference infrastructure across cloud environments.

**Part 6: [Nodes Layer](https://day1inference.com/nodes.html)** covers GPU architectures, memory hierarchies, networking technologies, and capacity planning strategies for building cost-effective inference infrastructure.