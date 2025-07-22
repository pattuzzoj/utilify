# isFalsy

The `isFalsy` function checks if the provided value is considered falsy in JavaScript.

## Syntax
```typescript
isFalsy(value: any): boolean;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a falsy value                 |

## Examples
```typescript
isFalsy(0); // => true
isFalsy(""); // => true
isFalsy(null); // => true
isFalsy(undefined); // => true
isFalsy(false); // => true
isFalsy(NaN); // => true
isFalsy(1); // => false
```

## Notes
* Falsy values include: false, 0, "", null, undefined, NaN.

## References
* https://developer.mozilla.org/en-US/docs/Glossary/Falsy