import { mean } from '../math';

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