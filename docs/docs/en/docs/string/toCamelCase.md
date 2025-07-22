# toCamelCase

Converts a string to camelCase format.

## Syntax
```typescript
toCamelCase(str: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The input string.                           |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The string converted to camelCase.           |

## Example
```typescript
toCamelCase("exemplo de string"); // "exemploDeString"
toCamelCase("  teste camel case  "); // "testeCamelCase"
toCamelCase(""); // ""
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Extra spaces are removed before conversion.

## References
- [MDN: String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [MDN: String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)