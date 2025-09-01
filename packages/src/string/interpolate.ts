import { isNil } from "../types";

/**
 * Interpolates values from a data object into a string using a pattern.
 * @param {string} str - The template string.
 * @param {Record<PropertyKey, any>} data - The data object.
 * @param {RegExp} [pattern=/{{(.*?)}}/g] - The pattern to match template variables.
 * @returns {string} The interpolated string.
 * @throws {TypeError} If str is not a string.
 */
export default function interpolate(str: string, data: Record<PropertyKey, any>, pattern: RegExp = /{{(.*?)}}/g): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return str.replace(pattern, (match, key) => {
    const trimmedKey = key.trim();
    const value = data[trimmedKey];

    if (isNil(value)) {
      return match;
    }

    return String(value);
  });
}
