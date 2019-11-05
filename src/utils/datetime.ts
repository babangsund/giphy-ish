export function formatRelative(date: Date | string): string {
  const delta = Math.round((+new Date() - +new Date(date)) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = week * 4;
  const year = month * 12;

  if (delta < minute) return 'Less than a minute ago';

  if (delta < hour) return 'Less than an hour ago';

  if (delta < day) return Math.floor(delta / hour) + ' hours ago';

  if (delta < day * 2) return 'Yesterday';

  if (delta < week) return Math.floor(delta / day) + ' days ago';

  if (delta < month) return Math.floor(delta / week) + ' weeks ago';

  if (delta < year) return Math.floor(delta / month) + ' months ago';

  return Math.floor(delta / year) + ' years ago';
}
