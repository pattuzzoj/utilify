import isDeno from "./isDeno";

/**
 * Gets an environment variable value or throws if not set.
 * @param {string} key - The environment variable key.
 * @returns {string} The environment variable value.
 * @throws {Error} If the variable is not set.
 */
export default function requireEnv(key: string): string {
  let value: string | undefined;
  
  if (isDeno()) {
    // @ts-ignore
    value = Deno.env.get(key);
  } else {
    value = process.env[key];
  }

  if (value === undefined) {
    throw new Error(`Expected a valid value for 'key'`);
  }

  return value;
}