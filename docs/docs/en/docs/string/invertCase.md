# invertCase

Inverts the case of each character in a string: uppercase becomes lowercase and vice versa.

## Syntax
```typescript
invertCase(str: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The string to be processed.                 |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | A new string with the case of each character inverted. |

## Example
```typescript
invertCase("AbC"); // "aBc"
invertCase("Olá MUNDO!"); // "oLÁ mundo!"
invertCase(""); // ""
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Non-alphabetic characters remain unchanged.

## References
- [MDN: String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)