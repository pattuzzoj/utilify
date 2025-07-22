## inRange

The `inRange` function checks if a number is within an inclusive range.

### Syntax

```typescript
inRange(value, min, max)
```

### Parameters

| Name    | Type     | Description               |
|---------|----------|---------------------------|
| `value` | `number` | Number to be checked.     |
| `min`   | `number` | Lower bound of the range. |
| `max`   | `number` | Upper bound of the range. |

### Return Value

| Type      | Description                                                        |
|-----------|--------------------------------------------------------------------|
| `boolean` | `true` if `value` is between `min` and `max` (inclusive), else `false`. |

### Examples

```typescript
inRange(5, 1, 10); // true
inRange(0, 1, 10); // false
```

### Notes

- Throws a `TypeError` if any parameter is not a number.
- Useful for validating limits and numeric constraints.

### References
- [MDN: Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)