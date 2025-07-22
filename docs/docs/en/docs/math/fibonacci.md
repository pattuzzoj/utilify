# fibonacci

Calculates the n-th number in the Fibonacci sequence.

## Syntax
```typescript
fibonacci(num: number): number
```

## Parameters
| Name    | Type     | Description                |
|---------|----------|----------------------------|
| `n`     | `number` | Non-negative integer index.|

## Return
| Type     | Description                         |
|----------|-------------------------------------|
| `number` | The nth Fibonacci number.           |

## Example
```typescript
fibonacci(0); // 0
fibonacci(1); // 1
fibonacci(6); // 8
```

## Notes
- Throws `TypeError` if the argument is not a non-negative integer.
- Recursive implementation; for large values, consider an iterative approach.

## References
- [MDN: Fibonacci number](https://developer.mozilla.org/en-US/docs/Glossary/Fibonacci_number)