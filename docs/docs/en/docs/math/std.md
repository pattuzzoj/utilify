# std

Calculates the standard deviation of an array of numbers.

## Syntax
```typescript
std(numbers: number[]): number
```

## Parameters
| Name      | Type         | Description                        |
|-----------|--------------|------------------------------------|
| `numbers` | `number[]`   | Array of numbers to calculate std. |

## Return
| Type     | Description                                 |
|----------|---------------------------------------------|
| `number` | The standard deviation of the values.       |

## Example
```typescript
std([2, 4, 4, 4, 5, 5, 7, 9]); // 2
std([1, 2, 3, 4, 5]); // 1.4142135623730951
```

## Notes
- Throws `TypeError` if the argument is not an array of numbers.
- Returns `NaN` for an empty array.
- Uses the sample standard deviation formula.

## References
- [Wikipedia: Standard deviation](https://en.wikipedia.org/wiki/Standard_deviation)