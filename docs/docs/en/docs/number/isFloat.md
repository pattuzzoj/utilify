## isFloat

The `isFloat` function checks if a value is a finite floating-point number.

### Syntax

```typescript
isFloat(value)
```

### Parameters

| Name    | Type     | Description           |
|---------|----------|-----------------------|
| `value` | `number` | Value to be checked.  |

### Return Value

| Type      | Description                                                           |
|-----------|-----------------------------------------------------------------------|
| `boolean` | `true` if the value is a finite floating-point number, else `false`.  |

### Examples

```typescript
isFloat(3.14); // true
isFloat(10);   // false
isFloat(NaN);  // false
```

### Notes

- Throws a `TypeError` if the value is not a number.
- Useful for mathematical validations and distinguishing between integers and floats.

### References
- [MDN: Number.isFinite()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)