# 🤖 Cursor 2.0 Agent Workflows

**Last Updated:** January 2025  
**Purpose:** Define automated workflows for parallel agent execution

---

## 📋 WORKFLOW DEFINITIONS

### **Workflow 1: Morning Documentation Sweep**
**Schedule:** Daily 9:00 AM  
**Duration:** ~15 minutes  
**Agents:** All documentation agents

**Steps:**
1. Isabella scans all markdown files for changes
2. Check link integrity
3. Validate formatting
4. Review archive candidates
5. Generate morning report
6. Update status dashboard
7. Set daily priorities

**Output:** Morning briefing in `TEAM_STATUS_DASHBOARD.md`

---

### **Workflow 2: Link Integrity Patrol**
**Schedule:** Every 4 hours  
**Duration:** ~10 minutes  
**Agents:** Isabella + Marco

**Steps:**
1. Extract all links from markdown files
2. Validate internal links
3. Check external URLs (sample)
4. Auto-fix moveable links (if target found)
5. Flag broken links for review
6. Generate link integrity report

**Output:** Link integrity status in `AI_BACKGROUND_AGENTS_CONTROLLER.md`

---

### **Workflow 3: Blog Post Optimization Pipeline**
**Trigger:** Blog post created/updated  
**Duration:** ~5 minutes per post  
**Agents:** Ricardo + Isabella

**Steps:**
1. Ricardo analyzes SEO:
   - Meta description analysis
   - Keyword analysis
   - Internal link count
   - Heading structure
   - Readability score
   - Word count
2. Auto-add missing meta description (if missing)
3. Find internal link opportunities
4. Add high-confidence internal links
5. Generate improvement suggestions (if SEO score < 80)
6. Update SEO tracker

**Output:** Optimized blog post + SEO report

---

### **Workflow 4: Weekly Archive Cleanup**
**Schedule:** Friday 5:00 PM  
**Duration:** ~30 minutes  
**Agents:** Catarina + João

**Steps:**
1. Identify archive candidates:
   - Files matching `*COMPLETE*.md`
   - Files matching `*FINAL*.md`
   - Status reports older than 7 days
   - Deployment summaries older than 30 days
2. Validate no active references
3. Move to appropriate archive folder
4. Update archive index
5. Update file inventory
6. Generate archive report

**Output:** Archive report + cleaned directory

---

### **Workflow 5: Status Dashboard Update**
**Schedule:** Every 6 hours  
**Duration:** ~5 minutes  
**Agent:** João

**Steps:**
1. Collect activity from all agents
2. Analyze file changes
3. Track TODO progress
4. Calculate metrics:
   - Files updated
   - Issues found/resolved
   - SEO improvements
   - Archives created
   - Health score
5. Update dashboard
6. Generate summary

**Output:** Updated `TEAM_STATUS_DASHBOARD.md` and `AI_AGENTS_MASTER_CONTROL.md`

---

### **Workflow 6: Pre-Release Testing**
**Trigger:** Branch merged to main  
**Duration:** ~30 minutes  
**Agents:** João (QA) + Ana (UX)

**Steps:**
1. Test all navigation links
2. Verify all CTA buttons
3. Test booking form
4. Validate form submissions
5. Test search functionality
6. Cross-browser testing
7. Accessibility checks
8. Mobile device testing
9. Generate test report

**Output:** Test report in `BUG_TRACKER_AND_PRIORITIES_OCT_12.md`

---

## 🔄 COORDINATION WORKFLOWS

### **Daily Stand-Up**
**Time:** 9:00 AM daily  
**Participants:** All agents

**Agenda:**
1. Yesterday's achievements (each agent reports)
2. Today's priorities (set by João)
3. Blockers identified
4. Dependencies noted

**Output:** Updated dashboard with priorities

---

### **Weekly Strategy Review**
**Time:** Monday 10:00 AM  
**Participants:** Team leads (Ricardo, Sofia, Marco, João)

**Agenda:**
1. Review previous week's performance
2. Discuss growth opportunities
3. Align on priorities
4. Plan major initiatives

**Output:** Strategic action plan for the week

---

### **Bi-Weekly Design Review**
**Time:** Wednesday 2:00 PM (every 2 weeks)  
**Participants:** Sofia, Ana, Marco

**Agenda:**
1. Review design implementations
2. Discuss UX findings
3. Plan design improvements
4. Align on A/B tests

**Output:** Design sprint backlog

---

## 🚨 ERROR HANDLING WORKFLOWS

### **Critical Issue Detection**
**Trigger:** Critical alert detected  
**Response Time:** <5 minutes

**Steps:**
1. Alert human controller immediately
2. Auto-fix if possible
3. Document issue
4. Create tracking item
5. Notify relevant agents

---

### **Broken Link Detection**
**Trigger:** Broken link found  
**Response Time:** <4 hours

**Steps:**
1. Attempt to find moved file
2. Auto-fix if target found
3. Flag for review if not found
4. Add to broken links tracker
5. Assign to Isabella for manual fix

---

### **SEO Score Drop**
**Trigger:** SEO score drops >10 points  
**Response Time:** <4 hours

**Steps:**
1. Analyze cause of drop
2. Generate improvement suggestions
3. Assign to Ricardo for optimization
4. Track recovery

---

## 📊 WORKFLOW METRICS

### **Success Criteria**
- **Morning Sweep:** <15 minutes, 100% files scanned
- **Link Patrol:** <10 minutes, all links validated
- **Blog Optimization:** <5 minutes per post
- **Archive Cleanup:** <30 minutes, 0 broken references
- **Dashboard Update:** <5 minutes, metrics accurate

### **Performance Tracking**
- Workflow execution time
- Success rate
- Issues detected/fixed
- Agent coordination effectiveness

---

## 🔧 WORKFLOW CUSTOMIZATION

To customize workflows, edit `.cursor/agents.json`:

```json
{
  "workflows": [
    {
      "id": "custom-workflow",
      "name": "Custom Workflow Name",
      "schedule": {
        "frequency": "daily|weekly|monthly|event-driven",
        "time": "HH:MM",
        "day": "monday|tuesday|...",
        "triggers": ["file.modified:pattern"]
      },
      "agents": ["agent-id-1", "agent-id-2"],
      "tasks": ["task-1", "task-2"]
    }
  ]
}
```

---

**For agent definitions, see:** `.cursor/agents.json`  
**For task queue, see:** `.cursor/tasks.json`
