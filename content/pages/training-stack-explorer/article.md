---
title: GPU Training Stack Explorer
description: Interactive visualization of GPU training infrastructure - from nanosecond latencies to training-step efficiency
category: guidances
subcategory: tools
published: 2025-02-13
updated: 2025-02-13
authors:
  - Day 1 Inference Team
toc: false
---

## GPU Training Stack Explorer

Explore the complete GPU distributed training stack - from individual latency components to full system optimization strategies. This interactive tool breaks down where every microsecond goes in modern large-scale model training.

<figure class="fullscreen" class="viz-container">
  <div id="training-stack-root"></div>
</figure>

## What You'll Learn

### The Latency Waterfall

Understand every component of inter-node communication latency:
- **CUDA Kernel Launch**: CPU scheduling overhead (3-5 μs)
- **HBM Read/Write**: GPU memory access times (~120 ns)
- **PCIe Traversal**: GPUDirect RDMA bottleneck (2-5 μs each direction)
- **NIC Processing**: TX/RX hardware operations (~1-2 μs)
- **Network Fabric**: The actual wire time (IB vs EFA comparison)

**Key Insight**: PCIe traversal dominates total latency (40-50%), making the IB vs EFA debate less significant than commonly believed.

### Parallelism Topology

See how different parallelism strategies communicate:
- **Tensor Parallel (TP)**: Intra-node via NVLink - on the critical path
- **Context Parallel (CP)**: Cross-node AllGathers - partially overlapped
- **Pipeline Parallel (PP)**: Cross-node P2P - pipelined scheduling
- **Data Parallel (FSDP)**: Cross-node collectives - 95% overlap achieved
- **Expert Parallel (EP)**: MoE All-to-All - near-zero exposure with DualPipe

**Key Insight**: Only TP runs over NVLink and cannot be overlapped. Everything else crosses the network but modern systems hide most of it behind compute.

### Compute-Communication Overlap

Watch the evolution from naive blocking to fully overlapped execution:
- **Naive BSP (2020)**: 100% exposed communication - every wire microsecond slows training
- **FSDP + Overlap (2024)**: 5-12% bubble - only first/last collectives exposed  
- **DualPipe (2025)**: Near-zero exposed communication through micro-batch interleaving

**Key Insight**: The progression from "every nanosecond matters" to "latency disappears entirely" through clever scheduling.

### Profiling Toolkit

Top-down methodology for finding bottlenecks:
- **L4 (E2E Efficiency)**: Is MFU good? If not, drill down
- **L3 (Network Fabric)**: Bandwidth utilization and congestion
- **L2 (GPU Kernels)**: SM contention between NCCL and compute
- **L1 (Framework/Collective)**: Which parallelism dimension has bubbles?
- **L0 (Hardware Topology)**: PCIe/NUMA placement validation

Complete with actual profiling commands for every layer (nsys, ncu, dcgmi, perfquery, etc.)

### The Real Optimization Frontier

Ranked list of what actually delivers speedups:
1. **SM Contention Elimination** (1.5-2.6×): NCCL steals SMs from GEMMs
2. **Overlap Scheduling** (hide 90%+): Communication during compute is free
3. **Reducing Total Bytes** (2× AllReduce BW): FP8, SHARP, compression
4. **Workload Balancing** (eliminates 65% of CP latency): It's not the network!
5. **Fabric Congestion** (P99.9 tails): The legitimate IB vs EFA debate - but #5 of 5

**Key Insight**: The fabric debate is the LEAST important optimization lever. SM contention, overlap, and workload balance dominate.

## Interactive Features

### Tab Navigation
- **Latency Stack**: Animated waterfall of all components with profiling tools
- **Parallelism Map**: Topology diagram showing where each dimension communicates
- **Overlap Timeline**: Evolution from BSP to modern overlap strategies
- **Profiling Toolkit**: Expandable layers with commands and metrics
- **Optimization Frontier**: Ranked improvements with measured impact

### Layer-by-Layer Exploration
Click on individual layers to see:
- Detailed explanation of that component
- Which profiling tool to use
- Key metrics to measure
- How it relates to the overall system

## Sources & References

Data synthesized from:
- **Meta Llama 3 ISCA 2025**: 40.4% MFU on 16K H100 GPUs, 5-12% bubble analysis
- **DeepSeek-V3 Technical Report**: DualPipe overlap, H800 IB training details
- **NVIDIA NCCL 2.27/2.28**: Copy Engine collectives, SM-free operations
- **Meta NCCLX (Oct 2025)**: Zero-copy RDMA, SM contention solutions
- **ThunderKittens/ParallelKittens**: 2.6× over NCCL through kernel fusion
- **CSCS NCCL Demystification (Jul 2025)**: Topology-aware optimization guide
- **AWS SRD Paper (NSDI 2020)**: Per-packet multipath spraying

## Use Cases

**For ML Engineers**: Understand where training time actually goes and what to optimize first

**For Infrastructure Teams**: Make informed decisions about fabric selection (IB vs EFA) based on measured impact

**For Researchers**: Deep-dive into the gap between theoretical wire latency and actual exposed cost

**For Capacity Planners**: See which hardware components matter most for different training patterns
