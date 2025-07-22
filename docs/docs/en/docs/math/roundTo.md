# roundTo

Rounds a number to a specific number of decimal places.

## Syntax
```typescript
roundTo(value: number, decimals: number): number
```

## Parameters
| Name      | Type     | Description                        |
|-----------|----------|------------------------------------|
| `value`   | `number` | The number to be rounded.           |
| `decimals`| `number` | Number of decimal places.           |

## Return
| Type     | Description                                 |
|----------|---------------------------------------------|
| `number` | The value rounded to the specified decimals. |

## Example
```typescript
roundTo(3.14159, 2); // 3.14
roundTo(1.005, 2); // 1.01
roundTo(-2.718, 1); // -2.7
```

## Notes
- Throws `TypeError` if any argument is not a number.
- `decimals` must be a non-negative integer.
- May have minor inaccuracies due to floating-point representation.

## References
- [MDN: Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)