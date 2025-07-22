# isLowerCase

Checks if a string contains at least one lowercase letter and no uppercase letters.

## Syntax
```typescript
isLowerCase(str: string): boolean
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The string to be checked.                   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | `true` if the string contains at least one lowercase letter and no uppercase letters, otherwise `false`. |

## Example
```typescript
isLowerCase("abc"); // true
isLowerCase("Abc"); // false
isLowerCase("123"); // false
isLowerCase(""); // false
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Spaces are ignored in the check.

## References
- [MDN: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)