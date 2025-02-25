# factorial

The `factorial` function calculates the factorial of a positive integer. The factorial of a number \( n \) is the product of all integers from \( 1 \) to \( n \). For \( n = 0 \), the result is defined as \( 1 \).

## Syntax

```typescript
function factorial(value: number): number
```

### Parameters

| Name  | Type     | Description                          |
|-------|----------|--------------------------------------|
| value | `number` | The positive integer to calculate the factorial for. |

### Returns

| Type    | Description                        |
|---------|------------------------------------|
| `number`| The factorial of the input number. |

## Examples

```typescript
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Output: 1 (factorial of 0 is defined as 1)
console.log(factorial(3)); // Output: 6 (3 * 2 * 1)
```

## Notes

- The input value should be a non-negative integer. For negative values, the function may produce unexpected results or errors, depending on the context.
- To optimize frequent calculations, consider using memoization or a recursive approach depending on the use case.

## Source Code

::: code-group
```typescript
function factorial(value: number): number {
  let result = 1;

  for (let num = value; num >= 1; num--) {
    result *= num;
  }

  return result;
}
```

```javascript
function factorial(value) {
  let result = 1;

  for (let num = value; num >= 1; num--) {
    result *= num;
  }

  return result;
}
```
::: 

## References

- [Multiplication Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)  
- [For Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)  