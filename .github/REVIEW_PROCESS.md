# Article Review Process

This repository uses a peer review process for all article submissions, inspired by [Distill's review process](https://distill.pub/journal/).

## For Authors

### Submitting an Article

1. **Create a branch** for your article:
   ```bash
   git checkout -b article/your-article-name
   ```

2. **Create your article** in `content/pages/your-article-name/`:
   ```
   content/pages/your-article-name/
   ├── article.md
   └── assets/
       └── [images and other assets]
   ```

3. **Add frontmatter** to your article:
   ```yaml
   ---
   title: Your Article Title
   subtitle: Optional subtitle
   category: foundation  # or: guidance, tool
   created: 2026-01-21
   authors:
     - Your Name
   description: Brief description for metadata
   ---
   ```

4. **Test locally**:
   ```bash
   npm run build
   npm run dev  # Verify it looks correct
   ```

5. **Create a Pull Request**:
   - Push your branch to GitHub
   - Open a PR against `main`
   - Fill out the PR template
   - Request reviewers

6. **Respond to reviews**:
   - Address feedback in comments
   - Make revisions by pushing new commits
   - Mark conversations as resolved
   - Request re-review when ready

### Article Categories

- **Foundation**: Core concepts, fundamentals, theoretical background
- **Guidance**: Best practices, how-to guides, tutorials, implementation advice
- **Tool**: Interactive tools, visualizers, calculators, demonstrations

---

## For Reviewers

### Review Process

1. **You'll be assigned** as a reviewer on a PR
2. **Read the article** - Use the "Files changed" tab to see the article
3. **Use the checklist** - Follow `.github/REVIEW_CHECKLIST.md` 
4. **Add comments**:
   - Inline comments on specific lines
   - General comments in the PR conversation
   - Use "Request changes" if revisions needed
   - Use "Approve" when ready
5. **Choose anonymity** - Indicate in your review if you want credit

### Review Focus Areas

#### Outstanding Communication
- Article structure and flow
- Writing clarity and style
- Visual quality and consistency
- Impact of diagrams/interactives
- Overall readability

#### Scientific Correctness & Integrity
- Well-supported claims
- Honest evaluation of limitations
- Reproducibility of results
- Relevant citations
- Intellectual honesty

### Review Timeline

- **Initial review**: Within 2 weeks of assignment
- **Re-review**: Within 1 week after revisions

---

## Branch Protection

The `main` branch is protected with the following rules:

- ✅ **Require pull request reviews** before merging
- ✅ **Require 2 approving reviews** 
- ✅ **Dismiss stale reviews** when new commits are pushed
- ✅ **Require review from code owners** (editors)
- ✅ **Require status checks to pass** (build must succeed)

This ensures all articles undergo thorough peer review before publication.

---

## Review Guidelines

### What Makes a Good Review?

1. **Constructive**: Focus on improving the article
2. **Specific**: Point to exact lines or sections
3. **Actionable**: Provide clear suggestions
4. **Balanced**: Note strengths and weaknesses
5. **Thorough**: Use the full checklist
6. **Respectful**: Maintain professional tone

### Common Issues to Check

- [ ] Technical accuracy
- [ ] Citation completeness
- [ ] Code examples work correctly
- [ ] Images load and display properly
- [ ] Links are not broken
- [ ] Spelling and grammar
- [ ] Accessibility (alt text, color contrast)
- [ ] Mobile responsiveness

### Example Review Comments

**Good:**
> Line 42: The claim that "model X outperforms Y" needs a citation. Consider adding a reference to the original benchmark paper or reproducing the comparison.

**Not as helpful:**
> This section is confusing.

---

## After Review

### When 2 Approvals are Received:

1. **Author** or **Editor** merges the PR
2. **GitHub Actions** automatically builds and deploys
3. **Article goes live** on day1inference.com
4. **Reviewers** are credited (if non-anonymous)

### Displaying Reviews (Optional)

You can include review information in the article frontmatter:

```yaml
---
title: Article Title
reviewers:
  - name: Reviewer Name
    anonymous: false
    affiliation: Organization
  - name: Anonymous Reviewer
    anonymous: true
---
```

---

## Questions?

Contact the editorial team or open an issue in the repository.
