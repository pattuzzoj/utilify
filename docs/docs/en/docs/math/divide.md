# divide

Divides one number (dividend) by another (divisor).

## Syntax
```typescript
divide(dividend: number, divisor: number): number
```

## Parameters
| Name      | Type     | Description              |
|-----------|----------|--------------------------|
| `a`       | `number` | Dividend (numerator).    |
| `b`       | `number` | Divisor (denominator).   |

## Return
| Type     | Description                       |
|----------|-----------------------------------|
| `number` | The result of the division.       |

## Example
```typescript
divide(10, 2); // 5
divide(7, 3); // 2.333...
```

## Notes
- Throws `TypeError` if any argument is not a number.
- Throws `Error` if the divisor is zero.

## References
- [MDN: Division operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)