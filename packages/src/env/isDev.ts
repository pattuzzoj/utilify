import equalsEnv from "./equalsEnv";

/**
 * Checks if the environment is set to 'development'.
 * @returns {boolean} True if NODE_ENV is 'development', false otherwise.
 */
export default function isDev(): boolean {
  return equalsEnv('NODE_ENV', 'development');
}