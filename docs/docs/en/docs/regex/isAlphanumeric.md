## isAlphanumeric

The `isAlphanumeric` function checks if a string contains only alphanumeric characters (letters and numbers), without symbols or spaces.

### Syntax

```javascript
isAlphanumeric(value)
```

### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `value`   | `string` | The string to be checked.                   |

### Return

| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | Returns `true` if the string contains only letters and numbers, otherwise returns `false`. |

### Examples

```javascript
isAlphanumeric('abc123');   // true
isAlphanumeric('ABC');      // true
isAlphanumeric('123');      // true
isAlphanumeric('abc!');     // false
isAlphanumeric('abc 123');  // false
isAlphanumeric('');         // false
```

### Notes

- Throws a `TypeError` if the provided value is not a string.
- Does not allow spaces, accents, or symbols.

### References

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)