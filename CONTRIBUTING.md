# Contributing to BA Pathfinder

Thank you for your interest in contributing to BA Pathfinder! 🎉

We're building the world's most comprehensive visual career roadmaps for Business Analysts, and we need your help!

---

## 🚀 Quick Start

### For Non-Technical Contributors (Content/Roadmaps)

**You don't need to code!** Most contributions are roadmap improvements and resource additions.

1. **Browse** existing roadmaps in `/src/data/roadmaps/`
2. **Find** something to improve (outdated resource, missing topic, etc.)
3. **Open an issue** describing your suggestion
4. A maintainer will help you create the PR

### For Developers

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/ba-pathfinder.git
cd ba-pathfinder

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

---

## 🗺️ How Roadmaps Work

Each roadmap is defined by two components:

### 1. JSON Structure (`src/data/roadmaps/[role]/roadmap.json`)

Defines the roadmap nodes, connections, and metadata:

```json
{
  "id": "requirements-elicitation",
  "type": "topic",
  "label": "Requirements Elicitation",
  "description": "Gathering requirements from stakeholders",
  "priority": "critical",
  "timeEstimate": "2 weeks",
  "resources": [...]
}
```

### 2. Content Files (`content/roadmaps/[role]/[topic].md`)

Detailed explanations for each topic:

```markdown
---
title: "Requirements Elicitation"
nodeId: "requirements-elicitation"
---

## Overview
Requirements elicitation is the process of...
```

---

## 📝 What Can I Contribute?

| Type | Description | Difficulty |
|------|-------------|------------|
| **Fix typos** | Correct spelling/grammar | ⭐ Easy |
| **Add resources** | Books, courses, articles | ⭐ Easy |
| **Update roadmap** | Add/remove/reorganize topics | ⭐⭐ Medium |
| **Write content** | Create topic explanations | ⭐⭐ Medium |
| **New roadmap** | Create entire career path | ⭐⭐⭐ Advanced |
| **Code features** | Build interactive components | ⭐⭐⭐ Advanced |

---

## 🎯 Contribution Guidelines

### Adding a Resource

1. Must be **publicly accessible** (free or reasonably priced)
2. Must be **current** (published within last 2 years preferred)
3. Must be **high quality** (check reviews, reputation)
4. Cite **authoritative sources** (IIBA, PMI, recognized BA experts)

**Example:**

```json
{
  "type": "book",
  "title": "Business Analysis for Beginners",
  "author": "Mohamed Elgendy",
  "year": "2023",
  "url": "https://amazon.com/...",
  "why": "Comprehensive intro to BA fundamentals"
}
```

### Updating Roadmaps

When proposing roadmap changes, explain **why**:

- ❌ "Add Agile to the roadmap"
- ✅ "Add Agile Methodology (after SDLC Basics) because 75% of BA jobs require Agile experience per IIBA survey"

### Writing Content

- Use **clear, concise language** (Grade 8 reading level)
- Include **practical examples** from real BA work
- Add **self-assessment questions** to test understanding
- Cite **sources** for statistics and best practices

---

## 🏗️ Project Structure

```
ba-pathfinder/
├── src/
│   ├── data/roadmaps/          # Roadmap JSON files
│   ├── pages/                   # Next.js pages
│   └── components/              # React components
├── content/                     # Markdown content
├── public/                      # Static assets
├── README.md                    # Project overview
└── CONTRIBUTING.md              # This file
```

---

## 🔍 Review Process

1. **Submit PR** with clear description
2. **Automated checks** run (linting, validation)
3. **Community review** (feedback, suggestions)
4. **Maintainer approval** (merge decision)
5. **Deployed** automatically to production

**Average review time:** 48 hours

---

## 💬 Getting Help

- **GitHub Discussions:** [Ask questions](https://github.com/guitargnarr/ba-pathfinder/discussions)
- **Issues:** [Report bugs, suggest features](https://github.com/guitargnarr/ba-pathfinder/issues)

---

## 🙏 Recognition

All contributors are recognized in:
- **README.md** Contributors section
- **CHANGELOG.md** for significant contributions
- **GitHub Contributors** list

---

## 📜 Code of Conduct

Be kind, respectful, and constructive. We're all here to help Business Analysts grow their careers.

---

**Thank you for contributing to BA Pathfinder!** 🎉

Every contribution, no matter how small, helps thousands of Business Analysts worldwide.
