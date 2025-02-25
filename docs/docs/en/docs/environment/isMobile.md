# isMobile

The `isMobile` function checks if the code is running on a mobile device based on the user agent (`userAgent`).

## Syntax

```typescript
function isMobile(): boolean | undefined;
```

### Returns

| Type         | Description                                                     |
|--------------|-----------------------------------------------------------------|
| `boolean`    | Returns `true` if a mobile device is detected, or `false` otherwise. |
| `undefined`  | Returns `undefined` if the code is running on the server.       |

## Examples

```typescript
console.log(isMobile()); // true on mobile devices, false on desktops, undefined on the server
```

## Dependencies

- [`isServer`](./isServer.md): Checks if the code is running on the server.

## Source Code

::: code-group
```typescript
import isServer from './isServer';

function isMobile(): boolean | undefined {
  if (isServer()) return;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
```

```javascript
import isServer from './isServer';

function isMobile() {
  if (isServer()) return;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
```
:::

## Notes

1. The function returns `undefined` if it is running on the server side (e.g., Node.js or another environment without `navigator`).
2. The regex covers a wide range of common mobile devices.
3. Depending on your use case, you might also consider checking screen dimensions in addition to the `userAgent`.

## References

- [navigator.userAgent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)