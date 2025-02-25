# divisors

The `divisors` function computes all divisors of a given number, including `1` and the number itself. The divisors are returned in ascending order.

## Syntax

```typescript
function divisors(num: number): number[]
```

### Parameters

| Name | Type     | Description                       |
|------|----------|-----------------------------------|
| num  | `number` | The number for which to find divisors. |

### Returns

| Type       | Description                                           |
|------------|-------------------------------------------------------|
| `number[]` | An array of all divisors of the input number, sorted in ascending order. |

## Examples

```typescript
console.log(divisors(12)); // Output: [1, 2, 3, 4, 6, 12]
console.log(divisors(7));  // Output: [1, 7]
console.log(divisors(28)); // Output: [1, 2, 4, 7, 14, 28]
```

## Notes

- The function uses the square root of the input number to optimize divisor calculation.
- If the number is a perfect square, the square root is included only once in the result.

## Source Code

::: code-group
```typescript
function divisors(num: number): number[] {
  const divisors = [1];
  const limit = Math.sqrt(num);

  for (let index = 2; index <= limit; index++) {
    if (num % index === 0) {
      divisors.push(index);

      if (index !== num / index) {
        divisors.push(num / index);
      }
    }
  }

  divisors.push(num);

  return divisors.sort((a, b) => a - b);
}
```

```javascript
function divisors(num) {
  const divisors = [1];
  const limit = Math.sqrt(num);

  for (let index = 2; index <= limit; index++) {
    if (num % index === 0) {
      divisors.push(index);

      if (index !== num / index) {
        divisors.push(num / index);
      }
    }
  }

  divisors.push(num);

  return divisors.sort((a, b) => a - b);
}
```
::: 

## References

- [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)  
- [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)  
- [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)