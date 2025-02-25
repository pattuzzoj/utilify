# round

The `round` function rounds a number to a specified number of decimal places (precision). It uses truncation to effectively round down to the desired precision.

## Syntax

```typescript
function round(value: number, precision: number): number
```

### Parameters

| Name      | Type     | Description                                          |
|-----------|----------|------------------------------------------------------|
| value     | `number` | The number to be rounded.                            |
| precision | `number` | The number of decimal places to round to.            |

### Returns

| Type    | Description                                      |
|---------|--------------------------------------------------|
| `number` | The number rounded to the specified precision.   |

## Examples

```typescript
console.log(round(3.14159, 2));  // Output: 3.14
console.log(round(5.6789, 3));   // Output: 5.678
console.log(round(123.456, 0));  // Output: 123
```

## Notes

- The function uses `Math.trunc()` to remove the decimal portion of the number after adjusting for the specified precision by multiplying with `10^precision`.
- The value is then divided by the same factor to restore the original scale with the desired precision.

## Source Code

::: code-group
```typescript
function round(value: number, precision: number) {
  const factor = 10 ** precision;
  return Math.trunc(value * factor) / factor;
}
```

```javascript
function round(value, precision) {
  const factor = 10 ** precision;
  return Math.trunc(value * factor) / factor;
}
```
::: 

## References

- [Math.trunc()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)