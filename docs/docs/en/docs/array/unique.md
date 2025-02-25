# unique

The `unique` function returns a new array containing only unique elements from the input array.

## Syntax

```typescript
function unique<T>(arr: T[]): T[];
```

### Parameters

| Name  | Type   | Description                                      |
|-------|--------|--------------------------------------------------|
| `arr` | `T[]`  | The array to remove duplicates from.             |

### Return

| Type   | Description                                           |
|--------|-------------------------------------------------------|
| `T[]`  | A new array containing only unique elements.          |

## Examples

```typescript
console.log(unique([1, 2, 2, 3, 3, 4]));        // [1, 2, 3, 4]
console.log(unique(['a', 'b', 'a', 'c']));      // ['a', 'b', 'c']
console.log(unique([true, true, false]));       // [true, false]
```

## Notes

- Uses `Set` to efficiently remove duplicates
- The order of elements is preserved based on first appearance
- Returns a new array; does not modify the input array
- Works with any type of array elements that can be stored in a Set

## Source Code

::: code-group
```typescript
function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
```

```javascript
function unique(arr) {
  return [...new Set(arr)];
}
```
:::

## References

- [Set - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Spread syntax - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)