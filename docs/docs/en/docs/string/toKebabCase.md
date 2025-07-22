# toKebabCase

Converts a string to kebab-case format (lowercase and words separated by hyphens).

## Syntax
```typescript
toKebabCase(str: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The input string.                           |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The string converted to kebab-case.          |

## Example
```typescript
toKebabCase("Exemplo de String"); // "exemplo-de-string"
toKebabCase("  Teste Kebab Case  "); // "teste-kebab-case"
toKebabCase(""); // ""
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Extra spaces are removed before conversion.

## References
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [MDN: String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)