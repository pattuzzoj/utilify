import getEnv from "./getEnv";

/**
 * Checks if an environment variable matches an expected value or any value in an array.
 * @param {string} key - The environment variable key.
 * @param {string|string[]} expected - The expected value(s).
 * @returns {boolean} True if the environment variable matches, false otherwise.
 */
export default function equalsEnv(key: string, expected: string | string[]): boolean {
  const value = getEnv(key);
  
  if (Array.isArray(expected)) {
    return expected.includes(value as string);
  }

  return value === expected;
}