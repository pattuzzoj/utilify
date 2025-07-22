# isRegExp

The `isRegExp` function checks if the provided value is a regular expression (RegExp).

## Syntax
```typescript
isRegExp(value: any): value is RegExp;
```

## Parameters
| Parameter | Type   | Description           |
| :-------- | :----- | :--------------------|
| `value`   | `any`  | Value to be checked   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | True if it is a RegExp                      |

## Examples
```typescript
isRegExp(/abc/); // => true
isRegExp("abc"); // => false
```

## Notes
* Useful for validation before using RegExp methods.

## References
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp