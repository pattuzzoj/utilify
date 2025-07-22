import { isArray, isDate, isMap, isRegExp, isSet } from "../types";
import isNotNullObject from "./isNotNullObject";
import isPlainObject from "./isPlainObject";

export default function isEqual(value1: any, value2: any): boolean {
  function isEqualArray(value1: any[], value2: any[], visited: WeakMap<any, boolean>): boolean {
    const keys1 = Object.keys(value1);
    const keys2 = Object.keys(value2);

    if (keys1.length !== keys2.length) return false;

    for (let i = 0; i < value1.length; i++) {
      if (!deepEqual(value1[i], value2[i], visited)) return false;
    }

    return true;
  }

  function isEqualDate(value1: Date, value2: Date): boolean {
    return value1.getTime() === value2.getTime();
  }

  function isEqualRegExp(value1: RegExp, value2: RegExp): boolean {
    return value1.source === value2.source && value1.flags === value2.flags;
  }

  function isEqualMap(value1: Map<any, any>, value2: Map<any, any>, visited: WeakMap<any, boolean>): boolean {
    if (value1.size !== value2.size) return false;

    for (const [key, value] of value1) {
      if (!value2.has(key) || !deepEqual(value, value2.get(key), visited)) return false;
    }

    return true;
  }

  function isEqualSet(value1: Set<any>, value2: Set<any>): boolean {
    if (value1.size !== value2.size) return false;

    for (const value of value1) {
      if (!value2.has(value)) return false;
    }

    return true;
  }

  function isEqualTypedArray(arr1: ArrayBufferView, arr2: ArrayBufferView): boolean {
    if (
      Object.getPrototypeOf(arr1) !== Object.getPrototypeOf(arr2) ||
      arr1.byteLength !== arr2.byteLength
    ) {
      return false;
    }

    const view1 = new Uint8Array(arr1.buffer, arr1.byteOffset, arr1.byteLength);
    const view2 = new Uint8Array(arr2.buffer, arr2.byteOffset, arr2.byteLength);

    for (let i = 0; i < view1.length; i++) {
      if (view1[i] !== view2[i]) return false;
    }

    return true;
  }

  function isEqualArrayBuffer(buf1: ArrayBuffer, buf2: ArrayBuffer): boolean {
    if (buf1.byteLength !== buf2.byteLength) return false;

    const view1 = new Uint8Array(buf1);
    const view2 = new Uint8Array(buf2);

    for (let i = 0; i < view1.length; i++) {
      if (view1[i] !== view2[i]) return false;
    }

    return true;
  }

  function isEqualPlainObject(value1: object, value2: object, visited: WeakMap<any, boolean>): boolean {
    if (visited.has(value1) && visited.has(value2)) {
      return true;
    }

    visited.set(value1, true);
    visited.set(value2, true);

    const keys1 = Reflect.ownKeys(value1);
    const keys2 = Reflect.ownKeys(value2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (const key of keys1) {
      if (!keys2.includes(key) || !deepEqual(value1[key], value2[key], visited)) {
        return false;
      }
    }

    return true;
  }

  function deepEqual(value1: any, value2: any, visited: WeakMap<any, boolean> = new WeakMap()): boolean {
    if (Object.is(value1, value2)) return true;

    if (!isNotNullObject(value1) || !isNotNullObject(value2)) {
      return false;
    }

    if (isArray(value1) && isArray(value2)) {
      return isEqualArray(value1, value2, visited);
    }

    if (isDate(value1) && isDate(value2)) {
      return isEqualDate(value1, value2);
    }

    if (isRegExp(value1) && isRegExp(value2)) {
      return isEqualRegExp(value1, value2);
    }

    if (isMap(value1) && isMap(value2)) {
      return isEqualMap(value1, value2, visited);
    }

    if (isSet(value1) && isSet(value2)) {
      return isEqualSet(value1, value2);
    }

    if (ArrayBuffer.isView(value1) && ArrayBuffer.isView(value2)) {
      return isEqualTypedArray(value1, value2);
    }

    if (value1 instanceof ArrayBuffer && value2 instanceof ArrayBuffer) {
      return isEqualArrayBuffer(value1, value2);
    }

    if (isPlainObject(value1) && isPlainObject(value2)) {
      return isEqualPlainObject(value1, value2, visited);
    }

    return false;
  }

  return deepEqual(value1, value2);
}