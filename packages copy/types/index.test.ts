import {
  getInstanceType,
  getType,
  isEqualType,
  isUndefined,
  isNull,
  isBoolean,
  isTruthy,
  isFalsy,
  isNumber,
  isBigint,
  isString,
  isFunction,
  isSymbol,
  isPrimitive,
  isPlainObject,
  isObject,
  isArray,
  isMap,
  isSet,
  isPromise,
  isJSON,
  isAsync,
  isDate,
  isRegExp
} from "./src";

describe("Type Utility Functions", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  
  test("getInstanceType", () => {
    expect(getInstanceType(new Map())).toBe("map");
    expect(getInstanceType(new Set())).toBe("set");
    expect(getInstanceType({})).toBe("object");
    expect(getInstanceType([])).toBe("array");
    expect(getInstanceType(null as any)).toBeUndefined();
    expect(getInstanceType(123 as any)).toBeUndefined();
  });

  test("getType", () => {
    expect(getType(123)).toBe("number");
    expect(getType("abc")).toBe("string");
    expect(getType(null)).toBe("null");
    expect(getType(undefined)).toBe("undefined");
    expect(getType([])).toBe("array");
    expect(getType({})).toBe("object");
    expect(getType(NaN)).toBe("nan");
    expect(getType(Infinity)).toBe("infinity");
  });

  test("isEqualType", () => {
    expect(isEqualType(123, 456)).toBe(true);
    expect(isEqualType(123, "abc")).toBe(false);
  });

  test("isUndefined", () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
  });

  test("isNull", () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
  });

  test("isBoolean", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(0)).toBe(false);
  });

  test("isTruthy", () => {
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy(0)).toBe(false);
  });

  test("isFalsy", () => {
    expect(isFalsy(false)).toBe(true);
    expect(isFalsy(0)).toBe(true);
    expect(isFalsy(1)).toBe(false);
  });

  test("isNumber", () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber("123")).toBe(false);
  });

  test("isBigint", () => {
    expect(isBigint(BigInt(123))).toBe(true);
    expect(isBigint(123)).toBe(false);
  });

  test("isString", () => {
    expect(isString("abc")).toBe(true);
    expect(isString(123)).toBe(false);
  });

  test("isFunction", () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(123)).toBe(false);
  });

  test("isSymbol", () => {
    expect(isSymbol(Symbol("sym"))).toBe(true);
    expect(isSymbol("sym")).toBe(false);
  });

  test("isPrimitive", () => {
    expect(isPrimitive(123)).toBe(true);
    expect(isPrimitive({})).toBe(false);
  });

  test("isPlainObject", () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(new Map())).toBe(false);
  });

  test("isObject", () => {
    expect(isObject({})).toBe(true);
    expect(isObject(123)).toBe(false);
  });

  test("isArray", () => {
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
  });

  test("isMap", () => {
    expect(isMap(new Map())).toBe(true);
    expect(isMap({})).toBe(false);
  });

  test("isSet", () => {
    expect(isSet(new Set())).toBe(true);
    expect(isSet({})).toBe(false);
  });

  test("isPromise", () => {
    expect(isPromise(Promise.resolve())).toBe(true);
    expect(isPromise({})).toBe(false);
  });

  test("isJSON", () => {
    expect(isJSON('{"a":1}')).toBe(true);
    expect(isJSON("{a:1}")).toBe(false);
  });

  test("isAsync", () => {
    expect(isAsync(async () => {})).toBe(true);
    expect(isAsync(() => { })).toBe(false);
    expect(isAsync({} as any)).toBe(false);
  });

  test("isDate", () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate("2023-01-01" as any)).toBe(false);
  });

  test("isRegExp", () => {
    expect(isRegExp(/abc/)).toBe(true);
    expect(isRegExp("abc")).toBe(false);
  });
});
