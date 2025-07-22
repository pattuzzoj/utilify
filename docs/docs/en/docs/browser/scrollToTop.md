# scrollToTop

The `scrollToTop` function smoothly scrolls the page to the top.

## Syntax

```typescript
scrollToTop(options?: ScrollToOptions): void;
```

### Parameters

| Name    | Type                | Description                                 |
| ------- | ------------------- | ------------------------------------------- |
| `options` | `ScrollToOptions` | (optional) Scrolling options                        |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `void` | Does not return a value |

## Examples

```typescript
scrollToTop();
// Scrolls to the top of the page

scrollToTop({ behavior: "smooth" });
// Smoothly scrolls to the top
```

## Notes

* Useful for quick navigation on long pages.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo