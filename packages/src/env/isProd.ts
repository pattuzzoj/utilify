import equalsEnv from "./equalsEnv";

/**
 * Checks if the environment is set to 'production'.
 * @returns {boolean} True if NODE_ENV is 'production', false otherwise.
 */
export default function isProd(): boolean {
  return equalsEnv('NODE_ENV', 'production');
}