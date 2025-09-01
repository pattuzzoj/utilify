# hexToHsl

The `hexToHsl` function converts a color in hexadecimal format to HSL format.

## Syntax

```typescript
hexToHsl(hex: string): string;
```

### Parameters

| Name   | Type     | Description                |
| ------ | -------- | -------------------------- |
| `hex`  | `string` | Color in hexadecimal format |

### Returns

| Type      | Description                    |
| --------- | ------------------------------ |
| `string`  | Color converted to HSL format   |

## Examples

```typescript
hexToHsl("#ff0000");
// => "hsl(0, 100%, 50%)"
```

## Notes

* Throws an error if the value is not a valid hexadecimal.
* Useful for conversion between color models.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl