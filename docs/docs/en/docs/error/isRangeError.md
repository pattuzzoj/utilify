# isRangeError

The `isRangeError` function checks if a value is an instance of `RangeError`.

## Syntax

```typescript
isRangeError(value: any): value is RangeError;
```

### Parameters

| Name      | Type      | Description         |
| --------- | --------- | ------------------ |
| `value`   | `any`     | The value to check |

### Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | `true` if the value is an instance of `RangeError`, `false` otherwise |

## Examples

```typescript
isRangeError(new RangeError("Out of range"));
// => true

isRangeError(new Error());
// => false

isRangeError({});
// => false
```

## Notes

* Useful for identifying range errors in mathematical or array operations.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError