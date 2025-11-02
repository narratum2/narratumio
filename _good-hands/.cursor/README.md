# 🤖 Cursor 2.0 Agent System Configuration

**Version:** 2.0  
**Last Updated:** January 2025  
**Status:** 🟢 Active

---

## 📁 Configuration Files

This directory contains the Cursor 2.0 agent system configuration:

- **`agents.json`** - Agent definitions, schedules, capabilities, and permissions
- **`tasks.json`** - Task queue with priorities and assignments
- **`workflows.md`** - Automated workflow definitions
- **`README.md`** - This file

---

## 🚀 Quick Start

### **Activating Agents**

Agents are automatically activated when Cursor detects:
- File changes matching their focus areas
- Scheduled task triggers
- Manual agent commands

### **Manual Agent Commands**

You can interact with agents directly:

```
"Isabella, fix broken links in [file]"
"Ricardo, optimize blog post [title]"
"Catarina, archive completed reports"
"Marco, validate API documentation"
"João, update status dashboard"
"Sofia, check brand consistency"
"Ana, review UX issues"
```

### **Checking Status**

```
"What are the agents working on?"
"Show me today's activity"
"What's the documentation health score?"
"Generate a progress report"
```

---

## 📊 Active Agents

### **Documentation & Maintenance**
- **Isabella** - Documentation Curator (24/7 monitoring)
- **Catarina** - Archive Manager (weekly cleanup)

### **Content & SEO**
- **Ricardo** - Content & SEO Optimizer (continuous)
- **Isabella** - Content Strategist (weekly sprints)

### **Technical & Quality**
- **Marco** - Technical Architect (daily + on-demand)
- **João** - QA Engineer (before releases + weekly)

### **Design & UX**
- **Sofia** - Brand Guardian (weekly audits)
- **Ana** - UX Researcher (bi-weekly reviews)

### **Business & Analytics**
- **João** - Status Coordinator (every 6 hours)

---

## 🔄 Automated Workflows

1. **Morning Documentation Sweep** - Daily 9:00 AM
2. **Link Integrity Patrol** - Every 4 hours
3. **Blog Post Optimization** - On content change
4. **Weekly Archive Cleanup** - Friday 5:00 PM
5. **Status Dashboard Update** - Every 6 hours
6. **Pre-Release Testing** - On branch merge

See `workflows.md` for detailed workflow definitions.

---

## 📋 Task Queue

Tasks are organized by priority:
- **High Priority (P0-P1):** Critical bugs, SEO fixes, broken links
- **Medium Priority (P2):** Archive cleanup, documentation updates
- **Low Priority (P3):** Enhancements, nice-to-haves

See `tasks.json` for full task list and quick wins.

---

## 🎯 Current Priorities

### **Critical (Fix Immediately)**
1. Mobile menu button touch target (P0)
2. Hero section height on small phones (P1)
3. Comment out CuratedProducts component (P0)

### **High Priority (This Week)**
1. Fix broken internal links (P1)
2. Optimize blog post meta descriptions (P1)
3. Mobile UX improvements (25+ issues)

### **Quick Wins (90 minutes total)**
10 bugs can be fixed in ~90 minutes - see `tasks.json` for details.

---

## 📈 Status Dashboard

Agents automatically update:
- `_good-hands/TEAM_STATUS_DASHBOARD.md` - Real-time status
- `_good-hands/AI_AGENTS_MASTER_CONTROL.md` - Master control center
- `_good-hands/MASTER_TODO_LIST.md` - Task tracking

---

## 🔧 Customization

### **Adding a New Agent**

Edit `.cursor/agents.json`:

```json
{
  "id": "new-agent-id",
  "name": "Agent Name",
  "description": "What the agent does",
  "type": "background",
  "enabled": true,
  "schedule": { ... },
  "capabilities": [ ... ],
  "permissions": { ... }
}
```

### **Adding a New Workflow**

Edit `.cursor/workflows.md` and update `agents.json` workflows section.

### **Adding Tasks**

Edit `.cursor/tasks.json` and add to appropriate priority queue.

---

## 📚 Related Documentation

- `_good-hands/AI_EXPERT_TEAM.md` - Full team structure
- `_good-hands/AI_TEAM_ROLES.md` - Role definitions
- `_good-hands/AI_TEAM_COORDINATION_SYSTEM.md` - Coordination protocols
- `_good-hands/AI_CONTINUOUS_MONITORING_SYSTEM.md` - Monitoring details

---

## 🎊 System Status

**Overall:** 🟢 All Systems Operational  
**Active Agents:** 8/8  
**Automated Workflows:** 6 active  
**Health Score:** 72/100 → 90/100 target  
**Last System Check:** Just now

---

**Questions?** Check the main documentation or ask an agent directly!
