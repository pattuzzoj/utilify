# requestFullscreen

The `requestFullscreen` function requests an element to enter fullscreen mode in the browser.

## Syntax

```typescript
requestFullscreen(element?: HTMLElement): void;
```

### Parameters

| Name    | Type       | Description                                 |
| ------- | ---------- | ------------------------------------------- |
| `element` | `HTMLElement` | (optional) Element to display in fullscreen. If not provided, uses the body. |

### Returns

| Name | Type | Description |
| ---- | ---- | ----------- |
|  –   | `void` | Does not return a value |

## Examples

```typescript
requestFullscreen();
// Requests fullscreen for the body

const el = document.getElementById("video");
requestFullscreen(el);
// Requests fullscreen for the "video" element
```

## Notes

* May not work in all browsers or contexts.
* Useful for videos, presentations, and immersive experiences.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen