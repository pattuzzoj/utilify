# isInteger

The `isInteger` function checks if a given value is an integer. It returns `true` if the value is an integer, and `false` otherwise.

## Syntax

```typescript
function isInteger(value: number): boolean
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| value | `number` | The value to check if it is an integer.          |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `boolean` | `true` if the value is an integer, `false` otherwise. |

## Examples

```typescript
console.log(isInteger(4));     // Output: true
console.log(isInteger(4.5));   // Output: false
console.log(isInteger(-3));    // Output: true
```

## Notes

- The function uses `Number.isInteger()` to determine if the value is an integer.
- This function returns `false` for non-integer numbers (e.g., floating point numbers) and non-numeric values.

## Source Code

::: code-group
```typescript
function isInteger(value: number): boolean {
  return Number.isInteger(value);
}
```

```javascript
function isInteger(value) {
  return Number.isInteger(value);
}
```
::: 

## References

- [Number.isInteger()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)