# SDLC Fundamentals

**Priority:** 🔴 Critical
**Time Estimate:** 2 weeks
**BABOK Coverage:** Chapter 3 (Business Analysis Planning and Monitoring)
**Prerequisites:** What is Business Analysis?
**Certification Alignment:** ECBA, CCBA, CBAP

---

## Overview

The Software Development Life Cycle (SDLC) is a framework that defines the process used to plan, design, develop, test, and deploy software systems. Understanding SDLC models is critical for BAs because your role and deliverables change based on the methodology used.

**Key Concept:**
The BA's role is to ensure business needs are accurately translated into technical solutions throughout every SDLC phase.

---

## The Three Major SDLC Models

### 1. Waterfall (Traditional, Sequential)

**Phases:** Requirements → Design → Implementation → Testing → Deployment → Maintenance

#### Characteristics
- **Sequential:** Each phase must complete before the next begins
- **Documentation-heavy:** Comprehensive requirements upfront
- **Change-resistant:** Changes require formal change request process
- **Predictable:** Fixed scope, timeline, and budget

#### When to Use Waterfall
✅ **Well-understood requirements** - Building a payroll system with clear compliance rules
✅ **Regulatory/compliance projects** - Healthcare, finance, government
✅ **Fixed-price contracts** - Scope and budget locked
✅ **Hardware integration** - Physical constraints require upfront planning

❌ **Avoid when:** Requirements are uncertain, fast iteration needed, market conditions changing rapidly

#### BA Role in Waterfall

**Phase 1: Requirements (BA Leads - 30% of project time)**
- Conduct stakeholder interviews and workshops
- Document Business Requirements Document (BRD)
- Create Functional Requirements Document (FRD)
- Get formal sign-off from all stakeholders
- Establish requirements traceability matrix

**Phase 2: Design (BA Supports - 15%)**
- Review technical designs with architects
- Validate designs meet requirements
- Answer clarifying questions
- Approve design specifications

**Phase 3: Implementation (BA Available - 10%)**
- Available for developer questions
- Review code against requirements
- Participate in code reviews (optional)
- Manage change requests

**Phase 4: Testing (BA Validates - 25%)**
- Write User Acceptance Test (UAT) cases
- Participate in System Integration Testing (SIT)
- Lead UAT with business stakeholders
- Validate defect fixes

**Phase 5: Deployment (BA Trains - 10%)**
- Create user documentation
- Conduct end-user training
- Support go-live activities
- Monitor initial production use

**Phase 6: Maintenance (BA Improves - 10%)**
- Triage enhancement requests
- Document lessons learned
- Plan next release

---

### 2. Agile (Iterative, Incremental)

**Framework:** Scrum (most common), Kanban, XP, SAFe

#### Characteristics
- **Iterative:** Work in 2-week sprints (time-boxed iterations)
- **Adaptive:** Requirements evolve based on feedback
- **Collaboration-focused:** Daily communication with stakeholders and team
- **Deliver frequently:** Working software every sprint

#### When to Use Agile
✅ **Uncertain requirements** - New product in emerging market
✅ **Fast-changing environment** - Startup, competitive landscape
✅ **Customer feedback critical** - Consumer-facing applications
✅ **Innovation projects** - Experimentation and learning valued

❌ **Avoid when:** Scope must be fixed, regulatory approval required before development, distributed teams with poor communication

#### BA Role in Agile (Scrum)

**Before Sprint: Backlog Refinement (Ongoing)**
- Work with Product Owner to write user stories
- Break down epics into smaller stories
- Define acceptance criteria
- Estimate story complexity (story points)
- Prioritize backlog based on business value

**Sprint Planning (Start of Sprint - 4 hours)**
- Clarify story details for development team
- Answer questions about acceptance criteria
- Help team commit to sprint goal

**During Sprint: Daily Standup (15 min/day)**
- Share progress on story refinement
- Unblock team with stakeholder access
- Identify risks

