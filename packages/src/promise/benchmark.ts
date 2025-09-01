import { mean } from '../math';

/**
 * @callback BenchmarkCallback
 * @returns {void|Promise<void>}
 */

/**
 * Benchmarks a synchronous or asynchronous function over multiple iterations.
 * @param {BenchmarkCallback} callback - The function to benchmark.
 * @param {number} iterations - Number of iterations.
 * @returns {Promise<number>} The average execution time in milliseconds.
 * @throws {TypeError} If callback is not a function or iterations is invalid.
 */
export default async function benchmark(callback: () => void, iterations: number): Promise<number>;
export default async function benchmark(callback: () => Promise<void>, iterations: number): Promise<number>;
export default async function benchmark(callback: () => any, iterations: number = 1): Promise<number> {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected a function for 'callback'`);
  }

  if (typeof iterations !== 'number' || iterations < 1) {
    throw new TypeError(`Expected a number greater than 0 for 'iterations'`);
  }

  const times: number[] = [];

  for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    await callback();

    const end = performance.now();
    times.push(end - start);
  }

  return mean(times);
}