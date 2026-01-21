# Example Pull Request Description

**This file shows what a complete PR submission looks like. When you create a PR for an article, this template will auto-fill.**

---

# Article Submission for Review

## Article Information

**Title:** Optimizing Batch Size for Inference Performance

**Authors:** Alex Chen, Jordan Rivera

**Category:** ☑ Guidance

**Article Location:** `content/pages/batch-size-optimization/article.md`

---

## Author Checklist

Before requesting review, please ensure:

- ☑ Article includes complete frontmatter (title, subtitle, category, created date, authors, description)
- ☑ Category is set to one of: `foundation`, `guidance`, or `tool`
- ☑ All images/assets are placed in `content/pages/batch-size-optimization/assets/`
- ☑ Article builds successfully locally (`npm run build`)
- ☑ All links and references are working (⚠️ Note: "Further Reading" has placeholder links that need replacement)
- ☑ Code examples (if any) are tested and functional
- ☑ Article follows the style guidelines

---

## For Reviewers

This submission requires **2 approvals** before it can be merged.

Please use the [Review Checklist](.github/REVIEW_CHECKLIST.md) to guide your review. Focus on:

1. **Outstanding Communication** - Structure, writing style, visual quality, readability
2. **Scientific Correctness** - Claims, limitations, reproducibility, citations, honesty

You can:
- Add inline comments on specific lines
- Request changes with suggestions
- Approve when ready

---

## Abstract / Summary

This article provides a comprehensive guide to optimizing batch sizes for machine learning inference workloads. It covers the fundamental throughput-latency trade-off, provides a step-by-step methodology for finding optimal batch sizes, and includes advanced techniques like dynamic and adaptive batching. The article includes practical code examples and a complete real-world case study of deploying a ResNet-50 image classification service.

---

## Additional Context

### Target Audience
ML Engineers and practitioners deploying models to production who need to optimize inference performance.

### Prerequisites
- Basic understanding of machine learning inference
- Familiarity with Python and PyTorch
- Understanding of GPU acceleration concepts

### Related Content
This article complements existing Day1Inference content on latency optimization and cost-efficient deployment strategies.

### Known Issues
1. The "Further Reading" section currently has placeholder links that need to be replaced with actual resources before publication
2. The throughput curve (line 115) is ASCII art and should be replaced with a proper visualization
3. Some example numbers (lines 45-60) should be better contextualized

### Article Highlights
- Production-ready code examples (benchmark function, dynamic batcher)
- Real-world case study with concrete numbers and decision rationale
- Comprehensive "Common Pitfalls" section based on actual production experience
- Honest discussion of trade-offs without oversimplification

### Reviewer Notes
We welcome feedback on:
- Whether the level of technical detail is appropriate
- Suggestions for additional visualizations
- Recommendations for related topics to cover
- Any technical inaccuracies or outdated practices

### Author Availability
Both authors are available to respond to review feedback within 2-3 business days.

---

## PR Activity

### Commits in this PR:
- `Initial submission: Batch size optimization article`
- `Add code examples for benchmarking`
- `Add real-world case study section`

### Files Changed:
- **Added:** `content/pages/batch-size-optimization/article.md` (330 lines)
- **Added:** `content/pages/batch-size-optimization/assets/` (directory for future visualizations)

---

## Build Status

✅ Build successful - article renders correctly

You can preview the built article locally:
```bash
npm run build
npm run dev
# Navigate to http://localhost:8081/batch-size-optimization.html
```

---

## Timeline

- **Submitted:** January 21, 2026
- **Target review completion:** February 4, 2026 (2 weeks)
- **Target publication:** February 11, 2026 (after revisions)

---

*Thank you for taking the time to review this submission!*
