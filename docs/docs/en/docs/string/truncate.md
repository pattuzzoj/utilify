# truncate

Truncates a string to a specified length and optionally adds an ending (like an ellipsis).

## Syntax
```typescript
truncate(str: string, length: number, ending?: string): string
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The input string to be truncated.           |
| `length`  | `number` | The maximum length of the truncated string. |
| `ending`  | `string` | (Optional) The string to append at the end if truncated. Default is `"..."`. |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The truncated string.                        |

## Example
```typescript
truncate("Exemplo de string para truncar", 10); // "Exemplo..."
truncate("Teste", 10); // "Teste"
truncate("Utilify", 4, "~"); // "Uti~"
```

## Notes
- Throws `TypeError` if `str` is not a string or `length` is not a number.
- If the string is shorter than or equal to the specified length, it is returned unchanged.

## References
- [MDN: String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [MDN: String.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)