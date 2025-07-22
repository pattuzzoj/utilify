## isPrime

The `isPrime` function checks if an integer is prime.

### Syntax

```typescript
isPrime(value)
```

### Parameters

| Name    | Type     | Description           |
|---------|----------|-----------------------|
| `value` | `number` | Integer to be checked.|

### Return Value

| Type      | Description                                 |
|-----------|---------------------------------------------|
| `boolean` | `true` if the number is prime, else `false`.|

### Examples

```typescript
isPrime(7);  // true
isPrime(10); // false
isPrime(1);  // false
```

### Notes

- Throws a `TypeError` if the value is not an integer.
- Prime numbers are greater than 1 and divisible only by 1 and themselves.
- Useful for mathematical algorithms and cryptography.

### References
- [MDN: Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)
- [Wikipedia: Prime number](https://en.wikipedia.org/wiki/Prime_number)