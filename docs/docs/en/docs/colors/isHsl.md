# isHsl

The `isHsl` function checks if a given string is a valid HSL or HSLA color.

## Syntax

```typescript
function isHsl(hsl: string): boolean;
```

### Parameters

| Name  | Type    | Description                                    |
|-------|---------|------------------------------------------------|
| `hsl` | `string`| The string to be validated, representing an HSL or HSLA color. |

### Return

| Type      | Description                                                          |
|-----------|----------------------------------------------------------------------|
| `boolean` | Returns `true` if the string is a valid HSL or HSLA color, otherwise `false`. |

## Examples

```typescript
console.log(isHsl("120, 100%, 50%")); // true
console.log(isHsl("120, 100%, 50%, 0.5")); // true
console.log(isHsl("120, 100%, 50%, 1.5")); // false
```

## Notes

- The function supports both HSL and HSLA formats.

## Source Code

::: code-group
```typescript
function isHsl(hsl: string): boolean {
  return /^(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%(?:\s*,\s*(0|0?\.\d{1,2}|1(?:\.0{1,2})?))?$/.test(
    hsl
  );
}
```

```javascript
function isHsl(hsl) {
  return /^(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%(?:\s*,\s*(0|0?\.\d{1,2}|1(?:\.0{1,2})?))?$/.test(hsl);
}
```
:::

## References

- [Regular Expressions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)