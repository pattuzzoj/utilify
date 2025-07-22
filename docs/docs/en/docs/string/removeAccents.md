# removeAccents

Removes accents and diacritical marks from a string.

## Syntax
```typescript
removeAccents(str: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The input string.                           |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The string without accents or diacritical marks. |

## Example
```typescript
removeAccents("ação"); // "acao"
removeAccents("café"); // "cafe"
removeAccents("Olá, mundo!"); // "Ola, mundo!"
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Uses Unicode normalization (NFD) to separate characters and removes diacritics with a regular expression.

## References
- [MDN: String.prototype.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [MDN: String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)