# toggleFullscreen

The `toggleFullscreen` function toggles fullscreen mode for a given element.

## Syntax

```typescript
function toggleFullscreen(elem: HTMLElement): void;
```

### Parameters

| Name  | Type         | Description                                              |
|-------|--------------|--------------------------------------------------------|
| `elem` | `HTMLElement` | The element to toggle fullscreen mode.                  |

### Return

| Type   | Description |
|--------|-----------|
| `void` | None.      |

## Examples

```typescript
const elem = document.getElementById('myElement');
toggleFullscreen(elem);
```

## Notes

- The function checks if fullscreen mode is enabled before toggling.

## Dependencies

- [`isFullscreenEnabled`](./isFullscreenEnabled.md): The `isFullscreenEnabled` function is used to check if fullscreen mode is available in the environment.

## Source Code

::: code-group
```typescript
import isFullscreenEnabled from './isFullscreenEnabled';

function toggleFullscreen(elem: HTMLElement): void {
  if (!isFullscreenEnabled()) return;

  if (document.fullscreenElement === elem) {
      document.exitFullscreen();
  } else {
      elem.requestFullscreen();
  }
}
```

```javascript
import isFullscreenEnabled from './isFullscreenEnabled';

function toggleFullscreen(elem) {
  if (!isFullscreenEnabled()) return;

  if (document.fullscreenElement === elem) {
      document.exitFullscreen();
  } else {
      elem.requestFullscreen();
  }
}
```
:::

## References

- [Element.requestFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen)
- [Document.exitFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen)