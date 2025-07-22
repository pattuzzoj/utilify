## isCreditCard

The `isCreditCard` function checks if a string matches the format of a valid credit card number (Visa, MasterCard, American Express, Discover, JCB, Diners Club, among others).

### Syntax

```javascript
isCreditCard(value)
```

### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `value`   | `string` | The string to be checked.                   |

### Return

| Type      | Description                                 |
| :-------- | :------------------------------------------ |
| `boolean` | Returns `true` if the string matches the format of a valid credit card, otherwise returns `false`. |

### Examples

```javascript
isCreditCard('4111111111111111'); // true (Visa)
isCreditCard('5500000000000004'); // true (MasterCard)
isCreditCard('340000000000009');  // true (American Express)
isCreditCard('1234567890123456'); // false
isCreditCard('abcd');             // false
isCreditCard('');                 // false
```

### Notes

- Throws a `TypeError` if the provided value is not a string.
- Only validates the format; does not check if the card is active or authorized.

### References

- [MDN: String.prototype.test()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
- [Wikipedia: Credit card number](https://pt.wikipedia.org/wiki/N%C3%BAmero_de_cart%C3%A3o_de_cr%C3%A9dito)