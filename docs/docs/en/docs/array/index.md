# Array

The Array module provides a comprehensive collection of utility functions for manipulating arrays in TypeScript/JavaScript. These functions allow you to perform common operations such as transformation, filtering, grouping, and rearranging elements efficiently and safely.

All functions are designed to be immutable, meaning they do not modify the original array but return a new copy with the applied changes. This helps maintain code predictability and avoids unwanted side effects.

The functions in this module can be used with both simple arrays and arrays of complex objects, offering flexibility for different use cases. Many functions also include support for working with strings, treating them as arrays of characters when appropriate.

Main features:
- Immutable functions that preserve the original array
- Strong typing with TypeScript
- Support for arrays and strings
- Transformation, filtering, and aggregation operations
- Utility functions for element manipulation

## Overview

[adjust](./adjust.md)
```typescript
adjust<T>(array: T[], index: number, fn: (value: T) => T): T[]
```
Applies a function to an element at a specific index of an array, returning a new array with the adjusted value.

[after](./after.md)
```typescript
after<T>(array: T[] | string, index: number): T[] | string
```
Returns all elements of an array or characters of a string after the specified index.

[aperture](./aperture.md)
```typescript
aperture<T>(array: T[], size: number = 1): T[][]
```
Returns a list of consecutive subsets of fixed size extracted from an array.

[append](./append.md)
```typescript
append<T>(array: T[], value: T): T[]
```
Adds a value to the end of an array, returning a new array.

[arrayToObject](./arrayToObject.md)
```typescript
arrayToObject<T, K extends PropertyKey>(array: T[], keyFn?: (item: T, index: number, array: T[]) => K, valueFn?: (item: T, index: number, array: T[]) => any): Record<K, any>
```
Converts an array into an object, using functions to determine the keys and values.

[before](./before.md)
```typescript
before<T>(array: T[] | string, index: number): T[] | string
```
Returns all elements of an array or characters of a string before the specified index.

[chunk](./chunk.md)
```typescript
chunk<T>(array: T[], size: number): T[][]
chunk(string: string, size: number): string
```
Splits an array or string into smaller parts of fixed size.

[collectBy](./collectBy.md)
```typescript
collectBy<T, K extends PropertyKey>(array: T[], keySelector: (value: T, index: number) => K): T[][]
```
Groups elements of an array into subarrays based on a key selector function.

[compact](./compact.md)
```typescript
compact<T>(array: T[]): T[]
```
Removes falsy values from an array.

[count](./count.md)
```typescript
count(array: any[] | string): number
```
Returns the number of elements in an array or characters in a string.

[cycle](./cycle.md)
```typescript
cycle<T>(array: T[], times: number): T[]
cycle(string: string, times: number): string
```
Repeats the elements of an array or characters of a string a specified number of times.

[difference](./difference.md)
```typescript
difference<T>(array: T[], ...values: T[][]): T[]
```
Returns a new array with the elements of the first array that are not present in the other provided arrays.

[first](./first.md)
```typescript
first<T>(array: T[]): T | undefined
first(string: string): string | undefined
```
Returns the first element of an array or the first character of a string.

[flat](./flat.md)
```typescript
flat<T>(array: any[], depth?: number): T[]
```
"Flattens" an array of arrays into a single array up to the specified depth.

[flatMap](./flatMap.md)
```typescript
flatMap<T, U>(array: T[], fn: (value: T, index: number, array: T[]) => U | U[]): U[]
```
Applies a function to each element of an array and "flattens" the result into a new array.

[groupBy](./groupBy.md)
```typescript
groupBy<T, K extends PropertyKey>(array: T[], keySelector: (value: T, index: number) => K): Record<K, T[]>
```
Groups the elements of an array according to the value returned by a key selector function.

[includes](./includes.md)
```typescript
includes<T>(array: T[] | string, value: T | string, fromIndex?: number): boolean
```
Checks if an array or string contains a given value.

[isIterable](./isIterable.md)
```typescript
isIterable(value: any): value is Iterable<any>
```
Checks if a value is iterable (has the `Symbol.iterator` method).

[last](./last.md)
```typescript
last<T>(array: T[], count?: number): T[]
last(string: string, count?: number): string
```
Returns the last element(s) of an array or character(s) of a string.

[reject](./reject.md)
```typescript
reject<T>(array: T[], fn: (value: T, index?: number, array?: T[]) => boolean): T[]
```
Returns a new array with the elements that do not satisfy the provided test function.

[repeat](./repeat.md)
```typescript
repeat<T>(value: T, count: number): T[]
repeat(value: string, count: number): string
```
Creates a new array or string by repeating the given value a specific number of times.

[rotate](./rotate.md)
```typescript
rotate<T>(array: T[], offset: number): T[]
```
Shifts the elements of an array left or right according to the given offset.

[sample](./sample.md)
```typescript
sample<T>(array: T[]): T | undefined
```
Returns a random element from an array.

[shuffle](./shuffle.md)
```typescript
shuffle<T>(array: T[]): T[]
```
Randomly shuffles the elements of an array.

[swap](./swap.md)
```typescript
swap<T>(array: T[], indexA: number, indexB: number): T[]
```
Swaps the elements at two positions in an array.

[union](./union.md)
```typescript
union<T>(...arrays: T[][]): T[]
```
Returns a new array containing all unique elements from two or more arrays.

[unique](./unique.md)
```typescript
unique<T>(array: T[]): T[]
```
Returns a new array containing only the unique elements of the original array.

[unzip](./unzip.md)
```typescript
unzip<T>(array: T[][]): T[][]
```
Transforms an array of grouped arrays into arrays of corresponding elements.

[zip](./zip.md)
```typescript
zip<T>(...arrays: T[][]): T[][]
```
Groups elements from two or more arrays into arrays of corresponding pairs.

