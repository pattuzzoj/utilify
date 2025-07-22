# variance

Calculates the sample variance of an array of numbers.

## Syntax
```typescript
variance(numbers: number[]): number
```

## Parameters
| Name      | Type         | Description                        |
|-----------|--------------|------------------------------------|
| `numbers` | `number[]`   | Array of numbers to calculate variance. |

## Return
| Type     | Description                                 |
|----------|---------------------------------------------|
| `number` | The sample variance of the values.          |

## Example
```typescript
variance([2, 4, 4, 4, 5, 5, 7, 9]); // 4
variance([1, 2, 3, 4, 5]); // 2.5
```

## Notes
- Throws `TypeError` if the argument is not an array of numbers.
- Returns `NaN` for an empty array.
- Uses the sample variance formula.

## References
- [Wikipedia: Variance](https://en.wikipedia.org/wiki/Variance)