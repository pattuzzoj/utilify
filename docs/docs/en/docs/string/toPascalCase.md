# toPascalCase

Converts a string to PascalCase format (first letter of each word in uppercase, no spaces).

## Syntax
```typescript
toPascalCase(str: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The input string.                           |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The string converted to PascalCase.          |

## Example
```typescript
toPascalCase("exemplo de string"); // "ExemploDeString"
toPascalCase("  teste pascal case  "); // "TestePascalCase"
toPascalCase(""); // ""
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Extra spaces are removed before conversion.

## References
- [MDN: String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [MDN: String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)