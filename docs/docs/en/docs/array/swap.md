# swap

The `swap` function swaps two elements in an array at the specified indices.

## Syntax

```typescript
function swap<T>(arr: T[], fromIndex: number, toIndex: number): T[];
```

### Parameters

| Name        | Type     | Description                                               |
|-------------|----------|---------------------------------------------------------|
| `arr`       | `T[]`    | The array containing elements to swap.                    |
| `fromIndex` | `number` | The index of the first element to swap.                  |
| `toIndex`   | `number` | The index of the second element to swap.                 |

### Return

| Type   | Description                                                  |
|--------|------------------------------------------------------------|
| `T[]`  | The modified array with the elements swapped.               |

## Examples

```typescript
const arr = [1, 2, 3, 4];
console.log(swap(arr, 0, 3));  // [4, 2, 3, 1]
console.log(swap(arr, 1, 2));  // [4, 3, 2, 1]
```

## Notes

- Modifies the input array in place
- Returns the modified array for chaining
- Be careful with index bounds - no validation is performed

## Source Code

::: code-group
```typescript
function swap<T>(arr: T[], fromIndex: number, toIndex: number): T[] {
  [arr[fromIndex], arr[toIndex]] = [arr[toIndex] as T, arr[fromIndex] as T];
  return arr;
}
```

```javascript
function swap(arr, fromIndex, toIndex) {
  [arr[fromIndex], arr[toIndex]] = [arr[toIndex], arr[fromIndex]];
  return arr;
}
```
:::

## References

- [Destructuring assignment - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)