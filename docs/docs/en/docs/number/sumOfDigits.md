## sumOfDigits

The `sumOfDigits` function returns the sum of the digits of a number.

### Syntax

```typescript
sumOfDigits(value)
```

### Parameters

| Name    | Type     | Description           |
|---------|----------|-----------------------|
| `value` | `number` | Number to be analyzed.|

### Return Value

| Type     | Description                                 |
|----------|---------------------------------------------|
| `number` | The sum of the digits of the given number.  |

### Examples

```typescript
sumOfDigits(123);   // 6
sumOfDigits(2023);  // 7
```

### Notes

- Throws a `TypeError` if the value is not a number.
- Useful for mathematical algorithms, validation, and checksum.

### References
- [MDN: String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)