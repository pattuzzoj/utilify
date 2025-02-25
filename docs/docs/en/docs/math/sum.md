# sum

The `sum` function calculates the sum of all the numbers in an array. It returns the total sum of the provided values.

## Syntax

```typescript
function sum(values: number[]): number
```

### Parameters

| Name   | Type     | Description                                          |
|--------|----------|------------------------------------------------------|
| values | `number[]` | An array of numbers to sum.                          |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `number` | The sum of all the numbers in the array.        |

## Examples

```typescript
console.log(sum([1, 2, 3, 4]));  // Output: 10
console.log(sum([10, -5, 5]));   // Output: 10
console.log(sum([0, 0, 0]));     // Output: 0
```

## Notes

- The function uses the `reduce()` method to accumulate the sum of the values in the array, starting with an initial value of 0.
- This function works with arrays of numbers and will return 0 if the array is empty.

## Source Code

::: code-group
```typescript
function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}
```

```javascript
function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}
```
::: 

## References

- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)