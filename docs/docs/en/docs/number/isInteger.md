## isInteger

The `isInteger` function checks if a value is a finite integer number.

### Syntax

```typescript
isInteger(value)
```

### Parameters

| Name    | Type     | Description           |
|---------|----------|-----------------------|
| `value` | `number` | Value to be checked.  |

### Return Value

| Type      | Description                                                      |
|-----------|------------------------------------------------------------------|
| `boolean` | `true` if the value is a finite integer number, else `false`.    |

### Examples

```typescript
isInteger(10);    // true
isInteger(3.14);  // false
isInteger(NaN);   // false
```

### Notes

- Throws a `TypeError` if the value is not a number.
- Useful for mathematical validations and type control.

### References
- [MDN: Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)