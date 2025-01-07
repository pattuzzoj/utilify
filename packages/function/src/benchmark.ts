import { average } from "@utilify/math";

export default function benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number> {
  return new Promise(async (resolve) => {
    const times: number[] = [];

    for (let i = 0; i < iterations; i++) {
      const start = performance.now();

      await callback();

      const end = performance.now();
      times.push(end - start);
    }
    
    resolve(average(times));
  });
}
