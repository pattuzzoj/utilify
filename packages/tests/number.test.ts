import { test, describe } from 'vitest';
import {
  divisors,
  inRange,
  isEven,
  isFinite,
  isFloat,
  isInfinity,
  isInteger,
  isNaN,
  isNegative,
  isOdd,
  isPositive,
  isPrime,
  range,
  sumOfDigits
} from '../src/number';

describe('Number', () => {
  describe.concurrent('divisors', () => {
    test.concurrent.for([
      {
        name: 'finds divisors for a positive integer',
        input: 12,
        expected: [1, 2, 3, 4, 6, 12]
      },
      {
        name: 'finds divisors for a prime number',
        input: 7,
        expected: [1, 7]
      },
      {
        name: 'finds divisors for 1',
        input: 1,
        expected: [1]
      }
    ])("divisors - $name", async ({ input, expected }, { expect }) => {
      expect(divisors(input)).toEqual(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => divisors('abc')).toThrow(TypeError);
    });

    test.concurrent('throws TypeError for negative input', async ({ expect }) => {
      expect(() => divisors(-5)).toThrow(TypeError);
    });
  });

  describe.concurrent('inRange', () => {
    test.concurrent.for([
      {
        name: 'returns true when value is within range',
        value: 5,
        min: 0,
        max: 10,
        expected: true
      },
      {
        name: 'returns true when value is equal to min',
        value: 0,
        min: 0,
        max: 10,
        expected: true
      },
      {
        name: 'returns false when value is below range',
        value: -1,
        min: 0,
        max: 10,
        expected: false
      }
    ])("inRange - $name", async ({ value, min, max, expected }, { expect }) => {
      expect(inRange(value, min, max)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric value', async ({ expect }) => {
      // @ts-ignore
      expect(() => inRange('abc', 0, 10)).toThrow(TypeError);
    });
  });

  describe.concurrent('isEven', () => {
    test.concurrent.for([
      {
        name: 'returns true for an even number',
        input: 2,
        expected: true
      },
      {
        name: 'returns false for an odd number',
        input: 3,
        expected: false
      },
      {
        name: 'returns true for zero',
        input: 0,
        expected: true
      }
    ])("isEven - $name", async ({ input, expected }, { expect }) => {
      expect(isEven(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isEven('2')).toThrow(TypeError);
    });
  });

  describe.concurrent('isFinite', () => {
    test.concurrent.for([
      {
        name: 'returns true for a finite number',
        input: 123,
        expected: true
      },
      {
        name: 'returns true for a floating point number',
        input: 123.45,
        expected: true
      },
      {
        name: 'returns true for zero',
        input: 0,
        expected: true
      },
      {
        name: 'returns false for positive Infinity',
        input: Infinity,
        expected: false
      }
    ])("isFinite - $name", async ({ input, expected }, { expect }) => {
      expect(isFinite(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isFinite('123')).toThrow(TypeError);
    });
  });

  describe.concurrent('isFloat', () => {
    test.concurrent.for([
      {
        name: 'returns true for a positive float',
        input: 3.14,
        expected: true
      },
      {
        name: 'returns true for a negative float',
        input: -2.71,
        expected: true
      },
      {
        name: 'returns false for an integer',
        input: 42,
        expected: false
      }
    ])("isFloat - $name", async ({ input, expected }, { expect }) => {
      expect(isFloat(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isFloat('3.14')).toThrow(TypeError);
    });
  });

  describe.concurrent('isInfinity', () => {
    test.concurrent.for([
      {
        name: 'returns true for positive Infinity',
        input: Infinity,
        expected: true
      },
      {
        name: 'returns true for negative Infinity',
        input: -Infinity,
        expected: true
      },
      {
        name: 'returns false for a finite number',
        input: 42,
        expected: false
      }
    ])("isInfinity - $name", async ({ input, expected }, { expect }) => {
      expect(isInfinity(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isInfinity('Infinity')).toThrow(TypeError);
    });
  });

  describe.concurrent('isInteger', () => {
    test.concurrent.for([
      {
        name: 'returns true for a positive integer',
        input: 42,
        expected: true
      },
      {
        name: 'returns true for zero',
        input: 0,
        expected: true
      },
      {
        name: 'returns false for a floating point number',
        input: 3.14,
        expected: false
      }
    ])("isInteger - $name", async ({ input, expected }, { expect }) => {
      expect(isInteger(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isInteger('42')).toThrow(TypeError);
    });
  });

  describe.concurrent('isNaN', () => {
    test.concurrent.for([
      {
        name: 'returns true for NaN', 
        input: NaN,
        expected: true
      },
      {
        name: 'returns false for number',
        input: 42,
        expected: false
      },
      {
        name: 'returns false for string',
        input: 'hello',
        expected: false
      },
      {
        name: 'returns false for undefined',
        input: undefined,
        expected: false
      },
      {
        name: 'returns false for null',
        input: null,
        expected: false
      }
    ])("isNaN - $name", async ({ input, expected }, { expect }) => {
      expect(isNaN(input)).toBe(expected);
    });
  });

  describe.concurrent('isNegative', () => {
    test.concurrent.for([
      {
        name: 'returns true for a negative number',
        input: -5,
        expected: true
      },
      {
        name: 'returns false for a positive number',
        input: 5,
        expected: false
      },
      {
        name: 'returns false for zero',
        input: 0,
        expected: false
      }
    ])("isNegative - $name", async ({ input, expected }, { expect }) => {
      expect(isNegative(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isNegative('abc')).toThrow(TypeError);
    });
  });

  describe.concurrent('isOdd', () => {
    test.concurrent.for([
      {
        name: 'returns true for an odd number',
        input: 3,
        expected: true
      },
      {
        name: 'returns false for an even number',
        input: 2,
        expected: false
      },
      {
        name: 'returns false for zero',
        input: 0,
        expected: false
      }
    ])("isOdd - $name", async ({ input, expected }, { expect }) => {
      expect(isOdd(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isOdd('3')).toThrow(TypeError);
    });
  });

  describe.concurrent('isPositive', () => {
    test.concurrent.for([
      {
        name: 'returns true for a positive number',
        input: 5,
        expected: true
      },
      {
        name: 'returns false for a negative number',
        input: -5,
        expected: false
      },
      {
        name: 'returns false for zero',
        input: 0,
        expected: false
      }
    ])("isPositive - $name", async ({ input, expected }, { expect }) => {
      expect(isPositive(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isPositive('abc')).toThrow(TypeError);
    });
  });

  describe.concurrent('isPrime', () => {
    test.concurrent.for([
      {
        name: 'returns true for 2',
        input: 2,
        expected: true
      },
      {
        name: 'returns true for a prime number (e.g., 7)',
        input: 7,
        expected: true
      },
      {
        name: 'returns false for a composite number (e.g., 9)',
        input: 9,
        expected: false
      }
    ])("isPrime - $name", async ({ input, expected }, { expect }) => {
      expect(isPrime(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-integer input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isPrime(3.14)).toThrow(TypeError);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => isPrime('7')).toThrow(TypeError);
    });
  });

  describe.concurrent("range", () => {
    test.concurrent.for([
      {
        name: "generates a range from start to end (exclusive)",
        start: 2,
        end: 5,
        expected: [2, 3, 4],
      },
      {
        name: "generates a range with a step",
        start: 1,
        end: 10,
        step: 2,
        expected: [1, 3, 5, 7, 9],
      },
      {
        name: "generates a decreasing range",
        start: 5,
        end: 1,
        step: -1,
        expected: [5, 4, 3, 2],
      },
      {
        name: "returns an empty array if start >= end and step is positive",
        start: 5,
        end: 5,
        expected: [],
      },
      {
        name: "returns an empty array if start <= end and step is negative",
        start: 1,
        end: 5,
        step: -1,
        expected: [],
      },
      {
        name: "handles floating point steps",
        start: 0,
        end: 1,
        step: 0.2,
        expected: [0, 0.2, 0.4, 0.6, 0.8],
      },
    ])("range - $name", async ({ start, end, step, expected }, { expect }) => {
      expect(range(start, end, step)).toEqual(expected);
    });
  });

  describe.concurrent('sumOfDigits', () => {
    test.concurrent.for([
      {
        name: 'calculates sum of digits for a positive integer',
        input: 123,
        expected: 6
      },
      {
        name: 'calculates sum of digits for a single digit number',
        input: 7,
        expected: 7
      },
      {
        name: 'calculates sum of digits for zero',
        input: 0,
        expected: 0
      }
    ])("sumOfDigits - $name", async ({ input, expected }, { expect }) => {
      expect(sumOfDigits(input)).toBe(expected);
    });

    test.concurrent('throws TypeError for non-numeric input', async ({ expect }) => {
      // @ts-ignore
      expect(() => sumOfDigits('123')).toThrow(TypeError);
    });
  });
});
