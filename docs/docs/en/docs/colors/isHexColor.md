# isHexColor

The `isHexColor` function checks if a string represents a valid hexadecimal color.

## Syntax

```typescript
isHexColor(hex: string): boolean;
```

### Parameters

| Name   | Type     | Description           |
| ------ | -------- | --------------------- |
| `hex`  | `string` | String to be checked  |

### Returns

| Type       | Description                        |
| ---------- | ---------------------------------- |
| `boolean`  | True if it is a valid hexadecimal color |

## Examples

```typescript
isHexColor("#ff0000");
// => true

isHexColor("#f00");
// => true

isHexColor("rgb(255, 0, 0)");
// => false
```

## Notes

* Accepts short (#fff) and long (#ffffff) formats, with or without alpha channel.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hex