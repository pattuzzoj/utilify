import { describe, test } from 'vitest';
import {
  backoff,
  benchmark,
  debounce,
  defer,
  lock,
  parallel,
  rateLimit,
  retry,
  sleep,
  throttle
} from '../src/promise';

describe('Promise', () => {
  describe.concurrent('backoff', () => {
    test.concurrent('should resolve when action eventually succeeds within maxAttempts', async ({ expect }) => {
      let attempt = 0;
      const action = async () => {
        attempt++;

        if (attempt === 2) {
          return 'Success';
        }

        throw new Error();
      };

      await expect(backoff(action, { maxAttempts: 5, initialDelay: 10 })).resolves.toBe('Success');
    });

    test.concurrent('should throw an error when maximum attempts are reached', async ({ expect }) => {
      const action = async () => {
        throw new Error('Fail');
      };

      await expect(backoff(action, { maxAttempts: 3, initialDelay: 10 })).rejects.toThrow('Fail');
    });
  });

  describe.concurrent('benchmark', () => {
    test.concurrent('should measure execution time for a synchronous function', async ({ expect }) => {
      const fn = () => Array.from({ length: 1000 }).reduce((a: any, _, i) => a + i, 0);
      const time = await benchmark(fn, 3);
      expect(typeof time).toBe('number');
      expect(time).toBeGreaterThanOrEqual(0);
    });
  });

  describe.concurrent('debounce', () => {
    test.concurrent('should debounce function calls', async ({ expect }) => {
      let count = 0;
      const fn = () => { count++; };
      const debounced = debounce(fn, 50);
      debounced();
      debounced();
      debounced();
      await new Promise(r => setTimeout(r, 100));
      expect(count).toBe(1);
    });
  });

  describe.concurrent('defer', () => {
    test.concurrent('should defer execution', async ({ expect }) => {
      let called = false;
      const fn = () => { called = true; };
      defer(fn);
      await new Promise(r => setTimeout(r, 10));
      expect(called).toBe(true);
    });
  });

  describe.concurrent('lock', () => {
    test.concurrent('should allow only one execution at a time', async ({ expect }) => {
      let running = 0;
      let maxRunning = 0;
      const critical = lock(async () => {
        running++;
        maxRunning = Math.max(maxRunning, running);
        await new Promise(r => setTimeout(r, 20));
        running--;
      });
      await Promise.all([critical(), critical(), critical()]);
      expect(maxRunning).toBe(1);
    });
  });

  describe.concurrent('parallel', () => {
    test.concurrent('should execute tasks in parallel', async ({ expect }) => {
      let a = false, b = false;
      const fnA = async () => { await new Promise(r => setTimeout(r, 30)); a = true; };
      const fnB = async () => { await new Promise(r => setTimeout(r, 30)); b = true; };
      await parallel(fnA, fnB);
      expect(a).toBe(true);
      expect(b).toBe(true);
    });
  });

  describe.concurrent('rateLimit', () => {
    test.concurrent('should limit execution rate', async ({ expect }) => {
      let count = 0;
      const limited = rateLimit(() => { count++; }, 2, 100);
      limited();
      limited();
      expect(count).toBe(2);
    });
  });

  describe.concurrent('retry', () => {
    test.concurrent('should retry failed operations', async ({ expect }) => {
      let attempts = 0;
      const fn = () => {
        attempts++;
        if (attempts < 2) throw new Error('Fail');
        return 'ok';
      };
      const result = retry(fn, 3);
      expect(result).toBe('ok');
      expect(attempts).toBe(2);
    });
  });

  describe.concurrent('sleep', () => {
    test.concurrent('should pause execution', async ({ expect }) => {
      const start = performance.now();
      await sleep(50);
      const end = performance.now();
      const elapsed = end - start;
      expect(elapsed).toBeGreaterThanOrEqual(50);
    });
  });

  describe.concurrent('throttle', () => {
    test.concurrent('should throttle function calls', async ({ expect }) => {
      let count = 0;
      const fn = () => { count++; };
      const throttled = throttle(fn, 50);
      throttled();
      throttled();
      throttled();
      await new Promise(r => setTimeout(r, 100));
      expect(count).toBe(1);
    });
  });
})