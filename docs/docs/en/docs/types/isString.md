# isString

The `isString` function checks if the provided value is of type string.

## Syntax
```typescript
isString(value: any): value is string;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a string                      |

## Examples
```typescript
isString("abc"); // => true
isString(123); // => false
```

## Notes
* Useful for validating values before performing string operations.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String