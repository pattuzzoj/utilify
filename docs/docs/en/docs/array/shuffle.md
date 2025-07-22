# shuffle

The `shuffle` function randomly shuffles the elements of an array.

## Syntax

```typescript
shuffle<T>(array: T[]): T[];
```

### Parameters

| Name     | Type    | Description                    |
|----------|---------|--------------------------------|
| `array`  | `T[]`   | Source array                   |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | New shuffled array                        |

## Examples

```typescript
shuffle([1, 2, 3, 4]); // => [3, 1, 4, 2] (example)
```

## Notes

* The original array may be modified.
* Useful for draws and list randomization.

## References

* https://lodash.com/docs/4.17.15#shuffle