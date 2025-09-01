/**
 * Generates a random UUID (version 4).
 * @returns {string} The generated UUID.
 */
export default function generateUUID(): string {
  return crypto.randomUUID();
}