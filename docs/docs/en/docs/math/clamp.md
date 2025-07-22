# clamp

Restricts a value to a range defined by minimum and maximum limits.

## Syntax
```typescript
clamp(value: number, min: number, max: number): number
```

## Parameters
| Name      | Type     | Description                        |
|-----------|----------|------------------------------------|
| `value`   | `number` | The value to clamp.                |
| `min`     | `number` | Minimum allowed value.             |
| `max`     | `number` | Maximum allowed value.             |

## Return
| Type     | Description                         |
|----------|-------------------------------------|
| `number` | The clamped value within the range. |

## Example
```typescript
clamp(10, 0, 5); // 5
clamp(-2, 0, 5); // 0
clamp(3, 0, 5); // 3
```

## Notes
- Throws `TypeError` if any argument is not a number.
- Throws `RangeError` if `min` is greater than `max`.

## References
- [MDN: Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
- [MDN: Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)