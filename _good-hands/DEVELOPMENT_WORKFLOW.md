# Development Workflow — Reiteration & Self-Check

**Purpose:** Every code change goes through a verification loop before completion.

---

## The Loop

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Edit      │────▶│   Check     │────▶│   Pass?     │
└─────────────┘     └─────────────┘     └──────┬──────┘
                                               │
                        ┌──────────────────────┼──────────────────────┐
                        │ No                   │ Yes                  │
                        ▼                      ▼                      │
               ┌─────────────┐         ┌─────────────┐                 │
               │   Fix       │────────▶│   Re-run    │─────────────────┘
               └─────────────┘         │   Check     │
                                       └─────────────┘
```

---

## Self-Check Steps (After Every Edit Batch)

| Step | Command / Action | Purpose |
|------|------------------|---------|
| 1 | `npm run lint` | ESLint across project |
| 2 | `npm run typecheck` | TypeScript type verification |
| 3 | `ReadLints` on modified files | Editor-level diagnostics |
| 4 | Grep for changed symbols | Ensure no broken imports |
| 5 | Consistency check | Naming, config, conventions |

---

## Quick Commands

```bash
# Single-pass check
npm run check

# Same as check (alias)
npm run verify

# Shell script with clearer output
./scripts/check.sh
```

---

## When to Run

- **After each batch of edits** – before moving to next task
- **Before committing** – catch regressions early
- **Before marking a todo complete** – ensure quality gate passed

---

## Agent Behavior (Cursor Rules)

The `.cursor/rules/reiteration-self-check.mdc` rule instructs AI agents to:

1. Run the check loop after edits
2. Fix any failures before continuing
3. Not report task completion until all checks pass
4. Re-read changed files for unintended side effects

---

## Failure Handling

If a check fails:

1. **Stop** – Do not proceed to next task
2. **Fix** – Address the reported issue
3. **Re-run** – Execute the failed step again
4. **Iterate** – Repeat until all steps pass

---

## Environment Note

`npm run check` requires:
- Node.js 20.9+ (for Next.js)
- `npm install` completed

If build/lint is unavailable, run ReadLints on modified files and manually verify imports/consistency.

---

## Exceptions

Skip the loop when:

- Answering a question without making edits
- User explicitly requests to skip verification
- Build/tooling is unavailable (document and defer)
