# groupBy

The `groupBy` function groups the elements of an array according to the value returned by a key selector function.

## Syntax

```typescript
groupBy<T, K extends PropertyKey>(
  array: T[],
  keySelector: (value: T, index: number) => K
): Record<K, T[]>;
```

### Parameters

| Name     | Type                                         | Description                    |
|----------|----------------------------------------------|--------------------------------|
| `array`  | `T[]`                                        | Source array                   |
| `fn`     | `(value: T, index: number, array: T[]) => K` | Grouping function              |

### Returns

| Type               | Description                    |
|--------------------|--------------------------------|
| `Record<K, T[]>`   | Object with grouped arrays     |

## Examples

```typescript
groupBy([1, 2, 3, 4], x => x % 2); // => {0: [2,4], 1: [1,3]}
groupBy(["a", "b", "aa"], x => x.length); // => {1: ["a","b"], 2: ["aa"]}
```

## Notes

* Useful for categorizing elements by custom criteria.

## References

* https://lodash.com/docs/4.17.15#groupBy