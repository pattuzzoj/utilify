# random

Generates a random number within a specified range.

## Syntax
```typescript
random(min?: number, max?: number): number
```

## Parameters
| Name   | Type      | Description                                 |
|--------|-----------|---------------------------------------------|
| `min`  | `number`  | Minimum value (inclusive). Default: 0.      |
| `max`  | `number`  | Maximum value (exclusive). Default: 1.      |

## Return
| Type     | Description                                 |
|----------|---------------------------------------------|
| `number` | A random number in the range `[min, max)`.  |

## Example
```typescript
random(); // Example: 0.472
random(1, 10); // Example: 7.384
random(-5, 5); // Example: -2.17
```

## Notes
- Throws `TypeError` if `min` or `max` are not numbers.
- If only `min` is provided, generates a number between 0 (inclusive) and `min` (exclusive).
- If `min` is greater than or equal to `max`, always returns `min`.

## References
- [MDN: Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
