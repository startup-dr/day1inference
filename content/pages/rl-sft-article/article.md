---
title: RL as an SFT Breakthrough
subtitle: Why reinforcement learning unlocks capabilities that supervised fine-tuning alone cannot reach
category: blogs
published: 2026-04-10
updated: 2026-04-10
authors:
  - Eric Saleh
reviewers:
  - Kareem Abdol-Hamid
toc: true
image: /rl-sft-article/assets/grpo-mechanism.svg
description: How reinforcement learning complements supervised fine-tuning to unlock reasoning, tool calling, and optimization capabilities in large language models.
---

Fine-tuning has traditionally been an exercise in imitation. You curate datasets of ideal input-output pairs, and the model learns to replicate those patterns. This works well when the "right answer" is well-defined and demonstrable: extracting structured fields from invoices, adapting tone for customer support, or summarizing medical notes into a consistent format. You show the model what good output looks like, and SFT faithfully teaches it to reproduce that behavior.

But SFT hits its limits when the task involves complex multi-step reasoning, adherence to constraints over long horizons, or exploration of novel paths to optimal outcomes. Consider a model generating SQL query plans that must be both valid and performant across diverse schemas, an agentic coding assistant navigating an unfamiliar codebase to formulate and verify a fix, or a model producing mathematical proofs where a single logical misstep invalidates the entire chain. For these objectives, there is no single "gold" response to imitate. The model needs to learn *why* certain approaches work, not just mimic what a correct answer looks like.

Reinforcement learning (RL) breaks through that ceiling by fundamentally changing how the model learns. Instead of memorizing input-output mappings, the model generates its own candidate responses, receives a reward signal indicating how good they are, and iteratively updates its policy to maximize that reward. With RL, a SQL planning model can generate dozens of candidate plans, evaluate each against a real database engine, and learn which strategies generalize across schemas — including strategies that never appeared in any training data. An agentic coding assistant can explore different approaches, run test suites, and learn a policy for navigating novel codebases rather than memorizing a single curated trace. So instead of enumerating good behavior, you define good behavior through the reward, and let the model figure out how to achieve it.

An important nuance: this limitation is about the *data*, not just the algorithm. DeepSeek's R1-Distill experiments showed that once RL has been used to generate high-quality reasoning traces, those traces can be distilled back into SFT with surprisingly strong results — DeepSeek-R1-Distill-Qwen-32B matched or exceeded many larger RL-trained models on math and code benchmarks using pure SFT.<d-cite key="deepseek_r1"></d-cite> More provocatively, Yue et al. found that RLVR "does not elicit fundamentally new reasoning patterns" — base models with sufficient test-time sampling (higher k in best-of-k) can match RL-trained models, and distillation from stronger models was more effective than RLVR at introducing novel reasoning strategies.<d-cite key="yue2025rlvr"></d-cite> This suggests RL's primary contribution may be making good reasoning strategies *more reliable* — increasing the probability that the model produces strong reasoning on any given attempt — rather than teaching fundamentally new capabilities. The real bottleneck remains that someone has to *produce* those reasoning traces in the first place, and RL remains the most effective method for doing so at scale without relying on a stronger teacher model. SFT can absorb reasoning patterns, but it cannot discover them from scratch.

The most dramatic demonstration of this came from OpenAI's o1 model (September 2024), which used RL to teach models to "think longer" on harder problems — producing extended chains of reasoning at inference time that dramatically improved performance on math, science, and coding benchmarks.<d-cite key="openai_o1"></d-cite> Shortly after, DeepSeek-R1 showed that pure RL using Group Relative Policy Optimization (GRPO) could develop coherent chain-of-thought reasoning from a base model without any SFT warmup, including a remarkable "aha moment" where the model spontaneously learned to self-verify its own reasoning.<d-cite key="deepseek_r1"></d-cite> These results made clear that RL doesn't just refine existing capabilities — it can unlock entirely new modes of reasoning.

This distinction matters more than it might first appear. It represents a shift from teaching by example to teaching by objective, and it unlocks categories of capability that imitation alone cannot reach.

