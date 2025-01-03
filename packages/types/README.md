# Array Utility Functions

Array utility functions provide a variety of methods for manipulating and transforming arrays. These functions help simplify common operations, such as splitting, flattening, shuffling, and finding differences between arrays, among others.

## Install

To install and use the array utility functions, follow these steps:

```bash
npm install array-utils
```

Alternatively, you can use yarn:

```bash
yarn add array-utils
```

After installation, you can import the functions into your project in two ways:

### Namespace Import

You can import the entire module as a namespace, which will bundle all functions under a single object:

```typescript
import * as ArrayUtils from 'array-utils';
```

Then you can access the functions like this:

```typescript
ArrayUtils.after(array, 2);
ArrayUtils.shuffle(array);
ArrayUtils.union(array1, array2);
```

### Named Imports

Alternatively, you can import specific functions by name:

```typescript
import { after, before, chunk, difference, first, flattenArr, getRandom, isIterable, last, rotate, sanitizeArr, shuffle, swap, union, unique } from 'array-utils';
```

Both methods work, so you can choose the one that best fits your project structure. The **namespace import** is helpful when you want to avoid name conflicts or prefer grouping all utility functions under one object.

## Overview

Here is an overview of the available functions in the array utility package:

### [after](./after.md)
```typescript
function after(array: any[], n: number): any[]
```
Returns the elements of the array after index `n`.

### [before](./before.md)
```typescript
function before(array: any[], n: number): any[]
```
Returns the elements of the array before index `n`.

### [chunk](./chunk.md)
```typescript
function chunk(array: any[], size: number): any[][]
```
Splits the array into smaller chunks of size `size`.

### [difference](./difference.md)
```typescript
function difference(array: any[], values: any[]): any[]
```
Returns the elements of the array that are not present in the second array.

### [first](./first.md)
```typescript
function first(array: any[], n?: number): any[]
```
Returns the first `n` elements of the array.

### [flattenArr](./flattenArr.md)
```typescript
function flattenArr(array: any[], depth?: number): any[]
```
Flattens the array to the specified depth.

### [getRandom](./getRandom.md)
```typescript
function getRandom(array: any[]): any
```
Returns a random element from the array.

### [isIterable](./isIterable.md)
```typescript
function isIterable(obj: any): boolean
```
Checks if the object is iterable.

### [last](./last.md)
```typescript
function last(array: any[], n?: number): any[]
```
Returns the last `n` elements of the array.

### [rotate](./rotate.md)
```typescript
function rotate(array: any[], n: number): any[]
```
Rotates the elements of the array `n` positions.

### [sanitizeArr](./sanitizeArr.md)
```typescript
function sanitizeArr(array: any[], values: any[], replaceValue?: any): any[]
```
Removes or replaces the specified values in the array.

### [shuffle](./shuffle.md)
```typescript
function shuffle(array: any[]): any[]
```
Shuffles the elements of the array.

### [swap](./swap.md)
```typescript
function swap(array: any[], index1: number, index2: number): any[]
```
Swaps the elements at positions `index1` and `index2`.

### [union](./union.md)
```typescript
function union(...arrays: any[][]): any[]
```
Returns the union of multiple arrays.

### [unique](./unique.md)
```typescript
function unique(array: any[]): any[]
```
Returns an array with unique elements.

---