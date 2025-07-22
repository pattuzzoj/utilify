# mod

Calculates the modulus (remainder) of the division between two numbers, always returning a non-negative value.

## Syntax
```typescript
mod(dividend: number, divisor: number): number
```

## Parameters
| Name        | Type     | Description                |
|-------------|----------|----------------------------|
| `dividend`  | `number` | The number to be divided.  |
| `divisor`   | `number` | The number to divide by.   |

## Return
| Type     | Description                          |
|----------|--------------------------------------|
| `number` | The modulus result, always non-negative.|

## Example
```typescript
mod(10, 3); // 1
mod(-10, 3); // 2
mod(10, -3); // -2
```

## Notes
- Throws `TypeError` if any argument is not a number.
- Throws `Error` if the divisor is zero.
- Ensures a non-negative result for positive divisors.

## References
- [MDN: Remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)