# hexToRgb

The `hexToRgb` function converts a color in hexadecimal format to RGB or RGBA format.

## Syntax

```typescript
hexToRgb(hex: string): string;
```

### Parameters

| Name   | Type     | Description                |
| ------ | -------- | -------------------------- |
| `hex`  | `string` | Color in hexadecimal format |

### Returns

| Type      | Description                         |
| --------- | ----------------------------------- |
| `string`  | Color converted to RGB or RGBA format |

## Examples

```typescript
hexToRgb("#ff0000");
// => "rgb(255, 0, 0)"

hexToRgb("#ff000080");
// => "rgba(255, 0, 0, 0.5)"
```

## Notes

* Throws an error if the value is not a valid hexadecimal.
* Useful for conversion between color models.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb