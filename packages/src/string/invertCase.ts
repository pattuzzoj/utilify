import isLowerCase from "./isLowerCase";
import isUpperCase from "./isUpperCase";

/**
 * Inverts the case of each character in a string.
 * @param {string} str - The string to invert.
 * @returns {string} The string with inverted case.
 * @throws {TypeError} If str is not a string.
 */
export default function invertCase(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for 'str'`);
  }

  return str
  .split("")
  .map((char) => {
    if(isLowerCase(char)) {
      return char.toUpperCase();
    } else if(isUpperCase(char)) {
      return char.toLowerCase();
    }

    return char;
  }).join("");
}