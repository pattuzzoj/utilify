import { test, describe } from 'vitest';
import {
  customError,
  isAggregateError,
  isDOMException,
  isError,
  isEvalError,
  isRangeError,
  isReferenceError,
  isSyntaxError,
  isTypeError,
  isURIError
} from '../src/error';

describe('Error', () => {
  describe.concurrent('customError', () => {
    test('should create custom error with name and message', ({ expect }) => {
      const CustomTestError = customError('CustomTestError');
      const error = new CustomTestError('test message');
      
      expect(error.name).toBe('CustomTestError');
      expect(error.message).toBe('test message');
      expect(error instanceof Error).toBe(true);
    });
  });

  describe.concurrent('isAggregateError', () => {
    test.concurrent.for([
      {
        input: new AggregateError([]),
        expected: true
      },
      {
        input: new Error(),
        expected: false
      },
      {
        input: {},
        expected: false
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isAggregateError(input)).toBe(expected);
    });
  });

  describe.concurrent('isDOMException', () => {
    test.concurrent.for([
      {
        input: new DOMException('test message'),
        expected: true
      },
      {
        input: new Error(),
        expected: false
      },
      {
        input: {},
        expected: false
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isDOMException(input)).toBe(expected);
    });
  });

  describe.concurrent('isError', () => {
    test.concurrent.for([
      {
        input: new Error(),
        expected: true
      },
      {
        input: new TypeError(),
        expected: true
      },
      {
        input: {},
        expected: false
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isError(input)).toBe(expected);
    });
  });

  describe.concurrent('isEvalError', () => {
    test.concurrent.for([
      {
        input: new EvalError(),
        expected: true
      },
      {
        input: new Error(),
        expected: false
      },
      {
        input: {},
        expected: false
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isEvalError(input)).toBe(expected);
    });
  });

  describe.concurrent('isRangeError', () => {
    test.concurrent.for([
      {
        input: new RangeError(),
        expected: true
      },
      {
        input: new Error(),
        expected: false
      },
      {
        input: {},
        expected: false
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isRangeError(input)).toBe(expected);
    });
  });

  describe.concurrent('isReferenceError', () => {
    test.concurrent.for([
      {
        input: new ReferenceError(),
        expected: true
      },
      {
        input: new Error(),
        expected: false
      },
      {
        input: {},
        expected: false
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isReferenceError(input)).toBe(expected);
    });
  });

  describe.concurrent('isSyntaxError', () => {
    test.concurrent.for([
      {
        input: new SyntaxError(),
        expected: true
      },
      {
        input: new Error(),
        expected: false
      },
      {
        input: {},
        expected: false
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isSyntaxError(input)).toBe(expected);
    });
  });

  describe.concurrent('isTypeError', () => {
    test.concurrent.for([
      {
        input: new TypeError(),
        expected: true
      },
      {
        input: new Error(),
        expected: false
      },
      {
        input: {},
        expected: false
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isTypeError(input)).toBe(expected);
    });
  });

  describe.concurrent('isURIError', () => {
    test.concurrent.for([
      {
        input: new URIError(),
        expected: true
      },
      {
        input: new Error(),
        expected: false
      },
      {
        input: {},
        expected: false
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isURIError(input)).toBe(expected);
    });
  });
});
