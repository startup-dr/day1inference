# Setting Up Branch Protection for Article Reviews

Follow these steps to enable branch protection on GitHub:

## Step 1: Go to Repository Settings

1. Navigate to your repository on GitHub: `https://github.com/[username]/day1inference`
2. Click **Settings** (top right)
3. Click **Branches** (left sidebar under "Code and automation")

## Step 2: Add Branch Protection Rule

1. Click **Add rule** (or **Add branch protection rule**)
2. In **Branch name pattern**, enter: `main`

## Step 3: Configure Protection Settings

### Require Pull Request Reviews
✅ Check **Require a pull request before merging**

Under this option, configure:
- ✅ Check **Require approvals**
- Set **Required number of approvals before merging** to: **2**
- ✅ Check **Dismiss stale pull request approvals when new commits are pushed**
- ✅ Check **Require review from Code Owners** (this uses `.github/CODEOWNERS`)

### Require Status Checks (Optional but Recommended)
✅ Check **Require status checks to pass before merging**
- ✅ Check **Require branches to be up to date before merging**
- If you have CI/CD workflows, add them here (e.g., `build`)

### Additional Recommended Settings
✅ Check **Require conversation resolution before merging**
✅ Check **Do not allow bypassing the above settings** (even admins must follow rules)
✅ Check **Restrict who can push to matching branches** (optional - limits direct pushes)

### What NOT to check (for easier workflow)
❌ Don't check **Require linear history** (allows merge commits)
❌ Don't check **Require deployments to succeed** (unless you have deployment checks)

## Step 4: Save Changes

1. Scroll to bottom
2. Click **Create** (or **Save changes**)

## Step 5: Verify Setup

1. Try to push directly to `main` - it should be blocked
2. Create a test PR - it should require 2 approvals before merge button activates
3. Add a reviewer - they should be able to approve/request changes

## Managing Code Owners

Edit `.github/CODEOWNERS` to add/remove editors:

```bash
# Article reviews require approval from editors
/content/pages/ @kabdolha @editor2 @editor3
```

Anyone listed here can approve PRs and will automatically be requested for review.

## Troubleshooting

**"Require review from Code Owners" is grayed out:**
- Make sure `.github/CODEOWNERS` file exists
- Verify GitHub username format: `@username` (not `@username@domain.com`)
- Save and refresh the page

**Can't merge even with 2 approvals:**
- Check if "Require status checks" is enabled but no checks exist
- Verify both reviewers actually clicked "Approve" (not just commented)
- Check if conversations need to be resolved

**Need to bypass temporarily:**
- Uncheck "Do not allow bypassing" setting
- Make emergency change
- Re-enable protection immediately after

## Next Steps

Once branch protection is enabled:

1. ✅ All article submissions must go through PRs
2. ✅ All PRs require 2 approvals from code owners
3. ✅ Stale approvals are dismissed on new commits
4. ✅ Direct pushes to `main` are blocked

Articles are now protected by peer review! 🎉
