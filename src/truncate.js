/**
 * Truncate a string to at most `maxLength` characters, appending
 * `ellipsis` (default "…") when anything was cut off.
 *
 * The returned string, including the ellipsis, never exceeds
 * `maxLength`. If the ellipsis itself is longer than `maxLength`, the
 * string is cut without one. Lengths are measured in UTF-16 code
 * units, like String.prototype.length, but a cut never lands inside a
 * surrogate pair — it backs off one unit instead, so the result is
 * always well-formed.
 */
export function truncate(input, maxLength, ellipsis = '…') {
  const str = String(input);
  if (!Number.isInteger(maxLength) || maxLength < 0) {
    throw new RangeError('maxLength must be a non-negative integer');
  }
  if (str.length <= maxLength) return str;
  if (ellipsis.length > maxLength) return cutBeforeSurrogatePair(str, maxLength);
  return cutBeforeSurrogatePair(str, maxLength - ellipsis.length) + ellipsis;
}

function cutBeforeSurrogatePair(str, end) {
  if (end > 0 && end < str.length) {
    const lead = str.charCodeAt(end - 1);
    const trail = str.charCodeAt(end);
    if (lead >= 0xd800 && lead <= 0xdbff && trail >= 0xdc00 && trail <= 0xdfff) {
      end -= 1;
    }
  }
  return str.slice(0, end);
}
