# first

The `first` function returns the first `count` elements from an array or string. If `count` is not provided, it returns the first element.

## Syntax

```typescript
function first(str: string, count?: number): string;
function first<T>(arr: T[], count?: number): T[];
```

### Parameters

| Name    | Type                  | Description                                                                 |
|---------|----------------------|-----------------------------------------------------------------------------|
| `str`   | `string`            | The input string.                                                           |
| `arr`   | `T[]`               | The input array.                                                            |
| `count` | `number` (optional) | The number of elements to return from the beginning. Default is 1.          |

### Return

| Type          | Description                                                                         |
|---------------|-------------------------------------------------------------------------------------|
| `string`      | For strings: The first `count` characters.                                          |
| `T[]`         | For arrays: A new array with the first `count` elements.                           |

## Examples

```typescript
// Array examples
console.log(first([1, 2, 3, 4], 2)); // [1, 2]
console.log(first([1, 2, 3, 4]));    // [1]

// String examples
console.log(first("hello", 2));      // "he"
console.log(first("hello"));         // "h"
```

## Notes

- If `count` is greater than the length of the input, the entire input will be returned.
- If `count` is not provided, the function returns just the first element.

## Source Code

::: code-group
```typescript
function first(str: string, count?: number): string;
function first<T>(arr: T[], count?: number): T[];
function first(arr: any, count: number = 1): any {
  return arr.slice(0, count);
}
```

```javascript
function first(arr, count = 1) {
  return arr.slice(0, count);
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)