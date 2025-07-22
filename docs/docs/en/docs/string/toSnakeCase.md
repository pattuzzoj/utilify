# toSnakeCase

Converts a string to snake_case format (lowercase and words separated by underscores).

## Syntax
```typescript
toSnakeCase(str: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The input string.                           |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The string converted to snake_case.          |

## Example
```typescript
toSnakeCase("Exemplo de String"); // "exemplo_de_string"
toSnakeCase("  Teste Snake Case  "); // "teste_snake_case"
toSnakeCase(""); // ""
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Extra spaces are removed before conversion.

## References
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [MDN: String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)