# isUndefined

The `isUndefined` function checks if the provided value is undefined.

## Syntax
```typescript
isUndefined(value: any): value is undefined;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is undefined                     |

## Examples
```typescript
isUndefined(undefined); // => true
isUndefined(null); // => false
isUndefined(0); // => false
```

## Notes
* Useful for validating uninitialized variables.

## References
* https://developer.mozilla.org/en-US/docs/Glossary/undefined