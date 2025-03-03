import dayjs from 'dayjs';

export function getShortTimeAgo(date: string): string {
  const now = dayjs();
  const target = dayjs(date);
  const diffSeconds = now.diff(target, 'second');

  if (diffSeconds < 60) return `${diffSeconds} sec ago`;
  const diffMinutes = now.diff(target, 'minute');
  if (diffMinutes < 60) return `${diffMinutes} min ago`;
  const diffHours = now.diff(target, 'hour');
  if (diffHours < 24) return `${diffHours} hr ago`;
  const diffDays = now.diff(target, 'day');
  if (diffDays < 30) return `${diffDays} d ago`;
  const diffMonths = now.diff(target, 'month');
  if (diffMonths < 12) return `${diffMonths} mo ago`;
  const diffYears = now.diff(target, 'year');
  return `${diffYears}y ago`;
}

