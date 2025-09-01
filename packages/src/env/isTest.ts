import equalsEnv from "./equalsEnv";

/**
 * Checks if the environment is set to 'test'.
 * @returns {boolean} True if NODE_ENV is 'test', false otherwise.
 */
export default function isTest(): boolean {
  return equalsEnv('NODE_ENV', 'test');
}