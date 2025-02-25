# sumOfDigits

The `sumOfDigits` function calculates the sum of the digits of a number. It converts the number into a string, splits it into individual digits, and sums them up.

## Syntax

```typescript
function sumOfDigits(num: number): number
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| num   | `number` | The number whose digits will be summed.          |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `number` | The sum of the digits of the number.             |

## Examples

```typescript
console.log(sumOfDigits(123));   // Output: 6
console.log(sumOfDigits(987));   // Output: 24
console.log(sumOfDigits(0));     // Output: 0
```

## Notes

- The function converts the number into a string and uses the `split()` method to divide it into an array of digits.
- It then uses the `reduce()` method to sum the values of the digits, converting each digit back into an integer with `parseInt()`.

## Source Code

::: code-group
```typescript
function sumOfDigits(num: number): number {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}
```

```javascript
function sumOfDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}
```
::: 

## References

- [String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)