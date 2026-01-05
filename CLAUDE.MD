# Portfolio Website Implementation Plan

## Project Overview
A timeline-based static portfolio website built with Astro, featuring a calm, minimal aesthetic with focus on typography. The site will showcase blog posts, projects, and experiments in a vertical timeline format.

## Tech Stack Decision

### Core Framework: Astro
- **Why Astro**: Zero JS by default, excellent performance, built-in MDX support, perfect for content-focused sites
- **Static Export**: Full static site generation for GitHub Pages/Vercel deployment
- **Styling**: Tailwind CSS for utility-first styling
- **Content**: MDX files in Git (no external CMS needed)
- **Animations**: Lightweight intersection observer for scroll animations

### Dependencies
```json
{
  "astro": "^4.x",
  "@astrojs/tailwind": "^5.x",
  "@astrojs/mdx": "^2.x",
  "tailwindcss": "^3.x",
  "typescript": "^5.x"
}
```

## Design System

### Color Palette
```css
--color-background: #FAFAF9 (off-white, warm)
--color-surface: #F5F5F4 (stone-100)
--color-text: #1C1917 (stone-900, near black)
--color-text-muted: #57534E (stone-600)
--color-border: #E7E5E4 (stone-200)
--color-accent: #292524 (stone-800, subtle black accent)
```

### Typography Strategy
**Primary Focus**: Typography as the main design element

**Font Pairing Options**:
1. **Recommended**:
   - Headings: `Inter` (clean, modern, excellent at display sizes)
   - Body: `Inter` (use different weights for hierarchy)
   - Mono: `JetBrains Mono` (for code blocks)

2. **Alternative**:
   - Headings: `Cabinet Grotesk` or `Sohne`
   - Body: `IA Writer Quattro` or `iA Writer Duo`

**Typography Scale**:
- Hero/H1: 3.5rem (56px), font-weight: 600, letter-spacing: -0.02em
- H2: 2.25rem (36px), font-weight: 600, letter-spacing: -0.01em
- H3: 1.5rem (24px), font-weight: 500
- Body: 1.125rem (18px), font-weight: 400, line-height: 1.7
- Small: 0.875rem (14px), font-weight: 400

**Text Treatment**:
- Generous line-height (1.7 for body)
- Comfortable line-length (max 65-70 characters)
- Tight letter-spacing on headings for modern feel
- Medium font weights (500-600) instead of bold (700+)

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Generous whitespace between timeline items (96-128px)

### UI Elements
- Border radius: 12px (rounded-lg)
- Shadows: Minimal, soft (shadow-sm only)
- Borders: 1px, color-border
- Timeline line: 2px solid border color

## Content Structure

### Content Types

#### 1. Blog Posts
```typescript
interface BlogPost {
  title: string
  publishDate: Date
  tags: string[]
  readingTime: number
  content: MDXContent
  type: 'blog'
}
```

#### 2. Projects
```typescript
interface Project {
  title: string
  shortDescription: string
  longDescription?: string
  status: 'complete' | 'in-progress' | 'abandoned'
  size: 'small' | 'medium' | 'big'
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  startDate: Date
  endDate?: Date
  content?: MDXContent
  type: 'project'
}
```

#### 3. Experiments
```typescript
interface Experiment {
  title: string
  description: string
  date: Date
  status: 'complete' | 'in-progress' | 'abandoned'
  size: 'small' | 'big'
  content?: MDXContent
  type: 'experiment'
}
```

### Unified Timeline Item
```typescript
type TimelineItem = BlogPost | Project | Experiment

interface TimelineData {
  items: TimelineItem[]
  filters: {
    types: ('blog' | 'project' | 'experiment')[]
    statuses: ('complete' | 'in-progress' | 'abandoned')[]
    sizes: ('small' | 'medium' | 'big')[]
  }
}
```

