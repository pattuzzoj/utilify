# clamp

The `clamp` function restricts a number to a specified range. If the value exceeds the maximum limit, it returns the maximum. If the value is below the minimum limit, it returns the minimum. Otherwise, it returns the original value.

## Syntax

```typescript
function clamp(value: number, min: number, max: number): number
```

### Parameters

| Name  | Type     | Description                           |
|-------|----------|---------------------------------------|
| value | `number` | The number to be clamped.            |
| min   | `number` | The minimum allowable value.         |
| max   | `number` | The maximum allowable value.         |

### Returns

| Type    | Description                                          |
|---------|------------------------------------------------------|
| `number`| The clamped value, restricted to the specified range.|

## Examples

```typescript
console.log(clamp(5, 1, 10));  // Output: 5 (within range)
console.log(clamp(-3, 1, 10)); // Output: 1 (below range, clamped to min)
console.log(clamp(15, 1, 10)); // Output: 10 (above range, clamped to max)
```

## Notes

- The function assumes `min` is less than or equal to `max`. If this condition is violated, the behavior may be unpredictable.
- Useful for ensuring values remain within safe or expected limits.

## Source Code

::: code-group
```typescript
function clamp(value: number, min: number, max: number): number {
  if (value >= max) {
    return max;
  } else if (value <= min) {
    return min;
  }

  return value;
}
```

```javascript
function clamp(value, min, max) {
  if (value >= max) {
    return max;
  } else if (value <= min) {
    return min;
  }

  return value;
}
```
::: 

## References

- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)