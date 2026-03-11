#!/usr/bin/env bash
# Security scan for day1inference content and source files.
# Runs on PRs to catch XSS vectors before merge.
# Exit code 0 = clean, 1 = findings.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONTENT_DIR="$REPO_ROOT/content/pages"
SRC_DIR="$REPO_ROOT/src"
SCRIPTS_DIR="$REPO_ROOT/scripts"

EXIT_CODE=0

red()   { printf '\033[1;31m%s\033[0m\n' "$*"; }
yellow(){ printf '\033[1;33m%s\033[0m\n' "$*"; }
green() { printf '\033[1;32m%s\033[0m\n' "$*"; }

relpath() {
  python3 -c "import os.path; print(os.path.relpath('$1', '$REPO_ROOT'))" 2>/dev/null || echo "$1"
}

# ─── C1: Stored XSS via Markdown HTML pass-through ───────────────────────────

echo "=== C1: Scanning markdown files for dangerous HTML ==="

if [ -d "$CONTENT_DIR" ]; then
  found=0

  while IFS= read -r -d '' mdfile; do
    rel="$(relpath "$mdfile")"

    # Dangerous tags: script, iframe, object, embed, applet, form, input, textarea, button, select, meta, base, link
    if grep -in '<[[:space:]]*script' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*iframe' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*object' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*embed' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*applet' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*form' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*input' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*textarea' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*button' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*select[[:space:]>]' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*meta' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*base[[:space:]>]' "$mdfile" 2>/dev/null || \
       grep -in '<[[:space:]]*link[[:space:]]' "$mdfile" 2>/dev/null; then
      red "CRITICAL: Dangerous HTML tag in $rel"
      found=1
    fi

    # Event handler attributes (on*=)
    if grep -in ' onclick=' "$mdfile" 2>/dev/null || \
       grep -in ' onerror=' "$mdfile" 2>/dev/null || \
       grep -in ' onload=' "$mdfile" 2>/dev/null || \
       grep -in ' onmouseover=' "$mdfile" 2>/dev/null || \
       grep -in ' onmouseout=' "$mdfile" 2>/dev/null || \
       grep -in ' onfocus=' "$mdfile" 2>/dev/null || \
       grep -in ' onblur=' "$mdfile" 2>/dev/null || \
       grep -in ' onchange=' "$mdfile" 2>/dev/null || \
       grep -in ' onsubmit=' "$mdfile" 2>/dev/null || \
       grep -in ' onkeydown=' "$mdfile" 2>/dev/null || \
       grep -in ' onkeyup=' "$mdfile" 2>/dev/null || \
       grep -in ' onkeypress=' "$mdfile" 2>/dev/null || \
       grep -in ' oninput=' "$mdfile" 2>/dev/null || \
       grep -in ' onresize=' "$mdfile" 2>/dev/null || \
       grep -in ' onscroll=' "$mdfile" 2>/dev/null || \
       grep -in ' onunload=' "$mdfile" 2>/dev/null; then
      red "CRITICAL: Event handler attribute in $rel"
      found=1
    fi

    # javascript: URIs
    if grep -in 'javascript[[:space:]]*:' "$mdfile" 2>/dev/null; then
      red "CRITICAL: javascript: URI in $rel"
      found=1
    fi

    # data: URIs in src/href (XSS via data:text/html)
    if grep -in 'src=[[:space:]]*["'"'"']*[[:space:]]*data:' "$mdfile" 2>/dev/null || \
       grep -in 'href=[[:space:]]*["'"'"']*[[:space:]]*data:' "$mdfile" 2>/dev/null; then
      red "CRITICAL: data: URI in src/href in $rel"
      found=1
    fi
  done < <(find "$CONTENT_DIR" -name '*.md' -print0)

  if [ "$found" -eq 0 ]; then
    green "C1: PASS - No dangerous HTML found in markdown files"
  else
    EXIT_CODE=1
  fi
else
  yellow "C1: SKIP - $CONTENT_DIR not found"
fi

# ─── C2: DOM-Based XSS in search and source files ────────────────────────────

echo ""
echo "=== C2: Scanning JS/TS source for unsafe innerHTML usage ==="

found=0

# Scan src/ and content/pages/ for JS/TS source files
SEARCH_DIRS=("$SRC_DIR")
if [ -d "$CONTENT_DIR" ]; then
  SEARCH_DIRS+=("$CONTENT_DIR")
fi

for search_dir in "${SEARCH_DIRS[@]}"; do
  while IFS= read -r -d '' srcfile; do
    rel="$(relpath "$srcfile")"

    # innerHTML with string concatenation: look for quote + variable patterns
    # e.g. innerHTML = '...' + var  or  innerHTML = "..." + var
    # This avoids flagging innerHTML += `template` (safe pattern)
    if grep -n 'innerHTML' "$srcfile" 2>/dev/null | grep "[\"'][[:space:]]*+\|+[[:space:]]*[a-zA-Z_]" | grep -v '`' | grep -iv '^\s*//' > /dev/null 2>&1; then
      grep -n 'innerHTML' "$srcfile" 2>/dev/null | grep "[\"'][[:space:]]*+\|+[[:space:]]*[a-zA-Z_]" | grep -v '`'
      yellow "HIGH: Unsafe innerHTML concatenation in $rel"
      found=1
    fi

    # document.write usage
    if grep -n 'document\.write(' "$srcfile" 2>/dev/null; then
      yellow "HIGH: document.write usage in $rel"
      found=1
    fi

    # eval() usage (not "evaluate", "retrieval", etc.)
    if grep -n '[^a-zA-Z_]eval(' "$srcfile" 2>/dev/null; then
      yellow "HIGH: eval() usage in $rel"
      found=1
    fi
  done < <(find "$search_dir" -type f \( -name '*.js' -o -name '*.ts' -o -name '*.jsx' -o -name '*.tsx' \) -print0 2>/dev/null)
done

if [ "$found" -eq 0 ]; then
  green "C2: PASS - No unsafe DOM manipulation found"
else
  EXIT_CODE=1
fi

# ─── C3: Command injection in scripts ────────────────────────────────────────

echo ""
echo "=== C3: Scanning scripts for command injection risks ==="

found=0

if [ -d "$SCRIPTS_DIR" ]; then
  while IFS= read -r -d '' scriptfile; do
    rel="$(relpath "$scriptfile")"

    # execSync with template literal (backtick = shell string interpolation)
    if grep -n 'execSync' "$scriptfile" 2>/dev/null | grep '`' > /dev/null 2>&1; then
      grep -n 'execSync' "$scriptfile" 2>/dev/null | grep '`'
      yellow "HIGH: execSync with template literal in $rel"
      found=1
    fi

    # execSync with string concatenation
    if grep -n 'execSync' "$scriptfile" 2>/dev/null | grep '+' > /dev/null 2>&1; then
      grep -n 'execSync' "$scriptfile" 2>/dev/null | grep '+'
      yellow "HIGH: execSync with string concatenation in $rel"
      found=1
    fi
  done < <(find "$SCRIPTS_DIR" -type f \( -name '*.js' -o -name '*.ts' \) -print0)
fi

if [ "$found" -eq 0 ]; then
  green "C3: PASS - No command injection risks found"
else
  EXIT_CODE=1
fi

# ─── Summary ─────────────────────────────────────────────────────────────────

echo ""
echo "========================================"
if [ "$EXIT_CODE" -eq 0 ]; then
  green "All security checks passed"
else
  red "Security checks FAILED - see findings above"
fi

exit "$EXIT_CODE"
