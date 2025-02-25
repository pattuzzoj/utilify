# isPrime

The `isPrime` function checks if a given number is a prime number. It returns `true` if the number is prime, and `false` otherwise.

## Syntax

```typescript
function isPrime(num: number): boolean
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| num   | `number` | The number to check if it is prime.              |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `boolean` | `true` if the number is prime, `false` otherwise. |

## Examples

```typescript
console.log(isPrime(2));   // Output: true
console.log(isPrime(3));   // Output: true
console.log(isPrime(4));   // Output: false
console.log(isPrime(17));  // Output: true
console.log(isPrime(18));  // Output: false
```

## Notes

- The function first handles edge cases where numbers less than 2 are not prime, and checks if the number is divisible by 2 for an early exit.
- The function then iterates through odd numbers up to the square root of the number, checking for divisibility.
- The time complexity is optimized by only checking up to the square root of the number and skipping even numbers after 2.

## Source Code

::: code-group
```typescript
function isPrime(num: number): boolean {
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;

  const limit = Math.sqrt(num);

  for (let value = 3; value <= limit; value += 2) {
    if (num % value === 0) {
      return false;
    }
  }

  return true;
}
```

```javascript
function isPrime(num) {
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;

  const limit = Math.sqrt(num);

  for (let value = 3; value <= limit; value += 2) {
    if (num % value === 0) {
      return false;
    }
  }

  return true;
}
```
::: 

## References

- [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
- [Modulo Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Modulo)