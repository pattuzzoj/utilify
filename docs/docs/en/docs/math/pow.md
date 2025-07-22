# pow

Calculates the power of a number raised to another.

## Syntax
```typescript
pow(base: number, exponent: number): number
```

## Parameters
| Name      | Type     | Description                |
|-----------|----------|----------------------------|
| `base`    | `number` | The base number.           |
| `exponent`| `number` | The exponent value.        |

## Return
| Type     | Description                          |
|----------|--------------------------------------|
| `number` | The result of exponentiation.         |

## Example
```typescript
pow(2, 3); // 8
pow(5, 0); // 1
pow(4, 0.5); // 2
pow(-2, 3); // -8
```

## Notes
- Throws `TypeError` if any argument is not a number.

## References
- [MDN: Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)