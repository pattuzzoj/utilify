# Types <Badge type="tip" text="1.0.3" />

**Types utility functions** provide methods to check, compare, and manipulate data types. They help identify if a value is of a specific type, such as checking if a value is a number, string, function, or a primitive value, as well as other useful checks.

## Installation

To install the types utility functions, use one of the following commands, depending on your package manager:

::: code-group
```bash [npm]
npm install @utilify/types
```

```bash [yarn]
yarn add @utilify/types
```

```bash [pnpm]
pnpm add @utilify/types
```
:::

Once installed, you can import the functions into your project, using either ESM or CJS.

## Usage

This library supports both the ESM and CJS module systems.

::: code-group

```typescript [esm]
import { isString } from '@utilify/types'; 
```

```javascript [cjs]
const { isString } = require('@utilify/types');  
```
:::

## Overview

Here is an overview of the functions available in the **type utilities** category:

### [getInstanceType](./getInstanceType.md)  
```typescript  
function getInstanceType(value: object): string | undefined 
```  
Returns the instance type of the value.

### [getType](./getType.md)  
```typescript  
function getType(value: any): string 
```  
Returns the primitive type or the type of the object (such as `"string"`, `"object"`, `"function"`, etc.).

### [isAsync](./isAsync.md)  
```typescript  
function isAsync(callback: Function): boolean
```  
Checks if the function is asynchronous.

### [isArray](./isArray.md)  
```typescript  
function isArray(value: any): boolean
```  
Checks if the value is an array.

### [isBigint](./isBigint.md)  
```typescript  
function isBigint(value: any): boolean  
```  
Checks if the value is a BigInt.

### [isBoolean](./isBoolean.md)  
```typescript  
function isBoolean(value: any): boolean  
```  
Checks if the value is a boolean.

### [isDate](./isDate.md)  
```typescript  
function isDate(value: any): boolean  
```  
Checks if the value is an instance of `Date`.

### [isEqualType](./isEqualType.md)  
```typescript  
function isEqualType(value1: any, value2: any): boolean  
```  
Compares the types of two values and returns if they are the same.

### [isFalsy](./isFalsy.md)  
```typescript  
function isFalsy(value: any): boolean  
```  
Checks if the value is "falsy" (such as `false`, `0`, `null`, `undefined`, `NaN`, or an empty string).

### [isFunction](./isFunction.md)  
```typescript  
function isFunction(value: any): boolean  
```  
Checks if the value is a function.

### [isMap](./isMap.md)  
```typescript  
function isMap(value: any): boolean  
```  
Checks if the value is an instance of `Map`.

### [isNull](./isNull.md)  
```typescript  
function isNull(value: any): boolean  
```  
Checks if the value is `null`.

### [isNumber](./isNumber.md)  
```typescript  
function isNumber(value: any): boolean  
```  
Checks if the value is a number.

### [isObject](./isObject.md)  
```typescript  
function isObject(value: any): boolean  
```  
Checks if the provided value is a plain object or an object created from a non-native class.

### [isPlainObject](./isPlainObject.md)  
```typescript  
function isPlainObject(value: any): boolean  
```  
Checks if the value is a plain object (not an instance of `Map`, `Set`, or other objects).

### [isPromise](./isPromise.md)  
```typescript  
function isPromise(value: object): boolean  
```  
Checks if the value is a `Promise`.

### [isRegExp](./isRegExp.md)  
```typescript  
function isRegExp(value: any): boolean  
```  
Checks if the value is a regular expression.

### [isSet](./isSet.md)  
```typescript  
function isSet(value: any): boolean  
```  
Checks if the value is an instance of `Set`.

### [isString](./isString.md)  
```typescript  
function isString(value: any): boolean  
```  
Checks if the value is a string.

### [isSymbol](./isSymbol.md)  
```typescript  
function isSymbol(value: any): boolean  
```  
Checks if the value is a `Symbol`.

### [isTruthy](./isTruthy.md)  
```typescript  
function isTruthy(value: any): boolean  
```  
Checks if the value is "truthy" (any value that is not `false`, `0`, `null`, `undefined`, `NaN`, or an empty string).

### [isUndefined](./isUndefined.md)  
```typescript  
function isUndefined(value: any): boolean  
```  
Checks if the value is `undefined`.

### [isJSON](./isJSON.md)  
```typescript  
function isJSON(value: any): boolean  
```  
Checks if the value is a valid JSON object.

### [isPrimitive](./isPrimitive.md)  
```typescript  
function isPrimitive(value: any): boolean  
```  
Checks if the value is a primitive type (string, number, bigint, boolean, symbol, undefined, null).