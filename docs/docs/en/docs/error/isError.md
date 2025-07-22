# isError

The `isError` function checks if a value is an error-like object, containing the properties `name` and `message`.

## Syntax

```typescript
isError(value: any): value is { name: string; message: string; stack?: string };
```

### Parameters

| Name      | Type      | Description         |
| --------- | --------- | ------------------ |
| `value`   | `any`     | The value to check |

### Returns

| Type       | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| `boolean`  | `true` if the value is an object with error properties, `false` otherwise   |

## Examples

```typescript
isError(new Error("Generic error"));
// => true

isError({ name: "CustomError", message: "Message" });
// => true

isError({});
// => false
```

## Notes

* Useful for validating objects that follow the error structure, even if they are not instances of `Error`.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error