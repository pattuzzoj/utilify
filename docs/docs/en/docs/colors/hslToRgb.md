# hslToRgb

The `hslToRgb` function converts a color in HSL or HSLA format to RGB or RGBA format.

## Syntax

```typescript
hslToRgb(hsl: string): string;
```

### Parameters

| Name   | Type     | Description                  |
| ------ | -------- | ---------------------------- |
| `hsl`  | `string` | Color in HSL or HSLA format   |

### Returns

| Type      | Description                         |
| --------- | ----------------------------------- |
| `string`  | Color converted to RGB or RGBA format |

## Examples

```typescript
hslToRgb("hsl(0, 100%, 50%)");
// => "rgb(255, 0, 0)"

hslToRgb("hsla(0, 100%, 50%, 0.5)");
// => "rgba(255, 0, 0, 0.5)"
```

## Notes

* Throws an error if the value is not a valid HSL.
* Useful for conversion between color models.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl