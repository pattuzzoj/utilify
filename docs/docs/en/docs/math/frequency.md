# frequency

Counts the frequency of each element in an array, returning an object with the occurrences.

## Syntax
```typescript
frequency(arr: any[]): Record<PropertyKey, number>
```

## Parameters
| Name      | Type         | Description                  |
|-----------|--------------|------------------------------|
| `arr`     | `number[]`   | Array of numbers to analyze. |

## Return
| Type         | Description                                 |
|--------------|---------------------------------------------|
| `object`     | An object mapping each value to its frequency.|

## Example
```typescript
frequency(['a', 'b', 'a', 'c', 'b', 'a']); // { a: 3, b: 2, c: 1 }
frequency([1, 2, 2, 3]); // { '1': 1, '2': 2, '3': 1 }
```

## Notes
- Throws `TypeError` if the argument is not an array.
- Useful for data analysis and simple statistics.

## References
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)