# OpenClaw Projects - Local Organization

This directory contains organized copies of all project files created for the OpenClaw workspace projects.

## 📁 Directory Structure

```
openclaw-projects/
├── README.md                    # This file
├── ORGANIZATION_SUMMARY.md      # Detailed organization summary
├── PROJECTS.md                  # Projects index
│
├── cablane/                     # Cablane.ch Website Replication Project
│   ├── docs/
│   │   └── CABLANE_PROJECT.md   # Full project documentation
│   └── scripts/
│       ├── agent_workflow.sh    # Main workflow orchestrator (7-step process)
│       ├── scrape_cablane.sh    # Comprehensive scraper
│       └── build_site.sh         # Site builder (HTML + CSS + JS + Booking Widget)
│
└── boutique-homes-scraper/      # Boutique Homes Scraper Project
    └── README.md                # Project documentation
```

## 🎯 Projects Overview

### 1. Cablane.ch Website Replication

**Purpose:** Replicate and enhance the cablane.ch website to match the design of la-conner-glass-cabin.web.app

**Key Features:**
- ✅ Autonomous 7-step workflow for the agent
- ✅ Interactive booking widget with date picker and price calculator
- ✅ Self-service iteration (edit → rebuild → preview → deploy)
- ✅ Progress tracking system
- ✅ Reference design matching (Inter font, color scheme, layout)

**Main Scripts:**
- `agent_workflow.sh` - Orchestrates the entire workflow
- `scrape_cablane.sh` - Scrapes all content from cablane.ch
- `build_site.sh` - Generates complete website with booking widget

**Documentation:** See `cablane/docs/CABLANE_PROJECT.md`

### 2. Boutique Homes Scraper

**Purpose:** Scrape property listings from boutique-homes.com for the Todos Santos collection

**Key Features:**
- ✅ Uses OpenClaw browser for JavaScript-rendered sites
- ✅ Generates individual HTML pages for each property
- ✅ Organized output structure

**Main Script:**
- `scripts/main.sh` - Main scraper script

**Documentation:** See `boutique-homes-scraper/README.md`

## 📋 Server Organization

Both projects are also organized on the VPS at:
- **Cablane:** `/root/.openclaw/workspace/cablane/`
- **Boutique-Homes:** `/root/.openclaw/workspace/boutique-homes-scraper/`

All stray files have been moved to `archive/` folders, and scripts are properly organized in `scripts/` directories.

## 📝 Files Created

### Cablane Project
- `agent_workflow.sh` (13,962 bytes) - Workflow orchestrator
- `scrape_cablane.sh` (13,505 bytes) - Comprehensive scraper
- `build_site.sh` (32,452 bytes) - Site builder with booking widget
- `CABLANE_PROJECT.md` (7,808 bytes) - Full documentation

### Boutique-Homes Project
- `README.md` - Project documentation

### Workspace
- `PROJECTS.md` - Projects index

## 🚀 Quick Start

### Cablane Project
```bash
cd ~/openclaw-projects/cablane
cat docs/CABLANE_PROJECT.md  # Read full documentation
```

### Boutique-Homes Project
```bash
cd ~/openclaw-projects/boutique-homes-scraper
cat README.md  # Read documentation
```

## 📖 Full Details

See `ORGANIZATION_SUMMARY.md` for complete details on:
- Server organization structure
- File locations and sizes
- Organization status
- Next steps for the agent

---

**Last Updated:** 2026-02-23  
**Status:** ✅ Fully Organized (Server + Local)
