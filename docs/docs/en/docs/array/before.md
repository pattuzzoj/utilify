# before

The `before` function returns a new array or string containing all elements or characters before the specified index. It is useful for extracting a subarray or substring up to a specific point.

## Syntax

```typescript
function before(str: string, index: number): string;
function before<T>(arr: T[], index: number): T[];
```

### Parameters

| Name   | Type         | Description                                                        |
|--------|--------------|--------------------------------------------------------------------|
| `str`  | `string`     | The original string from which the characters will be extracted.   |
| `arr`  | `T[]`        | The original array from which the elements will be extracted.      |
| `index`| `number`     | The index before which the elements or characters will be included in the new array or string. |

### Return

| Type    | Description                                                                   |
|---------|-------------------------------------------------------------------------------|
| `string`| A new string containing all the characters before the specified index.        |
| `T[]`   | A new array containing all the elements before the specified index.           |

## Examples

### Array Example

```typescript
const data = [1, 2, 3, 4, 5];

// Elements before index 2
console.log(before(data, 2)); // [1, 2]

// Elements before index 0
console.log(before(data, 0)); // []

// Index out of range
console.log(before(data, 10)); // [1, 2, 3, 4, 5]

// Negative index
console.log(before(data, -1)); // []
```

### String Example

```typescript
const text = "Hello, World!";

// Characters before index 5
console.log(before(text, 5)); // "Hello"

// Characters before index 0
console.log(before(text, 0)); // ""

// Index out of range
console.log(before(text, 20)); // "Hello, World!"

// Negative index
console.log(before(text, -1)); // ""
```

## Notes

- If the index is less than or equal to zero, an empty array or string will be returned.
- If the index is negative, it will be treated as zero.
- If the index is greater than the array or string length, the entire array or string will be returned.

## Source Code

::: code-group
```typescript
function before(str: string, index: number): string;
function before<T>(arr: T[], index: number): T[];
function before(arr: any, index: number): any {
  return arr.slice(0, index);
}
```

```javascript
function before(arr, index) {
  return arr.slice(0, index);
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [String.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)