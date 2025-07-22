# append

The `append` function adds a value to the end of an array, returning a new array.

## Syntax

```typescript
append<T>(array: T[], value: T): T[];
```

### Parameters

| Name     | Type   | Description                    |
|----------|--------|--------------------------------|
| `array`  | `T[]`  | Source array                   |
| `value`  | `T`    | Value to be added              |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | New array with the added value            |

## Examples

```typescript
append([1, 2, 3], 4); // => [1, 2, 3, 4]
append([], 1); // => [1]
```

## Notes

* Does not modify the original array.

## References

* https://ramdajs.com/docs/#append