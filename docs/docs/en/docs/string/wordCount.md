# wordCount

Counts the number of words in a string.

## Syntax
```typescript
wordCount(str: string): number
```

## Parameters
| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `str`     | `string` | The input string.                           |

## Returns
| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `number`  | The number of words in the string.           |

## Example
```typescript
wordCount("Exemplo de string"); // 3
wordCount("  Teste   word count  "); // 3
wordCount(""); // 0
```

## Notes
- Throws `TypeError` if the argument is not a string.
- Words are separated by whitespace.

## References
- [MDN: String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)