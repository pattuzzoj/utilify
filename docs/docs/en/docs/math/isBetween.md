# isBetween

The `isBetween` function checks if a given number is between two other numbers (inclusive). It returns `true` if the value is within the range, including the boundaries, and `false` otherwise.

## Syntax

```typescript
function isBetween(value: number, min: number, max: number): boolean
```

### Parameters

| Name  | Type     | Description                                     |
|-------|----------|-------------------------------------------------|
| value | `number` | The number to check if it is between `min` and `max`. |
| min   | `number` | The minimum value of the range.                 |
| max   | `number` | The maximum value of the range.                 |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `boolean` | `true` if the value is between `min` and `max` (inclusive), `false` otherwise. |

## Examples

```typescript
console.log(isBetween(5, 1, 10));  // Output: true
console.log(isBetween(0, 1, 10));  // Output: false
console.log(isBetween(10, 10, 10)); // Output: true
```

## Notes

- The function checks whether the value is inclusively within the range defined by `min` and `max`.
- The order of `min` and `max` does not matter, as it can be used in any order due to the way the comparison is made.

## Source Code

::: code-group
```typescript
function isBetween(value: number, min: number, max: number): boolean {
  return min <= value && value <= max;
}
```

```javascript
function isBetween(value, min, max) {
  return min <= value && value <= max;
}
```
::: 

## References

- [Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison)