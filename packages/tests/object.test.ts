import { test, describe } from 'vitest';
import {
	clone,
	flattenObj,
	freeze,
	get,
	has,
	isEqual,
	isFrozen,
	isNotNullObject,
	isPlainObject,
	isSealed,
	merge,
	omit,
	pick,
	seal,
	set,
	unflattenObj
} from '../src/object';

describe("Object", () => {
	describe.concurrent('clone', () => {
		test.concurrent.for([
			{
				name: 'creates a deep copy of an object',
				input: { a: 1, b: { c: 2 } }
			}
		])("clone - $name", async ({ input }, { expect }) => {
			const cloned = clone(input);
			expect(input).toStrictEqual(cloned);
		});
	});

	describe.concurrent('flattenObj', () => {
		test.concurrent.for([
			{
				name: 'flattens a nested object',
				input: { a: 1, b: { c: 2, d: { e: 3 } } },
				expected: { "a": 1, "b.c": 2, "b.d.e": 3 }
			},
			{
				name: 'flattens with array inside object',
				input: { a: [1, 2], b: { c: [3, 4] } },
				expected: { "a[0]": 1, "a[1]": 2, "b.c[0]": 3, "b.c[1]": 4 }
			},
			{
				name: 'flattens object with special key characters',
				input: { 'a.b': { c: 1 }, 'x.y': 2 },
				expected: { '[a.b].c': 1, '[x.y]': 2 }
			},
			{
				name: 'flattens deeply nested array',
				input: [1, [2, [3]]],
				expected: { '[0]': 1, '[1][0]': 2, '[1][1][0]': 3 }
			},
			{
				name: 'flattens mixed object and array structure',
				input: { a: [{ b: 1 }, { c: 2 }] },
				expected: { 'a[0].b': 1, 'a[1].c': 2 }
			},
			{
				name: 'flattens object with numeric keys (not arrays)',
				input: { 0: 'a', 1: { 2: 'b' } },
				expected: { '0': 'a', '1.2': 'b' }
			},
			{
				name: 'flattens object with numeric string keys',
				input: { foo: { '0': { bar: 1 } } },
				expected: { 'foo.0.bar': 1 }
			},
			{
				name: 'flattens empty object',
				input: {},
				expected: {}
			},
			{
				name: 'flattens null values and keeps them',
				input: { a: null, b: { c: null } },
				expected: { 'a': null, 'b.c': null }
			}
		])("flattenObj - $name", async ({ input, expected }, { expect }) => {
			expect(flattenObj(input)).toEqual(expected);
		});
	});

	describe.concurrent('freeze', () => {
		test.concurrent.for([
			{
				name: 'freezes an object',
				input: { a: 1, b: 2 },
				expected: true
			},
			{
				name: 'deeply freezes an object and its properties',
				input: { a: 1, b: { c: 2 } },
				expected: true
			}
		])("freeze - $name", async ({ input, expected }, { expect }) => {
			const frozenObj = freeze(input);
			expect(Object.isFrozen(frozenObj)).toBe(expected);
		});
	});

	describe.concurrent('get', () => {
		test.concurrent.for([
			{
				name: 'gets value using string path',
				input: { obj: { a: { b: { c: 1 } } }, path: 'a.b.c' },
				expected: 1
			},
			{
				name: 'gets value using array path',
				input: { obj: { a: { b: { c: 1 } } }, path: ['a', 'b', 'c'] },
				expected: 1
			},
			{
				name: 'gets value from array using string path',
				input: { obj: { items: [{ id: 1 }, { id: 2 }] }, path: 'items[1].id' },
				expected: 2
			},
			{
				name: 'returns undefined for non-existent path',
				input: { obj: { a: 1 }, path: 'b.c' },
				expected: undefined
			}
		])("get - $name", async ({ input, expected }, { expect }) => {
			expect(get(input.obj, input.path)).toEqual(expected);
		});
	});

	describe.concurrent('has', () => {
		test.concurrent.for([
			{
				name: 'checks existence using string path',
				input: { obj: { a: { b: { c: 1 } } }, path: 'a.b.c' },
				expected: true
			},
			{
				name: 'checks existence using array path',
				input: { obj: { a: { b: { c: 1 } } }, path: ['a', 'b', 'c'] },
				expected: true
			},
			{
				name: 'returns false for non-existent path',
				input: { obj: { a: 1 }, path: 'b.c' },
				expected: false
			},
			{
				name: 'checks existence in array using string path',
				input: { obj: { items: [{ id: 1 }] }, path: 'items[0].id' },
				expected: true
			}
		])("has - $name", async ({ input, expected }, { expect }) => {
			expect(has(input.obj, input.path)).toBe(expected);
		});
	});

	describe.concurrent('isEqual', () => {
		test.concurrent.for([
			{
				name: 'returns true for equal primitive values',
				input: { a: 1, b: 1 },
				expected: true
			},
			{
				name: 'returns false for different primitive values',
				input: { a: 1, b: 2 },
				expected: false
			},
			{
				name: 'returns false for 0 and -0',
				input: { a: 0, b: -0 },
				expected: false
			},
			{
				name: 'returns false for NaN comparisons',
				input: { a: NaN, b: NaN },
				expected: true
			},
			{
				name: 'returns true for null comparisons',
				input: { a: null, b: null },
				expected: true
			},
			{
				name: 'returns true for undefined comparisons',
				input: { a: undefined, b: undefined },
				expected: true
			},
			{
				name: 'returns false when comparing undefined and null',
				input: { a: undefined, b: null },
				expected: false
			},
			{
				name: 'returns true for same string values',
				input: { a: "test", b: "test" },
				expected: true
			},
			{
				name: 'returns true for same boolean values',
				input: { a: true, b: true },
				expected: true
			},
			{
				name: 'returns false for different boolean values',
				input: { a: true, b: false },
				expected: false
			},
			{
				name: 'handles special numeric values correctly',
				input: {
					a: {
						zero: 0,
						negZero: -0,
						infinity: Infinity,
						negInfinity: -Infinity,
						nan: NaN
					},
					b: {
						zero: 0,
						negZero: -0,
						infinity: Infinity,
						negInfinity: -Infinity,
						nan: NaN
					}
				},
				expected: true
			},
			{
				name: 'handles null and undefined in nested structures',
				input: {
					a: {
						a: null,
						b: undefined,
						c: {
							d: null,
							e: undefined,
							f: [null, undefined, { g: null }]
						}
					},
					b: {
						a: null,
						b: undefined,
						c: {
							d: null,
							e: undefined,
							f: [null, undefined, { g: null }]
						}
					}
				},
				expected: true
			},
			{
				name: 'compares arrays of different lengths',
				input: {
					a: [1, 2, 3],
					b: [1, 2, 3, 4]
				},
				expected: false
			},
			{
				name: 'compares sparse arrays',
				input: {
					a: [, , , 1],
					b: [undefined, undefined, undefined, 1]
				},
				expected: false
			},
			{
				name: 'compares Date instances',
				input: {
					a: new Date('2020-01-01'),
					b: new Date('2020-01-01')
				},
				expected: true
			},
			{
				name: 'compares RegExp instances',
				input: {
					a: /abc/gi,
					b: /abc/gi
				},
				expected: true
			},
			{
				name: 'compares functions',
				input: {
					a: () => 1,
					b: () => 1
				},
				expected: false
			},
			{
				name: 'compares Map instances',
				input: {
					a: new Map([['a', 1]]),
					b: new Map([['a', 1]])
				},
				expected: true
			},
			{
				name: 'handles circular references',
				input: (() => {
					const a: any = {};
					const b: any = {};
					a.self = a;
					b.self = b;
					return { a, b };
				})(),
				expected: true
			},
			{
				name: 'compares Uint8Array instances with same values',
				input: {
					a: new Uint8Array([1, 2, 3]),
					b: new Uint8Array([1, 2, 3])
				},
				expected: true
			},
			{
				name: 'returns false for different Buffer contents (Node.js)',
				input: {
					a: Buffer.from([1, 2, 3]),
					b: Buffer.from([1, 2, 4])
				},
				expected: false
			},
			{
				name: 'returns false for Buffer vs Uint8Array with same bytes',
				input: {
					a: Buffer.from([1, 2, 3]),
					b: new Uint8Array([1, 2, 3])
				},
				expected: false
			},
			{
				name: 'returns false for equal values but different TypedArray types',
				input: {
					a: new Int8Array([1, 2, 3]),
					b: new Uint8Array([1, 2, 3])
				},
				expected: false
			},
			{
				name: 'compares ArrayBuffer instances with same values',
				input: {
					a: new ArrayBuffer(3),
					b: new ArrayBuffer(3)
				},
				expected: true
			}
		])("isEqual - $name", async ({ input, expected }, { expect }) => {
			expect(isEqual(input.a, input.b)).toBe(expected);
		});
	});

	describe.concurrent('isFrozen', () => {
		test.concurrent.for([
			{
				name: 'returns true for frozen object',
				input: Object.freeze({}),
				expected: true
			},
			{
				name: 'returns false for non-frozen object',
				input: {},
				expected: false
			},
			{
				name: 'returns true for frozen array',
				input: Object.freeze([]),
				expected: true
			}
		])("isFrozen - $name", async ({ input, expected }, { expect }) => {
			expect(isFrozen(input)).toBe(expected);
		});
	});

	describe.concurrent('isNotNullObject', () => {
		test.concurrent.for([
			{
				name: 'returns true for plain object',
				input: {},
				expected: true
			},
			{
				name: 'returns true for array',
				input: [],
				expected: true
			},
			{
				name: 'returns false for null',
				input: null,
				expected: false
			},
			{
				name: 'returns false for undefined',
				input: undefined,
				expected: false
			},
			{
				name: 'returns true for Date object',
				input: new Date(),
				expected: true
			}
		])("isNotNullObject - $name", async ({ input, expected }, { expect }) => {
			expect(isNotNullObject(input)).toBe(expected);
		});
	});

	describe.concurrent('isPlainObject', () => {
		test.concurrent.for([
			{
				input: Object.create(null),
				expected: true
			},
			{
				input: new Object(),
				expected: true
			},
			{
				input: [],
				expected: false
			},
			{
				input: null,
				expected: false
			},
			{
				input: {},
				expected: true
			}
		])('should return $expected for $input', async ({ input, expected }, { expect }) => {
			expect(isPlainObject(input)).toBe(expected);
		});
	});

	describe.concurrent('isSealed', () => {
		test.concurrent.for([
			{
				name: 'returns true for sealed object',
				input: Object.seal({}),
				expected: true
			},
			{
				name: 'returns false for non-sealed object',
				input: {},
				expected: false
			},
			{
				name: 'returns true for sealed array',
				input: Object.seal([]),
				expected: true
			}
		])("isSealed - $name", async ({ input, expected }, { expect }) => {
			expect(isSealed(input)).toBe(expected);
		});
	});

	describe.concurrent('merge', () => {
		test.concurrent.for([
			{
				name: 'merges two objects',
				input: { obj1: { a: 1 }, obj2: { b: 2 } },
				expected: { a: 1, b: 2 }
			},
			{
				name: 'deeply merges two objects with nested properties',
				input: { obj1: { a: 1, b: { c: 2 } }, obj2: { b: { d: 3 } } },
				expected: { a: 1, b: { c: 2, d: 3 } }
			},
			{
				name: 'merges arrays in objects',
				input: { obj1: [1, 2], obj2: [3, 4] },
				expected: [3, 4]
			}
		])("merge - $name", async ({ input, expected }, { expect }) => {
			expect(merge(input.obj1, input.obj2)).toEqual(expected);
		});
	});

	describe.concurrent('omit', () => {
		test.concurrent.for([
			{
				name: 'omits specified properties from object',
				input: { obj: { a: 1, b: 2, c: 3 }, keys: ["b"] },
				expected: { a: 1, c: 3 }
			}
		])("omit - $name", async ({ input, expected }, { expect }) => {
			// @ts-ignore
			expect(omit(input.obj, input.keys)).toEqual(expected);
		});
	});

	describe.concurrent('pick', () => {
		test.concurrent.for([
			{
				name: 'picks specified properties from object',
				input: { obj: { a: 1, b: 2, c: 3 }, keys: ["a", "c"] },
				expected: { a: 1, c: 3 }
			}
		])("pick - $name", async ({ input, expected }, { expect }) => {
			// @ts-ignore
			expect(pick(input.obj, input.keys)).toEqual(expected);
		});
	});

	describe.concurrent('seal', () => {
		test.concurrent.for([
			{
				name: 'seals an object',
				input: { a: 1, b: 2 },
				expected: true
			},
			{
				name: 'deeply seals an object and its properties',
				input: { a: 1, b: { c: 2 } },
				expected: true
			}
		])("seal - $name", async ({ input, expected }, { expect }) => {
			const sealedObj = seal(input);
			expect(Object.isSealed(sealedObj)).toBe(expected);
		});
	});

	describe.concurrent('set', () => {
		test.concurrent.for([
			{
				name: 'sets value using string path',
				input: { obj: { a: { b: {} } }, path: 'a.b.c', value: 1 },
				expected: { a: { b: { c: 1 } } }
			},
			{
				name: 'sets value using array path',
				input: { obj: { a: { b: {} } }, path: ['a', 'b', 'c'], value: 1 },
				expected: { a: { b: { c: 1 } } }
			},
			{
				name: 'creates nested objects if they dont exist',
				input: { obj: {}, path: 'a.b.c', value: 1 },
				expected: { a: { b: { c: 1 } } }
			},
			{
				name: 'sets array value using string path',
				input: { obj: { items: [] }, path: 'items[0]', value: { id: 1 } },
				expected: { items: [{ id: 1 }] }
			}
		])("set - $name", async ({ input, expected }, { expect }) => {
			expect(set(input.obj, input.path, input.value)).toEqual(expected);
		});
	});

	describe.concurrent('unflattenObj', () => {
		test.concurrent.for([
			{
				name: 'unflattens a nested object',
				input: { "a": 1, "b.c": 2, "b.d.e": 3 },
				expected: { a: 1, b: { c: 2, d: { e: 3 } } }
			},
			{
				name: 'unflattens with array inside object',
				input: { "a[0]": 1, "a[1]": 2, "b.c[0]": 3, "b.c[1]": 4 },
				expected: { a: [1, 2], b: { c: [3, 4] } }
			},
			{
				name: 'unflattens object with special key characters',
				input: { '[a.b].c': 1, '[x.y]': 2 },
				expected: { 'a.b': { c: 1 }, 'x.y': 2 }
			},
			{
				name: 'unflattens deeply nested array',
				input: { '[0]': 1, '[1][0]': 2, '[1][1][0]': 3 },
				expected: [1, [2, [3]]]
			},
			{
				name: 'unflattens mixed object and array structure',
				input: { 'a[0].b': 1, 'a[1].c': 2 },
				expected: { a: [{ b: 1 }, { c: 2 }] }
			},
			{
				name: 'unflattens object with numeric keys (not arrays)',
				input: { '0': 'a', '1.2': 'b' },
				expected: { 0: 'a', 1: { 2: 'b' } }
			},
			{
				name: 'unflattens object with numeric string keys',
				input: { 'foo.0.bar': 1 },
				expected: { foo: { '0': { bar: 1 } } }
			},
			{
				name: 'unflattens empty object',
				input: {},
				expected: {}
			},
			{
				name: 'unflattens null values and keeps them',
				input: { 'a': null, 'b.c': null },
				expected: { a: null, b: { c: null } }
			}
		])("unflattenObj - $name", async ({ input, expected }, { expect }) => {
			expect(unflattenObj(input)).toEqual(expected);
		});
	});
})