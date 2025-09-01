import isDeno from "./isDeno";

/**
 * Checks if an environment variable is set.
 * @param {string} key - The environment variable key.
 * @returns {boolean} True if the variable is set, false otherwise.
 */
export default function hasEnv(key: string): boolean {
  let value: string | undefined;
  
  if (isDeno()) {
    // @ts-ignore
    value = Deno.env.get(key);
  } else {
    value = process.env[key];
  }

  return value !== undefined;
}