<figure>
  <img src="/rl-sft-article/assets/sft-vs-rl-loop.svg" alt="SFT vs RL learning loop comparison: SFT learns from fixed data in a single pass while RL generates candidates, scores them, and loops.">
  <figcaption>SFT learns from fixed data in a single pass. RL generates candidates, scores them, and loops — discovering strategies that were never in the training data.</figcaption>
</figure>

## Where RL changes what's possible

To build intuition for what RL actually buys you, it helps to look at concrete domains where the gap between "imitate a good example" and "discover good behavior" is wide.

### Agentic tool calling

AI agents are only as useful as their ability to call the right tool, with the right parameters, at the right time. In production, an agent might need to query a database, trigger a workflow, retrieve real-time data, or act on a user's behalf. But base models frequently hallucinate tools, pass bad parameters, and attempt actions when they should ask for clarification. These failures erode trust and block deployment.

SFT can teach a model the format of a tool call, but the harder problem is:

- Deciding *whether* to call a tool at all, or ask a clarifying question, or refuse
- Generalizing that decision across tools the model has never seen
- Handling ambiguous or underspecified requests where the "correct" behavior depends on subtle contextual cues

With RL, you can generate multiple candidate responses per prompt, verify each against a ground truth (did the model call the right function with the right arguments? Did it correctly identify a missing parameter?), and reinforce the responses that scored well. The model learns not just the mechanics of tool invocation, but the judgment of when and how to act. Because verification is straightforward (the tool call either matches or it doesn't), this is a domain where RL maps naturally and delivers measurable gains.

### Multi-step code repair

Consider an agentic coding assistant tasked with fixing a failing test in an unfamiliar codebase. The model needs to read the error trace, locate the relevant source files, formulate a hypothesis about the root cause, make an edit, and verify that the fix works without breaking other tests. Each step depends on the results of the previous one, and there are many valid paths to a correct fix.

SFT would require curating traces of successful repair sessions, but:

- The same bug can be fixed in multiple valid ways
- The "right" next step depends on what the model has already discovered about the codebase
- A model trained on curated traces tends to memorize specific repair patterns rather than learning a general strategy for navigating code

With RL, you define the reward as test suite outcomes: did the originally failing test pass? Did any previously passing tests break? The model generates candidate repair trajectories, gets scored on outcomes, and iteratively learns which investigative and editing strategies generalize. It develops a policy for code repair rather than a library of memorized fixes. Benchmarks like SWE-bench have become the standard proving ground for this approach, with RL-trained agents showing stronger generalization to unseen repositories than SFT-only baselines.<d-cite key="swebench2024"></d-cite>

### Robotic task planning

When a robot needs to assemble a piece of furniture or sort objects in a warehouse, it faces a planning problem with continuous state spaces, physical constraints, and cascading consequences. Knock a part off the table while reaching for another, and the entire plan needs to change.

You can demonstrate task completions for SFT, but:

- Demonstrations capture one trajectory through a high-dimensional space
- Slight variations in starting conditions or object positions render the demonstrated plan useless
- The model needs to learn a *policy* that generalizes across physical configurations, not a *script* that replays a specific sequence

RL in simulation lets the model attempt tasks thousands of times, receive rewards for completion (and partial credit for progress), and learn recovery strategies that were never demonstrated. The model learns that when a grasp fails, it should reposition before retrying, not because it saw a human do that, but because policies that include recovery behaviors accumulate more reward.

### Chip design and hardware optimization

Modern chip design involves placing millions of components on silicon in ways that minimize wire length, manage heat dissipation, and meet timing constraints — all simultaneously. The search space is astronomically large, and the quality of a placement depends on the interaction between thousands of individual decisions.

SFT could train a model on a corpus of expert placements, but:

- Two equally good placements for the same chip can look completely different
- The relationship between local decisions (where to put this block) and global outcomes (total wire length, thermal profile) is non-linear and highly contextual
- A model trained on imitation would learn surface patterns without internalizing the physics that make those patterns work for specific designs

RL sidesteps this entirely. You give the model a placement task, let it propose arrangements, and score each one against a simulator that measures the metrics you care about. The model doesn't need to see an optimal placement to find one. It discovers strategies through exploration.

Google's work on RL for chip placement, published in Nature and later branded "AlphaChip," demonstrated that an RL agent could generate chip layouts in hours rather than weeks.<d-cite key="mirhoseini2021"></d-cite> However, this example deserves a caveat: subsequent work by Cheng et al.<d-cite key="cheng2023"></d-cite> challenged the original claims, arguing that conventional EDA tools, when properly tuned, performed comparably. Google disputed these findings, and the debate continues. The takeaway is that RL shows genuine promise in combinatorial optimization, but claims of superiority over domain-specific heuristics should be evaluated carefully against properly tuned baselines.

### Mathematical reasoning

Perhaps the clearest demonstration of RL's advantage over pure SFT comes from mathematical reasoning. Models trained with SFT on curated math solutions can pattern-match common problem types, but they struggle to compose novel proof strategies or verify their own intermediate steps.

RL with verifiable rewards transforms this: mathematical proofs and calculations have objectively checkable answers. DeepSeek-R1 showed that when trained with GRPO on math problems where correctness could be verified, the model developed emergent behaviors including self-verification, backtracking, and breaking problems into sub-problems — none of which were demonstrated in the training data.<d-cite key="deepseek_r1"></d-cite> OpenAI's o1 achieved 83% on the 2024 AMC qualifier (compared to GPT-4's 13%) largely through RL-trained reasoning.<d-cite key="openai_o1"></d-cite> These are not incremental improvements; they represent qualitative shifts in capability.

