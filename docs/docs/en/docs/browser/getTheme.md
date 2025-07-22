# getTheme

The `getTheme` function returns the user's preferred theme, such as "light" or "dark", based on system or browser settings.

## Syntax

```typescript
getTheme(): "light" | "dark";
```

### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | –    | This function does not take any parameters |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `"light" \| "dark"` | User's preferred theme |

## Examples

```typescript
getTheme();
// => "dark"
```

## Notes

* Useful for adapting the interface to the user's theme.
* Based on CSS media queries.

## References

* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme