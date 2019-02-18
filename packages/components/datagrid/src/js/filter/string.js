import escapeStringRegexp from 'escape-string-regexp';

export default class StringComparators {
  static contains(haystack, needle) {
    return StringComparators.testString(haystack, escapeStringRegexp(needle));
  }

  static startsWith(haystack, needle) {
    const escapedNeedle = escapeStringRegexp(needle);
    return StringComparators.testString(haystack, `^${escapedNeedle}`);
  }

  static endsWith(haystack, needle) {
    const escapedNeedle = escapeStringRegexp(needle);
    return StringComparators.testString(haystack, `${escapedNeedle}$`);
  }

  static is(haystack, needle) {
    const escapedNeedle = escapeStringRegexp(needle);
    return StringComparators.testString(haystack, `^${escapedNeedle}$`);
  }

  static testString(haystack, regexp) {
    const pattern = new RegExp(regexp, 'i');
    return pattern.test(haystack);
  }
}
