# isEven

The `isEven` function checks if a number is even. It returns `true` if the number is divisible by 2, meaning the remainder of the division by 2 is zero, and `false` otherwise.

## Syntax

```typescript
function isEven(value: number): boolean
```

### Parameters

| Name  | Type     | Description                                      |
|-------|----------|--------------------------------------------------|
| value | `number` | The number to check if it is even.               |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `boolean` | `true` if the number is even, `false` otherwise. |

## Examples

```typescript
console.log(isEven(4));  // Output: true
console.log(isEven(7));  // Output: false
console.log(isEven(0));  // Output: true (0 is considered even)
```

## Notes

- The function uses the modulus (`%`) operator to check if the number is divisible by 2 without a remainder.
- The input should be an integer.

## Source Code

::: code-group
```typescript
function isEven(value: number): boolean {
  return value % 2 === 0;
}
```

```javascript
function isEven(value) {
  return value % 2 === 0;
}
```
::: 

## References

- [Modulo Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Modulo)