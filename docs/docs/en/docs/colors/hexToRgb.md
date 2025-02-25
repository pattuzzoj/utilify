# hexToRgb

The `hexToRgb` function converts a hexadecimal color string to its RGB representation.

## Syntax

```typescript
function hexToRgb(hex: string): string | null;
```

### Parameters

| Name  | Type    | Description                                               |
|-------|---------|-----------------------------------------------------------|
| `hex` | `string`| The hexadecimal color string to be converted.             |

### Return

| Type    | Description                                                 |
|---------|-------------------------------------------------------------|
| `string`| A string representing the color in RGB, if the input is valid. |
| `null`  | Returned if the input is not a valid hexadecimal color.     |

## Examples

```typescript
console.log(hexToRgb("ff0000"));    // "255, 0, 0"
console.log(hexToRgb("00ff007f"));  // "0, 255, 0, 0.5"
console.log(hexToRgb("invalid"));   // null
```

## Notes

- The function supports hexadecimal strings with or without an alpha channel.
- The alpha channel, if present, is converted to a decimal value between 0 and 1.

## Dependencies

- [`isHex`](./isHex.md): The `isHex` function is used to check if the provided string is a valid hexadecimal color, ensuring the `hexToRgb` function processes the input correctly.
- [`chunk`](./chunk.md): The `chunk` function is used to split the hexadecimal string into necessary segments for conversion.

## Source Code

::: code-group
```typescript
function hexToRgb(hex: string): string | null {
  if (!isHex(hex)) {
    console.error("Invalid HEX color", hex);
    return null;
  }

  const channels: string[] = chunk(hex, hex.length > 4 ? 2 : 1);
  const rgb = channels
    .slice(0, 3)
    .map((channel: string) => Number.parseInt(channel.padEnd(2, channel), 16));

  if (channels.length === 4) {
    rgb.push(Math.trunc((Number.parseInt(channels[3], 16) / 255) * 100) / 100);
  }

  return rgb.join(", ");
}
```

```javascript
function hexToRgb(hex) {
  if (!isHex(hex)) {
    console.error("Invalid HEX color", hex);
    return null;
  }

  const channels = chunk(hex, hex.length > 4 ? 2 : 1);
  const rgb = channels
    .slice(0, 3)
    .map((channel) => parseInt(channel.padEnd(2, channel), 16));

  if (channels.length === 4) {
    rgb.push(Math.trunc((parseInt(channels[3], 16) / 255) * 100) / 100);
  }

  return rgb.join(", ");
}
```
:::

## References

- [RGB color model - Wikipedia](https://pt.wikipedia.org/wiki/RGB)