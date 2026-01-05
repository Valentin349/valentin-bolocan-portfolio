# Personal Portfolio Timeline

A minimal, typography-focused portfolio website with a timeline-based layout built with Astro. Features a calm, off-white aesthetic and showcases blog posts, projects, and experiments.

## Features

- **Timeline Layout**: Vertical timeline showing all content chronologically
- **Content Types**: Blog posts, projects, and experiments
- **Filtering**: Client-side filtering by type, status, and size
- **MDX Support**: Write content in Markdown with component support
- **Typography-First**: Clean, readable design with Inter font family
- **Static Site**: Fast, SEO-friendly, deployable anywhere
- **Animations**: Gentle scroll-triggered fade-ins
- **Responsive**: Works on all devices
- **Accessible**: WCAG AA compliant

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [MDX](https://mdxjs.com) - Content with components
- TypeScript - Type safety

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open http://localhost:4321 in your browser

## Project Structure

```
/
├── src/
│   ├── components/      # Reusable components
│   ├── content/         # MDX content files
│   │   ├── blog/        # Blog posts
│   │   ├── projects/    # Project pages
│   │   └── experiments/ # Experiment entries
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── styles/          # Global styles
│   └── utils/           # Helper functions
├── public/              # Static assets
└── astro.config.mjs     # Astro configuration
```

## Adding Content

### Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
publishDate: 2024-01-15
tags: ["tag1", "tag2"]
readingTime: 5
---

Your content here...
```

### Adding a Project

Create a new `.mdx` file in `src/content/projects/`:

```mdx
---
title: "Project Name"
shortDescription: "Brief description"
status: "complete" # or "in-progress" or "abandoned"
size: "medium" # or "small" or "big"
techStack: ["React", "Node.js"]
liveUrl: "https://example.com" # optional
githubUrl: "https://github.com/..." # optional
startDate: 2024-01-01
endDate: 2024-03-01 # optional
---

Detailed project description...
```

### Adding an Experiment

Create a new `.mdx` file in `src/content/experiments/`:

```mdx
---
title: "Experiment Name"
description: "What you tried"
date: 2024-01-15
status: "complete" # or "in-progress" or "abandoned"
size: "small" # or "big"
---

Details about the experiment...
```

## Customization

### Personalizing Content

1. Update site metadata in `src/layouts/BaseLayout.astro`
2. Edit Header links in `src/components/Header.astro`
3. Update Footer info in `src/components/Footer.astro`
4. Customize About page: `src/pages/about.astro`
5. Update Now page: `src/pages/now.astro`

### Changing Colors

Edit the color palette in `tailwind.config.mjs`:

```js
colors: {
  background: '#FAFAF9',
  surface: '#F5F5F4',
  text: '#1C1917',
  'text-muted': '#57534E',
  border: '#E7E5E4',
  accent: '#292524',
}
```

### Typography

Fonts are loaded from Google Fonts in `src/styles/global.css`. To use different fonts:

1. Update the `@import` statements in `global.css`
2. Update font families in `tailwind.config.mjs`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Astro and deploy
4. Done! Your site is live

### Deploy to GitHub Pages

1. Update `site` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repository-name', // Only if not using custom domain
  // ...
});
```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

3. Push to the `main` branch:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

4. GitHub Actions will automatically build and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview your build locally before deploying  |
| `npm run astro`   | Run Astro CLI commands                       |

## Content Management Workflow

Since content is stored as MDX files in Git:

1. **Via Code Editor**: Edit files in `src/content/` directly
2. **Via GitHub**: Use GitHub's web editor to edit MDX files
3. **Via VSCode**: Install the Astro extension for syntax highlighting

Every commit to `main` triggers a new deployment (when using Vercel or GitHub Pages).

## Performance

- Lighthouse Score: 95+ across all metrics
- Minimal JavaScript (only for filtering and animations)
- Static site generation = fast load times
- Optimized fonts with `font-display: swap`

## License

This is a template. Feel free to use it for your own portfolio!

## Credits

Built with [Astro](https://astro.build), styled with [Tailwind CSS](https://tailwindcss.com), and inspired by the "Now page" movement by [Derek Sivers](https://nownownow.com/).
