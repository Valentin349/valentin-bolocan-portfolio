# Valentin Bolocan: portfolio

Projects shown as they were built: a home page with a profile, the project list and a timeline, and one page per project with its screenshots stage by stage. Astro, static, deployed to GitHub Pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321/valentin-bolocan-portfolio/
npm run build    # type-checks, then builds to dist/
```

The site lives under `/valentin-bolocan-portfolio/` because it's a GitHub Pages project site (`base` in `astro.config.mjs`). Pushing to `main` deploys it through `.github/workflows/deploy.yml`.

## Edit the content

Everything you'd change is in `src/content/`. No code needed.

| What | Where |
|---|---|
| Name, role, bio, Now line, links | `src/content/profile/me.yaml` |
| A project | `src/content/projects/<slug>.md`: details at the top, the project-page text below |
| A job | `src/content/experience/<company>.yaml`, one file per job |
| A timeline row (job, launch, note) | `src/content/timeline/<anything>.yaml`, one file per row |
| Screenshots and icons | `src/assets/screens/`, `src/assets/icons/` |

**Add a screenshot stage.** Capture phone apps at 390 × 844 and websites at 1440 × 900, put the file in `src/assets/screens/`, and add an entry to the project's `stages` list, oldest first:

```yaml
stages:
  - src: ../../assets/screens/poise-v1.png
    alt: What the screen shows, for screen readers
    version: v1
    date: Jun 2026
    caption: What changed in this stage.
    device: phone        # or browser
    url: poisedating.co  # browser only: the address bar text
```

**Add a job.** Create `src/content/experience/acme.yaml`:

```yaml
role: Software engineer
company: Acme
href: https://acme.com   # optional
start: Jan 2023
end: May 2025            # null shows "present"
sort: 2023-01-01         # only used for ordering, newest first
description: >-
  One or two sentences on what you did. Use the >- form so colons in the text are safe.
tags: [Python, n8n]
```

`/index.md` is a plain Markdown copy of the home page for people and LLMs, built from the same files (`src/pages/index.md.ts`), so it updates on its own.

Statuses are `live`, `building`, `early` and `paused`. Only live projects show a badge; `statusLabel` overrides its word ("Beta"). Screens that share a `version` and `date` share one entry in the stage row. The build fails with a clear message if a field is missing or misspelled.

## Design

The look comes from the Build Log design system (https://claude.ai/artifact/5cXCAiL9MJat1gMUK6dJLr). `src/styles/tokens.css` and `src/styles/components.css` are copies of its files; change them there first, then copy them here. `src/styles/site.css` holds the page-level rules the system leaves to the site. The rules in short: pure greys, one big Archivo title per page and body-size text everywhere else, a hairline border only on surfaces that share their parent's fill, and no fades or animated screenshots.
