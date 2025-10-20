# Stakeholder Identification & Analysis

**Priority:** 🟡 High
**Time Estimate:** 1 week
**BABOK Coverage:** Chapter 2 (Key Concepts), Chapter 3 (Planning and Monitoring)
**Prerequisites:** What is Business Analysis?
**Certification Alignment:** ECBA, CBAP, PMP

---

## Why Stakeholder Analysis Matters

**68% of project failures are caused by poor stakeholder management** *(PMI Pulse of the Profession 2024)*

**Key Insight:**
You can have perfect requirements, but if you haven't engaged the right stakeholders, your project will fail.

---

## Who is a Stakeholder?

**BABOK Definition:**
> "A stakeholder is a group or individual with a relationship to the change, the need, or the solution."

**In Plain English:**
Anyone who:
- ✅ Is affected by the project (positively or negatively)
- ✅ Can influence the project's success
- ✅ Has information you need
- ✅ Must approve requirements or deliverables

---

## Stakeholder Identification Techniques

### 1. Organizational Charts
**What:** Visual representation of company hierarchy
**How to Use:**
- Start with sponsor → identify their direct reports
- Trace up (who do they report to?) and down (who reports to them?)
- Cross-functional connections (marketing, IT, ops)

**Example:**
```
CEO
├── CFO (Budget Approval)
├── CTO (Technical Decisions)
│   ├── VP Engineering (Implementation)
│   └── VP IT (Infrastructure)
└── CMO (Marketing Requirements)
    └── Director of Digital (User Experience)
```

**Stakeholders Identified:** 6 people from org chart

---

### 2. Stakeholder Interviews ("Who Else Should I Talk To?")
**Technique:**
At the end of every interview, ask:
- "Who else should I speak with about this?"
- "Whose approval do we need?"
- "Who will be most affected by this change?"

**Example:**
You interview VP Sales → They mention:
- "Talk to the Sales Reps—they use the CRM daily"
- "Check with IT Security—we have data policies"
- "Accounting needs to review pricing changes"

**Stakeholders Identified:** +3 from referrals

---

### 3. Process Mapping
**Technique:**
Map the current process → Identify everyone who touches it

**Example:** Order Fulfillment Process
1. **Customer** places order (website)
2. **Sales Rep** reviews order
3. **Warehouse Team** picks and packs
4. **Shipping Team** ships order
5. **Billing Team** invoices customer
6. **Customer Service** handles issues

**Stakeholders Identified:** 6 groups from process

---

### 4. RACI Matrix (Identify Responsible Parties)
**Technique:**
For key project activities, identify who is:
- **R = Responsible** (does the work)
- **A = Accountable** (makes final decision)
- **C = Consulted** (provides input)
- **I = Informed** (needs updates)

**Example:** Requirements Review Meeting

| Activity | Product Owner | BA | Dev Team | QA | Legal | Users |
|----------|--------------|-----|----------|-----|-------|-------|
| Write Requirements | R | A | C | C | C | C |
| Review Requirements | C | R | C | C | C | C |
| Approve Requirements | A | C | I | I | C | I |

**Stakeholders Identified:** 6 groups from RACI

---

## Power-Interest Grid (Mendelow Matrix)

**Purpose:** Categorize stakeholders to prioritize engagement efforts

### The Four Quadrants

```
           High Interest
                │
    High Power  │  High Power
    Low Interest│  High Interest
    ────────────┼────────────
    Low Power   │  Low Power
    Low Interest│  High Interest
                │
           Low Interest
```

---

### Quadrant 1: High Power, High Interest ⭐ **MANAGE CLOSELY**
**Who:**
- Project sponsors
- Executive stakeholders
- Key decision-makers

**Engagement Strategy:**
- Weekly 1-on-1 meetings
- Involve in all major decisions
- Get early buy-in on requirements

**Example:**
VP Product (sponsor) → Meet weekly, get approval on all major features

---

### Quadrant 2: High Power, Low Interest 🤝 **KEEP SATISFIED**
**Who:**
- Senior executives (not directly involved)
- Compliance/legal teams
- Budget approvers

**Engagement Strategy:**
- Monthly status emails
- Quarterly executive summaries
- Notify before major milestones

**Example:**
CFO → Doesn't care about feature details, but must approve $500K budget

---

### Quadrant 3: Low Power, High Interest 📢 **KEEP INFORMED**
**Who:**
- End users
- Support teams
- Impacted departments

**Engagement Strategy:**
- Email updates (bi-weekly)
- User testing sessions
- Feedback surveys

**Example:**
Customer Service Reps → Will use the system daily, but don't make decisions

---

### Quadrant 4: Low Power, Low Interest 👀 **MONITOR**
**Who:**
- Peripheral stakeholders
- Indirect users
- External vendors (minor)

**Engagement Strategy:**
- Include in general communications
- Ad-hoc updates as needed

**Example:**
Facilities Team → Notified about server room changes, but not actively engaged

---

## Creating a Stakeholder Register

**Template:**

| Stakeholder | Role | Power | Interest | Quadrant | Communication Preference | Influence |
|-------------|------|-------|----------|----------|-------------------------|-----------|
| Sarah Lee | VP Product | High | High | Manage Closely | Weekly 1-on-1 | High |
| John Smith | CFO | High | Low | Keep Satisfied | Monthly email | Medium |
| Support Team | End Users | Low | High | Keep Informed | Slack updates | Low |

---

### Example: E-Commerce Checkout Redesign Project

