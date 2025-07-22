## isIPV6

The `isIPV6` function checks if a string matches the format of a valid IPv6 address, with or without a port.

### Syntax

```javascript
isIPV6(value)
```

### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `value`   | `string` | Address to be checked.                      |

### Return

| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | Returns `true` if the string matches the format of a valid IPv6, otherwise returns `false`. |

### Examples

```javascript
isIPV6('2001:0db8:85a3:0000:0000:8a2e:0370:7334');        // true
isIPV6('2001:db8::8a2e:370:7334');                        // true
isIPV6('[2001:db8::8a2e:370:7334]:8080');                 // true
isIPV6('2001:db8:85a3::8a2e:37023:7334');                // false
isIPV6('192.168.0.1');                                   // false
isIPV6('2001:db8::8a2e:370:7334:99999');                 // false
```

### Notes

- Throws a `TypeError` if the provided value is not a string.
- Supports addresses with or without port (e.g., `[2001:db8::8a2e:370:7334]:8080`).

### References

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [Wikipedia: Endereço IPv6](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IPv6)