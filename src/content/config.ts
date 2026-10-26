import { defineCollection, z } from 'astro:content';

const status = z.enum(['live', 'building', 'early', 'paused']);
const device = z.enum(['phone', 'browser']);

// One Markdown file per project. The body is the prose on the project page.
const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      tagline: z.string(),
      status,
      statusLabel: z.string().optional(), // overrides the status word; only live projects show a badge
      since: z.coerce.string().optional(), // "2025–"; a bare year works too
      order: z.number().default(100), // lower comes first on the home page
      icon: image().optional(), // the real app icon; without one the tile shows the latest screenshot, then the first letter
      metric: z
        .object({
          value: z.string(),
          label: z.string(),
          note: z.string().optional(), // "Counted on 26 Oct 2026"
        })
        .optional(),
      tags: z.array(z.string()).max(5).default([]),
      links: z
        .array(z.object({ label: z.string(), href: z.string().url() }))
        .default([]),
      // Oldest first. Phone captures at 390×844, web captures at 1440×900.
      stages: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            version: z.string(),
            date: z.string().optional(), // "Sep 2026"
            caption: z.string().optional(),
            device: device.default('phone'),
            url: z.string().optional(), // browser frames: text in the bar
          }),
        )
        .default([]),
    }),
});

// One small YAML file per timeline row: jobs and launches in one list.
const timeline = defineCollection({
  type: 'data',
  schema: z.object({
    kind: z.enum(['job', 'launch', 'note']),
    date: z.coerce.string(), // "Sep 2026" or 2024; not shown on the page, kept for your records
    dateEnd: z.coerce.string().nullable().optional(), // null renders "present"; leave out for a point in time
    sort: z.coerce.date(), // used only to order rows, newest first
    title: z.string(),
    org: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    project: z.string().optional(), // a project's file name, to link the row to its page
    link: z.object({ label: z.string(), href: z.string().url() }).optional(), // the real thing, e.g. the App Store page
    current: z.boolean().default(false),
  }),
});

// One YAML file per job, shown in the Experience section.
const experience = defineCollection({
  type: 'data',
  schema: z.object({
    role: z.string(),
    company: z.string(),
    href: z.string().url().optional(),
    note: z.string().optional(), // shown after the company, e.g. "acquired by Opensignal"
    start: z.coerce.string().optional(), // "Jun 2025" or 2023; leave out if unknown
    end: z.coerce.string().nullable().optional(), // null renders "present"; leave out for a single date
    sort: z.coerce.date(), // used only to order jobs, newest first
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const inline = z.array(z.union([z.string(), z.object({ text: z.string(), href: z.string() })]));

// The single file src/content/profile/me.yaml.
const profile = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      avatar: image().optional(),
      bio: z.array(inline), // paragraphs; each is a list of text and {text, href} parts
      now: inline.optional(),
      links: z.array(z.object({ label: z.string(), href: z.string(), icon: z.enum(['github', 'linkedin']).optional() })).default([]),
      description: z.string(), // for search engines and link previews
    }),
});

export const collections = { projects, experience, timeline, profile };
