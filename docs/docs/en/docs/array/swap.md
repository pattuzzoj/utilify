# swap

The `swap` function exchanges the elements at two positions in an array.

## Syntax

```typescript
swap<T>(array: T[], indexA: number, indexB: number): T[];
```

### Parameters

| Name     | Type      | Description                    |
|----------|-----------|--------------------------------|
| `array`  | `T[]`     | Source array                   |
| `indexA` | `number`  | Index of the first element     |
| `indexB` | `number`  | Index of the second element    |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | New array with swapped elements           |

## Examples

```typescript
swap([1, 2, 3, 4], 0, 2); // => [3, 2, 1, 4]
```

## Notes

* Does not modify the original array.
* If the indices are the same, returns the array unchanged.

## References

* https://lodash.com/docs/4.17.15#swap
