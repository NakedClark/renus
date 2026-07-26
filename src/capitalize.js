/**
 * Uppercase the first character of a string, leaving the rest unchanged.
 *
 * The first character is handled as a full code point, so inputs that
 * start with an emoji or other astral character are not corrupted.
 */
export function capitalize(input) {
  const str = String(input);
  if (str.length === 0) return str;
  const first = String.fromCodePoint(str.codePointAt(0));
  return first.toUpperCase() + str.slice(first.length);
}
