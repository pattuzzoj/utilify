# customError

The `customError` function creates a custom error class with a specific name, making it easier to identify different types of errors in your application.

## Syntax

```typescript
customError(name: string): typeof Error;
```

### Parameters

| Name    | Type         | Description                              |
| ------- | ------------ | ---------------------------------------- |
| `name`  | `string`     | The name to assign to the error class    |

### Returns

| Type            | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `typeof Error`  | A class extending `Error` with the specified custom name           |

## Examples

```typescript
const NotFoundError = customError("NotFoundError");
throw new NotFoundError("Resource not found");
// => throws an error with name "NotFoundError" and message "Resource not found"

const AuthError = customError("AuthError");
throw new AuthError("Access denied");
// => throws an error with name "AuthError" and message "Access denied"
```

## Notes

* The generated class inherits from `Error` and sets the name according to the provided parameter.
* Uses `Error.captureStackTrace` (when available) to remove the function itself from the stack trace, making debugging easier.
* Useful for creating different error types without repeating boilerplate code.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
