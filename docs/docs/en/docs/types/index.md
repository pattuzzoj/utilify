# Types

The types module provides a comprehensive set of functions for type checking and identification in JavaScript/TypeScript. These functions are designed to offer a safe and reliable way to check data types, including primitive types, objects, special functions, and native JavaScript data structures.

Key features:
- Accurate checking of primitive types (string, number, boolean, etc.)
- Support for special types like Promise, Generator, and async functions
- Identification of data structures (Map, Set, WeakMap, etc.)
- Detection of null/undefined values and falsy checks
- TypeScript typing for greater safety and autocompletion

All functions are optimized for performance and follow best practices for type checking in JavaScript.

## Overview

### [getInstanceType](./getInstanceType.md)
```typescript
getInstanceType(value: any): string | null;
```
Returns the constructor (class) name of an instance, or `null` if not applicable.

### [getType](./getType.md)
```typescript
getType(value: any): string;
```
Returns a string representing the value's type, including special cases like "nan", "infinity", "null", and "array".

### [isArray](./isArray.md)
```typescript
isArray(value: any): value is any[];
```
Checks if the value is an array.

### [isAsyncFunction](./isAsyncFunction.md)
```typescript
isAsyncFunction(value: any): value is (...args: any[]) => Promise<any>;
```
Checks if the value is an async function.

### [isAsyncGeneratorFunction](./isAsyncGeneratorFunction.md)
```typescript
isAsyncGeneratorFunction(value: any): value is AsyncGeneratorFunction;
```
Checks if the value is an async generator function.

### [isBigint](./isBigint.md)
```typescript
isBigint(value: any): value is bigint;
```
Checks if the value is of type bigint.

### [isBoolean](./isBoolean.md)
```typescript
isBoolean(value: any): value is boolean;
```
Checks if the value is of type boolean.

### [isDate](./isDate.md)
```typescript
isDate(value: any): value is Date;
```
Checks if the value is an instance of Date.

### [isFalsy](./isFalsy.md)
```typescript
isFalsy(value: any): boolean;
```
Checks if the value is considered falsy in JavaScript.

### [isFunction](./isFunction.md)
```typescript
isFunction(value: any): value is Function;
```
Checks if the value is a function.

### [isGeneratorFunction](./isGeneratorFunction.md)
```typescript
isGeneratorFunction(value: any): value is GeneratorFunction;
```
Checks if the value is a generator function.

### [isMap](./isMap.md)
```typescript
isMap(value: any): value is Map<any, any>;
```
Checks if the value is an instance of Map.

### [isNil](./isNil.md)
```typescript
isNil(value: any): value is null | undefined;
```
Checks if the value is null or undefined.

### [isNull](./isNull.md)
```typescript
isNull(value: any): value is null;
```
Checks if the value is exactly null.

### [isNumber](./isNumber.md)
```typescript
isNumber(value: any): value is number;
```
Checks if the value is of type number.

### [isObject](./isObject.md)
```typescript
isObject(value: any): value is object;
```
Checks if the value is an object (excluding null).

### [isPrimitive](./isPrimitive.md)
```typescript
isPrimitive(value: any): value is (string | number | boolean | symbol | bigint | null | undefined);
```
Checks if the value is a primitive type: string, number, boolean, symbol, bigint, null, or undefined.

### [isPromise](./isPromise.md)
```typescript
isPromise<T = any>(value: any): value is Promise<T>;
```
Checks if the value is a Promise.

### [isRegExp](./isRegExp.md)
```typescript
isRegExp(value: any): value is RegExp;
```
Checks if the value is a regular expression (RegExp).

### [isSet](./isSet.md)
```typescript
isSet(value: any): value is Set<any>;
```
Checks if the value is an instance of Set.

### [isString](./isString.md)
```typescript
isString(value: any): value is string;
```
Checks if the value is of type string.

### [isSymbol](./isSymbol.md)
```typescript
isSymbol(value: any): value is symbol;
```
Checks if the value is of type symbol.

### [isUndefined](./isUndefined.md)
```typescript
isUndefined(value: any): value is undefined;
```
Checks if the value is undefined.

### [isWeakMap](./isWeakMap.md)
```typescript
isWeakMap(value: any): value is WeakMap<object, any>;
```
Checks if the value is an instance of WeakMap.

### [isWeakRef](./isWeakRef.md)
```typescript
isWeakRef(value: any): value is WeakRef<any>;
```
Checks if the value is an instance of WeakRef.

### [isWeakSet](./isWeakSet.md)
```typescript
isWeakSet(value: any): value is WeakSet<object>;
```
Checks if the value is an instance of WeakSet.
