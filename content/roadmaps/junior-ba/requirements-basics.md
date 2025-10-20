# Requirements Fundamentals

**Priority:** 🔴 Critical
**Time Estimate:** 2 weeks
**BABOK Coverage:** Chapter 5 (Requirements Analysis and Design Definition)
**Prerequisites:** SDLC Fundamentals
**Certification Alignment:** ECBA, CCBA, CBAP

---

## What Are Requirements?

**BABOK Definition:**
> "A requirement is a usable representation of a need. Requirements define capabilities and conditions to achieve organizational objectives."

**In Plain English:**
Requirements describe what a solution must do to solve a business problem or create value.

---

## The Four Levels of Requirements

### 1. Business Requirements (Strategic - "WHY")
**Definition:** High-level business objectives and outcomes the organization wants to achieve

**Example:**
- "Increase online sales by 15% within 12 months"
- "Reduce customer support call volume by 30%"
- "Achieve regulatory compliance with new data privacy laws"

**Format:** Business Requirements Document (BRD), Business Case

**Who Cares:** Executives, sponsors, senior stakeholders

---

### 2. Stakeholder Requirements (Tactical - "WHO + WHAT")
**Definition:** Needs and expectations of specific stakeholder groups

**Example:**
- **Customer:** "I need to track my order status without calling support"
- **Call Center Agent:** "I need a consolidated customer view to resolve issues faster"
- **Sales Rep:** "I need mobile access to inventory to close deals on-site"

**Format:** Stakeholder interviews, surveys, personas

**Who Cares:** Product Owners, project managers, solution designers

---

### 3. Solution Requirements (Operational - "HOW")
**Definition:** Specific capabilities the solution must have

**Two Sub-Types:**

#### 3a. Functional Requirements (What the system DOES)
- "The system shall send an email confirmation within 5 seconds of order placement"
- "Users shall be able to filter search results by price, rating, and category"
- "The checkout process shall support PayPal, Stripe, and credit card payments"

#### 3b. Non-Functional Requirements (How WELL the system performs)
- **Performance:** "Page load time < 2 seconds for 95% of requests"
- **Security:** "All passwords must be encrypted using bcrypt with salt"
- **Usability:** "New users shall complete checkout in ≤3 clicks"
- **Scalability:** "System shall support 10,000 concurrent users"

**Format:** Functional Requirements Document (FRD), User Stories, Use Cases

**Who Cares:** Developers, testers, architects

---

### 4. Transition Requirements (Temporary - "MIGRATION")
**Definition:** Temporary capabilities needed to transition from current to future state

**Example:**
- "Data migration tool to import 10M customer records from legacy system"
- "Dual-run period where both old and new systems operate for 30 days"
- "Training program for 500 users before go-live"

**Format:** Transition plan, migration scripts, training plan

**Who Cares:** IT operations, change management, training teams

---

## Characteristics of Good Requirements: INVEST Principles

### I - Independent
**Meaning:** Requirement can be developed and tested without depending on other requirements

❌ **Bad:** "User can save cart (requires login feature to be built first)"
✅ **Good:** "As a logged-in user, I can save my cart for later"

---

### N - Negotiable
**Meaning:** Details can be discussed and refined; not a rigid contract

❌ **Bad:** "Button must be #2563EB blue" (too prescriptive)
✅ **Good:** "Primary action button should be visually prominent"

---

### V - Valuable
**Meaning:** Delivers clear business or user value

❌ **Bad:** "System shall log all database queries" (technical, not valuable to users)
✅ **Good:** "Users can view their order history for the past 2 years"

---

### E - Estimable
**Meaning:** Developers can estimate effort required

