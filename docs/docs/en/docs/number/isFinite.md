## isFinite

The `isFinite` function checks if a value is a finite number.

### Syntax

```typescript
isFinite(value)
```

### Parameters

| Name    | Type     | Description           |
|---------|----------|-----------------------|
| `value` | `number` | Value to be checked.  |

### Return Value

| Type      | Description                                         |
|-----------|-----------------------------------------------------|
| `boolean` | `true` if the value is a finite number, else `false`.|

### Examples

```typescript
isFinite(10); // true
isFinite(Infinity); // false
isFinite(NaN); // false
```

### Notes

- Throws a `TypeError` if the value is not a number.
- Useful for mathematical validations and limit control.

### References
- [MDN: Number.isFinite()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)