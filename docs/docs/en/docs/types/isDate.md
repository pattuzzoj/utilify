# isDate

The `isDate` function checks if the provided value is an instance of Date.

## Syntax
```typescript
isDate(value: any): value is Date;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is an instance of Date           |

## Examples
```typescript
isDate(new Date()); // => true
isDate("2024-01-01"); // => false
```

## Notes
* Useful for validating dates before performing operations with Date objects.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date