# hslToRgb

The `hslToRgb` function converts an HSL color string to its RGB representation.

## Syntax

```typescript
function hslToRgb(hsl: string): string | null;
```

### Parameters

| Name  | Type    | Description                                |
|-------|---------|--------------------------------------------|
| `hsl` | `string`| The HSL color string to be converted.      |

### Return

| Type    | Description                                              |
|---------|----------------------------------------------------------|
| `string`| A string representing the RGB color if the input is valid. |
| `null`  | Returned if the input is not a valid HSL color.           |

## Examples

```typescript
console.log(hslToRgb("0, 100%, 50%"));      // "255, 0, 0"
console.log(hslToRgb("120, 100%, 50%, 0.5")); // "0, 255, 0, 0.5"
console.log(hslToRgb("invalid"));           // null
```

## Notes

- The function supports HSL strings with or without an alpha channel.
- If present, the alpha channel is included in the output.

## Dependencies

- [`isHsl`](./isHsl.md): Used to validate the HSL input before performing the conversion.

## Source Code

::: code-group
```typescript
function hslToRgb(hsl: string): string | null {
  if (!isHsl(hsl)) {
    console.error("Invalid HSL color", hsl);
    return null;
  }

  let [h, s, l, a] = hsl.split(",") as any[];
  h = h % 360;
  s = Number(s.replace("%", "")) / 100;
  l = Number(l.replace("%", "")) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    (r = c), (g = x);
  } else if (60 <= h && h < 120) {
    (r = x), (g = c);
  } else if (120 <= h && h < 180) {
    (g = c), (b = x);
  } else if (180 <= h && h < 240) {
    (g = x), (b = c);
  } else if (240 <= h && h < 300) {
    (r = x), (b = c);
  } else if (300 <= h && h < 360) {
    (r = c), (b = x);
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  const rgb = [r, g, b];

  if (a) {
    rgb.push(Number(a.trim()));
  }

  return rgb.join(", ");
}
```

```javascript
function hslToRgb(hsl) {
  if (!isHsl(hsl)) {
    console.error("Invalid HSL color", hsl);
    return null;
  }

  let [h, s, l, a] = hsl.split(",");
  h = h % 360;
  s = parseFloat(s.replace("%", "")) / 100;
  l = parseFloat(l.replace("%", "")) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
  } else if (120 <= h && h < 180) {
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  const rgb = [r, g, b];

  if (a) {
    rgb.push(parseFloat(a.trim()));
  }

  return rgb.join(", ");
}
```
:::

## References

- [RGB color model - Wikipedia](https://en.wikipedia.org/wiki/RGB_color_model)