**During Sprint: Story Clarification (As Needed)**
- Answer developer questions in real-time (Slack, in-person)
- Refine acceptance criteria if ambiguity discovered
- Connect developers with SMEs

**End of Sprint: Sprint Review/Demo (2 hours)**
- Validate completed stories against acceptance criteria
- Accept or reject work based on "Definition of Done"
- Gather stakeholder feedback
- Update backlog based on learnings

**End of Sprint: Retrospective (1 hour)**
- Reflect on process improvements
- Identify BA-specific improvements (story clarity, stakeholder availability)

**Key Difference from Waterfall:**
In Agile, BAs spend 70% of time on ongoing collaboration vs. 30% upfront requirements gathering.

---

### 3. Hybrid (Best of Both)

**Reality:** Most organizations use hybrid approaches

#### Common Hybrid Patterns

**Pattern 1: Agile Delivery, Waterfall Planning**
- Upfront: Define high-level scope and budget (Waterfall)
- Execution: Deliver in sprints with evolving details (Agile)
- Example: 6-month project with 12 two-week sprints

**Pattern 2: Waterfall with Iterative Reviews**
- Sequential phases but with prototyping and feedback loops
- Requirements phase includes multiple review cycles
- Example: Build prototype → gather feedback → refine requirements → repeat

**Pattern 3: SAFe (Scaled Agile Framework)**
- Agile teams work in sprints
- But quarterly "Program Increment (PI) Planning" for coordination
- Used by large enterprises (500+ developers)

#### BA Role in Hybrid
- **Adapt to context:** Use lightweight documentation for Agile portions, comprehensive docs for Waterfall portions
- **Bridge methodologies:** Translate between teams using different approaches
- **Manage expectations:** Explain to stakeholders why requirements might change (Agile mindset)

---

## BA Activities Mapped to SDLC Phases

### Universal BA Tasks (All Methodologies)

| SDLC Phase | BA Activities | Deliverables | Time Investment |
|------------|---------------|--------------|-----------------|
| **Initiation/Planning** | Define project scope, identify stakeholders, create BA plan | Project charter, Stakeholder register, BA plan | 10-15% |
| **Requirements** | Elicit, analyze, document, validate requirements | User stories, BRD, FRD, Process flows | 30-40% |
| **Design** | Review and validate designs, answer questions | Design validation, Updated requirements | 10-15% |
| **Development** | Clarify requirements, manage changes, support team | Updated stories, Change requests | 10-15% |
| **Testing** | Write test cases, conduct UAT, validate defect fixes | UAT test cases, Test results, Sign-off | 20-25% |
| **Deployment** | Train users, create documentation, support go-live | User guides, Training materials, Runbooks | 5-10% |
| **Maintenance** | Triage enhancements, capture lessons learned | Enhancement backlog, Retrospective notes | 5-10% |

---

## Real-World Scenario: Choosing the Right SDLC

**Scenario:** You're the BA for an e-commerce company planning two projects:

**Project A: Payment Gateway Integration**
- **Nature:** Integrating with external vendor (Stripe, PayPal)
- **Requirements:** Well-defined by API documentation
- **Risk:** High (financial transactions, PCI compliance)
- **Timeline:** 6 months
- **Recommendation:** **Waterfall**
  - Comprehensive requirements and testing needed
  - Regulatory compliance requires documentation
  - Vendor API is fixed, unlikely to change

**Project B: Customer Wishlist Feature**
- **Nature:** New feature to increase engagement
- **Requirements:** Uncertain (need user feedback)
- **Risk:** Medium (nice-to-have feature)
- **Timeline:** 3 months
- **Recommendation:** **Agile (Scrum)**
  - Fast iteration to test hypotheses
  - User feedback will shape final feature
  - Can launch MVP (Minimum Viable Product) in 2-3 sprints

---

## Self-Assessment

### Question 1: SDLC Phase Matching
**Match the scenario to the SDLC phase:**

