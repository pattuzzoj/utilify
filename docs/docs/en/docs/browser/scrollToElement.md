# scrollToElement

The `scrollToElement` function smoothly scrolls the page to a target element identified by selector or reference.

## Syntax

```typescript
scrollToElement(target: string | HTMLElement, options?: ScrollIntoViewOptions): void;
```

### Parameters

| Name    | Type                         | Description                                 |
| ------- | ---------------------------- | ------------------------------------------- |
| `target`  | `string` \| `HTMLElement`          | CSS selector or target element              |
| `options` | `ScrollIntoViewOptions` | (optional) Scrolling options                        |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `void` | Does not return a value |

## Examples

```typescript
scrollToElement("#top");
// Scrolls to the element with id "top"

const el = document.getElementById("footer");
scrollToElement(el, { behavior: "smooth" });
// Smoothly scrolls to the footer
```

## Notes

* Useful for navigation in long pages or anchors.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView