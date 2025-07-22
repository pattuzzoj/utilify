# difference

The `difference` function returns a new array with the elements from the first array that are not present in the other provided arrays.

## Syntax

```typescript
difference<T>(array: T[], ...values: T[][]): T[];
```

### Parameters

| Name      | Type     | Description                    |
|-----------|----------|--------------------------------|
| `array`   | `T[]`    | Source array                   |
| `values`  | `T[][]`  | Arrays with values to exclude  |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | New array with elements unique to the first array |

## Examples

```typescript
difference([1, 2, 3, 4], [2, 4]); // => [1, 3]
difference(["a", "b", "c"], ["b"]); // => ["a", "c"]
```

## Notes

* Useful for comparing lists and removing duplicates.
* Does not modify the original array.

## References

* https://lodash.com/docs/4.17.15#difference