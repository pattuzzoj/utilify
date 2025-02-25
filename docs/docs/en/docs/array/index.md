# Array <Badge type="tip" text="2.0.0" />

The **array utility functions** provide a variety of methods to manipulate and transform arrays and strings. They help simplify common operations such as splitting, flattening, shuffling, and finding differences between arrays, among others.

## Installation

To install the array utility functions, use one of the following commands depending on your package manager:

::: code-group

```bash
npm install @utilify/array
```

```bash
yarn add @utilify/array
```

```bash
pnpm add @utilify/array
```

:::

After installation, you can import the functions into your project using ESM or CJS.

## Usage

This library supports both the ESM and CJS module systems.

::: code-group

```typescript
import { shuffle } from '@utilify/array';
```

```javascript
const { shuffle } = require('@utilify/array');
``` 

:::

## Overview

Here's an overview of the functions available in the array and string utilities package:

### [after](./after)

```typescript
function after(str: string, index: number): string;
function after<T>(arr: T[], index: number): T[];
```

Returns the elements of the array or string after the index `index`.

### [before](./before)

```typescript
function before(str: string, index: number): string;
function before<T>(arr: T[], index: number): T[];
```

Returns the elements of the array or string before the index `index`.

### [chunk](./chunk)

```typescript
function chunk(str: string, size: number): string[];
function chunk<T>(arr: T[], size: number): T[][];
```

Splits the array or string into smaller chunks of size `size`.

### [compact](./compact)

```typescript
function compact<T>(arr: T[]): T[];
```

Removes "falsy" values (`false`, `null`, `0`, `""`, `undefined`, `NaN`) from the array.

### [difference](./difference)

```typescript
function difference<T>(arr1: T[], arr2: T[]): T[];
```

Returns the elements from the first array that are not in the second array.

### [first](./first)

```typescript
function first(str: string, count?: number): string;
function first<T>(arr: T[], count?: number): T[];
```

Returns the first `count` elements of the array or string.

### [flattenArr](./flattenArr)

```typescript
function flattenArr<T>(arr: T[], depth?: number): FlatArray<T[], number>[];
```

Flattens the array up to the specified depth.

### [isIterable](./isIterable)

```typescript
function isIterable(value: any): boolean;
```

Checks if the value is iterable.

### [last](./last)

```typescript
function last(str: string, count?: number): string;
function last<T>(arr: T[], count?: number): T[];
```

Returns the last `count` elements of the array or string.

### [rotate](./rotate)

```typescript
function rotate<T>(arr: T[], offset: number): T[];
```

Rotates the elements of the array `offset` positions.

### [sample](./sample)

```typescript
function sample(str: string): string;
function sample<T>(arr: T[]): T;
```

Returns a random element from the array or string.

### [sanitizeArr](./sanitizeArr)

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replace?: T): T[];
```

Removes or replaces the specified values in the array.

### [shuffle](./shuffle)

```typescript
function shuffle<T>(arr: T[]): T[];
```

Shuffles the elements of the array.

### [swap](./swap)

```typescript
function swap<T>(arr: T[], fromIndex: number, toIndex: number): T[];
```

Swaps the elements at positions `fromIndex` and `toIndex`.

### [union](./union)

```typescript
function union<T>(...arrs: T[][]): T[];
```

Returns the union of multiple arrays.

### [unique](./unique)

```typescript
function unique<T>(arr: T[]): T[];
```

Returns an array with unique elements.