## What makes RL hard to harness

Given all of this, you might wonder why RL isn't already the default approach for every fine-tuning task that goes beyond simple pattern matching. The answer is that RL introduces a set of engineering and conceptual challenges that are qualitatively different from the challenges of SFT.

### The reward function problem

The most fundamental bottleneck is designing the reward function. In RL, the reward *is* the specification. It defines what "good" means. If the reward is misspecified, the model will optimize for exactly what you asked for — which may not be what you wanted.

For some tasks, the reward is natural and easy to verify. A SQL query either returns the correct result or it doesn't. A unit test passes or fails. A chip placement has a measurable wire length. A tool call either matches the expected function signature or it doesn't. These are the domains where RL shines brightest, because you can build a reward function that's both accurate and cheap to evaluate.

But many real-world tasks don't have clean, verifiable reward signals. How do you score the quality of a long-form explanation? A persuasive essay? You can use human evaluators, but that's expensive and slow — far too slow for the thousands or millions of reward queries that RL training requires. You can train a reward model to approximate human judgment, but now you're optimizing against a proxy (not the signal itself), and the model will find and exploit gaps between the proxy and what you actually care about.

<figure>
  <img src="/rl-sft-article/assets/reward-hacking.svg" alt="Reward hacking dynamics: proxy reward rises monotonically while true reward peaks then declines past the Goodhart's Law divergence point.">
  <figcaption>Reward hacking: the proxy reward keeps climbing while the true reward peaks and declines. Past the divergence point, more optimization makes the model worse.</figcaption>
</figure>

The reward hacking phenomenon is not an edge case: it's the expected outcome whenever the reward model is imperfect, which is always. Gao et al. formally characterized how optimizing too aggressively against a proxy reward model causes the *true* reward (as measured by humans or a verifiable function) to degrade — a relationship they showed follows predictable scaling laws.<d-cite key="gao2023scaling"></d-cite> Documented examples include models trained with RLHF learning to produce verbose, hedging responses that score well with reward models but frustrate users; models exploiting formatting patterns (bullet points, confident tone) that correlate with higher scores without improving substance; and models that game length as a proxy for thoroughness.<d-cite key="singhal2023"></d-cite>

A related concern: reward models also have a temporal dimension. An outcome reward model (ORM) scores only the final answer, while a process reward model (PRM) scores each intermediate step. Lightman et al. showed that PRMs significantly improve performance on multi-step math reasoning because they catch errors at the step where they occur, rather than only penalizing wrong final answers.<d-cite key="lightman2023"></d-cite> The choice between ORMs and PRMs matters and is absent from most introductory treatments of RL fine-tuning.

