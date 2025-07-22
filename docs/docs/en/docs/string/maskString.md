# maskString

Masks part of a string by replacing characters with a mask character.

## Syntax
```typescript
maskString(str: string, mask: string, maskStart: number, maskLength: number): string
```

## Parameters
| Parameter   | Type     | Description                                 |
| :---------- | :------- | :------------------------------------------ |
| `str`       | `string` | The original string.                        |
| `mask`      | `string` | The mask character or string.               |
| `maskStart` | `number` | Starting index to apply the mask (>= 0).    |
| `maskLength`| `number` | Number of characters to be masked (>= 0).   |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `string`  | The resulting string with the masked part.   |

## Example
```typescript
maskString("123456789", "*", 2, 4); // "12****789"
maskString("abcdef", "#", 0, 3); // "###def"
maskString("openai", "X", 4, 10); // "openXX"
```

## Notes
- Throws `TypeError` if the arguments are not of the expected type.
- Throws `RangeError` if `maskStart` or `maskLength` are negative, or if `maskStart` is greater than the string length.
- If `maskLength` exceeds the remaining length of the string, masks until the end.

## References
- [MDN: String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [MDN: String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)