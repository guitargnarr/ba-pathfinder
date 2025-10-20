# Conducting Stakeholder Interviews

**Priority:** 🔴 Critical
**Time Estimate:** 2 weeks
**BABOK Coverage:** Chapter 4 (Elicitation and Collaboration)
**Prerequisites:** Requirements Fundamentals
**Certification Alignment:** ECBA, CCBA, CBAP

---

## Overview

Interviews are the most common elicitation technique used by Business Analysts. A successful interview uncovers stakeholder needs, builds relationships, and gathers insights that written documentation can't provide.

**Key Insight:**
Your job in an interview isn't just to collect requirements—it's to understand the *why* behind stakeholder requests.

---

## Types of Interviews

### 1. Structured Interview
**Characteristics:**
- Predefined list of questions
- Same questions asked to all stakeholders (consistency)
- Easy to compare responses across stakeholders

**When to Use:**
✅ Gathering quantitative data
✅ Need to compare responses from multiple people
✅ Limited time (30-45 minutes)

**Example Questions:**
- "How many times per week do you use this feature?"
- "What are the top 3 pain points in your current process?"

---

### 2. Unstructured Interview
**Characteristics:**
- Open-ended conversation
- Flexible, exploratory
- Follow stakeholder's train of thought

**When to Use:**
✅ Early discovery phase
✅ Building rapport with new stakeholder
✅ Exploring unknown problem spaces

**Risks:**
❌ Can go off-topic
❌ Harder to compare responses
❌ Requires strong facilitation skills

---

### 3. Semi-Structured Interview ⭐ **RECOMMENDED**
**Characteristics:**
- Core questions prepared
- Flexibility to explore interesting topics
- Best of both worlds

**When to Use:**
✅ Most BA interviews
✅ Balance consistency with exploration
✅ Building relationships while gathering requirements

**Example Structure:**
1. Start with prepared questions (20 min)
2. Follow-up on interesting points (15 min)
3. Open floor for stakeholder questions (5 min)

---

## The Interview Process: Before, During, After

### BEFORE THE INTERVIEW (24-48 hours ahead)

#### 1. Research the Stakeholder
- **Review their role:** What do they do day-to-day?
- **Check org chart:** Who do they report to? Who reports to them?
- **Understand their interests:** How does this project affect them?

**Example:**
Interviewing "Sarah, VP of Sales"
- Role: Oversees 50-person sales team
- Pain Point: Current CRM slow, reps spend 2 hours/day on data entry
- Interest Level: HIGH (project directly impacts team productivity)

---

#### 2. Prepare 10-15 Core Questions
**Question Framework:**

**Current State Questions:**
- "Walk me through your current process for [X]"
- "What tools do you use today?"
- "How long does [task] typically take?"

**Pain Points Questions:**
- "What frustrates you most about the current process?"
- "Where do you see the most errors or delays?"
- "If you could change one thing, what would it be?"

**Future State Questions:**
- "What would an ideal solution look like?"
- "How would you measure success?"
- "What features are must-haves vs nice-to-haves?"

---

#### 3. Send Calendar Invite with Agenda
**Subject:** Requirements Interview: [Project Name]
**Duration:** 45-60 minutes
**Location:** Zoom/Conference Room

**Agenda:**
1. Introductions (5 min)
2. Current process walkthrough (15 min)
3. Pain points and opportunities (15 min)
4. Future state vision (10 min)
5. Q&A and next steps (5 min)

**Attach:** List of topics (not specific questions) to help stakeholder prepare

---

### DURING THE INTERVIEW

#### Opening (5 minutes)
**Build Rapport:**
- Small talk (weather, weekend plans, sports)
- Thank them for their time
- Explain purpose: "I'm here to understand your needs so we build the right solution"

**Set Expectations:**
- "I'll be taking notes—please speak freely"
- "No wrong answers—I need your honest feedback"
- "If I'm going off-track, please redirect me"

---

#### Core Questions (40 minutes)

**Active Listening Techniques:**

1. **Paraphrase:**
   Stakeholder: "The current system is too slow"
   You: "So what I'm hearing is the page load time impacts your ability to close deals quickly?"

2. **Clarify:**
   Stakeholder: "We need better reporting"
   You: "Can you give me an example of a report you wish you had today?"

3. **Validate:**
   You: "That makes sense because your team is in the field without reliable internet access"

4. **Probe Deeper (5 Whys):**
   - Stakeholder: "We need a mobile app"
   - You: "Why do you need mobile access?"
   - Stakeholder: "Reps are on-site with customers"
   - You: "Why is on-site access important?"
   - Stakeholder: "To check inventory in real-time"
   - You: "Why do they need real-time inventory?"
   - Stakeholder: "So they don't promise products that are out of stock"
   - You: "Why is that a problem today?"
   - Stakeholder: "We lose sales when we can't fulfill same-day"

**Real Requirement:** Prevent lost sales due to promising out-of-stock items
*(Not just "build a mobile app")*

---

#### Closing (5 minutes)
- **Summarize Key Points:** "Here's what I heard... [3-5 bullet points]"
- **Confirm Understanding:** "Did I miss anything?"
- **Next Steps:** "I'll send you my notes by Friday for review"
- **Thank You:** "This was incredibly helpful"

---

### AFTER THE INTERVIEW (Within 24 hours)

#### 1. Document Interview Notes
**Template:**