1. You're writing test cases to validate the login feature works correctly → **Testing**
2. You're interviewing the VP of Sales to understand their reporting needs → **Requirements**
3. You're training customer service reps on the new support ticketing system → **Deployment**
4. You're reviewing the database schema proposed by the architect → **Design**
5. A developer asks if they should validate email format on frontend or backend → **Development**

---

### Question 2: Waterfall vs Agile
**For each scenario, would you recommend Waterfall or Agile?**

| Scenario | Recommendation | Why? |
|----------|---------------|------|
| Building a medical device software (FDA regulated) | **Waterfall** | Regulatory approval requires comprehensive documentation |
| Launching a mobile app for a startup (unknown market fit) | **Agile** | Need fast iteration and user feedback |
| Replacing legacy payroll system (replicating existing functionality) | **Waterfall** | Requirements well-understood, compliance-heavy |
| Building a recommendation engine (experimentation needed) | **Agile** | Machine learning requires iterative testing |

---

### Question 3: BA Time Allocation
**In a Waterfall project, the BA spends the MOST time in which phase?**

**Answer:** Requirements phase (30-40% of total project time)

**In Agile, where does the BA spend time?**
**Answer:** Continuously throughout sprints (backlog refinement, sprint planning, story clarification, sprint reviews)

---

## Practical Exercise

### Exercise: Map Your BA Activities

**Instructions:**
Think of a recent project (or hypothetical project). For each SDLC phase, list 3 specific tasks you (the BA) would perform.

**Example:**

| Phase | BA Task 1 | BA Task 2 | BA Task 3 |
|-------|-----------|-----------|-----------|
| **Requirements** | Conduct 5 stakeholder interviews | Create 20 user stories for MVP | Facilitate requirements workshop |
| **Design** | Review wireframes with UX designer | Validate data model with architect | Approve API specifications |
| **Development** | Answer developer questions via Slack | Review pull requests for requirement alignment | Update user stories based on discoveries |
| **Testing** | Write 50 UAT test cases | Conduct UAT sessions with 3 business users | Validate all P1 defects resolved |
| **Deployment** | Create user guide (15 pages) | Deliver 2-hour training to 50 users | Monitor production for first week |

---

## Next Steps

### Immediate Actions
1. ✅ **Identify your org's SDLC** - Ask your manager: "Do we use Agile, Waterfall, or Hybrid?"
2. ✅ **Read** - BABOK Chapter 3 (Business Analysis Planning and Monitoring)
3. ✅ **Observe** - Sit in on a Sprint Planning or Requirements Review meeting

### Continue Learning
➡️ **Next Topic:** [Requirements Fundamentals](/content/roadmaps/junior-ba/requirements-basics.md)

Learn the types of requirements, characteristics of good requirements, and how to write testable acceptance criteria.

---

## Additional Resources

### Articles
- [Waterfall vs Agile: When to Use Each](https://www.modernanalyst.com/Resources/Articles/tabid/115/ID/3733/Waterfall-vs-Agile-When-to-Use-Each.aspx)
- [BA Role in Agile](https://www.iiba.org/business-analysis-certifications/agile-analysis-certification/)

### Videos
- [SDLC Explained in 10 Minutes](https://www.youtube.com/watch?v=i-QyW8D3ei0) - Simple Snippets
- [Agile vs Waterfall for Business Analysts](https://www.linkedin.com/learning/agile-requirements-foundations) - LinkedIn Learning

### Books
- **"Agile Extension to the BABOK Guide"** by IIBA
- **"User Stories Applied"** by Mike Cohn (Agile focus)

---

**Progress Tracker:** ✅ Completed "SDLC Fundamentals"
**Previous:** What is Business Analysis?
**Next:** Requirements Fundamentals
**Estimated Time to Junior BA Ready:** 12-18 months

---

*This content is aligned with IIBA BABOK Guide v3 and supports preparation for ECBA, CCBA, and CBAP certifications.*
