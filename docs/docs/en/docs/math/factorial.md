# factorial

Calculates the factorial of a non-negative integer.

## Syntax
```typescript
factorial(n: number): number
```

## Parameters
| Name    | Type     | Description                |
|---------|----------|----------------------------|
| `n`     | `number` | Non-negative integer input.|

## Return
| Type     | Description                         |
|----------|-------------------------------------|
| `number` | The factorial of `n`.               |

## Example
```typescript
factorial(5); // 120
factorial(0); // 1
```

## Notes
- Throws `TypeError` if `n` is not a non-negative integer.
- The factorial of 0 is 1 by definition.

## References
- [MDN: Factorial](https://developer.mozilla.org/en-US/docs/Glossary/Factorial)