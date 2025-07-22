# rgbToHsl

The `rgbToHsl` function converts a color in RGB or RGBA format to HSL or HSLA format.

## Syntax

```typescript
rgbToHsl(rgb: string): string;
```

### Parameters

| Name   | Type     | Description                  |
| ------ | -------- | ---------------------------- |
| `rgb`  | `string` | Color in RGB or RGBA format   |

### Returns

| Type      | Description                  |
| --------- | ---------------------------- |
| `string`  | Color in HSL or HSLA format |

## Examples

```typescript
rgbToHsl("rgb(255, 0, 0)");
// => "hsl(0, 100%, 50%)"

rgbToHsl("rgba(255, 0, 0, 0.5)");
// => "hsla(0, 100%, 50%, 0.5)"
```

## Notes

* The alpha channel is preserved if present.
* Useful for converting colors for HSL manipulation.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
