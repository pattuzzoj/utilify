import {
	clone,
	deepClone,
	freeze,
	deepFreeze,
	merge,
	deepMerge,
	flattenObj,
	unflattenObj,
	interpolate,
	isEqual,
	isDeepEqual,
	omit,
	pick,
	sanitizeObj
  } from "./src";
  
  describe("Object Utility Functions", () => {
	test("clone", () => {
	  const obj = { a: 1, b: 2 };
	  const clonedObj = clone(obj);
	  expect(clonedObj).toEqual(obj);
	  expect(clonedObj).not.toBe(obj);
	  expect([1, ["text"]]).toStrictEqual([1, ["text"]]);
	});
  
	test("deepClone", () => {
	  const obj = { a: 1, b: { c: 2 } };
	  const clonedObj = deepClone(obj);
	  expect(clonedObj).toEqual(obj);
	  expect(clonedObj).not.toBe(obj);
	  expect(clonedObj.b).not.toBe(obj.b);
	});
  
	test("freeze", () => {
	  const obj = { a: 1, b: 2 };
	  const frozenObj = freeze(obj);
	  expect(Object.isFrozen(frozenObj)).toBe(true);
	});
  
	test("deepFreeze", () => {
	  const obj = { a: 1, b: { c: 2 } };
	  const frozenObj = deepFreeze(obj);
	  expect(Object.isFrozen(frozenObj)).toBe(true);
	  expect(Object.isFrozen(frozenObj.b)).toBe(true);
	});
  
	test("merge", () => {
	  const obj1 = { a: 1 };
	  const obj2 = { b: 2 };
	  expect(merge(obj1, obj2)).toEqual({ a: 1, b: 2 });
	});
  
	test("deepMerge", () => {
	  const obj1 = { a: 1, b: { c: 2 } };
	  const obj2 = { b: { d: 3 } };
	  expect(deepMerge(obj1, obj2)).toEqual({ a: 1, b: { c: 2, d: 3 } });
	});
  
	test("flattenObj", () => {
	  const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
	  expect(flattenObj(obj)).toEqual({ "a": 1, "b.c": 2, "b.d.e": 3 });
	});
  
	test("unflattenObj", () => {
	  const obj = { "a": 1, "b.c": 2, "b.d.e": 3 };
	  expect(unflattenObj(obj)).toEqual({ a: 1, b: { c: 2, d: { e: 3 } } });
	});
  
	test("interpolate", () => {
	  const obj = {
		a: "Hello, {{name}}!",
		b: {
		  c: "is old?, {{age}}",
		  d: {
			e: "Hello, {{name}}!"
		  }
		}
	  }
	  const data = { name: "John", age: 20 };
	  expect(interpolate(obj, data)).toEqual({ a: "Hello, John!", b: {c: "is old?, 20", d: {e: "Hello, John!"}}});
	});
  
	test("isEqual", () => {
	  expect(isEqual(1, 1)).toBe(true);
	  expect(isEqual(1, 2)).toBe(false);
	});
  
	test("isDeepEqual", () => {
	  const obj1 = { a: 1, b: { c: 2 } };
	  const obj2 = { a: 1, b: { c: 2 } };
	  const obj3 = { a: 1, b: { c: 3 } };
	  expect(isDeepEqual(obj1, obj2)).toBe(true);
	  expect(isDeepEqual(obj1, obj3)).toBe(false);
	});
  
	test("omit", () => {
	  const obj = { a: 1, b: 2, c: 3 };
	  expect(omit(obj, ["b"])).toEqual({ a: 1, c: 3 });
	});
  
	test("pick", () => {
	  const obj = { a: 1, b: 2, c: 3 };
	  expect(pick(obj, ["a", "c"])).toEqual({ a: 1, c: 3 });
	});
  
	test("sanitizeObj", () => {
	  const obj = { a: 1, b: 2, c: 3 };
	  expect(sanitizeObj(obj, [2], 0)).toEqual({ a: 1, b: 0, c: 3 });
	});
  });
  