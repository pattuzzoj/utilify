## isAlpha

The `isAlpha` function checks if a string contains only alphabetic characters (letters), without numbers or symbols.

### Syntax

```javascript
isAlpha(value)
```

### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `value`   | `string` | The string to be checked.                   |

### Return

| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | Returns `true` if the string contains only letters, otherwise returns `false`. |

### Examples

```javascript
isAlpha('abc');      // true
isAlpha('ABC');      // true
isAlpha('abc123');   // false
isAlpha('abc!');     // false
isAlpha('áéíóú');    // true
isAlpha('');         // false
```

### Notes

- Throws a `TypeError` if the provided value is not a string.
- Supports Unicode characters (accents, letters from other alphabets).

### References

- [MDN: Unicode Property Escapes in Regular Expressions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)
- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)