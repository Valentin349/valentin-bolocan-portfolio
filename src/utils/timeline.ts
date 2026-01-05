import type { CollectionEntry } from 'astro:content';

export type TimelineItem =
  | (CollectionEntry<'blog'> & { type: 'blog' })
  | (CollectionEntry<'projects'> & { type: 'project' })
  | (CollectionEntry<'experiments'> & { type: 'experiment' });

export function mergeTimelineItems(
  blogPosts: CollectionEntry<'blog'>[],
  projects: CollectionEntry<'projects'>[],
  experiments: CollectionEntry<'experiments'>[]
): TimelineItem[] {
  const items: TimelineItem[] = [
    ...blogPosts.map(post => ({ ...post, type: 'blog' as const })),
    ...projects.map(project => ({ ...project, type: 'project' as const })),
    ...experiments.map(experiment => ({ ...experiment, type: 'experiment' as const })),
  ];

  return items.sort((a, b) => {
    const dateA = getItemDate(a);
    const dateB = getItemDate(b);
    return dateB.getTime() - dateA.getTime(); // Newest first
  });
}

function getItemDate(item: TimelineItem): Date {
  if (item.type === 'blog') {
    return item.data.publishDate;
  } else if (item.type === 'project') {
    return item.data.endDate || item.data.startDate;
  } else {
    return item.data.date;
  }
}

export function getStatusBadgeColor(status: string): string {
  switch (status) {
    case 'complete':
      return 'bg-accent text-background';
    case 'in-progress':
      return 'bg-text-muted text-background';
    case 'abandoned':
      return 'bg-border text-text-muted';
    default:
      return 'bg-surface text-text';
  }
}

export function getSizeBadge(size: string): string {
  switch (size) {
    case 'big':
      return 'Big';
    case 'medium':
      return 'Medium';
    case 'small':
      return 'Small';
    default:
      return size;
  }
}
