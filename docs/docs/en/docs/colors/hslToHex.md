# hslToHex

The `hslToHex` function converts an HSL color string to its hexadecimal representation.

## Syntax

```typescript
function hslToHex(hsl: string): string | null;
```

### Parameters

| Name  | Type    | Description                                           |
|-------|---------|-------------------------------------------------------|
| `hsl` | `string`| The HSL color string to be converted.                 |

### Return

| Type    | Description                                              |
|---------|----------------------------------------------------------|
| `string`| A string representing the color in hexadecimal if the input is valid. |
| `null`  | Returned if the input is not a valid HSL color.           |

## Examples

```typescript
console.log(hslToHex("0, 100%, 50%"));    // "ff0000"
console.log(hslToHex("120, 100%, 50%, 0.5")); // "00ff007f"
console.log(hslToHex("invalid"));   // null
```

## Notes

- The function supports HSL strings with or without an alpha channel.
- The hexadecimal values are converted from the RGB representation.
- Conversion to RGB is necessary because the hexadecimal representation is based on the RGB color model.

## Dependencies

- [`hslToRgb`](./hslToRgb.md): The `hslToRgb` function is used to convert the HSL string to RGB, which allows subsequent conversion to hexadecimal.

## Source Code

::: code-group
```typescript
import hslToRgb from "./hslToRgb";

function hslToHex(hsl: string): string | null {
  const rgb = hslToRgb(hsl);

  if (!rgb) return null;

  return rgbToHex(rgb);
}
```

```javascript
import hslToRgb from "./hslToRgb";

function hslToHex(hsl) {
  const rgb = hslToRgb(hsl);

  if (!rgb) return null;

  return rgbToHex(rgb);
}
```
:::

## References

- [RGB color model - Wikipedia](https://pt.wikipedia.org/wiki/RGB)