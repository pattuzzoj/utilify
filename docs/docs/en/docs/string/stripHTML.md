# stripHTML

Removes all HTML tags from a string, returning only the plain text.

## Syntax
```typescript
stripHTML(html: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `html`    | `string` | The string containing HTML to be cleaned.   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The string without HTML tags.                |

## Example
```typescript
stripHTML("<p>Olá <b>mundo</b>!</p>"); // "Olá mundo!"
stripHTML("<div><span>Texto</span></div>"); // "Texto"
stripHTML(""); // ""
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Removes all HTML tags, but does not perform full sanitization for XSS.

## References
- [MDN: String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)