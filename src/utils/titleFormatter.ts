export function truncateTitle(title: string) {
  if (title.length > 20) {
    return title.substring(0, 20) + '...';
  }
  return title;
}
