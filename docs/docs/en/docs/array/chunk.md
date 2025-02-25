# chunk

The `chunk` function splits an array or string into smaller chunks of the specified size. It is useful when you need to divide a large set of data or text into smaller parts, whether for batch processing, data manipulation, or text formatting.

## Syntax

```typescript
function chunk(str: string, size: number): string[];
function chunk<T>(arr: T[], size: number): T[][];
```

### Parameters

| Name   | Type         | Description                                                      |
|--------|--------------|------------------------------------------------------------------|
| `str`  | `string`     | The original string to be divided into chunks.                   |
| `arr`  | `T[]`        | The original array to be divided into chunks.                    |
| `size` | `number`     | The size of each chunk. Must be a positive integer.              |

### Return

| Type      | Description                                                                  |
|-----------|------------------------------------------------------------------------------|
| `string[]`| Returns a new array containing smaller chunks of the original string.         |
| `T[][]`   | Returns a new array containing smaller chunks of the original array.          |

## Examples

### Array Example

```typescript
const data = [1, 2, 3, 4, 5, 6, 7];

// Splitting the array into chunks of size 3
console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

// Splitting the array into chunks of size 2
console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]

// Chunk size greater than array length
console.log(chunk(data, 10)); // [[1, 2, 3, 4, 5, 6, 7]]

// Chunk size equal to zero
console.log(chunk(data, 0)); // []

// Negative chunk size
console.log(chunk(data, -2)); // []
```

### String Example

```typescript
const text = "Hello, World!";

// Splitting the string into chunks of size 5
console.log(chunk(text, 5)); // ["Hello", ", Wor", "ld!"]

// Splitting the string into chunks of size 2
console.log(chunk(text, 2)); // ["He", "ll", "o,", " W", "or", "ld", "!"]

// Chunk size greater than string length
console.log(chunk(text, 20)); // ["Hello, World!"]

// Chunk size equal to zero
console.log(chunk(text, 0)); // []

// Negative chunk size
console.log(chunk(text, -2)); // []
```

## Notes

- If the size is greater than the length of the array or string, an array containing the original array or string as a single chunk will be returned.
- If the size is less than or equal to zero, the function will return an empty array.
- It can be used, for example, to split a list of items into pages, process data in batches, or format text into smaller segments.

## Source Code

::: code-group
```typescript
function chunk(str: string, size: number): string[];
function chunk<T>(arr: T[], size: number): T[][];
function chunk(arr: any, size: number): any {
  const chunkedArray = [];
  for (let index = 0; index < arr.length; index += size) {
    chunkedArray.push(arr.slice(index, index + size));
  }
  return chunkedArray;
}
```

```javascript
function chunk(arr, size) {
  const chunkedArray = [];
  for (let index = 0; index < arr.length; index += size) {
    chunkedArray.push(arr.slice(index, index + size));
  }
  return chunkedArray;
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [String.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)