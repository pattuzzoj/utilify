# isNull

The `isNull` function checks if the provided value is exactly null.

## Syntax
```typescript
isNull(value: any): value is null;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is null                          |

## Examples
```typescript
isNull(null); // => true
isNull(undefined); // => false
isNull(0); // => false
```

## Notes
* Useful for explicitly validating null values.

## References
* https://developer.mozilla.org/en-US/docs/Glossary/null