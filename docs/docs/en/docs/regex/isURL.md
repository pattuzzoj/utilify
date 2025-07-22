## isURL

The `isURL` function checks if a string matches the format of a valid URL (http or https).

### Syntax

```javascript
isURL(value)
```

### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `value`   | `string` | URL to be checked.                          |

### Return

| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | Returns `true` if the string matches the format of a valid URL, otherwise returns `false`. |

### Examples

```javascript
isURL('https://www.example.com');      // true
isURL('http://example.com/path');      // true
isURL('ftp://example.com');            // false
isURL('www.example.com');              // false
isURL('https://example');              // false
isURL('https://example.com:8080');     // true
isURL('https://example.com/path?q=1'); // true
isURL('');                            // false
```

### Notes

- Throws a `TypeError` if the provided value is not a string.
- Only validates URLs with http or https protocol.

### References

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)