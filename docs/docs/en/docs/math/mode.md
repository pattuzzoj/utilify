# mode

Calculates the value(s) that appear most frequently in an array of numbers.

## Syntax
```typescript
mode(numbers: number[]): number[]
```

## Parameters
| Name      | Type         | Description                        |
|-----------|--------------|------------------------------------|
| `numbers` | `number[]`   | Array of numbers to calculate mode.|

## Return
| Type        | Description                                                        |
|-------------|--------------------------------------------------------------------|
| `number[]`  | Array containing the most frequent value(s); may have ties or be empty.|

## Example
```typescript
mode([1, 2, 2, 3, 3]); // [2, 3]
mode([4, 4, 4, 2, 2, 1]); // [4]
mode([1, 2, 3]); // [1, 2, 3]
```

## Notes
- Throws `TypeError` if the argument is not an array of numbers.
- Returns all tied values as the mode.
- Returns an empty array if the input array is empty.

## References
- [Wikipedia: Mode (statistics)](https://en.wikipedia.org/wiki/Mode_(statistics))