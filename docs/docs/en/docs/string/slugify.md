# slugify

Converts a string into a URL-friendly slug by removing accents, special characters, and replacing spaces with hyphens.

## Syntax
```typescript
slugify(str: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The input string.                           |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The slug generated from the input string.    |

## Example
```typescript
slugify("Olá, mundo!"); // "ola-mundo"
slugify("Café com Leite"); // "cafe-com-leite"
slugify("  Exemplo de Slug  "); // "exemplo-de-slug"
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Removes punctuation, accents, and converts to lowercase.
- Replaces consecutive spaces with a single hyphen.

## References
- [MDN: String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [MDN: String.prototype.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)