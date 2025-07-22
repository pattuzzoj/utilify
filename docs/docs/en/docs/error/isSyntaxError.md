# isSyntaxError

The `isSyntaxError` function checks if a value is an instance of `SyntaxError`.

## Syntax

```typescript
isSyntaxError(value: any): value is SyntaxError;
```

### Parameters

| Name      | Type      | Description         |
| --------- | --------- | ------------------ |
| `value`   | `any`     | The value to check |

### Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | `true` if the value is an instance of `SyntaxError`, `false` otherwise |

## Examples

```typescript
isSyntaxError(new SyntaxError("Syntax error"));
// => true

isSyntaxError(new Error());
// => false

isSyntaxError({});
// => false
```

## Notes

* Useful for identifying syntax errors in JavaScript operations.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError