# ⚡ Integration Quick Reference - Good Hands

**Purpose:** Fast reference guide for AI teams to check alignment  
**Use:** Check this BEFORE starting any task that affects other teams

---

## 🚨 GOLDEN RULES

1. **ALWAYS check `TEAM_STATUS_DASHBOARD.md` FIRST**
2. **NEVER modify another team's domain without coordination**
3. **ALWAYS update the dashboard after completing tasks**
4. **FLAG dependencies immediately**
5. **COORDINATE before deploying changes**

---

## 🎨 DESIGN TEAM MUST CHECK WITH:

### Check with CONTENT when:
- ✅ Creating new page layouts (need copy)
- ✅ Changing button text or CTAs
- ✅ Adding new sections (need content)
- ✅ Modifying form fields (need labels)
- ✅ Creating blog article templates (need content)

### Check with ENGINEERING when:
- ✅ Designing new components (feasibility check)
- ✅ Specifying animations (performance impact)
- ✅ Requiring third-party integrations
- ✅ Modifying responsive breakpoints
- ✅ Creating complex interactions

### Don't Need to Check:
- ❌ Color palette adjustments (within brand)
- ❌ Typography tweaks (within system)
- ❌ Image optimizations
- ❌ Minor spacing changes
- ❌ Icon replacements (same size/function)

---

## 📝 CONTENT TEAM MUST CHECK WITH:

### Check with DESIGN when:
- ✅ Content is longer than existing layouts accommodate
- ✅ Adding new page sections (need layout)
- ✅ Requiring new image types or infographics
- ✅ Changing headline hierarchy (affects visual design)
- ✅ Adding tables or complex formatting

### Check with ENGINEERING when:
- ✅ Adding new metadata fields
- ✅ Changing URL structures
- ✅ Requiring new schema markup types
- ✅ Adding forms or interactive elements
- ✅ Publishing new content types (need publishing flow)

### Don't Need to Check:
- ❌ Fixing typos in existing content
- ❌ Minor copy edits (same length)
- ❌ Meta description optimization
- ❌ Alt text updates
- ❌ Internal link additions

---

## 💻 ENGINEERING TEAM MUST CHECK WITH:

### Check with DESIGN when:
- ✅ Technical constraints limit design possibilities
- ✅ Performance optimizations affect visuals
- ✅ Responsive behavior doesn't match mockup
- ✅ Animation implementation differs from spec
- ✅ Loading states need design

### Check with CONTENT when:
- ✅ Error messages need user-friendly text
- ✅ Form validation messages needed
- ✅ Email templates need content
- ✅ New pages need metadata
- ✅ API responses need descriptions

### Don't Need to Check:
- ❌ Bug fixes (unless they affect UX)
- ❌ Performance optimizations (backend only)
- ❌ Security updates
- ❌ Code refactoring (no user-facing changes)
- ❌ Database optimizations

---

## 🔄 COMMON SCENARIOS

### Scenario 1: Creating a New Page

**Sequence:**
1. **DESIGN** creates wireframe + mockup
2. **DESIGN** → **CONTENT**: "Need copy for this layout"
3. **CONTENT** writes copy + metadata
4. **CONTENT** → **ENGINEERING**: "Content ready for this page"
5. **DESIGN** + **CONTENT** → **ENGINEERING**: "Ready to build"
6. **ENGINEERING** implements
7. **ENGINEERING** → **ALL**: "Deployed to staging, please review"
8. **ALL** teams QA together
9. **ENGINEERING** deploys to production
10. **ALL** teams update `TEAM_STATUS_DASHBOARD.md`

---

### Scenario 2: Updating Existing Content

**Sequence:**
1. **CONTENT** updates copy
2. **CONTENT** checks if design is affected (Yes/No)
   - **If Yes**: Alert DESIGN for layout adjustment
   - **If No**: Proceed
3. **CONTENT** → **ENGINEERING**: "Content updated, ready to publish"
4. **ENGINEERING** publishes
5. **CONTENT** + **ENGINEERING** verify live
6. Update dashboard

---

### Scenario 3: Design System Change

**Sequence:**
1. **DESIGN** proposes change (e.g., new button style)
2. **DESIGN** documents change in design system
3. **DESIGN** → **ALL**: "Proposing design system update"
4. **CONTENT** reviews if button text changes needed
5. **ENGINEERING** reviews technical feasibility
6. All approve? → **ENGINEERING** implements globally
7. **ALL** teams test affected pages
8. Update dashboard

---

### Scenario 4: New Feature Development

