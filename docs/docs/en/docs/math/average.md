# average

The `average` function calculates the arithmetic mean of an array of numbers. If the array is empty, the function returns `0`.

## Syntax

```typescript
function average(values: number[]): number
```

### Parameters

| Name   | Type      | Description                          |
|--------|-----------|--------------------------------------|
| values | `number[]`| An array of numbers to be processed. |

### Returns

| Type    | Description                                       |
|---------|---------------------------------------------------|
| `number`| The arithmetic mean of the numbers in the array. |
| `0`     | Returned if the array is empty.                  |

## Examples

```typescript
const values = [10, 20, 30];
console.log(average(values)); // Output: 20

console.log(average([])); // Output: 0
```

## Notes

- This function uses the `sum` function to calculate the sum of the array elements.
- Ensure all elements in the array are numbers to avoid unexpected results.

## Dependencies

- [sum](./sum.md): Used to calculate the sum of the array elements.

## Source Code

::: code-group
```typescript
import sum from "./sum";

function average(values: number[]): number {
  return values.length ? (sum(values) / values.length) : 0;
}
```

```javascript
import sum from "./sum";

function average(values) {
  return values.length ? (sum(values) / values.length) : 0;
}
```
::: 

## References

- [Array.prototype.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)  
- [Division in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)