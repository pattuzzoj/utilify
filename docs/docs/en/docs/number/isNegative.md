## isNegative

The `isNegative` function checks if a number is negative.

### Syntax

```typescript
isNegative(value)
```

### Parameters

| Name    | Type     | Description            |
|---------|----------|------------------------|
| `value` | `number` | Number to be checked.  |

### Return Value

| Type      | Description                                 |
|-----------|---------------------------------------------|
| `boolean` | `true` if the number is negative, else `false`. |

### Examples

```typescript
isNegative(-5); // true
isNegative(0);  // false
isNegative(10); // false
```

### Notes

- Throws a `TypeError` if the value is not a number.
- Useful for mathematical and logical validations.

### References
- [MDN: Arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators)