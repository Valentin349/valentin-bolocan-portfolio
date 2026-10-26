// Prefix internal paths with the site's base (the repo name on GitHub Pages). External URLs pass through.
export function url(path: string): string {
  if (/^[a-z]+:/i.test(path) || path.startsWith('#')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
}

export const isExternal = (href: string) => /^https?:/i.test(href);
