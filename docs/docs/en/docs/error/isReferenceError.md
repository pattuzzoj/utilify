# isReferenceError

The `isReferenceError` function checks if a value is an instance of `ReferenceError`.

## Syntax

```typescript
isReferenceError(value: any): value is ReferenceError;
```

### Parameters

| Name      | Type      | Description         |
| --------- | --------- | ------------------ |
| `value`   | `any`     | The value to check |

### Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | `true` if the value is an instance of `ReferenceError`, `false` otherwise |

## Examples

```typescript
isReferenceError(new ReferenceError("Undefined variable"));
// => true

isReferenceError(new Error());
// => false

isReferenceError({});
// => false
```

## Notes

* Useful for identifying reference errors in JavaScript operations.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError