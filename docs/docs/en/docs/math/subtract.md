# subtract

Subtracts two or more numeric values sequentially.

## Syntax
```typescript
subtract(...values: number[]): number
```

## Parameters
| Name        | Type         | Description                                 |
|-------------|--------------|---------------------------------------------|
| `...values` | `number[]`   | Two or more numbers to be subtracted in sequence.|

## Return
| Type     | Description                                 |
|----------|---------------------------------------------|
| `number` | The result of sequential subtraction.       |

## Example
```typescript
subtract(10, 3); // 7
subtract(20, 5, 2); // 13
subtract(5); // 5
subtract(); // 0
```

## Notes
- Throws `TypeError` if any argument is not a number.
- If no arguments are provided, returns 0.

## References
- [MDN: Subtraction operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)