/**
 * Returns a promise that resolves after a timeout.
 * @param {number} timeout - The time to sleep in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the timeout.
 * @throws {TypeError} If timeout is not a number.
 */
export default async function sleep(timeout: number): Promise<void> {
  if (typeof timeout !== 'number') {
    throw new TypeError(`Expected a non-negative number for 'timeout'`);
  }
  
  return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}