# isRgbColor

The `isRgbColor` function checks if a string represents a valid RGB or RGBA color.

## Syntax

```typescript
isRgbColor(rgb: string): boolean;
```

### Parameters

| Name   | Type     | Description           |
| ------ | -------- | --------------------- |
| `rgb`  | `string` | String to be checked  |

### Returns

| Type       | Description                        |
| ---------- | ---------------------------------- |
| `boolean`  | True if it is a valid RGB/RGBA color |

## Examples

```typescript
isRgbColor("rgb(255, 0, 0)");
// => true

isRgbColor("rgba(255, 0, 0, 0.5)");
// => true

isRgbColor("hsl(0, 100%, 50%)");
// => false
```

## Notes

* Useful for validating inputs before color conversion.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb