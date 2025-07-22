# multiply

Multiplies two or more numeric values.

## Syntax
```typescript
multiply(...values: number[]): number
```

## Parameters
| Name        | Type         | Description                        |
|-------------|--------------|------------------------------------|
| `...values` | `number[]`   | Two or more numbers to be multiplied.|

## Return
| Type     | Description                          |
|----------|--------------------------------------|
| `number` | The result of multiplying all values. |

## Example
```typescript
multiply(2, 3); // 6
multiply(2, 3, 4); // 24
multiply(5); // 5
multiply(); // 1
```

## Notes
- Throws `TypeError` if any argument is not a number.
- If no arguments are provided, returns 1 (the multiplicative identity).

## References
- [MDN: Multiplication operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)