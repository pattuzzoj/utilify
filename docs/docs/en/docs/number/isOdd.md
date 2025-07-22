## isOdd

The `isOdd` function checks if a number is odd.

### Syntax

```typescript
isOdd(value)
```

### Parameters

| Name    | Type     | Description            |
|---------|----------|------------------------|
| `value` | `number` | Number to be checked.  |

### Return Value

| Type      | Description                                 |
|-----------|---------------------------------------------|
| `boolean` | `true` if the number is odd, else `false`.  |

### Examples

```typescript
isOdd(3); // true
isOdd(4); // false
```

### Notes

- Throws a `TypeError` if the value is not a number.
- Useful for mathematical and logical validations.

### References
- [MDN: Remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)