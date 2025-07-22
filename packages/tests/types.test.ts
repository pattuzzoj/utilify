import { test, describe } from 'vitest';
import {
  getInstanceType,
  getType,
  isArray,
  isAsyncFunction,
  isAsyncGeneratorFunction,
  isBigint,
  isBoolean,
  isDate,
  isFalsy,
  isFunction,
  isGeneratorFunction,
  isMap,
  isNil,
  isNull,
  isNumber,
  isObject,
  isPrimitive,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  isWeakMap,
  isWeakRef,
  isWeakSet
} from '../src/types';

describe('Type', () => {
  describe.concurrent('getInstanceType', () => {
    test.concurrent.for([
      {
        input: {},
        expected: 'Object'
      },
      {
        input: [],
        expected: 'Array'
      },
      {
        input: new Date(),
        expected: 'Date'
      },
      {
        input: function () { },
        expected: 'Function'
      },
      {
        input: async function () { },
        expected: 'AsyncFunction'
      },
      {
        input: function* () { },
        expected: 'GeneratorFunction'
      },
      {
        input: Promise.resolve(),
        expected: 'Promise'
      },
      {
        input: new Map(),
        expected: 'Map'
      },
      {
        input: new Set(),
        expected: 'Set'
      },
      {
        input: new WeakMap(),
        expected: 'WeakMap'
      },
      {
        input: new WeakSet(),
        expected: 'WeakSet'
      },
      {
        input: Symbol('test'),
        expected: null
      },
      {
        input: BigInt(10),
        expected: null
      },
      {
        input: new (class MyClass { })(),
        expected: 'MyClass'
      },
      {
        input: Object.create(null),
        expected: null
      },
      {
        input: null,
        expected: null
      },
      {
        input: undefined,
        expected: null
      },
      {
        input: 123,
        expected: null
      },
      {
        input: 'string',
        expected: null
      },
      {
        input: true,
        expected: null
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(getInstanceType(input)).toBe(expected);
    });
  });

  describe.concurrent('isArray', () => {
    test.concurrent.for([
      {
        input: {},
        expected: false
      },
      {
        input: [],
        expected: true
      }
    ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
      expect(isArray(input)).toBe(expected);
    });

    describe.concurrent('getType', () => {
      test.concurrent.for([
        {
          input: 123,
          expected: 'number'
        },
        {
          input: NaN,
          expected: 'nan'
        },
        {
          input: Infinity,
          expected: 'infinity'
        },
        {
          input: 'hello',
          expected: 'string'
        },
        {
          input: true,
          expected: 'boolean'
        },
        {
          input: null,
          expected: 'null'
        },
        {
          input: undefined,
          expected: 'undefined'
        },
        {
          input: {},
          expected: 'object'
        },
        {
          input: [],
          expected: 'array'
        },
        {
          input: new Date(),
          expected: 'object'
        },
        {
          input: new RegExp(''),
          expected: 'object'
        },
        {
          input: Symbol('test'),
          expected: 'symbol'
        },
        {
          input: BigInt(10),
          expected: 'bigint'
        },
        {
          input: () => { },
          expected: 'function'
        },
        {
          input: new (class MyClass { })(),
          expected: 'object'
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(getType(input)).toBe(expected);
      });
    });

    describe.concurrent('isBoolean', () => {
      test.concurrent.for([
        {
          input: 'true',
          expected: false
        },
        {
          input: false,
          expected: true
        },
        {
          input: true,
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isBoolean(input)).toBe(expected);
      });
    });

    describe.concurrent('isBigint', () => {
      test.concurrent.for([
        {
          input: 10,
          expected: false
        },
        {
          input: '10',
          expected: false
        },
        {
          input: BigInt(10),
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isBigint(input)).toBe(expected);
      });
    });

    describe.concurrent('isDate', () => {
      test.concurrent.for([
        {
          input: '2023-01-01',
          expected: false
        },
        {
          input: new Date(),
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        // @ts-ignore
        expect(isDate(input)).toBe(expected);
      });
    });

    describe.concurrent('isFalsy', () => {
      test.concurrent.for([
        {
          name: 'returns true for false',
          input: false,
          expected: true
        },
        {
          name: 'returns true for 0',
          input: 0,
          expected: true
        },
        {
          name: 'returns true for empty string',
          input: '',
          expected: true
        },
        {
          name: 'returns true for null',
          input: null,
          expected: true
        },
        {
          name: 'returns true for undefined',
          input: undefined,
          expected: true
        },
        {
          name: 'returns true for NaN',
          input: NaN,
          expected: true
        },
        {
          name: 'returns false for true',
          input: true,
          expected: false
        },
        {
          name: 'returns false for non-empty string',
          input: 'hello',
          expected: false
        },
        {
          name: 'returns false for number > 0',
          input: 1,
          expected: false
        },
        {
          name: 'returns false for object',
          input: {},
          expected: false
        },
        {
          name: 'returns false for array',
          input: [],
          expected: false
        }
      ])("$name", async ({ input, expected }, { expect }) => {
        expect(isFalsy(input)).toBe(expected);
      });
    });

    describe.concurrent('isFunction', () => {
      test.concurrent.for([
        {
          input: {},
          expected: false
        },
        {
          input: () => { },
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isFunction(input)).toBe(expected);
      });
    });



    describe.concurrent('isMap', () => {
      test.concurrent.for([
        {
          input: {},
          expected: false
        },
        {
          input: null,
          expected: false
        },
        {
          input: new Map(),
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isMap(input)).toBe(expected);
      });
    });

    describe.concurrent('isAsyncFunction', () => {
      test.concurrent.for([
        {
          input: () => { },
          expected: false
        },
        {
          input: 'async',
          expected: false
        },
        {
          input: async () => { },
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isAsyncFunction(input)).toBe(expected);
      });
    });

    describe.concurrent('isAsyncGeneratorFunction', () => {
      test.concurrent.for([
        {
          input: async function* () { },
          expected: true
        },
        {
          input: function* () { },
          expected: false
        },
        {
          input: async () => { },
          expected: false
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isAsyncGeneratorFunction(input)).toBe(expected);
      });
    });

    describe.concurrent('isGeneratorFunction', () => {
      test.concurrent.for([
        {
          input: () => { },
          expected: false
        },
        {
          input: async () => { },
          expected: false
        },
        {
          input: 'not a function',
          expected: false
        },
        {
          input: function* () { },
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isGeneratorFunction(input)).toBe(expected);
      });
    });

    describe.concurrent('isNull', () => {
      test.concurrent.for([
        {
          name: 'returns true for null',
          input: null,
          expected: true
        },
        {
          name: 'returns false for non-null',
          input: undefined,
          expected: false
        }
      ])("$name", async ({ input, expected }, { expect }) => {
        expect(isNull(input)).toBe(expected);
      });
    });

    describe.concurrent('isNil', () => {
      test.concurrent.for([
        {
          name: 'returns true for null',
          input: null,
          expected: true
        },
        {
          name: 'returns true for undefined',
          input: undefined,
          expected: true
        },
        {
          name: 'returns false for non-null and non-undefined',
          input: 0,
          expected: false
        },
        {
          name: 'returns false for empty string',
          input: '',
          expected: false
        }
      ])("$name", async ({ input, expected }, { expect }) => {
        expect(isNil(input)).toBe(expected);
      });
    });

    describe.concurrent('isNumber', () => {
      test.concurrent.for([
        {
          input: '123',
          expected: false
        },
        {
          input: NaN,
          expected: false
        },
        {
          input: Infinity,
          expected: false
        },
        {
          input: -Infinity,
          expected: false
        },
        {
          input: 123,
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isNumber(input)).toBe(expected);
      });
    });

    describe.concurrent('isObject', () => {
      test.concurrent.for([
        {
          input: null,
          expected: false
        },
        {
          input: [],
          expected: false
        },
        {
          input: {},
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isObject(input)).toBe(expected);
      });
    });

    describe.concurrent('isPrimitive', () => {
      test.concurrent.for([
        {
          name: 'returns true for string',
          input: 'hello',
          expected: true
        },
        {
          name: 'returns true for number',
          input: 123,
          expected: true
        },
        {
          name: 'returns true for boolean',
          input: true,
          expected: true
        },
        {
          name: 'returns true for symbol',
          input: Symbol('test'),
          expected: true
        },
        {
          name: 'returns true for bigint',
          input: BigInt(10),
          expected: true
        },
        {
          name: 'returns true for null',
          input: null,
          expected: true
        },
        {
          name: 'returns true for undefined',
          input: undefined,
          expected: true
        },
        {
          name: 'returns false for object',
          input: {},
          expected: false
        },
        {
          name: 'returns false for array',
          input: [],
          expected: false
        },
        {
          name: 'returns false for function',
          input: () => { },
          expected: false
        }
      ])("$name", async ({ input, expected }, { expect }) => {
        expect(isPrimitive(input)).toBe(expected);
      });
    });

    describe.concurrent('isPromise', () => {
      test.concurrent.for([
        {
          input: {},
          expected: false
        },
        {
          input: Promise.resolve(),
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isPromise(input)).toBe(expected);
      });
    });

    describe.concurrent('isRegExp', () => {
      test.concurrent.for([
        {
          input: 'abc',
          expected: false
        },
        {
          input: /abc/,
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isRegExp(input)).toBe(expected);
      });
    });

    describe.concurrent('isSet', () => {
      test.concurrent.for([
        {
          input: {},
          expected: false
        },
        {
          input: new Set(),
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isSet(input)).toBe(expected);
      });
    });

    describe.concurrent('isString', () => {
      test.concurrent.for([
        {
          input: 123,
          expected: false
        },
        {
          input: 'hello',
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isString(input)).toBe(expected);
      });
    });

    describe.concurrent('isSymbol', () => {
      test.concurrent.for([
        {
          input: 'symbol',
          expected: false
        },
        {
          input: Symbol('test'),
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isSymbol(input)).toBe(expected);
      });
    });

    describe.concurrent('isUndefined', () => {
      test.concurrent.for([
        {
          input: null,
          expected: false
        },
        {
          input: undefined,
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isUndefined(input)).toBe(expected);
      });
    });

    describe.concurrent('isWeakMap', () => {
      test.concurrent.for([
        {
          input: new Map(),
          expected: false
        },
        {
          input: {},
          expected: false
        },
        {
          input: new WeakMap(),
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isWeakMap(input)).toBe(expected);
      });
    });

    describe.concurrent('isWeakSet', () => {
      test.concurrent.for([
        {
          input: new Set(),
          expected: false
        },
        {
          input: {},
          expected: false
        },
        {
          input: new WeakSet(),
          expected: true
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isWeakSet(input)).toBe(expected);
      });
    });

    describe.concurrent('isWeakRef', () => {
      test.concurrent.for([
        {
          input: new WeakRef({}),
          expected: true
        },
        {
          input: {},
          expected: false
        },
        {
          input: null,
          expected: false
        }
      ])('should return $expected for $input', async ({ input, expected }, { expect }) => {
        expect(isWeakRef(input)).toBe(expected);
      });
    });
  })
});
