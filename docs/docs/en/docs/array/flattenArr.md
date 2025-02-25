# flattenArr

The `flattenArr` function flattens an array to the specified depth.

## Syntax

```typescript
function flattenArr<T>(arr: T[], depth: number = Infinity): FlatArray<T[], number>[];
```

### Parameters

| Name    | Type      | Description                                                              |
|---------|-----------|--------------------------------------------------------------------------|
| `arr`   | `T[]`     | The array to be flattened.                                               |
| `depth` | `number`  | The depth level that specifies how deep the nested array structure should be flattened. The default is `Infinity`. |

### Return

| Type    | Description                                                              |
|---------|--------------------------------------------------------------------------|
| `FlatArray<T[], number>[]` | A new array with the elements of the sub-array concatenated into it. |

## Examples

```typescript
console.log(flattenArr([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(flattenArr([1, [2, [3, [4]]]]));   // [1, 2, 3, [4]]
```

## Notes

- The function uses `Array.prototype.flat` to flatten the array.

## Source Code

::: code-group
```typescript
function flattenArr<T>(arr: T[], depth: number = Infinity): FlatArray<T[], number>[] {
  return (arr as T[]).flat(depth) as FlatArray<T[], number>[];
}
```

```javascript
function flattenArr(array, depth = Infinity) {
  return array.flat(depth);
}
```
:::

## References

- [Array.prototype.flat() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)