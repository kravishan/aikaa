/**
 * Build an internal link that respects the site's base path (/aikaa-dev/).
 * Always use this for internal links: url('guide/') -> '/aikaa-dev/guide/'
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function url(path = '/'): string {
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
}
