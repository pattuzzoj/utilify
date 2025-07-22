import { describe, test, vi } from 'vitest';
import {
  compose,
  identity,
  memo,
  noop,
  not,
  once,
  partialLeft,
  partialRight,
  pipe,
  times,
  when
} from '../src/function';

describe('Function', () => {
  describe.concurrent('compose', () => {
    test.concurrent('should compose functions from right to left', async ({ expect }) => {
      const addTwo = (x: number) => x + 2;
      const multiplyByThree = (x: number) => x * 3;
      const subtractOne = (x: number) => x - 1;

      const composed = compose(addTwo, multiplyByThree, subtractOne);
      const result = composed(5);

      expect(result).toBe(14);
    });

    test.concurrent('should throw when composing with non-functions', async ({ expect }) => {
      expect(() => {
        compose(null as any, undefined as any);
      }).toThrow();
    });
  });

  describe.concurrent('identity', () => {
    test.concurrent('should return the same value that was passed', async ({ expect }) => {
      const value = 'test';
      const result = identity(value);
      expect(result).toBe(value);
    });
  });

  describe.concurrent('memo', () => {
    test.concurrent('should memoize function results', ({ expect }) => {
      const fn = vi.fn((x: number) => x * 2);
      const memoized = memo(fn);

      expect(memoized(5)).toBe(10);
      expect(fn).toHaveBeenCalledTimes(1);

      expect(memoized(5)).toBe(10);
      expect(fn).toHaveBeenCalledTimes(1);
    });
  });

  describe.concurrent('noop', () => {
    test.concurrent('should do nothing and return undefined', async ({ expect }) => {
      const result = noop();
      expect(result).toBeUndefined();
    });
  });

  describe.concurrent('not', () => {
    test.concurrent('should negate the result of a predicate', async ({ expect }) => {
      const isEven = (n: number) => n % 2 === 0;
      const isOdd = not(isEven);

      expect(isOdd(1)).toBe(true);
    });
  });

  describe.concurrent('once', () => {
    test.concurrent('should execute function only once', async ({ expect }) => {
      const spy = vi.fn(() => {
        spy.mock.calls.length;
      });

      const onceSpy = once(spy);

      onceSpy();
      onceSpy();
      onceSpy();

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls.length).toBe(1);
    });
  });

  describe.concurrent('partialLeft', () => {
    test.concurrent('should partially apply arguments from the left', async ({ expect }) => {
      const add = (a: number, b: number, c: number) => a * b + c;
      const addWithPartial = partialLeft(add, 1, 2);
      // @ts-ignore
      const result = addWithPartial(3);

      expect(result).toBe(5);
    });

    test.concurrent('should maintain the correct order of arguments', async ({ expect }) => {
      const subtract = (a: number, b: number, c: number) => a - b * c;
      const subtractWithPartial = partialLeft(subtract, 10);
      const result = subtractWithPartial(3, 2);

      expect(result).toBe(4);
    });
  });

  describe.concurrent('partialRight', () => {
    test.concurrent('should partially apply arguments from the right', async ({ expect }) => {
      const add = (a: number, b: number, c: number) => a * b + c;
      const addWithPartial = partialRight(add, 1, 2);
      const result = addWithPartial(3);

      expect(result).toBe(5);
    });

    test.concurrent('should maintain the correct order of arguments', async ({ expect }) => {
      const subtract = (a: number, b: number, c: number) => a - b * c;
      const subtractWithPartial = partialRight(subtract, 10);
      const result = subtractWithPartial(3, 2);

      expect(result).toBe(-17);
    });
  });

  describe.concurrent('pipe', () => {
    test.concurrent('should pipe functions from left to right', async ({ expect }) => {
      const addTwo = (x: number) => x + 2;
      const multiplyByThree = (x: number) => x * 3;
      const subtractOne = (x: number) => x - 1;

      const piped = pipe(subtractOne, multiplyByThree, addTwo);
      const result = piped(5);

      expect(result).toBe(14);
    });

    test.concurrent('should throw when piping with non-functions', async ({ expect }) => {
      expect(() => {
        pipe(null as any, undefined as any);
      }).toThrow();
    });
  });

  describe.concurrent('times', () => {
    test.concurrent('should execute function n times', ({ expect }) => {
      const spy = vi.fn();
      times(spy, 3);
      expect(spy).toHaveBeenCalledTimes(3);
    });
  });

  describe.concurrent('when', () => {
    test.concurrent('should execute function when predicate is true', ({ expect }) => {
      const predicate = (n: number) => n > 5;
      const handler = vi.fn();
      const whenGreaterThanFive = when(predicate, handler);

      whenGreaterThanFive(10);
      expect(handler).toHaveBeenCalledWith(10);
      expect(handler).toHaveBeenCalledTimes(1);
    });

    test.concurrent('should not execute function when predicate is false', ({ expect }) => {
      const predicate = (n: number) => n > 5;
      const handler = vi.fn();
      const whenGreaterThanFive = when(predicate, handler);

      whenGreaterThanFive(3);
      expect(handler).toHaveBeenCalledTimes(0);
    });
  });
})