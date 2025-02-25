# isOdd

The `isOdd` function checks if a number is odd. It returns `true` if the number is not divisible by 2 (i.e., the remainder of the division is not zero), and `false` otherwise.

## Syntax

```typescript
function isOdd(value: number): boolean
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| value | `number` | The number to check if it is odd.                |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `boolean` | `true` if the number is odd, `false` otherwise. |

## Examples

```typescript
console.log(isOdd(3));  // Output: true
console.log(isOdd(4));  // Output: false
console.log(isOdd(0));  // Output: false
```

## Notes

- The function uses the modulus (`%`) operator to check if the number is not divisible by 2 without a remainder.
- The input should be an integer.

## Source Code

::: code-group
```typescript
function isOdd(value: number): boolean {
  return value % 2 !== 0;
}
```

```javascript
function isOdd(value) {
  return value % 2 !== 0;
}
```
::: 

## References

- [Modulo Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Modulo)