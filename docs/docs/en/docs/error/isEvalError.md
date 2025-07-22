# isEvalError

The `isEvalError` function checks if a value is an instance of `EvalError`.

## Syntax

```typescript
isEvalError(value: any): value is EvalError;
```

### Parameters

| Name      | Type      | Description         |
| --------- | --------- | ------------------ |
| `value`   | `any`     | The value to check |

### Returns

| Type       | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| `boolean`  | `true` if the value is an instance of `EvalError`, `false` otherwise |

## Examples

```typescript
isEvalError(new EvalError("Evaluation error"));
// => true

isEvalError(new Error());
// => false

isEvalError({});
// => false
```

## Notes

* Useful for identifying errors related to the use of the `eval` function.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError