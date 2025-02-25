import {
  after,
  before,
  chunk,
  compact,
  difference,
  first,
  flattenArr,
  getRandom,
  isIterable,
  last,
  rotate,
  sanitizeArr,
  shuffle,
  swap,
  union,
  unique,
} from "./src";

describe("Array Utility Functions", () => {
  test("after", () => {
    expect(after([1, 2, 3, 4], 2)).toEqual([4]);
    expect(after([1, 2, 3, 4], 0)).toEqual([2, 3, 4]);
  });

  test("before", () => {
    expect(before([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(before([1, 2, 3, 4], 0)).toEqual([]);
  });

  test("chunk", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    expect(chunk("abcdef", 2)).toEqual(["ab", "cd", "ef"]);
  });

  test("compact", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
    expect(compact([null, undefined, 0, false, "", 3])).toEqual([3]);
  });

  test("difference", () => {
    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test("first", () => {
    expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(first([1, 2, 3, 4])).toEqual([1]);
  });

  test("flattenArr", () => {
    expect(flattenArr([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
    expect(flattenArr([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  test("getRandom", () => {
    const arr = [1, 2, 3, 4];
    expect(arr).toContain(getRandom(arr));
    expect("abcdef").toContain(getRandom("abcdef"));
  });

  test("isIterable", () => {
    expect(isIterable([1, 2, 3])).toBe(true);
    expect(isIterable(123)).toBe(false);
  });

  test("last", () => {
    expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(last([1, 2, 3, 4])).toEqual([4]);
  });

  test("rotate", () => {
    expect(rotate([1, 2, 3, 4], 1)).toEqual([2, 3, 4, 1]);
    expect(rotate([1, 2, 3, 4], -1)).toEqual([4, 1, 2, 3]);
  });

  test("sanitizeArr", () => {
    expect(sanitizeArr([1, 2, 3, 4], [2, 3])).toEqual([1, 4]);
    expect(sanitizeArr([1, 2, 3, 4], [2, 3], 0)).toEqual([1, 0, 0, 4]);
  });

  test("shuffle", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffled = shuffle(Array.from(arr));
    expect(shuffled).toHaveLength(arr.length);
    expect(shuffled).not.toEqual(arr);
  });

  test("swap", () => {
    expect(swap([1, 2, 3, 4], 1, 3)).toEqual([1, 4, 3, 2]);
    expect(swap([1, 2, 3, 4], 0, 2)).toEqual([3, 2, 1, 4]);
  });

  test("union", () => {
    expect(union([1, 2], [2, 3])).toEqual([1, 2, 3]);
    expect(union([1, 2], [3, 4], [4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("unique", () => {
    expect(unique([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
    expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });
});