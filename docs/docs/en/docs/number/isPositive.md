## isPositive

The `isPositive` function checks if a number is positive.

### Syntax

```typescript
isPositive(value)
```

### Parameters

| Name    | Type     | Description            |
|---------|----------|------------------------|
| `value` | `number` | Number to be checked.  |

### Return Value

| Type      | Description                                 |
|-----------|---------------------------------------------|
| `boolean` | `true` if the number is positive, else `false`. |

### Examples

```typescript
isPositive(10); // true
isPositive(0);  // false
isPositive(-5); // false
```

### Notes

- Throws a `TypeError` if the value is not a number.
- Useful for mathematical and logical validations.

### References
- [MDN: Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)