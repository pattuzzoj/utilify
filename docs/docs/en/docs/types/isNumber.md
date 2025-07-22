# isNumber

The `isNumber` function checks if the provided value is of type number.

## Syntax
```typescript
isNumber(value: any): value is number;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a number                      |

## Examples
```typescript
isNumber(123); // => true
isNumber("123"); // => false
```

## Notes
* Useful for validating numeric values before mathematical operations.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number