**Sequence:**
1. Feature identified (from MASTER_TODO_LIST or request)
2. **ALL TEAMS** discuss in parallel:
   - **DESIGN**: User flow + wireframe
   - **CONTENT**: Copy requirements
   - **ENGINEERING**: Technical approach
3. **ALL** teams sync (via dashboard comments)
4. Align on approach and timeline
5. **DESIGN** finalizes mockup → handoff
6. **CONTENT** finalizes copy → handoff
7. **ENGINEERING** builds feature
8. **ALL** teams QA together
9. Deploy and celebrate! 🎉
10. Update dashboard

---

## 🚨 RED ALERT SITUATIONS

### When to STOP and COORDINATE IMMEDIATELY:

**🔴 STOP if:**
- Another team is working on the same file/component
- Your change will break another team's work
- You're unsure if change affects other teams
- You're about to deploy something major
- You discover a blocker for another team

**How to Alert:**
1. Update `TEAM_STATUS_DASHBOARD.md` with 🚨 emoji
2. Add blocker details
3. Tag affected teams
4. Propose solution or ask for input
5. Wait for coordination before proceeding

---

## ✅ QUICK HANDOFF CHECKLIST

### Design → Content Handoff:
- [ ] Mockup finalized and linked
- [ ] Layout specs clear
- [ ] Image requirements specified
- [ ] Character limits noted (if any)
- [ ] Deadline communicated

### Design → Engineering Handoff:
- [ ] All assets exported (WebP images, SVG icons)
- [ ] Responsive specs included (mobile/tablet/desktop)
- [ ] Interactions and animations documented
- [ ] Color codes and spacing values provided
- [ ] Figma/mockup link shared

### Content → Design Handoff:
- [ ] Copy document linked
- [ ] Word counts provided
- [ ] Image needs specified
- [ ] SEO requirements noted
- [ ] Special formatting needs listed

### Content → Engineering Handoff:
- [ ] Content finalized (no more edits)
- [ ] Metadata complete (title, description, keywords)
- [ ] Alt text for all images
- [ ] Schema markup type specified
- [ ] Internal links identified

### Engineering → All Teams Handoff:
- [ ] Deployed to staging first
- [ ] Staging URL shared
- [ ] Testing checklist provided
- [ ] Known issues documented
- [ ] Review deadline set

---

## 📊 DAILY COORDINATION ROUTINE

### Every Morning (9 AM Lisbon Time):
1. ✅ Read `TEAM_STATUS_DASHBOARD.md`
2. ✅ Check for blockers affecting your team
3. ✅ Review dependencies on other teams
4. ✅ Update dashboard with today's plan
5. ✅ Flag any issues or questions

### Every Evening (6 PM Lisbon Time):
1. ✅ Update dashboard with completed tasks
2. ✅ Mark items ready for handoff
3. ✅ Document any blockers encountered
4. ✅ Set priorities for tomorrow
5. ✅ Review other teams' updates

---

## 🎯 WHEN IN DOUBT

**Ask yourself:**
1. Does this change affect how the site looks? → **Check with DESIGN**
2. Does this change affect the words/content? → **Check with CONTENT**
3. Does this change affect functionality/code? → **Check with ENGINEERING**
4. Will this block another team? → **Flag it immediately**
5. Is this a major change? → **Coordinate with ALL teams**

**Better to over-communicate than under-communicate!**

---

## 📞 COORDINATION CHANNELS

**Primary:** `TEAM_STATUS_DASHBOARD.md` (comments/updates)  
**Secondary:** Notion comments on specific tasks  
**Urgent:** Flag in dashboard with 🚨 emoji  
**Async Updates:** Daily morning/evening check-ins in dashboard

---

## 🎯 SUCCESS METRICS

**We're well-coordinated when:**
- ✅ No surprises between teams
- ✅ Handoffs are smooth (minimal rework)
- ✅ Dashboard is always up to date
- ✅ Blockers are flagged early
- ✅ All teams know what others are working on

---

## 📚 RELATED DOCUMENTS

- **Detailed Coordination:** `AI_TEAM_COORDINATION_SYSTEM.md`
- **Current Status:** `TEAM_STATUS_DASHBOARD.md`
- **Full Roadmap:** `MASTER_TODO_LIST.md`
- **Project Status:** `CURRENT_STATUS.md`

---

**Remember: We're one team with three specialties! 🎨 + 📝 + 💻 = 🚀**

**Last Updated:** January 11, 2025  
**Review:** Check this before every major task

