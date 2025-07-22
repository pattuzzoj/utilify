# unique

The `unique` function returns a new array containing only the unique elements from the original array.

## Syntax

```typescript
unique<T>(array: T[]): T[];
```

### Parameters

| Name     | Type    | Description          |
|----------|---------|----------------------|
| `array`  | `T[]`   | Source array         |

### Returns

| Type    | Description                      |
|---------|----------------------------------|
| `T[]`   | New array with unique elements   |

## Examples

```typescript
unique([1, 2, 2, 3, 4, 4]); // => [1, 2, 3, 4]
```

## Notes

* The order of elements is preserved according to the first occurrence.
* Does not modify the original array.

## References

* https://lodash.com/docs/4.17.15#uniq