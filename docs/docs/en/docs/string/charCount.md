# charCount

Counts how many times a specific character appears in a string.

## Syntax
```typescript
charCount(str: string, char: string): number
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The string in which to count.               |
| `char`    | `string` | The character to count (must be a single-character string). |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `number`  | The number of occurrences of the character in the string. |

## Example
```typescript
charCount("banana", "a"); // 3
charCount("abracadabra", "b"); // 2
charCount("teste", "z"); // 0
```

## Notes
- Throws `TypeError` if `str` is not a string or if `char` is not a single-character string.
- The count is case-sensitive.

## References
- [MDN: String.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [MDN: String.prototype.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)