# isNil

The `isNil` function checks if the provided value is null or undefined.

## Syntax
```typescript
isNil(value: any): value is null | undefined;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is null or undefined             |

## Examples
```typescript
isNil(null); // => true
isNil(undefined); // => true
isNil(0); // => false
```

## Notes
* Useful for validating absence of value.

## References
* https://developer.mozilla.org/en-US/docs/Glossary/undefined
* https://developer.mozilla.org/en-US/docs/Glossary/null