❌ **Bad:** "Make the site faster" (vague, can't estimate)
✅ **Good:** "Reduce checkout page load time from 5s to <2s"

---

### S - Small
**Meaning:** Can be completed within one sprint (1-2 weeks)

❌ **Bad (Epic):** "Build complete e-commerce platform"
✅ **Good (Story):** "Users can add items to cart"

---

### T - Testable
**Meaning:** Can verify whether requirement is met

❌ **Bad:** "Site should be user-friendly" (subjective)
✅ **Good:** "80% of new users complete checkout without support"

---

## Common Requirements Mistakes & How to Fix Them

### Mistake #1: Vague Language
❌ **Bad:** "System should be fast"
✅ **Good:** "API response time < 200ms for 99% of requests"

---

### Mistake #2: Solution, Not Problem
❌ **Bad:** "Add a dropdown menu on the homepage"
✅ **Good:** "Users need quick access to product categories from any page"

*(Let designers decide if dropdown is the best solution)*

---

### Mistake #3: Missing Acceptance Criteria
❌ **Bad:** "User can search for products"
✅ **Good:**
```
User can search for products

Acceptance Criteria:
- Given I enter "laptop" in search box
- When I click Search
- Then I see results ranked by relevance
- And I can filter by price, brand, rating
- And I see "No results" message if nothing matches
```

---

### Mistake #4: Mixing Functional & Non-Functional
❌ **Bad:** "Login page loads fast and authenticates users"
✅ **Good:**
- Functional: "System authenticates users via username/password"
- Non-Functional: "Login page loads in <1 second"

---

## Requirements in Practice: Example Project

**Project:** Online Banking Bill Pay Feature

### Business Requirement (WHY)
"Reduce call center volume by 20% by enabling customers to pay bills online"

### Stakeholder Requirements (WHO + WHAT)
- **Customers:** "I want to schedule recurring bill payments"
- **Bank Compliance:** "We must meet ACH regulatory requirements"
- **Customer Service:** "I need to see customer's scheduled payments to troubleshoot"

### Functional Requirements (WHAT system DOES)
1. "Users shall be able to add payees by entering account number and routing number"
2. "Users shall be able to schedule one-time or recurring payments"
3. "System shall send confirmation email for each payment"
4. "Users shall be able to view payment history for past 24 months"

### Non-Functional Requirements (HOW WELL)
- **Security:** "All payment data encrypted using TLS 1.3"
- **Performance:** "Payment confirmation displayed within 3 seconds"
- **Availability:** "System available 99.9% (8 hours downtime/year max)"
- **Usability:** "New users complete first bill payment in <5 minutes"

### Transition Requirements (MIGRATION)
- "Migration tool to import existing autopay settings from legacy system"
- "Training program for call center (50 agents)"
- "Gradual rollout: 10% customers Week 1, 100% by Week 4"

---

## Self-Assessment

### Question 1: Identify the Requirement Level
**Match each requirement to its level (Business, Stakeholder, Functional, Non-Functional, Transition):**

1. "Increase customer retention by 10%" → **Business**
2. "As a sales rep, I need mobile access to inventory" → **Stakeholder**
3. "System shall calculate sales tax based on shipping address" → **Functional**
4. "Page load time <2 seconds" → **Non-Functional**
5. "Data migration from Oracle to PostgreSQL" → **Transition**

---

### Question 2: Fix the Bad Requirement
**Rewrite this vague requirement using INVEST principles:**

❌ "The app should be easy to use"

**Possible Answers:**
✅ "80% of first-time users complete account registration without help"
✅ "New users complete first purchase in <5 minutes"
✅ "App achieves SUS (System Usability Scale) score >70"

---

### Question 3: INVEST Check
**Evaluate this requirement against INVEST:**

"User can search for products, add to cart, and check out"

**Problems:**
- ❌ **Not Independent:** Combines 3 features
- ❌ **Not Small:** Too large for one sprint
- ✅ **Valuable:** Delivers user value
- ❌ **Not Testable:** No specific criteria

**Fixed:**
✅ "As a user, I can search for products by keyword, returning results ranked by relevance in <1 second"
✅ "As a user, I can add items to cart and see cart total update immediately"
✅ "As a user, I can complete checkout in ≤3 steps"

---

## Practical Exercise: Requirements Quality Audit

**Instructions:** Fix the 10 poorly written requirements below

1. ❌ "System should be secure"
   ✅ "All API endpoints require OAuth 2.0 authentication"

2. ❌ "Add a button"
   ✅ "Users need ability to save draft without submitting"

3. ❌ "Make it faster"
   ✅ "Reduce report generation time from 30s to <5s"

4. ❌ "Customers want better reporting"
   ✅ "As a manager, I can export sales data to Excel with custom date ranges"

5. ❌ "Site should work on mobile"
   ✅ "All pages render correctly on iOS 14+ and Android 10+ devices"

6. ❌ "Improve search"
   ✅ "Search results include fuzzy matching (e.g., 'iphone' matches 'iPhone 13')"

7. ❌ "Support multiple languages"
   ✅ "UI available in English, Spanish, French (user selectable in settings)"

8. ❌ "Integrate with payment system"
   ✅ "System processes Stripe payments and returns confirmation within 5 seconds"

9. ❌ "Be compliant"
   ✅ "System meets GDPR Article 17 (right to erasure) by purging data within 30 days of request"

10. ❌ "Nice user experience"
    ✅ "Checkout completion rate >60% (currently 45%)"

---

## Tools for Requirements Management

### Jira (Agile - User Stories)
**Best for:** Agile teams, lightweight documentation
- Create stories with acceptance criteria
- Track progress in sprint boards
- Link requirements to test cases

### DOORS (IBM Rational DOORS - Waterfall)
**Best for:** Regulated industries, complex traceability
- Comprehensive requirements database
- Full traceability matrix
- Version control and approval workflows

### Excel (Simple Traceability)
**Best for:** Small projects, quick documentation
- Requirements ID, Description, Priority, Status
- Easy to share and review
- Filterable and sortable

---

## Next Steps

### Immediate Actions
1. ✅ **Practice INVEST** - Take 5 requirements from your current project and evaluate against INVEST
2. ✅ **Read** - BABOK Chapter 5 (Requirements Analysis)
3. ✅ **Build Template** - Create a requirements template in Jira or Excel

### Continue Learning
➡️ **Next Topic:** [Conducting Interviews](/content/roadmaps/junior-ba/interviews.md)

Learn how to gather requirements through effective stakeholder interviews.

---

## Additional Resources

### Articles
- [INVEST in Good Stories](https://www.agilealliance.org/glossary/invest/)
- [Requirements Best Practices](https://www.modernanalyst.com/Resources/Articles/tabid/115/ID/2427/Requirements-Best-Practices.aspx)

### Books
- **"Mastering the Requirements Process"** by Robertson & Robertson
- **"Software Requirements"** by Karl Wiegers

---

**Progress Tracker:** ✅ Completed "Requirements Fundamentals"
**Previous:** SDLC Fundamentals
**Next:** Conducting Interviews
**Estimated Time to Junior BA Ready:** 11-17 months

---

*This content is aligned with IIBA BABOK Guide v3 and supports preparation for ECBA, CCBA, and CBAP certifications.*