### Exploration and training instability

SFT training is, by deep learning standards, well-behaved. You have a fixed dataset, a straightforward loss function (cross-entropy against the target tokens), and well-understood optimization dynamics. Training curves are predictable. Hyperparameters transfer reasonably well across tasks.

RL training is a different animal. The model is simultaneously generating the data it learns from and updating the policy that generates that data — a feedback loop that can amplify small instabilities into catastrophic failures. Reward signals can be sparse (the model needs to stumble onto good behavior before it can reinforce it) or deceptive (a local optimum that scores well but represents degenerate behavior). In practice, teams report spending weeks tuning a single RL run, adjusting KL penalties, reward scaling, learning rates, batch sizes, and sampling temperatures, to achieve stable training. There's less collective wisdom to draw on, fewer battle-tested recipes, and more ways for things to quietly go wrong.

### The compute cost reality

A practical consideration the field often underemphasizes: RL training typically requires 5–20x the compute of SFT for the same model. The overhead comes from multiple sources: generating multiple candidate responses per prompt (typically 4–16 for GRPO), running reward evaluation on each candidate, more training iterations needed for convergence, and the trial-and-error of hyperparameter sweeps necessitated by instability. For teams evaluating whether RL is worth the investment, this cost multiplier is a first-order consideration that should be weighed against the expected capability gains. GRPO partially mitigates this versus PPO by eliminating the need for a separate critic network, but the generation overhead remains substantial.<d-cite key="shao2024deepseekmath"></d-cite>

### The evaluation gap

Even after you've trained an RL model, evaluating whether it's actually better is harder than for SFT. With SFT, you hold out a test set of input-output pairs and measure how well the model reproduces them. With RL, the whole point is that the model may produce *better* outputs than any example in the training data. How do you measure that?

For verifiable domains, this is manageable: run the SQL queries, execute the test suites, measure the chip placements. But for open-ended tasks, evaluation falls back to human judgment or automated metrics, both of which have the same limitations that make reward design hard in the first place.

## The SFT comfort zone

SFT is easier to implement and easier to reason about. The mental model is simple: here are examples of what I want, now learn to do that. The dataset is a tangible artifact you can inspect and debug. Product teams can contribute by writing examples. Domain experts can review training data. The entire pipeline maps onto familiar software engineering workflows.

RL disrupts those affordances. The "dataset" is replaced by a reward function and an exploration process. When the model produces bad outputs, the debugging is opaque: is the reward wrong, is the model stuck in a local optimum, is the reward model being exploited? Most applied ML teams haven't built those intuitions yet. That's not a reason to avoid RL. It's a reason to seek out tooling that absorbs the operational complexity so teams can focus on the parts that matter: the reward function, the data, and the model behavior.

## SFT and RL as a pipeline, not a choice

The most common misconception about RL fine-tuning is that it replaces SFT. In practice, the two techniques are complementary stages in a pipeline, and understanding why makes both of them more effective.

SFT's role in that pipeline is to narrow the policy space. A base pretrained model can generate almost anything: poetry, code, nonsense, refusals, hallucinations. Its behavior is broad and undirected. SFT constrains that space by teaching the model the basic shape of the task: the expected output format, the relevant domain vocabulary, the rough contours of what a good response looks like. After SFT, the model isn't perfect, but it's in the right neighborhood. It knows that a tool-calling prompt should produce a JSON function call, not a haiku. It knows that a SQL optimization task should produce a query plan, not a recipe.

RL then takes over from that narrowed starting point. Instead of exploring the entire space of possible outputs (most of which are garbage), the RL policy starts in a region where most candidate responses are at least structurally plausible. Exploration becomes productive rather than random. The model can try variations on valid approaches and learn which ones score higher, instead of spending its exploration budget discovering that outputting song lyrics earns zero reward.

<figure>
  <img src="/rl-sft-article/assets/sft-rl-pipeline.svg" alt="SFT to RL pipeline: the same ambiguous prompt through base model, SFT model, and RL-tuned model showing progression from advice to format to judgment.">
  <figcaption>The same ambiguous prompt through three stages: the base model gives advice, SFT produces the right format but guesses dangerously, RL learns to ask for clarification.</figcaption>
