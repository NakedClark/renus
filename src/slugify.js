/**
 * Convert a string into a URL-friendly slug.
 *
 * Accents are stripped, the result is lowercased, and any run of
 * non-alphanumeric characters becomes a single hyphen.
 */
export function slugify(input) {
  const COMBINING_MARKS = /[̀-ͯ]/g;
  return String(input)
    .normalize('NFKD')
    .replace(COMBINING_MARKS, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
