# median

Calculates the median of an array of numbers.

## Syntax
```typescript
median(arr: number[]): number
```

## Parameters
| Name      | Type         | Description           |
|-----------|--------------|-----------------------|
| `arr`     | `number[]`   | Array of numbers.     |

## Return
| Type     | Description                                  |
|----------|----------------------------------------------|
| `number` | Median of the values.                        |

## Example
```typescript
median([1, 2, 3, 4, 5]); // 3
median([1, 2, 3, 4]); // 2.5
```

## Notes
- Throws `TypeError` if the argument is not an array of numbers.
- Returns `NaN` if the array is empty.

## References
- [MDN: Median](https://developer.mozilla.org/en-US/docs/Glossary/Median)