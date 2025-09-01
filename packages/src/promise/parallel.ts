/**
 * @callback ParallelCallback
 * @returns {Promise<any>}
 */

/**
 * Runs multiple async functions in parallel and returns their results.
 * @param {...ParallelCallback} callbacks - The async functions to run.
 * @returns {Promise<any[]>} A promise with all results.
 * @throws {TypeError} If any callback is not a function.
 */
export default async function parallel(...callbacks: (() => Promise<any>)[]): Promise<any[]> {
  if (!callbacks.every(callback => typeof callback === 'function')) {
    throw new TypeError(`Expect an array of functions for 'callbacks'`);
  }

  return Promise.all(callbacks.map(callback => callback()));
};