# isBoolean

The `isBoolean` function checks if the provided value is of boolean type.

## Syntax
```typescript
isBoolean(value: any): value is boolean;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a boolean                     |

## Examples
```typescript
isBoolean(true); // => true
isBoolean(false); // => true
isBoolean(0); // => false
```

## Notes
* Useful for type validation before logical operations.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean