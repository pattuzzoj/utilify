# union

The `union` function returns a new array containing all unique elements from two or more arrays.

## Syntax

```typescript
union<T>(...arrays: T[][]): T[];
```

### Parameters

| Name      | Type     | Description                                  |
|-----------|----------|----------------------------------------------|
| `arrays`  | `T[][]`  | Two or more source arrays                    |

### Returns

| Type    | Description                                 |
|---------|---------------------------------------------|
| `T[]`   | New array with unique elements              |

## Examples

```typescript
union([1, 2], [2, 3], [3, 4]); // => [1, 2, 3, 4]
```

## Notes

* The order of elements is preserved according to the first occurrence.
* Does not modify the original arrays.

## References

* https://lodash.com/docs/4.17.15#union