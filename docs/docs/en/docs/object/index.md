# Object <Badge type="tip" text="1.0.2" />

The **object utility functions** category includes a variety of practical methods for object manipulation, comparison, and transformation. These functions simplify many common operations in JavaScript/TypeScript development when working with objects and data structures.

## Installation

To use the functions in this category, install the **`@utilify/object`** package with your preferred package manager:

::: code-group
```bash [npm]
npm install @utilify/object
```

```bash [yarn]
yarn add @utilify/object
```

```bash [pnpm]
pnpm add @utilify/object
```
:::

## Usage

You can import specific functions as needed:

::: code-group
```typescript [esm]
import { clone, deepClone, deepMerge } from '@utilify/object';
```

```javascript [cjs]
const { clone, deepClone, deepMerge } = require('@utilify/object');
```
:::

## Overview

### [clone](./clone.md)

```typescript
function clone<T extends Record<string, any>>(value: T): T;
function clone<T extends unknown[]>(value: T): T;
```

Creates a shallow copy of an object or array by directly copying its properties.

### [deepClone](./deepClone.md)

```typescript
function deepClone<T extends Record<string, any>>(value: T): T;
function deepClone<T extends unknown[]>(value: T): T;
```

Creates a deep copy of an object or array, including all nested properties.

### [deepFreeze](./deepFreeze.md)

```typescript
function deepFreeze(obj: Record<string, any>): Record<string, any>;
```

Deeply freezes an object, making its properties and nested properties immutable.

### [deepMerge](./deepMerge.md)

```typescript
function deepMerge(...values: Record<string, any>[]): Record<string, any>;
```

Performs a deep merge of multiple objects, combining their properties recursively.

### [flattenObj](./flattenObj.md)

```typescript
function flattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any>;
```

Flattens a nested object into a single-level object with keys representing property paths.

### [freeze](./freeze.md)

```typescript
function freeze<T>(obj: T): T;
```

Freezes an object, making its properties immutable but does not freeze nested properties.

### [interpolate](./interpolate.md)

```typescript
function interpolate(str: string, values: Record<string, any>): string;
```

Replaces placeholders in a string with values provided in an object.

### [isDeepEqual](./isDeepEqual.md)

```typescript
function isDeepEqual(value1: Record<string, any>, value2: Record<string, any>): boolean;
function isDeepEqual(value1: unknown[], value2: unknown[]): boolean;
```

Compares two objects or arrays deeply to determine if they are structurally and semantically equal.

### [isEqual](./isEqual.md)

```typescript
function isEqual(value1: any, value2: any): boolean;
```

Compares two values or references to determine if they are strictly equal using `Object.is`.

### [merge](./merge.md)

```typescript
function merge(...values: Record<string, any>[]): Record<string, any>;
function merge(...values: unknown[][]): unknown[];
```

Performs a shallow merge of multiple objects or arrays, combining their properties or elements into a new object or array.

### [omit](./omit.md)

```typescript
function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
```

Creates a new object from the given object, excluding the specified keys.

### [pick](./pick.md)

```typescript
function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
```

Creates a new object containing only the selected keys from the original object.

### [sanitizeObj](./sanitizeObj.md)

```typescript
function sanitizeObj(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
```

Sanitizes an object by replacing specific values with an optional replacement value.

### [unflattenObj](./unflattenObj.md)

```typescript
function unflattenObj(obj: Record<string, any>, separator: string = "."): Record<string, any>;
```

Transforms a flattened object back into its original nested structure using a separator to identify hierarchy levels in the keys.