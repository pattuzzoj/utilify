# isUpperCase

Checks if a string contains at least one uppercase letter and no lowercase letters.

## Syntax
```typescript
isUpperCase(str: string): boolean
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The string to be checked.                   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | `true` if the string contains at least one uppercase letter and no lowercase letters, otherwise `false`. |

## Example
```typescript
isUpperCase("ABC"); // true
isUpperCase("aBC"); // false
isUpperCase("123"); // false
isUpperCase(""); // false
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Spaces are ignored in the check.

## References
- [MDN: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)