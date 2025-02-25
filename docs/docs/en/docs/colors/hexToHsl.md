# hexToHsl

The `hexToHsl` function converts a hexadecimal color string to its HSL representation.

## Syntax

```typescript
function hexToHsl(hex: string): string | null;
```

### Parameters

| Name  | Type    | Description                                               |
|-------|---------|-----------------------------------------------------------|
| `hex` | `string`| The hexadecimal color string to be converted.             |

### Return

| Type    | Description                                                 |
|---------|-------------------------------------------------------------|
| `string`| A string representing the color in HSL, if the input is valid. |
| `null`  | Returned if the input is not a valid hexadecimal color.     |

## Examples

```typescript
console.log(hexToHsl("ff0000"));    // "0, 100%, 50%"
console.log(hexToHsl("00ff007f"));  // "120, 100%, 50%, 0.5"
console.log(hexToHsl("invalid"));   // null
```

## Notes

- The function supports hexadecimal strings with or without an alpha channel.
- HSL values are rounded to two decimal places.
- Conversion to RGB is necessary because the hexadecimal representation is based on the RGB color model.

## Dependencies

- [`hexToRgb`](./hexToRgb.md): The `hexToRgb` function is used to convert the hexadecimal value into an RGB representation, which is then used to calculate the corresponding HSL values.

## Source Code

::: code-group
```typescript
import hexToRgb from "./hexToRgb";

function hexToHsl(hex: string): string | null {
  const rgb = hexToRgb(hex);

  if (!rgb) return null;

  return rgbToHsl(rgb);
}
```

```javascript
import hexToRgb from "./hexToRgb";

function hexToHsl(hex) {
  const rgb = hexToRgb(hex);

  if (!rgb) return null;

  return rgbToHsl(rgb);
}
```
:::

## References

- [HSL and HSV - Wikipedia](https://pt.wikipedia.org/wiki/HSL_e_HSV)