</figure>

This pipeline was established early: InstructGPT<d-cite key="ouyang2022instructgpt"></d-cite> demonstrated SFT → reward model → PPO as the canonical alignment recipe. Nearly every major alignment effort since has followed some variant of this approach.

An important nuance: skipping SFT and going straight to RL on a base model is *usually* a mistake, but not always. DeepSeek-R1-Zero showed that pure RL from a base model *can* develop reasoning capabilities, though with degraded readability and language mixing.<d-cite key="deepseek_r1"></d-cite> Adding an SFT cold-start dramatically improved output quality without sacrificing reasoning ability. The practical lesson: SFT isn't strictly *necessary* for capability emergence, but it makes RL training more sample-efficient, more stable, and produces more usable outputs. For teams without DeepSeek-scale compute budgets, the SFT warmup is essential.

The practical question becomes: when is your SFT baseline good enough to hand off to RL? There's no universal threshold, but a useful heuristic is to look at whether the model's failures are primarily about format or about judgment. If the model is still producing responses in the wrong structure, missing required fields, or confusing the task entirely, it needs more SFT. If the model produces well-formed responses that are sometimes suboptimal — choosing the wrong tool, generating a valid but slow query plan, making a correct but inelegant code fix — that's the signal that RL has something to work with.

Some teams iterate between the two. They run SFT to establish a baseline, apply RL to improve decision quality, then curate the best RL-generated outputs as new SFT training data for the next round. This flywheel can be powerful, but it adds complexity. For most teams starting out, a single pass (SFT then RL) is the right entry point.

The key insight is that SFT and RL are solving different problems. SFT teaches the model *what kind of thing to produce*. RL teaches it *how to produce the best version of that thing*. Neither is sufficient alone for tasks that require both structural correctness and adaptive reasoning. Together, they cover the full spectrum.

## Choosing the right RL flavor: RLVR, RLAIF, RLHF, and DPO

Once you've decided that RL is the right next step beyond your SFT baseline, the next question is which flavor of RL fits your problem. The choice comes down to how you generate the reward signal and whether you need online exploration, and each approach has a different profile of cost, accuracy, and applicability.

**Reinforcement Learning with Verifiable Rewards (RLVR)** is the most straightforward variant. The reward comes from a deterministic verification function: did the generated SQL query return the correct result? Did the tool call match the expected function and parameters? Did the code pass the test suite? The reward is binary or tiered, cheap to compute, and objective. There's no ambiguity, no annotator disagreement, no proxy model to worry about. If your task has a ground truth you can check programmatically, RLVR is almost always the right choice. It's also the easiest to debug, because when training goes wrong, you can inspect the reward function directly rather than interrogating a black-box model.

RLVR is what powered DeepSeek-R1's reasoning breakthrough: mathematical correctness provided an unambiguous reward signal that allowed the model to develop sophisticated reasoning strategies through pure exploration.<d-cite key="deepseek_r1"></d-cite>

The limitation is obvious: many tasks don't have verifiable rewards. You can't write a function that scores whether an explanation is clear, whether a summary captures the right nuances, or whether a customer support response will leave the user satisfied.

**Reinforcement Learning from AI Feedback (RLAIF)** fills this gap by using a separate language model as the judge. Instead of a verification function, a stronger model (or a model prompted with detailed rubrics) evaluates each candidate response and produces a reward score. This extends RL to subjective and open-ended tasks where programmatic verification isn't possible.

Anthropic's Constitutional AI<d-cite key="bai2022constitutional"></d-cite> pioneered a structured approach to RLAIF by having the AI critique and revise its own outputs according to a set of explicit principles before using these preference pairs for RL training. This demonstrated that carefully designed AI feedback could produce models that were both more helpful and more harmless, without requiring massive human annotation pipelines.