| Stakeholder | Role | Power | Interest | Engagement Plan |
|-------------|------|-------|----------|-----------------|
| **Emily (VP Product)** | Sponsor | High | High | Weekly meetings, approve all major features |
| **Dev Team (8 people)** | Implementers | Medium | High | Daily standups, sprint planning |
| **Marketing Team** | Content owners | Low | Medium | Bi-weekly updates, feedback on UX |
| **Legal** | Compliance | High | Low | Review privacy policy changes only |
| **Customers (End Users)** | Users | Low | High | User testing sessions (monthly) |
| **Call Center** | Support | Low | High | Training before launch, feedback surveys |

---

## Stakeholder Analysis in Action

### Scenario: Hospital Patient Portal Project

**Goal:** Build self-service portal for patients to view lab results, schedule appointments, message doctors

**Step 1: Identify Stakeholders**
- Patients (end users)
- Doctors (content providers)
- Nurses (workflow impacted)
- IT Security (HIPAA compliance)
- Hospital Administrator (budget approval)
- Billing Department (payment integration)

**Step 2: Analyze Power & Interest**

| Stakeholder | Power | Interest | Quadrant |
|-------------|-------|----------|----------|
| Hospital Administrator | High | Medium | Keep Satisfied |
| IT Security (HIPAA) | High | High | Manage Closely |
| Doctors | Medium | Medium | Keep Informed |
| Patients | Low | High | Keep Informed |
| Billing Dept | Low | Medium | Monitor |

**Step 3: Engagement Plan**
- **IT Security:** Weekly meetings (HIPAA requirements critical)
- **Administrator:** Monthly budget reviews
- **Doctors:** Focus groups (2x), training before launch
- **Patients:** User testing (5 sessions with 30 patients)
- **Billing:** Email updates, final review before payment integration

---

## Common Stakeholder Management Mistakes

### Mistake #1: Forgetting Negative Stakeholders
**Problem:** Only engaging supporters
**Solution:** Identify resistors early and address concerns

**Example:**
IT Operations team worried portal will increase support tickets
→ Include them early, address concerns with training plan

---

### Mistake #2: One-Size-Fits-All Communication
**Problem:** Sending same update to everyone
**Solution:** Tailor communication to each quadrant

**Example:**
- Executive summary (1 page) → High Power, Low Interest
- Detailed requirements (20 pages) → High Power, High Interest
- Demo video (5 min) → Low Power, High Interest

---

### Mistake #3: Discovering Key Stakeholders Too Late
**Problem:** Requirements approved, then Legal says "No, this violates policy"
**Solution:** Identify all stakeholders in project initiation phase

---

## RACI Matrix Deep Dive

### Example: Requirements Approval Process

| Task | Product Owner | BA | Dev Lead | QA Lead | Legal | Users |
|------|--------------|-----|----------|---------|-------|-------|
| **Elicit Requirements** | C | R/A | C | C | I | C |
| **Document Requirements** | C | R/A | I | I | I | I |
| **Review Requirements** | C | R | C | C | C | C |
| **Approve Requirements** | A | I | C | C | C | I |
| **Implement Requirements** | I | C | R/A | C | I | I |
| **Test Requirements** | C | C | C | R/A | I | C |
| **User Acceptance Test** | C | R | I | C | I | R |

**Key:**
- **R = Responsible:** Does the work
- **A = Accountable:** Has final say (only ONE per task)
- **C = Consulted:** Provides input
- **I = Informed:** Kept in the loop

---

## Self-Assessment

### Question 1: Power-Interest Grid
**Classify these stakeholders:**

| Stakeholder | Power | Interest | Quadrant? |
|-------------|-------|----------|-----------|
| CEO (project sponsor) | High | High | ? |
| Legal (compliance review) | High | Low | ? |
| End Users | Low | High | ? |
| External vendor (minor integration) | Low | Low | ? |

**Answers:**
1. Manage Closely
2. Keep Satisfied
3. Keep Informed
4. Monitor

---

### Question 2: RACI Assignment
**For "Requirements Review Meeting," who is Accountable?**

Options: Product Owner, BA, Dev Team, All of the above

**Answer:** **Product Owner** (Only one person can be Accountable—final decision maker)

---

## Practical Exercise: Stakeholder Analysis

**Scenario:** You're the BA for a "Mobile App" project to allow field sales reps to access customer data offline.

**Your Task:**
1. List 8-10 stakeholders
2. Categorize them using Power-Interest Grid
3. Create a RACI matrix for "Requirements Approval"
4. Define engagement plan for each quadrant

---

## Next Steps

### Immediate Actions
1. ✅ **Map Stakeholders** - Create a register for your current project
2. ✅ **Power-Interest Grid** - Categorize your stakeholders
3. ✅ **Read** - BABOK Chapter 2 (Key Concepts)

### Continue Learning
➡️ **Next Topic:** [Facilitated Workshops](/content/roadmaps/junior-ba/workshops.md)

Learn how to bring stakeholders together for collaborative requirements gathering.

---

## Additional Resources

### Articles
- [Stakeholder Analysis](https://www.mindtools.com/amfq3wp/stakeholder-analysis)
- [Power Interest Grid](https://www.improvementservice.org.uk/business-analysis-framework/consider-perspectives/powerinterest-grid)

### Templates
- [Stakeholder Register Template (Excel)](https://www.projectmanagementdocs.com/template/stakeholder-analysis/)

---

**Progress Tracker:** ✅ Completed "Stakeholder Identification"
**Previous:** Writing User Stories
**Next:** Facilitated Workshops

---

*This content is aligned with IIBA BABOK Guide v3 and supports preparation for ECBA, CCBA, CBAP, and PMP certifications.*
