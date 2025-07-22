# compact

The `compact` function removes falsy values from an array.

## Syntax

```typescript
compact<T>(array: T[]): T[];
```

### Parameters

| Name     | Type   | Description                    |
|----------|--------|--------------------------------|
| `array`  | `T[]`  | Source array                   |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | New array without falsy values            |

## Examples

```typescript
compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]
compact([null, undefined, NaN, 4]); // => [4]
```

## Notes

* Falsy values include: false, 0, "", null, undefined, NaN.
* Does not modify the original array.

## References

* https://lodash.com/docs/4.17.15#compact