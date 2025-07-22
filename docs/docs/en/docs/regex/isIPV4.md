## isIPV4

The `isIPV4` function checks if a string matches the format of a valid IPv4 address, with or without a port.

### Syntax

```javascript
isIPV4(value)
```

### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `value`   | `string` | Address to be checked.                      |

### Return

| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | Returns `true` if the string matches the format of a valid IPv4, otherwise returns `false`. |

### Examples

```javascript
isIPV4('192.168.0.1');        // true
isIPV4('255.255.255.255');    // true
isIPV4('10.0.0.1:8080');      // true
isIPV4('256.0.0.1');          // false
isIPV4('192.168.0');          // false
isIPV4('abc.def.ghi.jkl');    // false
isIPV4('192.168.0.1:99999');  // false
```

### Notes

- Throws a `TypeError` if the provided value is not a string.
- Supports addresses with or without port (e.g., `192.168.0.1:8080`).

### References

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [Wikipedia: Endereço IPv4](https://pt.wikipedia.org/wiki/Endere%C3%A7o_IPv4)