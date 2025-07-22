import { test, describe } from 'vitest';
import {
  add,
  clamp,
  divide,
  factorial,
  fibonacci,
  frequency,
  lerp,
  mean,
  median,
  mod,
  mode,
  multiply,
  pow,
  random,
  roundTo,
  std,
  subtract,
  variance
} from '../src/math';

describe('Math', () => {
  describe.concurrent('add', () => {
    test.concurrent.for([
      {
        name: 'adds two positive numbers correctly',
        input: [5, 3],
        expected: 8
      },
      {
        name: 'adds a positive and a negative number correctly',
        input: [5, -3],
        expected: 2
      },
      {
        name: 'adds two negative numbers correctly',
        input: [-5, -3],
        expected: -8
      }
    ])("add - $name", async ({ input, expected }, { expect }) => {
      expect(add(...input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric a', async ({ expect }) => {
      // @ts-ignore
      expect(() => add('abc', 2)).toThrow(TypeError);
    });
  });
  describe.concurrent('clamp', () => {
    test.concurrent.for([
      {
        name: 'clamps a value within the range',
        value: 10,
        min: 0,
        max: 100,
        expected: 10
      },
      {
        name: 'clamps a value below the minimum',
        value: -5,
        min: 0,
        max: 100,
        expected: 0
      },
      {
        name: 'clamps a value above the maximum',
        value: 150,
        min: 0,
        max: 100,
        expected: 100
      }
    ])("clamp - $name", async ({ value, min, max, expected }, { expect }) => {
      expect(clamp(value, min, max)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric value', async ({ expect }) => {
      // @ts-ignore
      expect(() => clamp('abc', 0, 100)).toThrow(TypeError);
    });

    test.concurrent('throws RangeError if min is greater than max', async ({ expect }) => {
      expect(() => clamp(10, 100, 0)).toThrow(RangeError);
    });
  });

  describe.concurrent('divide', () => {
    test.concurrent.for([
      {
        name: 'divides two positive numbers correctly',
        dividend: 10,
        divisor: 2,
        expected: 5
      },
      {
        name: 'divides a positive and a negative number correctly',
        dividend: 10,
        divisor: -2,
        expected: -5
      },
      {
        name: 'divides a negative and a positive number correctly',
        dividend: -10,
        divisor: 2,
        expected: -5
      }
    ])("divide - $name", async ({ dividend, divisor, expected }, { expect }) => {
      expect(divide(dividend, divisor)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric dividend', async ({ expect }) => {
      // @ts-ignore
      expect(() => divide('abc', 2)).toThrow(TypeError);
    });

    test.concurrent('throws Error when dividing by zero', async ({ expect }) => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero.');
    });
  });

  describe.concurrent('factorial', () => {
    test.concurrent.for([
      {
        name: 'calculates factorial of 0',
        input: 0,
        expected: 1
      },
      {
        name: 'calculates factorial of 1',
        input: 1,
        expected: 1
      },
      {
        name: 'calculates factorial of a positive integer (5!)',
        input: 5,
        expected: 120
      }
    ])("factorial - $name", async ({ input, expected }, { expect }) => {
      expect(factorial(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => factorial('abc')).toThrow(TypeError);
    });

    test.concurrent('throws TypeError for negative input', async ({ expect }) => {
      expect(() => factorial(-5)).toThrow(TypeError);
    });
  });

  describe.concurrent('fibonacci', () => {
    test.concurrent.for([
      {
        name: 'calculates fibonacci for 0',
        input: 0,
        expected: 0
      },
      {
        name: 'calculates fibonacci for 1',
        input: 1,
        expected: 1
      },
      {
        name: 'calculates fibonacci for 7',
        input: 7,
        expected: 13
      }
    ])("fibonacci - $name", async ({ input, expected }, { expect }) => {
      expect(fibonacci(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => fibonacci('abc')).toThrow(TypeError);
    });

    test.concurrent('throws TypeError for non-integer input', async ({ expect }) => {
      expect(() => fibonacci(1.5)).toThrow(TypeError);
    });
  });

  describe.concurrent('frequency', () => {
    test.concurrent.for([
      {
        name: 'calculates frequency of numbers',
        input: [1, 2, 2, 3, 3, 3],
        expected: { '1': 1, '2': 2, '3': 3 }
      },
      {
        name: 'calculates frequency of strings',
        input: ['a', 'b', 'a', 'c', 'b', 'a'],
        expected: { 'a': 3, 'b': 2, 'c': 1 }
      },
      {
        name: 'handles empty array',
        input: [],
        expected: {}
      }
    ])("frequency - $name", async ({ input, expected }, { expect }) => {
      expect(frequency(input)).toEqual(expected);
    });

    test.concurrent('throws TypeError for non-array input', async ({ expect }) => {
      // @ts-ignore
      expect(() => frequency('not an array')).toThrow(TypeError);
    });
  });

  describe.concurrent('lerp', () => {
    test.concurrent.for([
      {
        name: 'interpolates correctly between start and end',
        input: {start: 0, end: 10, amount: 0.5},
        expected: 5
      },
      {
        name: 'returns start when amount is 0',
        input: {start: 5, end: 15, amount: 0},
        expected: 5
      },
      {
        name: 'returns end when amount is 1',
        input: {start: 10, end: 20, amount: 1},
        expected: 20
      }
    ])("lerp - $name", async ({ input, expected }, { expect }) => {
      expect(lerp(input.start, input.end, input.amount)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric start', async ({ expect }) => {
      // @ts-ignore
      expect(() => lerp('abc', 10, 0.5)).toThrow(TypeError);
    });

    test.concurrent('throws TypeError for non-numeric t', async ({ expect }) => {
      // @ts-ignore
      expect(() => lerp(0, 10, 'abc')).toThrow(TypeError);
    });
  });

  describe.concurrent('mean', () => {
    test.concurrent.for([
      {
        name: 'calculates the mean of positive numbers',
        input: [1, 2, 3, 4, 5],
        expected: 3
      },
      {
        name: 'calculates the mean of negative numbers',
        input: [-1, -2, -3, -4, -5],
        expected: -3
      },
      {
        name: 'returns 0 for an empty array',
        input: [],
        expected: 0
      }
    ])("mean - $name", async ({ input, expected }, { expect }) => {
      expect(mean(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-array input', async ({ expect }) => {
      // @ts-ignore
      expect(() => mean('not an array')).toThrow(TypeError);
    });
  });

  describe.concurrent('median', () => {
    test.concurrent.for([
      {
        name: 'calculates the median of an odd-length array',
        input: [1, 2, 3, 4, 5],
        expected: 3
      },
      {
        name: 'calculates the median of an even-length array',
        input: [1, 2, 3, 4, 5, 6],
        expected: 3.5
      },
      {
        name: 'handles negative numbers',
        input: [-1, -5, 0, 10, 2],
        expected: 0
      }
    ])("median - $name", async ({ input, expected }, { expect }) => {
      expect(median(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-array input', async ({ expect }) => {
      // @ts-ignore
      expect(() => median('not an array')).toThrow(TypeError);
    });

    test.concurrent('throws Error for empty array', async ({ expect }) => {
      expect(() => median([])).toThrow('Input array cannot be empty.');
    });
  });

  describe.concurrent('mod', () => {
    test.concurrent.for([
      {
        name: 'calculates positive modulo for positive numbers',
        input: { dividend: 10, divisor: 3 },
        expected: 1
      },
      {
        name: 'calculates positive modulo for negative dividend',
        input: { dividend: -10, divisor: 3 },
        expected: 2
      },
      {
        name: 'returns 0 when dividend is a multiple of divisor',
        input: { dividend: 9, divisor: 3 },
        expected: 0
      }
    ])("mod - $name", async ({ input, expected }, { expect }) => {
      expect(mod(input.dividend, input.divisor)).toBeCloseTo(expected);
    });

    test.concurrent('throws TypeError for non-numeric dividend', async ({ expect }) => {
      // @ts-ignore
      expect(() => mod('abc', 2)).toThrow(TypeError);
    });

    test.concurrent('throws Error for zero divisor', async ({ expect }) => {
      expect(() => mod(10, 0)).toThrow('Cannot calculate modulo with zero divisor.');
    });
  });

  describe.concurrent('mode', () => {
    test.concurrent.for([
      {
        name: 'calculates the mode of a simple array',
        input: [1, 2, 2, 3, 4],
        expected: [2]
      },
      {
        name: 'calculates the mode of an array with multiple modes',
        input: [1, 2, 2, 3, 3, 4],
        expected: [2, 3]
      },
      {
        name: 'returns an empty array for an empty input array',
        input: [],
        expected: []
      }
    ])("mode - $name", async ({ input, expected }, { expect }) => {
      expect(mode(input)).toEqual(expect.arrayContaining(expected));
      expect(mode(input).length).toBe(expected.length);
    });

    test.concurrent('throws TypeError for non-array input', async ({ expect }) => {
      // @ts-ignore
      expect(() => mode('not an array')).toThrow(TypeError);
    });
  });

  describe.concurrent('multiply', () => {
    test.concurrent.for([
      {
        name: 'multiplies positive numbers correctly',
        input: [1, 2, 3, 4, 5],
        expected: 120
      },
      {
        name: 'multiplies negative numbers correctly',
        input: [-1, -2, -3],
        expected: -6
      },
      {
        name: 'returns 1 for an empty array',
        input: [],
        expected: 1
      }
    ])("multiply - $name", async ({ input, expected }, { expect }) => {
      expect(multiply(...input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => multiply('abc', 2)).toThrow(TypeError);
    });
  });

  describe.concurrent('pow', () => {
    test.concurrent.for([
      {
        name: 'calculates positive power correctly',
        input: { base: 2, exponent: 3 },
        expected: 8
      },
      {
        name: 'calculates power with zero exponent',
        input: { base: 5, exponent: 0 },
        expected: 1
      },
      {
        name: 'calculates power with negative exponent',
        input: { base: 2, exponent: -2 },
        expected: 0.25
      }
    ])("pow - $name", async ({ input, expected }, { expect }) => {
      expect(pow(input.base, input.exponent)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric base', async ({ expect }) => {
      // @ts-ignore
      expect(() => pow('abc', 2)).toThrow(TypeError);
    });
  });

  describe.concurrent('random', () => {
    test.concurrent('generates a random number within the specified range (inclusive)', async ({ expect }) => {
      const min = 10;
      const max = 20;
      const randomNumber = random(min, max);
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThanOrEqual(max);
    });

    test.concurrent('generates an integer when both min and max are integers', async ({ expect }) => {
      const min = 1;
      const max = 10;
      const randomNumber = random(min, max);
      expect(Number.isInteger(randomNumber)).toBe(true);
    });

    test.concurrent('returns the same number if min and max are equal', async ({ expect }) => {
      const num = 7;
      expect(random(num, num)).toBe(num);
    });

    test.concurrent('throws TypeError for non-numeric min', async ({ expect }) => {
      // @ts-ignore
      expect(() => random('abc', 10)).toThrow(TypeError);
    });

    test.concurrent('throws Error if min is greater than max', async ({ expect }) => {
      expect(() => random(20, 10)).toThrow(RangeError);
    });
  });

  describe.concurrent('roundTo', () => {
    test.concurrent.for([
      {
        name: 'rounds to specified decimal places',
        input: { value: 123.456, precision: 1 },
        expected: 123.5
      },
      {
        name: 'handles negative numbers',
        input: { value: -123.456, precision: 2 },
        expected: -123.46
      }
    ])("roundTo - $name", async ({ input, expected }, { expect }) => {
      expect(roundTo(input.value, input.precision)).toBe(expected);
    });

    test.concurrent('throws TypeError for negative precision', async ({ expect }) => {
      // @ts-ignore
      expect(() => roundTo(21.23, -2)).toThrow(TypeError);
    });

    test.concurrent('throws TypeError for non-integer precision', async ({ expect }) => {
      expect(() => roundTo(10.123, 1.5)).toThrow(TypeError);
    });
  });

  describe.concurrent('std', () => {
    test.concurrent.for([
      {
        name: 'calculates standard deviation for a simple dataset',
        input: [1, 2, 3, 4, 5],
        expected: 1.5811388300841898
      },
      {
        name: 'calculates standard deviation for a dataset with negative numbers',
        input: [-1, -2, -3, -4, -5],
        expected: 1.5811388300841898
      },
      {
        name: 'returns 0 for a dataset with identical values',
        input: [5, 5, 5, 5],
        expected: 0
      }
    ])("std - $name", async ({ input, expected }, { expect }) => {
      expect(std(input)).toBeCloseTo(expected);
    });

    test.concurrent('throws TypeError for non-array input', async ({ expect }) => {
      // @ts-ignore
      expect(() => std('not an array')).toThrow(TypeError);
    });
  });

  describe.concurrent('subtract', () => {
    test.concurrent.for([
      {
        name: 'subtracts positive numbers correctly',
        input: [1, 2, 3, 4, 5],
        expected: -13
      },
      {
        name: 'subtracts negative numbers correctly',
        input: [-1, -2, -3],
        expected: 4
      }
    ])("subtract - $name", async ({ input, expected }, { expect }) => {
      expect(subtract(...input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => subtract('1', 2)).toThrow(TypeError);
    });

    test.concurrent('throws TypeError for empty array', async ({ expect }) => {
      // @ts-ignore
      expect(() => subtract([])).toThrow(TypeError);
    });
  });

  describe.concurrent('variance', () => {
    test.concurrent.for([
      {
        name: 'calculates variance for a simple dataset',
        input: [1, 2, 3, 4, 5],
        expected: 2.5
      },
      {
        name: 'calculates variance for a dataset with negative numbers',
        input: [-1, -2, -3, -4, -5],
        expected: 2.5
      },
      {
        name: 'returns 0 for a dataset with identical values',
        input: [5, 5, 5, 5],
        expected: 0
      }
    ])("variance - $name", async ({ input, expected }, { expect }) => {
      expect(variance(input)).toBeCloseTo(expected);
    });

    test.concurrent('throws Error for array with less than two numeric values', async ({ expect }) => {
      expect(() => variance([])).toThrow(Error);
    });

    test.concurrent('throws TypeError for non-array input', async ({ expect }) => {
      // @ts-ignore
      expect(() => variance('not an array')).toThrow(TypeError);
    });
  });
});
