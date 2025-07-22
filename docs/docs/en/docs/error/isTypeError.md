# isTypeError

The `isTypeError` function checks if a value is an instance of `TypeError`.

## Syntax

```typescript
isTypeError(value: any): value is TypeError;
```

### Parameters

| Name      | Type      | Description         |
| --------- | --------- | ------------------ |
| `value`   | `any`     | The value to check |

### Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | `true` if the value is an instance of `TypeError`, `false` otherwise |

## Examples

```typescript
isTypeError(new TypeError("Invalid type"));
// => true

isTypeError(new Error());
// => false

isTypeError({});
// => false
```

## Notes

* Useful for identifying type errors in JavaScript operations.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError