# rgbToHex

The `rgbToHex` function converts a color in RGB or RGBA format to hexadecimal format.

## Syntax

```typescript
rgbToHex(rgb: string): string;
```

### Parameters

| Name   | Type     | Description                  |
| ------ | -------- | ---------------------------- |
| `rgb`  | `string` | Color in RGB or RGBA format   |

### Returns

| Type      | Description                  |
| --------- | ---------------------------- |
| `string`  | Color in hexadecimal format |

## Examples

```typescript
rgbToHex("rgb(255, 0, 0)");
// => "#ff0000"

rgbToHex("rgba(255, 0, 0, 0.5)");
// => "#ff000080"
```

## Notes

* The alpha channel is converted to two hexadecimal digits if present.
* Useful for normalizing colors for CSS usage.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hex