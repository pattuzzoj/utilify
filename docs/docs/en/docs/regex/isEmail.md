## isEmail

The `isEmail` function checks if a string matches the format of a valid email address.

### Syntax

```javascript
isEmail(value)
```

### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `value`   | `string` | The string to be checked.                   |

### Return

| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | Returns `true` if the string matches the format of a valid email, otherwise returns `false`. |

### Examples

```javascript
isEmail('user@domain.com');      // true
isEmail('user.name@domain.com'); // true
isEmail('user@domain');          // false
isEmail('user@.com');            // false
isEmail('user@domain.c');        // false
isEmail('');                     // false
```

### Notes

- Throws a `TypeError` if the provided value is not a string.
- Only validates the basic email format; does not check if the domain exists or is active.

### References

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [RFC 5322: Internet Message Format](https://datatracker.ietf.org/doc/html/rfc5322)