# rgbToHex

The `rgbToHex` function converts an RGB color string into its hexadecimal representation.

## Syntax

```typescript
function rgbToHex(rgb: string): string | null;
```

### Parameters

| Name  | Type    | Description                                   |
|-------|---------|-----------------------------------------------|
| `rgb` | `string`| The RGB color string to be converted.         |

### Return

| Type      | Description                                                          |
|-----------|----------------------------------------------------------------------|
| `string`  | Returns the hexadecimal color string if the input is valid.          |
| `null`    | Returns `null` if the input is invalid.                              |

## Examples

```typescript
console.log(rgbToHex("255,0,0")); // "ff0000"
console.log(rgbToHex("0,255,0,0.5")); // "00ff007f"
console.log(rgbToHex("invalid")); // null
```

## Notes

- The function supports RGB strings with or without an alpha channel.
- If the alpha channel is present, it is converted into a two-digit hexadecimal value.

## Dependencies

- [`isRgb`](./isRgb.md): Used to validate the RGB input before conversion.

## Source Code

::: code-group
```typescript
import isRgb from "./isRgb";

function rgbToHex(rgb: string): string | null {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  const channels = rgb.split(",");
  const hex = channels
    .slice(0, 3)
    .map((channel) => Number(channel).toString(16).padStart(2, "0"));

  if (channels.length === 4) {
    hex.push(Math.ceil(Number.parseFloat(channels[3]) * 255).toString(16).padStart(2, "0"));
  }

  return hex.join("");
}
```

```javascript
import isRgb from "./isRgb";

function rgbToHex(rgb) {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  const channels = rgb.split(",");
  const hex = channels
    .slice(0, 3)
    .map((channel) => Number(channel).toString(16).padStart(2, "0"));

  if (channels.length === 4) {
    hex.push(Math.ceil(Number.parseFloat(channels[3]) * 255).toString(16).padStart(2, "0"));
  }

  return hex.join("");
}
```
:::

## References

- [RGB Color Model - Wikipedia](https://en.wikipedia.org/wiki/RGB_color_model)