The tradeoff is that you're now optimizing against a proxy. The judge model has its own biases and blind spots, and the policy model will eventually learn to exploit them. Verbose responses might score higher than concise ones, confident-sounding answers might beat accurate-but-hedged ones, and responses that pattern-match to the judge's preferences might win over responses that are genuinely better for the end user. Careful rubric design and periodic auditing of the judge's scores can mitigate this, but it never fully goes away. RLAIF works best when the judge model is substantially stronger than the policy model being trained, and when the evaluation criteria can be articulated in a detailed rubric.

**Reinforcement Learning from Human Feedback (RLHF)** puts humans in the loop directly. Human evaluators compare pairs of model outputs and indicate which is better, and those preference judgments are used to train a reward model, which then provides the signal for RL training. This is the approach that powered InstructGPT<d-cite key="ouyang2022instructgpt"></d-cite> and much of the subsequent alignment work in frontier models.

RLHF produces the highest-fidelity reward signal for subjective tasks, because it captures the judgment of the actual stakeholders. But it's also the most expensive and slowest to iterate on. You need a pipeline for collecting human annotations at scale, quality control processes to manage annotator disagreement, and enough annotation throughput to keep up with training. The reward model trained on human preferences still introduces a proxy gap — just a smaller one than RLAIF.

**Direct Preference Optimization (DPO)** offers a fundamentally different approach by eliminating the reward model entirely. Instead of training a reward model and then running RL against it, DPO directly optimizes the language model on pairs of preferred and dispreferred responses using a modified cross-entropy loss.<d-cite key="rafailov2023dpo"></d-cite> This makes it dramatically simpler to implement — closer to SFT in operational complexity — and avoids the training instabilities inherent to online RL.

The tradeoff: DPO is an *offline* method. It only learns from pre-collected preference pairs, not from the model's own exploration. This means it cannot discover novel strategies the way online RL (PPO, GRPO) can. For tasks where the preference data adequately covers the behavior space, DPO works remarkably well. For tasks requiring genuine exploration — discovering new reasoning strategies, finding novel tool-calling patterns — online RL retains an edge. Recent work suggests that online variants like Online DPO and Iterative DPO, which periodically regenerate preference data from the current policy, can narrow this gap.<d-cite key="xu2024cringe"></d-cite>

For most teams, the decision tree is:

1. If you can write a verification function → **RLVR**. Start here if at all possible.
2. If verification isn't feasible and you have preference data → **DPO**. Simplest to implement, most stable to train.
3. If you need exploration beyond pre-collected data and can articulate clear evaluation criteria → **RLAIF** with a strong judge model and detailed rubrics.
4. If quality judgments are inherently subjective and high-stakes (safety, tone, cultural sensitivity) → **RLHF** for tasks where fidelity justifies the annotation cost.

<figure>
  <img src="/rl-sft-article/assets/rl-flavor-decision-tree.svg" alt="RL flavor decision tree: flowchart from verification function availability through preference data to RLVR, DPO, RLAIF, or RLHF.">
  <figcaption>Decision tree for choosing an RL flavor. Start with whether you can write a verification function, then follow the branches based on your data and evaluation capabilities.</figcaption>
</figure>

These approaches aren't mutually exclusive. A single training pipeline might use RLVR for structural correctness (did the model produce valid JSON?), DPO or RLAIF for quality dimensions (is the response helpful and well-phrased?), and combine multiple reward signals into a composite score.

## The complexity of self-managed RL

For teams that attempt to run RL themselves, the operational burden is substantial. Even on a single node, there is friction at every layer of the stack:

- **GPU procurement and environment setup.** Before any training begins, teams must procure sufficiently powerful GPU instances, often navigating capacity shortages and long wait times. Once secured, standing up a working environment with compatible drivers, CUDA versions, and framework dependencies is a brittle exercise that demands ongoing maintenance and breaks in unexpected ways between runs.
- **Memory and resource orchestration.** RL workloads require generation and training to share the same GPU resources, forcing practitioners to carefully manage how the model switches between rollout and optimization phases and tune parallelism strategies to avoid OOM errors that silently kill long-running jobs.
- **Reward function integration.** Whether you're calling an external reward model, executing generated code in a sandboxed environment, or querying a database engine for correctness verification, each reward pathway requires its own infrastructure, latency management, and error handling.
- **Fault tolerance and checkpointing.** Checkpointing strategies need to be hand-tuned to balance recovery guarantees against storage costs. A crash mid-rollout means losing hours of compute with no easy way to resume.
- **Hyperparameter sensitivity.** RL algorithms like GRPO and PPO are notoriously brittle. Without proper observability, practitioners often burn through days of expensive compute before realizing a run has diverged.

