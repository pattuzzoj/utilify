## isNaN

The `isNaN` function checks if a value is NaN (Not-a-Number).

### Syntax

```typescript
isNaN(value)
```

### Parameters

| Name    | Type   | Description           |
|---------|--------|-----------------------|
| `value` | `any`  | Value to be checked.  |

### Return Value

| Type      | Description                                 |
|-----------|---------------------------------------------|
| `boolean` | `true` if the value is NaN, else `false`.   |

### Examples

```typescript
isNaN(NaN);      // true
isNaN(10);       // false
isNaN('text');   // false
```

### Notes

- Useful for mathematical validations and error control.
- This function strictly checks if the value is NaN, not if it can be converted to NaN.

### References
- [MDN: Number.isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)