# lerp

Realiza a interpolação linear entre dois valores numéricos.

## Sintaxe
```typescript
lerp(start: number, end: number, amount: number): number
```

## Parameters
| Name      | Type     | Description                                 |
|-----------|----------|---------------------------------------------|
| `start`   | `number` | Initial value.                              |
| `end`     | `number` | Final value.                                |
| `amount`  | `number` | Interpolation factor (usually between 0-1). |

## Return
| Type     | Description                                 |
|----------|---------------------------------------------|
| `number` | Interpolated value between `start` and `end`.|

## Example
```typescript
lerp(0, 10, 0.5); // 5
lerp(10, 20, 0.25); // 12.5
```

## Notes
- Throws `TypeError` if any argument is not a number.
- Useful for animations, transitions, and calculating intermediate values.

## References
- [Wikipedia: Linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation)