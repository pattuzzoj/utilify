# Array Utilities

**Array utility functions** provide a variety of methods for manipulating and transforming arrays. They help simplify common operations, such as splitting, flattening, shuffling, and finding differences between arrays, among others.

## Installation

To install the array utility functions, use one of the following commands, depending on your package manager:

```bash [npm]
npm install @utilify/array
```

```bash [yarn]
yarn add @utilify/array
```

```bash [pnpm]
pnpm add @utilify/array
```

Once installed, you can import the functions into your project, using either ESM or CJS.

## Usage

This library supports both the ESM and CJS module systems.

```typescript [esm]
import { shuffle } from '@utilify/array'; 
```

```javascript [cjs]
const { shuffle } = require('@utilify/array');  
```

## Overview

Here’s an overview of the functions available in the array utility package:

### [after](./after.md)  
```typescript  
function after(array: any[], n: number): any[]  
```  
Returns the elements of the array after the index `n`.  

### [before](./before.md)  
```typescript  
function before(array: any[], n: number): any[]  
```  
Returns the elements of the array before the index `n`.  

### [chunk](./chunk.md)  
```typescript  
function chunk(array: any[], size: number): any[][]  
```  
Divides the array into smaller chunks of size `size`.  

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
Rotates the elements of the array by `n` positions.  

### [sanitizeArr](./sanitizeArr.md)  
```typescript  
function sanitizeArr(array: any[], values: any[], replaceValue?: any): any[]  
```  
Removes or replaces specified values in the array.  

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