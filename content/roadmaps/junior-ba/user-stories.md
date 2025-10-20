# Writing User Stories

**Priority:** 🔴 Critical
**Time Estimate:** 2 weeks
**BABOK Coverage:** Chapter 5 (Requirements Analysis), Agile Extension
**Prerequisites:** Conducting Interviews
**Certification Alignment:** ECBA, CCBA, CBAP, PMI-PBA

---

## What is a User Story?

**Definition:** A user story is a short, simple description of a feature told from the perspective of the person who desires the capability (usually a user or customer).

**Standard Format:**
```
As a [role/persona]
I want [feature/capability]
So that [business value/benefit]
```

---

## User Story Anatomy

### Example: E-Commerce Wishlist

**User Story:**
```
As a customer
I want to save items to a wishlist
So that I can purchase them later without searching again
```

**Breakdown:**
- **Role:** customer (who benefits)
- **Feature:** save items to wishlist (what they can do)
- **Benefit:** purchase later without re-searching (why it matters)

---

## Writing Effective User Stories: The INVEST Criteria

### ✅ **I - Independent**
Story can be developed and tested without requiring other stories to be completed first

❌ **Bad:**
```
Story A: User can add items to cart
Story B: User can see cart total (depends on Story A)
```

✅ **Good:**
```
Story A: As a shopper, I want to add items to cart so that I can purchase multiple items at once
Story B: As a shopper, I want to see my cart total so that I know the cost before checkout
```
*(Story B can be demonstrated with a pre-populated cart—doesn't require Story A to be done first)*

---

### ✅ **N - Negotiable**
Details are flexible and can be discussed between BA, dev team, and stakeholders

❌ **Bad (Too Prescriptive):**
```
As a user, I want a blue #2563EB "Add to Cart" button positioned 300px from the top
```

✅ **Good:**
```
As a user, I want a clear way to add items to my cart
```
*(Design details negotiated during sprint planning)*

---

### ✅ **V - Valuable**
Delivers clear business or user value

❌ **Bad (Technical, No User Value):**
```
As a developer, I want to refactor the database schema
```

✅ **Good:**
```
As a customer, I want faster search results (<1 second)
```
*(Technical work should enable user value—mention that value)*

---

### ✅ **E - Estimable**
Development team can estimate effort required

❌ **Bad (Vague):**
```
As a user, I want better performance
```

✅ **Good:**
```
As a user, I want product pages to load in <2 seconds
```
*(Specific enough to estimate implementation approach)*

---

### ✅ **S - Small**
Completable within one sprint (1-2 weeks)

❌ **Bad (Epic - Too Large):**
```
As a customer, I want a complete e-commerce checkout experience
```

✅ **Good (Broken into Stories):**
```
Story 1: As a customer, I want to enter shipping address
Story 2: As a customer, I want to select shipping method (standard, express)
Story 3: As a customer, I want to enter payment information
Story 4: As a customer, I want to review order before submitting
Story 5: As a customer, I want to receive order confirmation email
```

---

### ✅ **T - Testable**
Clear criteria for determining when story is "done"

❌ **Bad (Subjective):**
```
As a user, I want a user-friendly interface
```

✅ **Good:**
```
As a user, I want to complete account registration in <2 minutes
```
*(Can test with actual users and measure time)*

---

## Acceptance Criteria: Defining "Done"

**Purpose:** Acceptance criteria specify the conditions that must be met for a story to be considered complete.

### Given/When/Then Format (Gherkin Syntax)

**Example Story:**
```
As a customer
I want to search for products
So that I can quickly find items I want to buy
```

**Acceptance Criteria:**
```
Given I am on the homepage
When I enter "laptop" in the search box and click Search
Then I see a list of laptops ranked by relevance

And I can filter results by:
  - Price range
  - Brand
  - Customer rating

And I see "0 results found" if no products match

And Search completes in <1 second for 95% of queries
```

---

### Rule of Thumb
**Every user story should have 3-5 acceptance criteria**

Too few (1-2) → Story is probably vague
Too many (10+) → Story is probably too large (break it down)

---

## Common User Story Mistakes & Fixes

### Mistake #1: Writing from Developer Perspective
❌ **Bad:**
```
As a developer, I want to implement OAuth 2.0 authentication
```

✅ **Good:**
```
As a user, I want to log in using my Google account so that I don't have to remember another password
```

---

### Mistake #2: No "So That" Clause (Missing Business Value)
❌ **Bad:**
```
As a manager, I want to export reports to Excel
```

✅ **Good:**
```
As a manager, I want to export reports to Excel so that I can analyze trends and share insights with my team
```

---

### Mistake #3: Too Many Features in One Story
❌ **Bad:**
```
As a user, I want to register an account, verify my email, set preferences, and upload a profile picture
```

✅ **Good (Split into 4 Stories):**
```
Story 1: As a user, I want to register with email/password
Story 2: As a user, I want to verify my email address
Story 3: As a user, I want to set notification preferences
Story 4: As a user, I want to upload a profile picture
```

---

### Mistake #4: No Acceptance Criteria
❌ **Bad:**
```
As a user, I want to reset my password
```
*(How do we know when this is done?)*

✅ **Good:**
```
As a user, I want to reset my password so that I can regain access if I forget it

Acceptance Criteria:
- Given I click "Forgot Password"
- When I enter my email address
- Then I receive a reset link within 5 minutes
- And the link expires after 24 hours
- And I can set a new password meeting security requirements (8+ chars, 1 number, 1 special char)
```

---

## User Story Sizing: T-Shirt vs Story Points

### T-Shirt Sizes (Beginner-Friendly)
- **XS:** Simple UI change (1-2 hours)
- **S:** Basic feature (1 day)
- **M:** Standard feature (2-3 days)
- **L:** Complex feature (1 week)
- **XL:** Epic - must be broken down

---

### Story Points (Fibonacci)
**Points:** 1, 2, 3, 5, 8, 13, 21

**Not time-based—reflects complexity, uncertainty, effort**

| Points | Complexity | Example |
|--------|------------|---------|
| 1 | Trivial | Change button text |
| 2 | Simple | Add a new form field |
| 3 | Moderate | Implement basic search |
| 5 | Complex | Email notification system |
| 8 | Very Complex | Payment gateway integration |
| 13 | Epic | Should be broken down |

---

## Epics vs Stories vs Tasks

### Epic (Months)
Large body of work that can be broken into multiple stories
```
Epic: Customer Account Management
```

### Stories (Days/Weeks)
User-facing feature delivering value
```
Story 1: User can register account
Story 2: User can log in
Story 3: User can update profile
Story 4: User can change password
Story 5: User can delete account
```

### Tasks (Hours)
Technical sub-work within a story (developer-facing)
```
Story: User can log in

Tasks:
- Create login UI component
- Implement authentication API
- Add password encryption
- Write unit tests
- Update documentation
```

---

## Practice Exercise: Write 10 User Stories

**Project:** E-Commerce Product Page

**Instructions:** Write user stories with acceptance criteria for the following features:

1. **View product details** (description, price, images)
2. **Add product to cart**
3. **See customer reviews**
4. **Filter reviews by rating**
5. **View related products**
6. **Save product to wishlist**
7. **Get price drop notifications**
8. **View product availability (in stock / out of stock)**
9. **Select product options** (size, color)
10. **See estimated delivery date**

---

### Example Solution (Story #1):

```
As a shopper
I want to view detailed product information
So that I can make an informed purchase decision

Acceptance Criteria:
- Given I click on a product from search results
- When the product page loads
- Then I see:
  - Product title
  - Current price
  - At least 3 high-resolution images
  - Detailed description (300+ words)
  - Product specifications (dimensions, weight, etc.)

- And page loads in <2 seconds
- And images are zoomable on click
```

---

## User Story Templates for Common Features

### Authentication
```
As a [user]
I want to [log in / register / reset password]
So that I can [access my account securely]
```

### Data Entry
```
As a [user]
I want to [create/update/delete] [entity]
So that I can [manage my information]
```

### Reporting
```
As a [manager]
I want to [view/export] [report type]
So that I can [make data-driven decisions]
```

### Notifications
```
As a [user]
I want to [receive notifications] when [event occurs]
So that I can [take timely action]
```

---

## Tools for Writing User Stories

### Jira (Most Common)
- Create stories in backlog
- Add acceptance criteria in description
- Link to epics
- Estimate with story points
- Track in sprint boards

### Trello (Simple)
- Cards represent stories
- Checklists for acceptance criteria
- Easy drag-and-drop prioritization

### Azure DevOps
- User stories linked to features
- Built-in acceptance criteria fields
- Sprint planning boards

---

## Self-Assessment

### Question 1: INVEST Check
**Evaluate this story:**
```
As a user, I want the app to be fast and have good UX
```

**Problems:**
- ❌ Not Valuable (too vague)
- ❌ Not Estimable (can't estimate "good UX")
- ❌ Not Testable (subjective)

**Fix:**
```
As a user, I want the app to load the home page in <1 second so that I don't abandon the site due to slow performance

Acceptance Criteria:
- Home page loads in <1s for 95% of users
- Measured with Google Lighthouse score >90
```

---

### Question 2: Write a Story
**Scenario:** You're building a food delivery app. Write a user story for "tracking order status"

**Your Turn:**
```
As a [role]
I want to [feature]
So that [benefit]

Acceptance Criteria:
- ...
```

---

## Next Steps

### Immediate Actions
1. ✅ **Practice** - Write 5 user stories for a project you're working on
2. ✅ **Review** - Have a developer review your stories for clarity
3. ✅ **Read** - "User Stories Applied" by Mike Cohn

### Continue Learning
➡️ **Next Topic:** [Stakeholder Identification](/content/roadmaps/junior-ba/stakeholder-identification.md)

Learn how to identify and analyze stakeholders using Power-Interest Grids and RACI matrices.

---

## Additional Resources

### Books
- **"User Stories Applied"** by Mike Cohn (Agile Bible)
- **"Fifty Quick Ideas To Improve Your User Stories"** by Gojko Adzic

### Articles
- [INVEST in Good Stories](https://www.agilealliance.org/glossary/invest/)
- [Splitting User Stories](https://www.agilealliance.org/resources/experience-reports/splitting-user-stories/)

### Videos
- [Writing Great User Stories](https://www.youtube.com/c/TheBaguide)

---

**Progress Tracker:** ✅ Completed "Writing User Stories"
**Previous:** Conducting Interviews
**Next:** Stakeholder Identification

---

*This content is aligned with IIBA Agile Extension and supports preparation for ECBA, CBAP, and PMI-PBA certifications.*
