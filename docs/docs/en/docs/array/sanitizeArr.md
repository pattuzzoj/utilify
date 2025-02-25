# sanitizeArr

The `sanitizeArr` function removes or replaces specified values in an array.

## Syntax

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replace?: T): T[];
```

### Parameters

| Name      | Type    | Description                                                      |
|-----------|---------|------------------------------------------------------------------|
| `arr`     | `T[]`   | The source array to sanitize.                                     |
| `values`  | `T[]`   | Array of values to remove or replace.                            |
| `replace` | `T`     | Optional value to replace matched elements. If omitted, matches are removed. |

### Return

| Type   | Description                                                      |
|--------|------------------------------------------------------------------|
| `T[]`  | A new array with specified values either removed or replaced.     |

## Examples

```typescript
console.log(sanitizeArr([1, 2, 3, 4], [2, 3]));      // [1, 4]
console.log(sanitizeArr([1, 2, 3, 4], [2, 3], 0));   // [1, 0, 0, 4]
console.log(sanitizeArr(['a', 'b', 'c'], ['b']));    // ['a', 'c']
```

## Notes

- Returns a new array; does not modify the original array
- If no replace value is provided, matching values are removed
- If a replace value is provided, matching values are replaced with it
- The order of remaining elements is preserved

## Source Code

::: code-group
```typescript
function sanitizeArr<T>(arr: T[], values: T[], replace?: T): T[] {
  const result: T[] = [];

  for (const value of arr) {
    if (values.includes(value)) {
      if (replace !== undefined) {
        result.push(replace);
      }
    } else {
      result.push(value);
    }
  }

  return result;
}
```

```javascript
function sanitizeArr(arr, values, replace) {
  const result = [];

  for (const value of arr) {
    if (values.includes(value)) {
      if (replace !== undefined) {
        result.push(replace);
      }
    } else {
      result.push(value);
    }
  }

  return result;
}
```
:::

## References

- [Array.prototype.includes() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)