# hslToHex

The `hslToHex` function converts a color in HSL or HSLA format to hexadecimal format.

## Syntax

```typescript
hslToHex(hsl: string): string;
```

### Parameters

| Name   | Type     | Description                  |
| ------ | -------- | ---------------------------- |
| `hsl`  | `string` | Color in HSL or HSLA format   |

### Returns

| Type      | Description                          |
| --------- | ------------------------------------ |
| `string`  | Color converted to hexadecimal format |

## Examples

```typescript
hslToHex("hsl(0, 100%, 50%)");
// => "#ff0000"
```

## Notes

* Throws an error if the value is not a valid HSL.
* Useful for conversion between color models.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
