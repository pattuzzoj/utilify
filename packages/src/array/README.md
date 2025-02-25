# Array

The **array utility functions** provide a variety of methods to manipulate and transform arrays and strings. They help simplify common operations such as splitting, flattening, shuffling, and finding differences between arrays, among others.

## Installation

To install the array utility functions, use one of the following commands depending on your package manager:

```bash
npm install @utilify/array
```

```bash
yarn add @utilify/array
```

```bash
pnpm add @utilify/array
```

After installation, you can import the functions into your project using ESM or CJS.

## Usage

This library supports both the ESM and CJS module systems.

```typescript
import { shuffle } from '@utilify/array';
```

```javascript
const { shuffle } = require('@utilify/array');
``` 
## Overview

Here's an overview of the functions available in the array and string utilities package:

### [after](https://utilify-docs.vercel.app/docs/array/after)

```typescript
function after(str: string, index: number): string;
function after<T>(arr: T[], index: number): T[];
```

Returns the elements of the array or string after the index `index`.

### [before](https://utilify-docs.vercel.app/docs/array/before)

```typescript
function before(str: string, index: number): string;
function before<T>(arr: T[], index: number): T[];
```

Returns the elements of the array or string before the index `index`.

### [chunk](https://utilify-docs.vercel.app/docs/array/chunk)

```typescript
function chunk(str: string, size: number): string[];
function chunk<T>(arr: T[], size: number): T[][];
```

Splits the array or string into smaller chunks of size `size`.

### [compact](https://utilify-docs.vercel.app/docs/array/compact)

```typescript
function compact<T>(arr: T[]): T[];
```

Removes "falsy" values (`false`, `null`, `0`, `""`, `undefined`, `NaN`) from the array.

### [difference](https://utilify-docs.vercel.app/docs/array/difference)

```typescript
function difference<T>(arr1: T[], arr2: T[]): T[];
```

Returns the elements from the first array that are not in the second array.

### [first](https://utilify-docs.vercel.app/docs/array/first)

```typescript
function first(str: string, count?: number): string;
function first<T>(arr: T[], count?: number): T[];
```

Returns the first `count` elements of the array or string.

### [flattenArr](https://utilify-docs.vercel.app/docs/array/flattenArr)

```typescript
function flattenArr<T>(arr: T[], depth?: number): FlatArray<T[], number>[];
```

Flattens the array up to the specified depth.

### [sample](https://utilify-docs.vercel.app/docs/array/sample)

```typescript
function sample(str: string): string;
function sample<T>(arr: T[]): T;
```

Returns a random element from the array or string.

### [isIterable](https://utilify-docs.vercel.app/docs/array/isIterable)

```typescript
function isIterable(value: any): boolean;
```

Checks if the value is iterable.

### [last](https://utilify-docs.vercel.app/docs/array/last)

```typescript
function last(str: string, count?: number): string;
function last<T>(arr: T[], count?: number): T[];
```

Returns the last `count` elements of the array or string.

### [rotate](https://utilify-docs.vercel.app/docs/array/rotate)

```typescript
function rotate<T>(arr: T[], offset: number): T[];
```

Rotates the elements of the array `offset` positions.

### [sanitizeArr](https://utilify-docs.vercel.app/docs/array/sanitizeArr)

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replace?: T): T[];
```

Removes or replaces the specified values in the array.

### [shuffle](https://utilify-docs.vercel.app/docs/array/shuffle)

```typescript
function shuffle<T>(arr: T[]): T[];
```

Shuffles the elements of the array.

### [swap](https://utilify-docs.vercel.app/docs/array/swap)

```typescript
function swap<T>(arr: T[], fromIndex: number, toIndex: number): T[];
```

Swaps the elements at positions `fromIndex` and `toIndex`.

### [union](https://utilify-docs.vercel.app/docs/array/union)

```typescript
function union<T>(...arrs: T[][]): T[];
```

Returns the union of multiple arrays.

### [unique](https://utilify-docs.vercel.app/docs/array/unique)

```typescript
function unique<T>(arr: T[]): T[];
```

Returns an array with unique elements.