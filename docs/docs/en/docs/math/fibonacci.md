# fibonacci

The `fibonacci` function calculates the Fibonacci number at a specific position in the Fibonacci sequence using recursion. The Fibonacci sequence is defined as:  

- \( F(0) = 0 \)  
- \( F(1) = 1 \)  
- \( F(n) = F(n-1) + F(n-2) \) for \( n > 1 \).

## Syntax

```typescript
function fibonacci(num: number): number
```

### Parameters

| Name | Type     | Description                          |
|------|----------|--------------------------------------|
| num  | `number` | The position in the Fibonacci sequence to calculate. |

### Returns

| Type    | Description                                   |
|---------|-----------------------------------------------|
| `number`| The Fibonacci number at the specified position. |

## Examples

```typescript
console.log(fibonacci(0));  // Output: 0
console.log(fibonacci(1));  // Output: 1
console.log(fibonacci(6));  // Output: 8 (F(6) = 8, calculated as F(5) + F(4))
```

## Notes

- This implementation uses recursion and is not optimized for large inputs due to exponential time complexity (\( O(2^n) \)).
- For better performance with large inputs, consider using an iterative approach or memoization.

## Source Code

::: code-group
```typescript
function fibonacci(num: number): number {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
```

```javascript
function fibonacci(num) {
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}
```
::: 

## References

- [Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)  
- [Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_number)  