```markdown
## Interview Summary
**Date:** 2025-10-20
**Stakeholder:** Sarah Johnson, VP of Sales
**Project:** CRM Modernization
**Duration:** 50 minutes

### Key Takeaways
1. Current CRM slow (5-10 second page loads)
2. Reps spend 2 hours/day on manual data entry
3. Mobile access needed for field sales (60% of team)

### Pain Points
- Duplicate data entry (Salesforce + Excel)
- No offline access (lose connectivity in rural areas)
- Reporting takes 3-4 days (manual exports + cleanup)

### Requirements Identified
1. Page load time <2 seconds
2. Mobile app with offline sync
3. Automated reporting (daily sales dashboard)

### Follow-Up Actions
- [ ] Schedule demo of current CRM (shadowing session)
- [ ] Interview 2-3 sales reps for frontline perspective
- [ ] Review current Excel templates
```

---

#### 2. Send Thank-You Email with Notes
**Subject:** Thank You - Interview Notes for Review
**Body:**
> Hi Sarah,
>
> Thank you for taking the time to meet with me today. Your insights on the current CRM challenges were invaluable.
>
> I've attached my notes from our conversation. Please review and let me know if I missed anything or misunderstood any points.
>
> Next steps:
> - I'll schedule shadowing sessions with 2-3 sales reps
> - I'll review the Excel templates you mentioned
> - I'll circle back with you in 2 weeks with a draft requirements document
>
> Thanks again!
> [Your Name]

---

## Interview Question Bank (20 Starter Questions)

### Current Process Questions
1. "Walk me through how you [perform task] today"
2. "What tools/systems do you use for this process?"
3. "How long does this process typically take?"
4. "Who else is involved in this process?"
5. "What data do you need to complete this task?"

### Pain Points Questions
6. "What frustrates you most about the current process?"
7. "Where do you see the most errors or delays?"
8. "What workarounds have you created?"
9. "What keeps you up at night about this?"
10. "If you had a magic wand, what would you change?"

### Future State Questions
11. "What would success look like for this project?"
12. "How will you measure whether this solution works?"
13. "What features are absolutely critical (vs nice-to-have)?"
14. "Who are the users of this solution?"
15. "What are the top 3 outcomes you want?"

### Context Questions
16. "What regulations or compliance requirements apply?"
17. "What's your budget/timeline for this project?"
18. "Who are the key decision-makers?"
19. "What similar solutions have you used before?"
20. "What risks worry you most about this project?"

---

## Common Interview Challenges & Solutions

### Challenge #1: Stakeholder Provides Solutions, Not Problems
❌ **Bad:** Stakeholder says "We need a chatbot"
✅ **Good:** You ask "What problem are you trying to solve?"

**Real Need:** Reduce customer support call volume by 20%
*(Chatbot is ONE possible solution—there might be better ones)*

---

### Challenge #2: Stakeholder Rambles Off-Topic
**Solution:** Politely redirect
> "That's really interesting—I'd love to discuss that separately. For today's focus on [topic], can I ask..."

---

### Challenge #3: Stakeholder Says "I Don't Know"
**Solution:** Ask differently
- Instead of "What do you need?" → "Show me how you do this today"
- Instead of "What's the problem?" → "Tell me about a time this process failed"

---

### Challenge #4: Stakeholder Contradicts Previous Interviews
**Solution:** Acknowledge both perspectives
> "Interesting—John from Accounting mentioned [X]. How do you see it from the Sales perspective?"

*(Different stakeholders have different needs—your job is to synthesize)*

---

## Practice Scenario: Mock Interview

**Scenario:** You're the BA for an e-commerce company. You're interviewing Emma, the Customer Service Manager, about a new "Order Tracking" feature.

**Your Prep:**
- Emma's role: Manages 20 CS reps
- Current process: Customers call to ask "Where's my order?"
- Pain point: Reps manually look up orders in 3 different systems
- Project goal: Self-service order tracking

**Practice Questions:**
1. "Emma, can you walk me through what happens when a customer calls asking about their order?"
2. "What information do you need to locate an order today?"
3. "How long does it typically take to answer an order status question?"
4. "What percentage of calls are about order tracking?"
5. "If customers could track orders themselves, what would they need to see?"

**Expected Answers:**
- Emma describes 3-system process (CRM, warehouse system, shipping provider)
- Takes 3-5 minutes per call
- 40% of calls are "Where's my order?"
- Customers need: order status, estimated delivery, tracking number

**Requirements You'd Document:**
- Self-service order tracking page (reduce CS call volume)
- Real-time status from all 3 systems
- Tracking number with link to carrier site
- Estimated delivery date
- Target: Reduce "order status" calls by 50%

---

## Self-Assessment

### Question 1: Interview Type
**Which interview type would you use for each scenario?**

1. First meeting with a new stakeholder to explore a vague problem → **Unstructured**
2. Comparing feedback from 10 users on the same feature → **Structured**
3. Standard requirements gathering interview → **Semi-Structured**

---

### Question 2: 5 Whys
**Practice the 5 Whys technique:**

Stakeholder: "We need a dashboard"

Your turn—ask "Why?" 5 times to uncover the real need.

---

## Next Steps

### Immediate Actions
1. ✅ **Practice** - Role-play an interview with a colleague
2. ✅ **Build Question Bank** - Customize the 20 questions for your domain
3. ✅ **Observe** - Shadow a senior BA conducting an interview

### Continue Learning
➡️ **Next Topic:** [Writing User Stories](/content/roadmaps/junior-ba/user-stories.md)

Learn how to transform interview insights into clear, testable user stories.

---

## Additional Resources

### Books
- **"Requirements Elicitation Interviews and Workshops"** by Business Analysis Experts

### Videos
- [Master the BA Interview](https://www.youtube.com/c/TheBaguide) - The BA Guide

---

**Progress Tracker:** ✅ Completed "Conducting Interviews"
**Previous:** Requirements Fundamentals
**Next:** Writing User Stories

---

*This content is aligned with IIBA BABOK Guide v3 and supports preparation for ECBA, CCBA, and CBAP certifications.*
