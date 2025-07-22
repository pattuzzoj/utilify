import { test, describe } from "vitest";
import {
  adjust,
  after,
  aperture,
  append,
  arrayToObject,
  before,
  chunk,
  collectBy,
  compact,
  count,
  cycle,
  difference,
  first,
  flatMap,
  flat,
  groupBy,
  includes,
  isIterable,
  last,
  reject,
  repeat,
  rotate,
  sample,
  shuffle,
  swap,
  union,
  unique,
  unzip,
  zip
} from "../src/array";

describe("Array", () => {
  describe.concurrent("adjust", () => {
    test.concurrent.for([
      {
        name: "adjusts element at index 2 by doubling it",
        array: [0, 1, 2, 3],
        index: 2,
        fn: (x: number) => x * 2,
        expected: [0, 1, 4, 3]
      },
      {
        name: "adjust on empty array returns empty",
        array: [],
        index: 2,
        fn: (x: number) => x * 2,
        expected: []
      },
    ])("adjust - $name", async ({ array, index, fn, expected }, { expect }) => {
      expect(adjust(array, index, fn)).toEqual(expected);
    });
  });

  describe.concurrent("after", () => {
    test.concurrent.for([
      {
        name: "returns elements after index 2",
        array: [1, 2, 3, 4],
        index: 2,
        expected: [4]
      },
      {
        name: "returns elements after index 0",
        array: [1, 2, 3, 4],
        index: 0,
        expected: [2, 3, 4]
      },
    ])("after - $name", async ({ array, index, expected }, { expect }) => {
      expect(after(array, index)).toEqual(expected);
    });
  });

  describe.concurrent("aperture", () => {
    test.concurrent.for([
      {
        name: "creates sliding windows of size 2",
        array: [1, 2, 3, 4],
        size: 2,
        expected: [[1, 2], [2, 3], [3, 4]]
      },
      {
        name: "creates sliding windows of size 3",
        array: [1, 2, 3, 4],
        size: 3,
        expected: [[1, 2, 3], [2, 3, 4]]
      },
      {
        name: "returns empty array when window size exceeds array length",
        array: [1, 2, 3],
        size: 4,
        expected: []
      },
      {
        name: "handles empty array",
        array: [],
        size: 2,
        expected: []
      },
    ])("aperture - $name", async ({ array, size, expected }, { expect }) => {
      expect(aperture(array, size)).toEqual(expected);
    });
  });

  describe.concurrent("append", () => {
    test.concurrent.for([
      {
        name: "appends number to array",
        array: [1, 2, 3],
        value: 4,
        expected: [1, 2, 3, 4]
      },
      {
        name: "appends string to array",
        array: ["a", "b"],
        value: "c",
        expected: ["a", "b", "c"]
      },
      {
        name: "appends null to empty array",
        array: [],
        value: null,
        expected: [null]
      },
      {
        name: "appends object to array",
        array: [{ id: 0 }],
        value: { id: 1 },
        expected: [{ id: 0 }, { id: 1 }]
      },
    ])("append - $name", async ({ array, value, expected }, { expect }) => {
      expect(append(array, value)).toEqual(expected);
    });
  });

  describe.concurrent("arrayToObject", () => {
    test.concurrent.for([
      {
        name: "converts array of objects to lookup by id",
        array: [{ id: "a", name: "Ana" }, { id: "b", name: "Bruno" }],
        keyFn: (item: any) => item.id,
        valueFn: (item: any) => item.name,
        expected: { a: "Ana", b: "Bruno" },
      },
      {
        name: "maps strings to uppercase values",
        array: ["a", "b", "c"],
        keyFn: (item) => item,
        valueFn: (item) => item.toUpperCase(),
        expected: { a: "A", b: "B", c: "C" },
      },
      {
        name: "squares numbers with prefixed keys",
        array: [1, 2, 3],
        keyFn: (n) => `n${n}`,
        valueFn: (n) => n * n,
        expected: { n1: 1, n2: 4, n3: 9 },
      },
      {
        name: "creates object from array of coded objects",
        array: [{ code: "x", value: 10 }, { code: "y", value: 20 }],
        keyFn: (item) => item.code,
        expected: {
          x: { code: "x", value: 10 },
          y: { code: "y", value: 20 },
        },
      },
    ])("arrayToObject - $name", async ({ array, keyFn, valueFn, expected }, { expect }) => {
      expect(arrayToObject(array, keyFn, valueFn)).toEqual(expected);
    });
  });

  describe.concurrent("before", () => {
    test.concurrent.for([
      {
        name: "returns elements before index 2",
        array: [1, 2, 3, 4],
        index: 2,
        expected: [1, 2]
      },
      {
        name: "returns empty array when index is 0",
        array: [1, 2, 3, 4],
        index: 0,
        expected: []
      },
    ])("before - $name", async ({ array, index, expected }, { expect }) => {
      expect(before(array, index)).toEqual(expected);
    });
  });

  describe.concurrent("chunk", () => {
    test.concurrent.for([
      {
        name: "chunks string into size 2",
        input: "abcdef",
        size: 2,
        expected: ["ab", "cd", "ef"]
      },
      {
        name: "chunks array into size 2 with remainder",
        input: [1, 2, 3, 4, 5],
        size: 2,
        expected: [[1, 2], [3, 4], [5]]
      },
    ])("chunk - $name", async ({ input, size, expected }, { expect }) => {
      // @ts-ignore
      expect(chunk(input, size)).toEqual(expected);
    });
  });

  describe('collectBy', () => {
    test.concurrent.for([
      {
        name: "groups elements by type property",
        array: [
          { type: 'breakfast', item: '☕️' },
          { type: 'lunch', item: '🌯' },
          { type: 'dinner', item: '🍝' },
          { type: 'breakfast', item: '🥐' },
          { type: 'lunch', item: '🍕' },
        ],
        keyFn: (value) => value["type"],
        expected: [
          [
            { type: 'breakfast', item: '☕️' },
            { type: 'breakfast', item: '🥐' },
          ],
          [
            { type: 'lunch', item: '🌯' },
            { type: 'lunch', item: '🍕' },
          ],
          [
            { type: 'dinner', item: '🍝' },
          ],
        ],
      },
      {
        name: "groups numbers by even/odd",
        array: [1, 2, 3, 4, 5, 6],
        keyFn: (n: number) => (n % 2 === 0 ? 'even' : 'odd'),
        expected: [
          [1, 3, 5],
          [2, 4, 6],
        ],
      },
      {
        name: "handles empty array",
        array: [],
        keyFn: (x: any) => x,
        expected: [],
      },
    ])('collectBy - $name', async ({ array, keyFn, expected }, { expect }) => {
      // @ts-ignore
      expect(collectBy(array, keyFn)).toEqual(expected);
    });
  });

  describe.concurrent("compact", () => {
    test.concurrent.for([
      {
        name: "removes falsy values from mixed array",
        input: [0, 1, false, 2, "", 3],
        expected: [1, 2, 3]
      },
      {
        name: "removes all falsy except number 3",
        input: [null, undefined, 0, false, "", 3],
        expected: [3]
      },
    ])("compact - $name", async ({ input, expected }, { expect }) => {
      expect(compact(input)).toEqual(expected);
    });
  });

  describe.concurrent("count", () => {
    test.concurrent.for([
      {
        name: "count even numbers",
        array: [1, 2, 3, 4],
        predicate: (x: number) => x % 2 === 0,
        expected: 2
      },
      {
        name: "count numbers > 3",
        array: [1, 2, 3, 4, 5],
        predicate: (x: number) => x > 3,
        expected: 2
      }
    ])("count - $name", async ({ array, predicate, expected }, { expect }) => {
      expect(count(array, predicate)).toEqual(expected);
    });
  });

  describe.concurrent("cycle", () => {
    test.concurrent.for([
      {
        name: "cycles through elements of [1, 2, 3]",
        array: [1, 2, 3],
        calls: 5,
        expected: [1, 2, 3, 1, 2]
      },
      {
        name: "single element array [5]",
        array: [5],
        calls: 3,
        expected: [5, 5, 5]
      },
      {
        name: "empty array returns undefined",
        array: [],
        calls: 2,
        expected: [undefined, undefined]
      },
      {
        name: "cycles strings ['a', 'b']",
        array: ['a', 'b'],
        calls: 4,
        expected: ['a', 'b', 'a', 'b']
      }
    ])("cycle - $name", async ({ array, calls, expected }, { expect }) => {
      // @ts-ignore
      const next = cycle(array);
      const results = [];
      for (let i = 0; i < calls; i++) {
        // @ts-ignore
        results.push(next());
      }
      expect(results).toEqual(expected);
    });
  });

  describe.concurrent("difference", () => {
    test.concurrent.for([
      {
        name: "returns elements in arr1 not present in arr2",
        arr1: [1, 2, 3],
        arr2: [2, 3, 4],
        expected: [1]
      },
      {
        name: "returns empty array when arr1 and arr2 are identical",
        arr1: [1, 2, 3],
        arr2: [1, 2, 3],
        expected: []
      },
      // { 
      //   name: "returns unique objects based on property x", 
      //   arr1: [{ 'x': 2 }, { 'x': 1 }], 
      //   arr2: [{ 'x': 1 }], 
      //   expected: [{ 'x': 2 }]
      // }
    ])("difference - $name", async ({ arr1, arr2, expected }, { expect }) => {
      expect(difference(arr1, arr2)).toEqual(expected);
    });
  });



  describe.concurrent("first", () => {
    test.concurrent.for([
      {
        name: "returns first 2 elements",
        array: [1, 2, 3, 4],
        n: 2,
        expected: [1, 2]
      },
      {
        name: "returns first element by default",
        array: [1, 2, 3, 4],
        expected: [1]
      },
    ])("first - $name", async ({ array, n, expected }, { expect }) => {
      expect(first(array, n)).toEqual(expected);
    });
  });

  describe.concurrent("flatMap", () => {
    test.concurrent.for([
      {
        name: "maps numbers to themselves and their multiples of 10",
        array: [1, 2, 3],
        fn: (n) => [n, n * 10],
        expected: [1, 10, 2, 20, 3, 30],
      },
      {
        name: "maps letters to themselves and uppercase versions",
        array: ["a", "b"],
        fn: (ch) => [ch, ch.toUpperCase()],
        expected: ["a", "A", "b", "B"],
      },
      {
        name: "returns empty array for empty input",
        array: [],
        fn: (x) => [x],
        expected: [],
      },
    ])("flatMap - $name", async ({ array, fn, expected }, { expect }) => {
      expect(flatMap(array, fn)).toEqual(expected);
    });
  });

  describe.concurrent("flat", () => {
    test.concurrent.for([
      {
        name: "flattens array to depth 2",
        array: [1, [2, [3, [4]]]],
        depth: 2,
        expected: [1, 2, 3, [4]]
      },
      {
        name: "fully flattens nested arrays",
        array: [1, [2, [3, [4]]]],
        expected: [1, 2, 3, 4]
      },
    ])("flattenArr - $name", async ({ array, depth, expected }, { expect }) => {
      expect(flat(array, depth)).toEqual(expected);
    });
  });

  describe.concurrent("groupBy", () => {
    test.concurrent.for([
      {
        name: "groups numbers by floor value",
        array: [6.1, 4.2, 6.3],
        fn: Math.floor,
        expected: { "6": [6.1, 6.3], "4": [4.2] },
      },
      {
        name: "groups strings by first letter",
        array: ["apple", "banana", "apricot", "blueberry"],
        fn: (s: string) => s[0],
        expected: { a: ["apple", "apricot"], b: ["banana", "blueberry"] },
      },
      {
        name: "groups numbers by parity",
        array: [1, 2, 3, 4, 5],
        fn: (n: number) => (n % 2 === 0 ? "even" : "odd"),
        expected: { odd: [1, 3, 5], even: [2, 4] },
      },
      {
        name: "handles empty array gracefully",
        array: [],
        fn: (x: any) => x,
        expected: {},
      },
    ])("groupBy - $name", async ({ array, fn, expected }, { expect }) => {
      // @ts-ignore
      expect(groupBy(array, fn)).toEqual(expected);
    });
  });

  describe.concurrent("includes", () => {
    test.concurrent.for([
      {
        name: "finds number in array",
        array: [1, 2, 3, 4],
        value: 3,
        expected: true
      },
      {
        name: "returns false when value not found",
        array: [1, 2, 3, 4],
        value: 5,
        expected: false
      },
      {
        name: "finds string in array",
        array: ["a", "b", "c"],
        value: "b",
        expected: true
      },
      {
        name: "handles empty array",
        array: [],
        value: 1,
        expected: false
      }
    ])("includes - $name", async ({ array, value, expected }, { expect }) => {
      expect(includes(array, value)).toBe(expected);
    });
  });

  describe.concurrent("sample", () => {
    test.concurrent.for([
      {
        name: "returns random element from array",
        input: [1, 2, 3],
        contain: [1, 2, 3]
      },
      {
        name: "returns random character from string",
        input: "abc",
        contain: Array.from("abc")
      },
    ])("sample - $name", async ({ input, contain }, { expect }) => {
      expect(input).toContain(sample(contain as any));
    });
  });

  describe.concurrent("isIterable", () => {
    test.concurrent.for([
      {
        name: "handles array",
        input: [1, 2, 3],
        expected: true,
      },
      {
        name: "handles string",
        input: "hello",
        expected: true,
      },
      {
        name: "handles number",
        input: 123,
        expected: false,
      },
      {
        name: "handles boolean",
        input: true,
        expected: false,
      },
      {
        name: "handles object",
        input: { a: 1 },
        expected: false,
      },
      {
        name: "handles Set",
        input: new Set([1, 2, 3]),
        expected: true,
      },
      {
        name: "handles Map",
        input: new Map([["a", 1]]),
        expected: true,
      },
      {
        name: "handles null",
        input: null,
        expected: false,
      },
      {
        name: "handles undefined",
        input: undefined,
        expected: false,
      },
    ])("isIterable - $name", async ({ input, expected }, { expect }) => {
      expect(isIterable(input)).toBe(expected);
    });
  });

  describe.concurrent("last", () => {
    test.concurrent.for([
      {
        name: "returns the last element of an array",
        array: [1, 2, 3],
        expected: [3]
      },
      {
        name: "returns undefined for an empty array",
        array: [],
        expected: []
      },
      {
        name: "returns the last character of a string",
        array: "abc",
        expected: "c"
      },
      {
        name: "returns undefined for an empty string",
        array: "",
        expected: ""
      },
    ])("last - $name", async ({ array, expected }, { expect }) => {
      expect(last(array as any)).toEqual(expected);
    });
  });

  describe.concurrent("reject", () => {
    test.concurrent.for([
      {
        name: "rejects even numbers",
        array: [1, 2, 3, 4, 5],
        predicate: (n: number) => n % 2 === 0,
        expected: [1, 3, 5],
      },
      {
        name: "rejects strings shorter than 3 characters",
        array: ["a", "bb", "ccc", "dddd"],
        predicate: (s: string) => s.length < 3,
        expected: ["ccc", "dddd"],
      },
      {
        name: "returns empty array if all elements are rejected",
        array: [1, 2, 3],
        predicate: (n: number) => n > 0,
        expected: [],
      },
      {
        name: "returns original array if no elements are rejected",
        array: [1, 2, 3],
        predicate: (n: number) => n > 5,
        expected: [1, 2, 3],
      },
      {
        name: "handles empty array",
        array: [],
        predicate: (n: number) => n > 0,
        expected: [],
      },
    ])("reject - $name", async ({ array, predicate, expected }, { expect }) => {
      expect(reject<typeof array[0]>(array, predicate as any)).toEqual(expected);
    });
  });

  describe.concurrent("repeat", () => {
    test.concurrent.for([
      {
        name: "repeat string 3 times",
        value: "abc",
        count: 3,
        expected: "abcabcabc",
      },
      {
        name: "repeat string 0 times returns empty string",
        value: "xyz",
        count: 0,
        expected: "",
      },
      {
        name: "repeat number 4 times returns array",
        value: 7,
        count: 4,
        expected: [7, 7, 7, 7],
      },
      {
        name: "repeat boolean true 2 times returns array",
        value: true,
        count: 2,
        expected: [true, true],
      },
      {
        name: "repeat object 3 times returns array",
        value: { a: 1 },
        count: 3,
        expected: [{ a: 1 }, { a: 1 }, { a: 1 }],
      },
      {
        name: "repeat with count 0 returns empty array",
        value: 42,
        count: 0,
        expected: [],
      },
    ])("repeat - $name", async ({ value, count, expected }, { expect }) => {
      expect(repeat(value, count)).toEqual(expected);
    });
  });

  describe.concurrent("rotate", () => {
    test.concurrent.for([
      {
        name: "rotates array to the right by 1 position",
        array: [1, 2, 3, 4, 5],
        positions: 1,
        expected: [2, 3, 4, 5, 1],
      },
      {
        name: "rotates array to the left by 2 positions",
        array: [1, 2, 3, 4, 5],
        positions: -2,
        expected: [4, 5, 1, 2, 3],
      },
      {
        name: "rotates array by positions greater than array length",
        array: [1, 2, 3],
        positions: 4,
        expected: [2, 3, 1],
      },
      {
        name: "returns same array if positions is 0",
        array: [1, 2, 3],
        positions: 0,
        expected: [1, 2, 3],
      },
      {
        name: "handles empty array",
        array: [],
        positions: 5,
        expected: [],
      },
    ])("rotate - $name", async ({ array, positions, expected }, { expect }) => {
      expect(rotate(array, positions)).toEqual(expected);
    });
  });

  describe.concurrent("shuffle", () => {
    test.concurrent.for([
      {
        name: "shuffles an array of numbers",
        array: [1, 2, 3, 4, 5],
      },
      {
        name: "shuffles an array of strings",
        array: ["a", "b", "c", "d", "e"],
      }
    ])("shuffle - $name", async ({ array }, { expect }) => {
      const input = [...array];
      expect(shuffle<typeof array[0]>(input)).not.toStrictEqual(array);
    });
  });

  describe.concurrent("swap", () => {
    test.concurrent.for([
      {
        name: "swaps elements at specified indices",
        array: [1, 2, 3, 4],
        indexA: 0,
        indexB: 3,
        expected: [4, 2, 3, 1],
      },
      {
        name: "swaps adjacent elements",
        array: [1, 2, 3],
        indexA: 0,
        indexB: 1,
        expected: [2, 1, 3],
      }
    ])("swap - $name", async ({ array, indexA, indexB, expected }, { expect }) => {
      expect(swap(array, indexA, indexB)).toEqual(expected);
    });

    test.concurrent.for([
      {
        name: "throws RangeError for index above array length",
        array: [1, 2, 3],
        indexA: 5,
        indexB: 1
      },
      {
        name: "throws RangeError for second index above array length",
        array: [1, 2, 3],
        indexA: 0,
        indexB: 5
      },
      {
        name: "throws RangeError for negative first index",
        array: [1, 2, 3],
        indexA: -1,
        indexB: 1
      },
      {
        name: "throws RangeError for negative second index",
        array: [1, 2, 3],
        indexA: 0,
        indexB: -1
      }
    ])("swap throws RangeError - $name", async ({ array, indexA, indexB }, { expect }) => {
      expect(() => swap(array, indexA, indexB)).toThrow(RangeError);
    });
  });

  describe.concurrent("union", () => {
    test.concurrent.for([
      {
        name: "combines unique elements from two arrays",
        arrays: [[1, 2], [2, 3]],
        expected: [1, 2, 3]
      },
      {
        name: "combines unique elements from three arrays",
        arrays: [[1, 2], [3, 4], [4, 5]],
        expected: [1, 2, 3, 4, 5]
      },
    ])("union - $name", async ({ arrays, expected }, { expect }) => {
      expect(union(...arrays)).toEqual(expected);
    });
  });

  describe.concurrent("unique", () => {
    test.concurrent.for([
      {
        name: "removes duplicate numbers",
        array: [1, 2, 2, 3, 4, 4],
        expected: [1, 2, 3, 4]
      },
      {
        name: "removes duplicate strings",
        array: ["a", "b", "a", "c"],
        expected: ["a", "b", "c"]
      },
    ])("unique - $name", async ({ array, expected }, { expect }) => {
      // @ts-ignore
      expect(unique(array)).toEqual(expected);
    });
  });

  describe.concurrent("unzip", () => {
    test.concurrent.for([
      {
        name: "unzips two pairs into two arrays",
        input: [[1, "a"], [2, "b"]],
        expected: [[1, 2], ["a", "b"]],
      },
      {
        name: "unzips three pairs into two arrays",
        input: [[1, "a"], [2, "b"], [3, "c"]],
        expected: [[1, 2, 3], ["a", "b", "c"]],
      },
      {
        name: "unzips empty input to empty array",
        input: [],
        expected: [],
      },
      {
        name: "unzips single pair array into two arrays",
        input: [[1, 2]],
        expected: [[1], [2]],
      },
    ])("unzip - $name", async ({ input, expected }, { expect }) => {
      expect(unzip(input)).toEqual(expected);
    });
  });

  describe.concurrent("zip", () => {
    test.concurrent.for([
      {
        name: "zips two arrays into pairs",
        input: [[1, 2], ["a", "b"]],
        expected: [[1, "a"], [2, "b"]]
      },
      {
        name: "zips three-element arrays",
        input: [[1, 2, 3], ["a", "b", "c"]],
        expected: [[1, "a"], [2, "b"], [3, "c"]]
      },
      {
        name: "handles empty arrays",
        input: [[], []],
        expected: []
      },
    ])("zip - $name", async ({ input, expected }, { expect }) => {
      expect(zip<typeof input[0][0]>(...input)).toEqual(expected);
    });
  });
});