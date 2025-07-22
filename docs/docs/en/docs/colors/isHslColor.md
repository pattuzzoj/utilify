# isHslColor

The `isHslColor` function checks if a string represents a valid HSL or HSLA color.

## Syntax

```typescript
isHslColor(hsl: string): boolean;
```

### Parameters

| Name   | Type     | Description           |
| ------ | -------- | --------------------- |
| `hsl`  | `string` | String to be checked  |

### Returns

| Type       | Description                        |
| ---------- | ---------------------------------- |
| `boolean`  | True if it is a valid HSL/HSLA color |

## Examples

```typescript
isHslColor("hsl(0, 100%, 50%)");
// => true

isHslColor("hsla(0, 100%, 50%, 0.5)");
// => true

isHslColor("rgb(255, 0, 0)");
// => false
```

## Notes

* Useful for validating inputs before color conversion.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl