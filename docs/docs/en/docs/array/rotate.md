# rotate

The `rotate` function rotates the elements of an array by a specified offset. Positive offset rotates right, negative offset rotates left.

## Syntax

```typescript
function rotate<T>(arr: T[], offset: number): T[];
```

### Parameters

| Name     | Type     | Description                                               |
|----------|----------|---------------------------------------------------------|
| `arr`    | `T[]`    | The array to rotate.                                     |
| `offset` | `number` | The number of positions to rotate. Positive rotates right, negative rotates left. |

### Return

| Type   | Description                                                  |
|--------|------------------------------------------------------------|
| `T[]`  | A new array with elements rotated by the specified offset.  |

## Examples

```typescript
console.log(rotate([1, 2, 3, 4], 1));  // [4, 1, 2, 3]
console.log(rotate([1, 2, 3, 4], -1)); // [2, 3, 4, 1]
console.log(rotate([1, 2, 3, 4], 2));  // [3, 4, 1, 2]
```

## Notes

- The function handles both positive and negative offsets
- The offset is normalized to be within array bounds using modulo
- Returns a new array; does not modify the original array
- If array is empty or has one element, returns a copy of the array

## Source Code

::: code-group
```typescript
function rotate<T>(arr: T[], offset: number): T[] {
  const arrLength = arr.length;
  offset = ((offset % arrLength) + arrLength) % arrLength;
  return arr.slice(offset).concat(arr.slice(0, offset));
}
```

```javascript
function rotate(arr, offset) {
  const arrLength = arr.length;
  offset = ((offset % arrLength) + arrLength) % arrLength;
  return arr.slice(offset).concat(arr.slice(0, offset));
}
```
:::

## References

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.concat() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)