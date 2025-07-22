# randomColor

The `randomColor` function generates a random color in the specified format: hexadecimal, RGB, or HSL, with optional alpha channel.

## Syntax

```typescript
randomColor(format?: "hex" | "rgb" | "hsl", alpha?: boolean): string;
```

### Parameters

| Name      | Type       | Description                                 |
| --------- | ---------- | ------------------------------------------- |
| `format`  | `string`   | (Optional) Output format: "hex", "rgb", or "hsl" |
| `alpha`   | `boolean`  | (Optional) If true, includes alpha channel  |

### Returns

| Type      | Description                        |
| --------- | ---------------------------------- |
| `string`  | Random color in the specified format |

## Examples

```typescript
randomColor();
// => "rgb(123, 45, 67)"

randomColor("hex");
// => "#a1b2c3"

randomColor("hsl", true);
// => "hsla(210, 50%, 60%, 0.7)"
```

## Notes

* Throws an error if the format is not valid.
* Useful for generating dynamic colors in interfaces.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/color_value