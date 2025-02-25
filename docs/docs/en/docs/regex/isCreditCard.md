# isCreditCard

The `isCreditCard` function checks if a given string is a valid credit card number according to common formats, including Visa, MasterCard, American Express, Discover, and others.

## Syntax

```typescript
function isCreditCard(value: string): boolean
```

### Parameters

| Name | Type     | Description                                      |
|------|----------|--------------------------------------------------|
| value  | `string` | The string to be checked for valid credit card format. |

### Return

| Type     | Description                                      |
|----------|--------------------------------------------------|
| `boolean` | Returns `true` if the string is a valid credit card number, otherwise returns `false`. |

## Examples

```typescript
console.log(isCreditCard("4111111111111111"));  // Output: true (Visa)
console.log(isCreditCard("5105105105105100"));  // Output: true (MasterCard)
console.log(isCreditCard("378282246310005"));   // Output: true (American Express)
console.log(isCreditCard("1234567890123456"));  // Output: false
```

## Notes

- This function uses a regular expression to validate a variety of credit card types by their prefixes and lengths.
- It does not check for the card's actual validity (i.e., it doesn't check against a database or use the Luhn algorithm).

## Code

::: code-group
```typescript
function isCreditCard(value: string): boolean {
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(value);
}
```

```javascript
function isCreditCard(value) {
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(value);
}
```
:::

## References

- [Credit card number](https://en.wikipedia.org/wiki/Credit_card_number)
- [RegExp.prototype.test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)