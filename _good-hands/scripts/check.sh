#!/usr/bin/env bash
# Reiteration & Self-Check Loop
# Run after edits to verify no regressions

set -e
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "🔍 Running self-check loop..."
echo ""

echo "1️⃣  Lint..."
npm run lint
echo "   ✓ Lint passed"
echo ""

echo "2️⃣  Type check..."
npm run typecheck
echo "   ✓ Type check passed"
echo ""

echo "✅ All checks passed. Safe to commit."
