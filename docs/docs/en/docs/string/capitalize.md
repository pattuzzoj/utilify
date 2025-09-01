# capitalize

Converts the first character of a string to uppercase and the rest to lowercase.

## Syntax
```typescript
capitalize(str: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The string to be capitalized.               |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The resulting string with the first character in uppercase and the rest in lowercase. |

## Example
```typescript
capitalize("exemplo"); // "Exemplo"
capitalize("eXEMPLO"); // "Exemplo"
capitalize(""); // ""
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Returns an empty string if the input is empty.

## References
- [MDN: String.prototype.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [MDN: String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)