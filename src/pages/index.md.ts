// The home page as plain Markdown at /index.md, for people and LLMs that want the text without the page.
// Built from the same content files as the page, so the two never drift.
import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';
import { url } from '../lib/url';

type Part = string | { text: string; href: string };

export const GET: APIRoute = async ({ site }) => {
  const abs = (href: string) => new URL(url(href), site).toString();
  const inline = (parts: Part[]) => parts.map((p) => (typeof p === 'string' ? p : `[${p.text}](${abs(p.href)})`)).join('');

  const profile = (await getEntry('profile', 'me'))!.data;
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const experience = (await getCollection('experience')).sort((a, b) => b.data.sort.valueOf() - a.data.sort.valueOf());
  const timeline = (await getCollection('timeline')).sort((a, b) => b.data.sort.valueOf() - a.data.sort.valueOf());
  const range = (start: string, end?: string | null) => (end === undefined ? start : `${start}–${end ?? 'present'}`);

  const lines: string[] = [`# ${profile.name}`, '', profile.role, ''];
  for (const para of profile.bio) lines.push(inline(para), '');
  if (profile.now) lines.push(`Now: ${inline(profile.now)}`, '');
  if (profile.links.length) lines.push(profile.links.map((l) => `[${l.label}](${l.href})`).join(' · '), '');

  lines.push('## Projects', '');
  for (const p of projects) {
    const d = p.data;
    const status = d.status === 'live' ? ' (live)' : d.status === 'paused' ? ' (paused)' : '';
    const metric = d.metric ? ` ${d.metric.value} ${d.metric.label}.` : '';
    lines.push(`- [${d.name}](${abs(`/projects/${p.slug}`)})${status}: ${d.tagline}${metric}`);
  }
  lines.push('');

  if (experience.length) {
    lines.push('## Experience', '');
    for (const j of experience) {
      const d = j.data;
      const when = d.start ? ` (${range(d.start, d.end)})` : '';
      lines.push(`- ${d.role}, ${d.company}${d.note ? `, ${d.note}` : ''}${when}${d.description ? `: ${d.description}` : ''}`);
    }
    lines.push('');
  }

  if (timeline.length) {
    lines.push('## Timeline', '');
    for (const e of timeline) {
      const d = e.data;
      const title = d.project ? `[${d.title}](${abs(`/projects/${d.project}`)})` : d.title;
      const link = d.link ? ` [${d.link.label}](${d.link.href})` : '';
      lines.push(`- ${title}${d.description ? `. ${d.description}` : ''}${link}`);
    }
    lines.push('');
  }

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
