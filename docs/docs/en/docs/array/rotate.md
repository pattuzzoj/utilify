# rotate

The `rotate` function shifts the elements of an array to the left or right according to the given offset.

## Syntax

```typescript
rotate<T>(array: T[], offset: number): T[];
```

### Parameters

| Name     | Type      | Description                    |
|----------|-----------|--------------------------------|
| `array`  | `T[]`     | Source array                   |
| `offset` | `number`  | Number of positions to rotate  |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | New rotated array                         |

## Examples

```typescript
rotate([1, 2, 3, 4], 1); // => [2, 3, 4, 1]
rotate([1, 2, 3, 4], -1); // => [4, 1, 2, 3]
rotate([1, 2, 3, 4], 2); // => [3, 4, 1, 2]
```

## Notes

* The offset can be positive (right) or negative (left).
* Does not modify the original array.

## References

* https://lodash.com/docs/4.17.15#rotate