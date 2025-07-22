# unzip

The `unzip` function transforms an array of grouped arrays into arrays of corresponding elements.

## Syntax

```typescript
unzip<T>(array: T[][]): T[][];
```

### Parameters

| Name     | Type      | Description                |
|----------|-----------|----------------------------|
| `array`  | `T[][]`   | Array of grouped arrays    |

### Returns

| Type      | Description                    |
|-----------|-------------------------------|
| `T[][]`   | New array of ungrouped arrays  |

## Examples

```typescript
unzip([[1, 'a'], [2, 'b'], [3, 'c']]); // => [[1, 2, 3], ['a', 'b', 'c']]
```

## Notes

* Inverse of the `zip` function.
* Useful for tabular data manipulation.

## References

* https://lodash.com/docs/4.17.15#unzip