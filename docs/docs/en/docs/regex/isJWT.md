## isJWT

The `isJWT` function checks if a string matches the format of a valid JSON Web Token (JWT).

### Syntax

```javascript
isJWT(value)
```

### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `value`   | `string` | Token to be checked.                        |

### Return

| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | Returns `true` if the string matches the format of a valid JWT, otherwise returns `false`. |

### Examples

```javascript
isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'); // true
isJWT('abc.def.ghi'); // true
isJWT('abc.def');     // false
isJWT('abc');         // false
```

### Notes

- Throws a `TypeError` if the provided value is not a string.
- Does not validate the signature or content of the token, only the format.

### References

- [RFC 7519: JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)