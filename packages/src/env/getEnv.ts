import isDeno from "./isDeno";

/**
 * Gets an environment variable value, or returns a fallback if not set.
 * @param {string} key - The environment variable key.
 * @param {string} [fallback] - The fallback value if not set.
 * @returns {string|undefined} The environment variable value or fallback.
 */
export default function getEnv(key: string, fallback?: string): string | undefined {
  let value: string | undefined;
  
  if (isDeno()) {
    // @ts-ignore
    value = Deno.env.get(key);
  } else {
    value = process.env[key];
  }

  return value ?? fallback;
}