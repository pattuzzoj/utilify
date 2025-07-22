# mean

Calculates the arithmetic mean of an array of numbers.

## Syntax
```typescript
mean(values: number[]): number
```

## Parameters
| Name      | Type         | Description           |
|-----------|--------------|-----------------------|
| `values`  | `number[]`   | Array of numbers.     |

## Return
| Type     | Description                                  |
|----------|----------------------------------------------|
| `number` | Arithmetic mean of the values, or 0 if empty.|

## Example
```typescript
mean([1, 2, 3, 4]); // 2.5
mean([]); // 0
```

## Notes
- Throws `TypeError` if the argument is not an array of numbers.
- Uses the `add` function to sum the values.

## References
- [MDN: Arithmetic mean](https://developer.mozilla.org/en-US/docs/Glossary/Arithmetic_mean)