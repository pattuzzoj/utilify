# after

The `after` function returns a new array or string containing all elements or characters after the specified index. It is useful for getting a subarray or substring starting from a specific point.

## Syntax

```typescript
function after(str: string, index: number): string;
function after<T>(arr: T[], index: number): T[];
```

### Parameters

| Name   | Type         | Description                                                        |
|--------|--------------|--------------------------------------------------------------------|
| `arr`  | `T[]`        | The original array from which the elements will be extracted.      |
| `str`  | `string`     | The original string from which the characters will be extracted.   |
| `index`| `number`     | The index after which the elements or characters will be included in the new array or string. |

### Return

| Type    | Description                                                                   |
|---------|-------------------------------------------------------------------------------|
| `T[]`   | A new array containing all the elements after the specified index.            |
| `string`| A new string containing all the characters after the specified index.         |

## Examples

### Array Example

```typescript
const data = [1, 2, 3, 4, 5];

// Elements after index 2
console.log(after(data, 2)); // [4, 5]

// Elements after index -4 (offset from the end)
console.log(after(data, -4)); // [3, 4, 5]

// Index out of range
console.log(after(data, 10)); // []
```

### String Example

```typescript
const text = "Hello, World!";

// Characters after index 7
console.log(after(text, 7)); // "World!"

// Characters after index -6 (offset from the end)
console.log(after(text, -6)); // "World!"

// Index out of range
console.log(after(text, 20)); // ""
```

## Notes

- If the index is greater than or equal to the array or string length, an empty array or string will be returned.
- If the index is negative, it will be treated as an offset from the end of the array or string.

## Source Code

::: code-group
```typescript
function after(str: string, index: number): string;
function after<T>(arr: T[], index: number): T[];
function after(arr: any, index: number): any {
  return arr.slice(index + 1);
}
```

```javascript
function after(arr, index) {
  return arr.slice(index + 1);
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [String.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)