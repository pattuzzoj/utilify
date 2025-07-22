# collectBy

The `collectBy` function groups elements of an array into subarrays based on a key selector function.

## Syntax

```typescript
collectBy<T, K extends PropertyKey>(
  array: T[],
  keySelector: (value: T, index: number) => K
): T[][];
```

### Parameters

| Name           | Type                                 | Description                               |
|----------------|--------------------------------------|-------------------------------------------|
| `array`        | `T[]`                                | Source array                              |
| `keySelector`  | `(value: T, index: number) => K`     | Function to select the grouping key       |

### Returns

| Type     | Description                               |
|----------|-------------------------------------------|
| `T[][]`  | Subarrays grouped by key                  |

## Examples

```typescript
collectBy([1, 2, 3, 4], x => x % 2); // => [[2,4],[1,3]]
collectBy(["a", "b", "aa"], x => x.length); // => [["a","b"],["aa"]]
```

## Notes

* Useful for grouping elements by custom criteria.

## References

* https://lodash.com/docs/4.17.15#groupBy