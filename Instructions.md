# Personal Portfolio Website – Timeline-Based Static Site

## Goal
Create a modern, static personal portfolio website with a **timeline-based layout**, an **off-white, soft aesthetic**, and a **gentle, smooth UI**.  
The site should be easy to deploy on **Vercel or GitHub Pages** and include a **CMS** if no server is needed and is simple so I can add blog posts and portfolio items without redeploying manually, otherwise ignore the cms.

---

## Tech Constraints
- Must be a **static site**
- support **CMS-driven content** if no server is needed
- Must be compatible with:
  - Vercel
  - GitHub Pages
- Prefer:
  - Next.js (static export) or Astro
  - Tailwind CSS
- CMS options may include:
  - Sanity
  - Contentlayer + MD/MDX
  - Netlify CMS
  - TinaCMS
  - Any Git-based or headless CMS suitable for static hosting

---

## Core Concept
The website is structured as a **vertical timeline** that represents my journey over time.

The timeline should include:
- Blog posts
- Portfolio projects
- Experiments
- Incomplete / abandoned projects
- Small ideas and big shipped products

Not everything has to be “polished” — the timeline should celebrate progress, learning, and iteration.

---

## Timeline Requirements
- Vertical scrolling timeline
- Items ordered by date (newest at the top)
- Each timeline item can be one of:
  - Blog post
  - Portfolio project
  - Experiment / idea
- Timeline items should feel **light, spaced, and calm**
- Subtle animations on scroll (fade, slide, scale)
- No heavy parallax or aggressive motion

---

## Filtering & Interaction
- Ability to filter timeline items by:
  - Type (Blog / Project / Experiment)
  - Status (Complete / In Progress / Abandoned)
  - Size (Big / Small)
- Filtering should be:
  - Instant (client-side)
  - Smooth and subtle
  - Non-jarring (no hard reloads)
- Filters should visually match the soft UI (pill buttons or toggles)

---

## Portfolio Projects
Each portfolio item should support:
- Title
- Short description
- Long description (optional)
- Status:
  - Complete
  - In Progress
  - Incomplete / Abandoned
- Project size:
  - Small
  - Medium
  - Big
- Tech stack
- Links:
  - Live site (optional)
  - GitHub (optional)
- Start date
- End date (optional)

Incomplete projects should be displayed confidently — not hidden.

---

## Blog Posts
- Blog posts live in the same timeline as projects
- Blog posts should support:
  - Title
  - Publish date
  - Tags
  - Reading time
  - Markdown or MDX content
- Blog posts should be filterable by tag and date
- Individual blog post pages should be minimal and readable

---

## Design & UI Direction
- Overall feel:
  - Calm
  - Thoughtful
  - Gentle
  - Minimal
- Color palette:
  - Off-white / warm white background
  - Soft grays
  - Muted accent color (e.g. sage, clay, muted blue)
- Typography:
  - Clean, modern sans-serif
  - Comfortable line height
  - Slightly larger body text for readability
- UI elements:
  - Rounded corners
  - Soft shadows (very subtle)
  - No harsh borders
- Layout should breathe — generous spacing

---

## Pages & Structure
- `/` – Timeline (main focus)
- `/blog/[slug]` – Blog post page
- `/projects/[slug]` – Project detail page
- `/about` – Short personal introduction
- `/now` (optional) – What I’m currently working on

---

## CMS Expectations
- Non-technical friendly content editing
- Ability to:
  - Add blog posts
  - Add timeline items
  - Add portfolio projects
- CMS content should map cleanly to:
  - Timeline items
  - Blog pages
  - Project pages

---

## Performance & Accessibility
- Fast load times
- Minimal JavaScript where possible
- Accessible color contrast
- Keyboard navigable filters
- Semantic HTML

---

## Inspiration Keywords
Timeline · Calm UI · Build in Public · Digital Garden · Gentle Motion · Off-White · Thoughtful Portfolio

---

## Deliverable
Generate:
- A production-ready static website
- Clear folder structure
- CMS configuration
- Timeline UI with filtering
- Clean, minimal styling
- Easy deployment to Vercel or GitHub Pages
