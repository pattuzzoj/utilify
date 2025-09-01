## divisors

The `divisors` function returns all positive integer divisors of a number.

### Syntax

```typescript
divisors(value)
```

### Parameters

| Name    | Type     | Description                       |
|---------|----------|-----------------------------------|
| `value` | `number` | Positive integer to be analyzed.  |

### Return Value

| Type       | Description                                 |
|------------|---------------------------------------------|
| `number[]` | Array of all positive divisors of `value`.  |

### Examples

```typescript
divisors(12); // [1, 2, 3, 4, 6, 12]
divisors(7);  // [1, 7]
```

### Notes

- Throws a `TypeError` if the value is not a positive integer.
- Useful for factor analysis, mathematics, and algorithms.

### References
- [MDN: Remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)