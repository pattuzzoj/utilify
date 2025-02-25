# isFullscreenEnabled

The `isFullscreenEnabled` function checks if fullscreen mode is enabled.

## Syntax

```typescript
function isFullscreenEnabled(): boolean | undefined;
```

### Return

| Type              | Description                                                       |
|-------------------|---------------------------------------------------------------|
| `boolean`         | `true` if fullscreen mode is enabled, `false` otherwise.         |
| `undefined`       | If executed on the server, the function will return `undefined`. |

## Examples

```typescript
console.log(isFullscreenEnabled()); // true or false
```

## Notes

- If executed on the server, the function will return `undefined`.

## Dependencies

- [`isServer`](../environment/isServer.md): The `isServer` function is used to check if the code is running on the server.

## Source Code

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function isFullscreenEnabled(): boolean | undefined {
  if (isServer()) return;

  return document.fullscreenEnabled;
}
```

```javascript
function isFullscreenEnabled() {
  if (isServer()) return;

  return document.fullscreenEnabled;
}
```
:::

## References

- [Document.fullscreenEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled)