---
title: "Optimizing Batch Size for Inference Performance"
subtitle: "A practical guide to finding the sweet spot between throughput and latency"
category: guidance
created: 2026-01-21
updated: 2026-01-21
authors:
  - Alex Chen
  - Jordan Rivera
reviewers:
  - name: Dr. Sarah Martinez
    anonymous: false
    affiliation: AWS AI Labs
  - name: Anonymous Reviewer
    anonymous: true
toc: true
description: "Learn how to optimize batch sizes for machine learning inference workloads, balancing throughput, latency, and cost efficiency."
---

# Introduction

When deploying machine learning models to production, one of the most critical decisions you'll make is choosing the right batch size for inference. Too small, and you're leaving performance on the table. Too large, and you'll blow through your latency budget.

This guide walks through the trade-offs and provides a systematic approach to finding the optimal batch size for your workload.

## What is Batch Inference?

**Batch inference** is the practice of processing multiple input samples simultaneously, rather than one at a time. Modern GPUs and accelerators are designed to exploit parallelism, making batched operations significantly more efficient than sequential processing.

```python
# Sequential inference (inefficient)
for sample in dataset:
    prediction = model(sample)
    
# Batched inference (efficient)
for batch in batched_dataset:
    predictions = model(batch)  # Process 32 samples at once
```

## The Throughput-Latency Trade-off

The fundamental challenge in batch size optimization is balancing two competing metrics:

- **Throughput**: How many inferences per second can you process?
- **Latency**: How long does each individual inference take?

### Throughput Increases with Batch Size

As you increase batch size, throughput (inferences/second) generally improves:

- **Batch size 1**: 100 inferences/second
- **Batch size 8**: 600 inferences/second (6x improvement)
- **Batch size 32**: 1,800 inferences/second (18x improvement)
- **Batch size 128**: 3,200 inferences/second (32x improvement)

The GPU utilization increases as you give it more work to parallelize.

### Latency Also Increases

However, latency (time per inference) increases as well:

- **Batch size 1**: 10ms per inference
- **Batch size 8**: 13ms per inference (wait for batch to fill)
- **Batch size 32**: 18ms per inference
- **Batch size 128**: 40ms per inference

Larger batches take longer to fill and process.

## Finding Your Optimal Batch Size

### Step 1: Define Your Requirements

Start by understanding your constraints:

1. **Latency budget**: What's your p99 latency requirement? (e.g., 50ms, 100ms, 500ms)
2. **Throughput target**: How many requests/second do you need to handle?
3. **Cost constraints**: What's your budget for compute resources?

### Step 2: Profile Across Batch Sizes

Run benchmarks across a range of batch sizes:

```python
import time
import torch

def benchmark_batch_size(model, batch_size, num_iterations=100):
    model.eval()
    input_shape = (batch_size, 3, 224, 224)
    
    # Warmup
    for _ in range(10):
        dummy_input = torch.randn(input_shape).cuda()
        _ = model(dummy_input)
    
    # Measure
    start = time.time()
    for _ in range(num_iterations):
        dummy_input = torch.randn(input_shape).cuda()
        _ = model(dummy_input)
    
    total_time = time.time() - start
    throughput = (batch_size * num_iterations) / total_time
    latency = (total_time / num_iterations) * 1000  # ms
    
    return throughput, latency

# Profile different batch sizes
for bs in [1, 2, 4, 8, 16, 32, 64, 128]:
    throughput, latency = benchmark_batch_size(model, bs)
    print(f"Batch {bs:3d}: {throughput:8.1f} inf/s, {latency:6.2f}ms")
```

### Step 3: Plot the Curves

Visualize your results to identify the "knee" of the curve:

```
Throughput (inferences/sec)
    ^
4000|                    ___________
    |               ____/
3000|          ____/
    |      ___/
2000|   __/
    | _/
1000|/
    +------------------------> Batch Size
    1  8  16  32  64  128
```

The optimal batch size is typically where throughput gains start to plateau.

### Step 4: Apply Safety Margins

In production, don't max out your resources:

- Leave 20-30% headroom for traffic spikes
- Account for request arrival patterns (not all batches will be full)
- Consider cold start scenarios

## Advanced Techniques

### Dynamic Batching

Rather than using fixed batch sizes, implement **dynamic batching**:

```python
class DynamicBatcher:
    def __init__(self, max_batch_size=32, max_wait_ms=10):
        self.max_batch_size = max_batch_size
        self.max_wait_ms = max_wait_ms
        self.queue = []
        
    def add_request(self, request):
        self.queue.append(request)
        
        # Flush if batch is full or timeout
        if (len(self.queue) >= self.max_batch_size or 
            self._time_since_first() > self.max_wait_ms):
            return self.flush()
        
        return None
    
    def flush(self):
        batch = self.queue[:self.max_batch_size]
        self.queue = self.queue[self.max_batch_size:]
        return batch
```

This approach:
- Maximizes throughput during high traffic
- Minimizes latency during low traffic
- Provides smooth performance across load conditions

### Adaptive Batch Sizing

Automatically adjust batch size based on current latency:

```python
class AdaptiveBatcher:
    def __init__(self, target_latency_ms=50):
        self.target_latency = target_latency_ms
        self.current_batch_size = 8
        self.latency_history = []
        
    def adjust_batch_size(self, observed_latency):
        self.latency_history.append(observed_latency)
        
        if len(self.latency_history) >= 10:
            avg_latency = sum(self.latency_history[-10:]) / 10
            
            if avg_latency < self.target_latency * 0.8:
                # We have headroom, increase batch size
                self.current_batch_size = min(128, self.current_batch_size * 2)
            elif avg_latency > self.target_latency:
                # We're over budget, decrease batch size
                self.current_batch_size = max(1, self.current_batch_size // 2)
        
        return self.current_batch_size
```

## Real-World Example: Image Classification Service

Let's walk through a complete example:

**Scenario**: Deploy a ResNet-50 image classification API

**Requirements**:
- p99 latency < 100ms
- Handle 1,000 requests/second
- Minimize cost

**Benchmarking Results**:
```
Batch Size | Throughput (inf/s) | Latency (ms) | GPU Util
-----------|-------------------|--------------|----------
    1      |     120           |     8        |   15%
    4      |     400           |    10        |   45%
    8      |     720           |    11        |   68%
   16      |   1,200           |    13        |   82%
   32      |   1,800           |    18        |   91%
   64      |   2,200           |    29        |   95%
  128      |   2,400           |    53        |   98%
```

**Analysis**:
- Batch size 128: Exceeds latency budget (53ms base, higher under load)
- Batch size 64: Still risky (29ms base leaves little headroom)
- Batch size 32: Good balance (18ms base, ~40-50ms under load, meets 100ms p99)
- Batch size 16: Conservative choice (13ms base, excellent latency, may need 2 instances)

**Decision**: Start with batch size 32 + dynamic batching
- Max batch: 32
- Max wait: 20ms
- Provides 1,800 inf/s per instance (need 1 instance with headroom)
- Latency stays well under 100ms even at p99

## Common Pitfalls

### Pitfall 1: Testing with Cold Models

Always warm up your model before benchmarking. First few inferences are often 2-10x slower due to CUDA initialization and kernel compilation.

### Pitfall 2: Ignoring Request Patterns

Don't optimize for average load—optimize for peak load and traffic patterns. Real-world requests arrive in bursts, not uniformly.

### Pitfall 3: Forgetting About Memory

Large batch sizes consume more GPU memory. Monitor memory usage and leave headroom for:
- Model weights
- Intermediate activations
- Gradient buffers (if doing any fine-tuning)

### Pitfall 4: Over-Optimizing for Throughput

Don't chase maximum throughput at the expense of latency. Users notice slow responses, not theoretical peak performance.

## Best Practices

1. **Start conservative**: Begin with smaller batch sizes and increase gradually
2. **Monitor in production**: Track actual latency distributions, not just averages
3. **Use dynamic batching**: Adapt to changing traffic patterns
4. **Load test thoroughly**: Simulate realistic request patterns before deployment
5. **Leave headroom**: Don't run at 100% capacity
6. **Document your choices**: Record why you chose specific batch sizes

## Conclusion

Optimizing batch size is both an art and a science. By systematically profiling your workload, understanding the trade-offs, and implementing adaptive techniques, you can find the sweet spot that maximizes both performance and user experience.

Remember: the best batch size is the one that meets your latency requirements while maximizing throughput within those constraints. There's no universal answer—it depends on your specific model, hardware, and requirements.

## Further Reading

- [AWS Inferentia Batch Size Tuning Guide](https://docs.aws.amazon.com/example)
- [NVIDIA TensorRT Optimization Guide](https://docs.nvidia.com/example)
- [Dynamic Batching in Production](https://arxiv.org/example)

---

## About the Authors

**Alex Chen** is a Machine Learning Engineer at AWS AI Labs, specializing in model optimization and deployment.

**Jordan Rivera** is a Senior Applied Scientist focused on inference performance and cost optimization.