## File Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Timeline.astro          # Main timeline component
│   │   ├── TimelineItem.astro      # Individual item card
│   │   ├── TimelineFilters.astro   # Filter pills (interactive)
│   │   ├── Header.astro            # Site header/nav
│   │   ├── Footer.astro            # Site footer
│   │   └── BlogPost.astro          # Blog post layout
│   ├── content/
│   │   ├── config.ts               # Content collections config
│   │   ├── blog/                   # Blog MDX files
│   │   │   └── example-post.mdx
│   │   ├── projects/               # Project MDX files
│   │   │   └── example-project.mdx
│   │   └── experiments/            # Experiment MDX files
│   │       └── example-experiment.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro        # Base HTML layout
│   │   └── MarkdownLayout.astro    # Layout for MDX content
│   ├── pages/
│   │   ├── index.astro             # Timeline homepage
│   │   ├── blog/
│   │   │   └── [slug].astro        # Blog post pages
│   │   ├── projects/
│   │   │   └── [slug].astro        # Project detail pages
│   │   ├── about.astro             # About page
│   │   └── now.astro               # Now page (optional)
│   ├── styles/
│   │   └── global.css              # Global styles + fonts
│   └── utils/
│       ├── timeline.ts             # Timeline sorting/filtering logic
│       └── date.ts                 # Date formatting utilities
├── public/
│   └── fonts/                      # Self-hosted fonts
├── astro.config.mjs                # Astro configuration
├── tailwind.config.mjs             # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json
```

## Implementation Phases

### Phase 1: Project Setup
- [ ] Initialize Astro project with TypeScript
- [ ] Install and configure Tailwind CSS
- [ ] Install MDX integration
- [ ] Set up content collections
- [ ] Configure fonts (self-hosted Inter + JetBrains Mono)
- [ ] Create base layout with typography system

### Phase 2: Content Layer
- [ ] Define content collection schemas for blog/projects/experiments
- [ ] Create 3-5 example blog posts
- [ ] Create 3-5 example projects (mix of complete/in-progress/abandoned)
- [ ] Create 2-3 example experiments
- [ ] Implement content fetching and sorting utilities

### Phase 3: Timeline UI
- [ ] Build Timeline component (vertical line design)
- [ ] Build TimelineItem component with type-specific rendering
- [ ] Implement date-based sorting (newest first)
- [ ] Add scroll-triggered fade-in animations
- [ ] Ensure proper spacing and breathing room

### Phase 4: Filtering System
- [ ] Build filter UI (pill buttons)
- [ ] Implement client-side filtering with JavaScript
- [ ] Add smooth transitions for filter changes
- [ ] Ensure filters are keyboard accessible
- [ ] Add "active" states to filter pills

### Phase 5: Individual Pages
- [ ] Create blog post detail page template
- [ ] Create project detail page template
- [ ] Build About page
- [ ] Build Now page (optional)
- [ ] Add reading time calculation for blog posts

### Phase 6: Polish & Optimization
- [ ] Optimize images (if any)
- [ ] Add meta tags for SEO
- [ ] Test accessibility (WCAG AA contrast, keyboard nav)
- [ ] Test on mobile/tablet/desktop
- [ ] Verify static build output
- [ ] Add subtle micro-interactions

### Phase 7: Deployment
- [ ] Create deployment configuration for Vercel
- [ ] Create deployment configuration for GitHub Pages
- [ ] Document how to add new content
- [ ] Write README with setup instructions

## Key Features Implementation

### Timeline Rendering
- Astro component that fetches all content collections
- Merges and sorts by date
- Maps to unified TimelineItem component
- Renders vertical timeline with connecting line

### Filtering Logic
```typescript
// Client-side filtering (islands architecture)
// Small vanilla JS or Preact component for interactivity
function filterTimeline(items, filters) {
  return items.filter(item => {
    const typeMatch = filters.types.length === 0 || filters.types.includes(item.type)
    const statusMatch = filters.statuses.length === 0 || filters.statuses.includes(item.status)
    const sizeMatch = filters.sizes.length === 0 || filters.sizes.includes(item.size)
    return typeMatch && statusMatch && sizeMatch
  })
}
```

### Animation Strategy
- Intersection Observer API
- Fade + slide up on scroll
- Stagger delay for sequential items
- Respect `prefers-reduced-motion`

### Content Collections Config
```typescript
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
    readingTime: z.number().optional()
  })
})

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    status: z.enum(['complete', 'in-progress', 'abandoned']),
    size: z.enum(['small', 'medium', 'big']),
    techStack: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    startDate: z.date(),
    endDate: z.date().optional()
  })
})

export const collections = { blog, projects }
```

## Deployment Configuration

### Vercel
- Zero config deployment
- Connect GitHub repo
- Auto-deploys on push to main

### GitHub Pages
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Astro Config for GitHub Pages
```javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name',
  integrations: [tailwind(), mdx()]
})
```

## Typography Implementation Details

### Font Loading Strategy
```css
/* global.css */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400 600;
  font-display: swap;
  src: url('/fonts/inter-var.woff2') format('woff2-variations');
}

@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/jetbrains-mono.woff2') format('woff2');
}
```

### Tailwind Typography Config
```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'body': ['1.125rem', { lineHeight: '1.7' }]
      },
      colors: {
        background: '#FAFAF9',
        surface: '#F5F5F4',
        text: '#1C1917',
        'text-muted': '#57534E',
        border: '#E7E5E4',
        accent: '#292524'
      }
    }
  }
}
```

## Content Management Workflow

### Adding New Blog Post
1. Create new file: `src/content/blog/my-new-post.mdx`
2. Add frontmatter:
```yaml
---
title: "My New Blog Post"
publishDate: 2024-01-15
tags: ["design", "development"]
---
```
3. Write content in MDX
4. Commit and push (auto-deploys)

### Adding New Project
1. Create file: `src/content/projects/my-project.mdx`
2. Add frontmatter with project metadata
3. Optional: Add detailed content below frontmatter
4. Commit and push

## Performance Targets
- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Total page weight: < 200KB (without images)

## Accessibility Checklist
- [ ] WCAG AA contrast ratios (4.5:1 for text)
- [ ] Semantic HTML (article, time, nav, etc.)
- [ ] Keyboard navigation for filters
- [ ] Focus visible states
- [ ] Alt text for any images
- [ ] Skip to content link
- [ ] Proper heading hierarchy

## Future Enhancements (Out of Scope)
- Search functionality
- RSS feed
- Dark mode toggle
- Comments system
- Analytics
- Newsletter integration

---

## Next Steps
1. Initialize Astro project with chosen dependencies
2. Set up typography system and design tokens
3. Create content collection schemas
4. Build timeline UI components
5. Add example content
6. Implement filtering
7. Deploy to Vercel

This plan prioritizes typography-first design with a monochromatic palette and focuses on creating a calm, readable experience.