The result is that teams spend more time debugging infrastructure than actually improving their models. This is the gap that managed services are designed to close.

## Getting started with serverless RL on SageMaker AI

Amazon SageMaker AI offers serverless model customization that removes the infrastructure burden described above. You select a model, configure a technique, point to your training data and reward function, and SageMaker AI handles GPU provisioning, memory orchestration, checkpointing, and fault tolerance. Training and validation metrics are tracked through integrated MLflow.

The service supports model families including Amazon Nova, Llama, Qwen, DeepSeek, and GPT-OSS, with techniques including Reinforcement Learning with Verifiable Rewards (RLVR), SFT, DPO, and RLAIF. For RLVR, you provide a dataset of prompts with ground-truth labels and a reward function that scores candidate responses against those labels. SageMaker AI generates multiple candidate responses per prompt (typically eight), scores each one, and uses Group Relative Policy Optimization (GRPO) to reinforce the responses that outperform the group average.

<figure>
  <img src="/rl-sft-article/assets/grpo-mechanism.svg" alt="GRPO training step: a single prompt generates 8 candidates, each scored by a reward function, with scores above the group mean reinforced and below penalized.">
  <figcaption>GRPO in one step: generate candidates from a single prompt, score each with the reward function, then reinforce above-average and penalize below-average responses. No critic network needed.</figcaption>
</figure>

The practical workflow looks like this:

1. **Prepare your training data.** Each example contains a prompt and a ground truth in a reward_model field. For tool calling, the ground truth might be the expected function call with correct parameters, a clarifying question for ambiguous requests, or a refusal for out-of-scope prompts.
2. **Write your reward function.** This is the core intellectual work. For verifiable tasks, the function checks whether the model's output matches the expected structure and content. Tiered scoring (partial credit for getting the function right but a parameter wrong, for example) helps the model learn faster than binary pass/fail.
3. **Configure and launch.** In SageMaker AI Studio, select your base model, choose RLVR as the customization technique, point to your data and reward function in S3, and set hyperparameters. The service handles the rest.
4. **Evaluate and iterate.** Review training metrics in MLflow, evaluate on held-out data with unseen inputs, and adjust the reward function or data mix based on results.

This is the path to making RL practical for teams that don't have dedicated infrastructure or RL-specialized engineers. The hard problem, designing a reward function that captures what you actually care about, stays with you. Everything else becomes managed.

## Where to start

For teams ready to try RL fine-tuning, two resources offer a concrete on-ramp:

- [Accelerate agentic tool calling with serverless model customization in Amazon SageMaker AI](https://aws.amazon.com/blogs/machine-learning/accelerate-agentic-tool-calling-with-serverless-model-customization-in-amazon-sagemaker-ai/) walks through an end-to-end example of fine-tuning Qwen 2.5 7B Instruct for tool calling using RLVR, covering dataset preparation, reward function design, training configuration, and evaluation.
- The [SageMaker AI Model Customization Workshop (RLVR Lab)](https://catalog.us-east-1.prod.workshops.aws/workshops/548b5be9-2da8-4c93-82f7-b0b474108ab3/en-US/04-lab-3-rlvr/01-data-preparation) provides a hands-on lab for data preparation and RLVR training you can run in your own AWS account.

The framing of RL as something separate from SFT — as an exotic alternative — may itself be the biggest obstacle. In practice, the most effective training pipelines will use both: SFT to establish a strong behavioral baseline and impart foundational patterns, RL to push beyond that baseline on the dimensions that matter most. The question isn't "SFT or RL?" It's "where does each one contribute, and how do I make the RL part less painful?" Teams that answer that question will build models that their competitors, still stuck in the imitation paradigm, simply can't match.

