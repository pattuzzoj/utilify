# last

The `last` function returns the last `count` elements from an array or characters from a string.

## Syntax

```typescript
function last(str: string, count?: number): string;
function last<T>(arr: T[], count?: number): T[];
```

### Parameters

| Name    | Type                  | Description                                                      |
|---------|----------------------|------------------------------------------------------------------|
| `str`   | `string`            | The input string from which characters will be extracted.         |
| `arr`   | `T[]`               | The input array from which elements will be extracted.            |
| `count` | `number` (optional) | The number of elements to return from the end. Default is 1.      |

### Return

| Type     | Description                                                      |
|----------|------------------------------------------------------------------|
| `string` | For strings: The last `count` characters.                         |
| `T[]`    | For arrays: A new array with the last `count` elements.          |

## Examples

```typescript
// Array examples
console.log(last([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(last([1, 2, 3, 4, 5]));    // [5]

// String examples
console.log(last("hello", 2));         // "lo"
console.log(last("hello"));            // "o"
```

## Notes

- If `count` is greater than the length of the input, all elements will be returned.
- If `count` is not provided, returns just the last element.

## Source Code

::: code-group
```typescript
function last(str: string, count?: number): string;
function last<T>(arr: T[], count?: number): T[];
function last(arr: any, count: number = 1): any {
  return arr.slice(-count);
}
```

```javascript
function last(arr, count = 1) {
  return arr.slice(-count);
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)