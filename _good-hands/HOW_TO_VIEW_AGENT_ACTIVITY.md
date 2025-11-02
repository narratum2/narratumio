# 👁️ How to View Agent Activity in Cursor

**Purpose:** Visual guide to seeing what each agent is doing in real-time

---

## 📊 Quick View: Agent Activity Dashboard

**Open this file:** `AGENT_ACTIVITY_DASHBOARD.md`

This file shows:
- ✅ Current status of each agent (🟢 Active, 🔴 Inactive, 🟡 Working)
- ✅ What task each agent is currently working on
- ✅ Last action completed by each agent
- ✅ Files touched by each agent
- ✅ Next planned actions

**Update Frequency:** This file updates automatically as agents work

---

## 🔍 Methods to See Agent Activity

### **Method 1: Live Dashboard (Recommended)**
1. Open `_good-hands/AGENT_ACTIVITY_DASHBOARD.md`
2. This shows real-time agent status
3. Refresh the file periodically to see updates

### **Method 2: Git History**
```bash
cd _good-hands
git log --oneline --all --graph --decorate
```
Shows recent commits and which files changed

### **Method 3: File Modification Times**
In Cursor, you can see:
- **File Explorer:** Shows modified timestamps
- **Recent Files:** Cmd/Ctrl+P → shows recently modified files
- **Source Control:** Shows all modified files

### **Method 4: Search for Agent Comments**
Agents often leave comments in code:
- Search for: `// Agent:` or `/* Agent:` in code files
- Search for: `<!-- Agent:` in HTML/MDX files

---

## 📁 Files That Track Agent Activity

### **Primary Dashboard:**
- `AGENT_ACTIVITY_DASHBOARD.md` - Live status of all agents

### **Status Files:**
- `AI_BACKGROUND_AGENTS_CONTROLLER.md` - Agent activities log
- `TEAM_STATUS_DASHBOARD.md` - Team-wide status
- `COMPLETE_FIXES_SUMMARY.md` - Recent fixes summary

### **Review Reports:**
- `SITE_REVIEW_REPORT.md` - Site review findings
- `BUG_TRACKER_AND_PRIORITIES_OCT_12.md` - Bug tracking

---

## 🎯 What Each Agent Does (Quick Reference)

### **Isabella (Documentation)**
**Look for changes in:**
- `*.md` files in `_good-hands/`
- Link fixes in documentation
- File organization

### **Ricardo (SEO)**
**Look for changes in:**
- `content/blog/*.md` files
- `metaDescription` fields
- SEO metadata

### **Marco (Technical)**
**Look for changes in:**
- `app/api/**` files
- Technical documentation
- Code structure

### **João QA (Quality)**
**Look for changes in:**
- Component files (`.tsx`)
- Bug fixes
- Test files

### **Ana (UX)**
**Look for changes in:**
- Component styling
- Mobile responsiveness
- UX improvements

### **Sofia (Brand)**
**Look for changes in:**
- Design system
- Brand consistency
- Visual elements

### **Catarina (Archive)**
**Look for changes in:**
- `_good-hands/archive/` directory
- File movements
- Archive reports

### **João Status (Coordinator)**
**Look for changes in:**
- Dashboard files
- Status reports
- Progress tracking

### **Pedro (Performance) - NEW**
**Look for:**
- `PERFORMANCE_REPORT.md`
- Lighthouse scores
- Optimization reports

### **Miguel (Accessibility) - NEW**
**Look for:**
- `ACCESSIBILITY_AUDIT.md`
- WCAG compliance reports
- ARIA attribute reviews

---

## 🔄 Real-Time Activity Indicators

### **In Cursor File Explorer:**
- **Blue dot** = Modified file
- **Green dot** = New file
- **Red dot** = Deleted file

### **In Source Control:**
- See all changed files
- See diff for each change
- See commit messages (agent actions)

### **In Search Results:**
Search for agent names to find their work:
- `Isabella` - Documentation changes
- `Ricardo` - SEO changes
- `Marco` - Technical changes
- etc.

---

## 📊 Understanding Agent Activity Logs

### **Activity Format:**
```
Agent Name (Role)
Status: 🟢 Active
Current Task: [description]
Last Action: ✅ Completed - [what was done]
Files Touched: [list]
Next: [next action]
```

### **Status Icons:**
- 🟢 = Active and working
- 🔴 = Inactive or error
- 🟡 = Working on task
- ⏸️ = Paused
- ✅ = Completed

---

## 🚀 Quick Commands to Check Activity

### **See Recent Changes:**
```bash
# In terminal
git status
git log --oneline -10
```

### **See What Files Changed:**
```bash
# Files changed in last hour
find _good-hands -type f -mmin -60

# Files changed by agent (search for agent name in files)
grep -r "Agent:" _good-hands/
```

### **In Cursor:**
- **Cmd/Ctrl + P** → Type filename to find recently modified
- **Cmd/Ctrl + Shift + F** → Search for agent names or activity keywords

---

## 📱 Browser Verification of Agent Work

### **After Agent Fixes:**
1. Start dev server: `cd _good-hands && npm run dev`
2. Open browser: `http://localhost:3000`
3. Check the fixes listed in `BROWSER_VERIFICATION_CHECKLIST.md`
4. Verify agent work in actual browser

### **Check Specific Fixes:**
- Mobile menu button (João QA) → Check on mobile viewport
- Hero heights (Ana) → Check on different screen sizes
- SEO meta tags (Ricardo) → Check page source
- CuratedProducts removal (João QA) → Check pages don't show component

---

## 🎯 What to Look For

### **Documentation Changes:**
- New `.md` files
- Updated documentation
- Link fixes

### **Code Changes:**
- Component improvements
- Bug fixes
- Performance optimizations

### **SEO Changes:**
- Meta descriptions added
- Schema markup updates
- Content optimization

### **UX Changes:**
- Mobile responsiveness
- Accessibility improvements
- Design consistency

---

## 💡 Pro Tips

1. **Watch the Dashboard:** `AGENT_ACTIVITY_DASHBOARD.md` updates as agents work
2. **Check Git Status:** Regular `git status` shows agent file changes
3. **Search for Agent Names:** Find where agents left their mark
4. **Browser DevTools:** Use React DevTools to see component changes
5. **File Watchers:** Set up file watchers to get notified of changes

---

## 📞 Need Help?

- **Agent not working?** Check `AGENT_ACTIVITY_DASHBOARD.md` for status
- **Can't find agent work?** Search for agent name in files
- **Want to see all changes?** Check git history or file modification times

---

**The best way to see agent activity is to open `AGENT_ACTIVITY_DASHBOARD.md` in Cursor!**
