# union

The `union` function combines multiple arrays and returns a new array with unique elements.

## Syntax

```typescript
function union<T>(...arrs: T[][]): T[];
```

### Parameters

| Name   | Type     | Description                                              |
|--------|----------|--------------------------------------------------------|
| `arrs` | `T[][]`  | Two or more arrays to combine.                          |

### Return

| Type   | Description                                              |
|--------|--------------------------------------------------------|
| `T[]`  | A new array containing unique elements from all input arrays. |

## Examples

```typescript
console.log(union([1, 2], [2, 3]));             // [1, 2, 3]
console.log(union([1, 2], [3, 4], [4, 5]));     // [1, 2, 3, 4, 5]
console.log(union(['a', 'b'], ['b', 'c']));     // ['a', 'b', 'c']
```

## Notes

- Duplicates are removed from the final result
- The order of elements is preserved based on first appearance
- Uses the `unique` function internally to remove duplicates
- Returns a new array; does not modify input arrays

## Source Code

::: code-group
```typescript
import unique from './unique';

function union<T>(...arrs: T[][]): T[] {
  return unique(arrs.reduce((unionArr, arr) => [...unionArr, ...arr], []));
}
```

```javascript
function union(...arrs) {
  return unique(arrs.reduce((unionArr, arr) => [...unionArr, ...arr], []));
}
```
:::

## References

- [Array.prototype.reduce() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Spread syntax - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)