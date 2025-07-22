# zip

The `zip` function groups elements from two or more arrays into arrays of corresponding pairs.

## Syntax

```typescript
zip<T>(...arrays: T[][]): T[][];
```

### Parameters

| Name      | Type     | Description                    |
|-----------|----------|--------------------------------|
| `arrays`  | `T[][]`  | Two or more source arrays      |

### Returns

| Type      | Description                    |
|-----------|-------------------------------|
| `T[][]`   | New array of grouped arrays    |

## Examples

```typescript
zip([1, 2, 3], ['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
```

## Notes

* Grouping is done up to the shortest array length.
* Inverse of the `unzip` function.

## References

* https://lodash.com/docs/4.17.15#zip