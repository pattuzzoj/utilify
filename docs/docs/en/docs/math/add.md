# add

Adds all numeric values provided as arguments.

## Syntax
```typescript
add(...values: number[]): number
```

## Parameters
| Name      | Type         | Description         |
|-----------|--------------|---------------------|
| `a`       | `number`     | First number.       |
| `b`       | `number`     | Second number.      |
- `...values` (`number[]`): Numbers to be added.

## Return
| Type     | Description                |
|----------|----------------------------|
| `number` | The sum of `a` and `b`.    |

## Example
```typescript
add(1, 2, 3); // 6
add(); // 0
```

## Notes
- Throws a `TypeError` if any argument is not a number.
- Returns 0 if no arguments are provided.

## References
- [MDN: Addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
