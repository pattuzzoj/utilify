## isInfinity

The `isInfinity` function checks if a value is positive or negative infinity.

### Syntax

```typescript
isInfinity(value)
```

### Parameters

| Name    | Type     | Description           |
|---------|----------|-----------------------|
| `value` | `number` | Value to be checked.  |

### Return Value

| Type      | Description                                                        |
|-----------|--------------------------------------------------------------------|
| `boolean` | `true` if the value is `Infinity` or `-Infinity`, else `false`.    |

### Examples

```typescript
isInfinity(Infinity);  // true
isInfinity(-Infinity); // true
isInfinity(10);        // false
```

### Notes

- Throws a `TypeError` if the value is not a number.
- Useful for mathematical validations and handling extreme limits.

### References
- [MDN: Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)