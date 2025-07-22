# parseColor

The `parseColor` function parses a color string and returns an object with the color model (RGB or HSL), values, and alpha if applicable.

## Syntax

```typescript
export type ParsedColor = {
  model: "rgb" | "hsl";
  values: [number, number, number];
  alpha?: number;
} | null;

parseColor(color: string): ParsedColor;
```

### Parameters

| Name     | Type     | Description                |
| -------- | -------- | -------------------------- |
| `color`  | `string` | Color string to be parsed  |

### Returns

| Type           | Description                                 |
| -------------- | ------------------------------------------- |
| `ParsedColor`  | Object with model, values, and alpha, or null |

## Examples

```typescript
parseColor("rgb(255, 0, 0)");
// => { model: "rgb", values: [255, 0, 0], alpha: 1 }

parseColor("hsl(0, 100%, 50%)");
// => { model: "hsl", values: [0, 100, 50], alpha: 1 }

parseColor("#ff0000");
// => { model: "rgb", values: [255, 0, 0], alpha: 1 }

parseColor("invalid");
// => null
```

## Notes

* Useful for normalizing and identifying colors in different formats.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value