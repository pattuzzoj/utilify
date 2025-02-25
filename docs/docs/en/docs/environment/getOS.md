# getOS

The `getOS` function detects the operating system of the device on which the code is running, based on the `userAgent` or the `navigator` API properties when available.

## Syntax

```typescript
function getOS(): string | undefined;
```

### Return

| Type      | Description                                              |
|-----------|----------------------------------------------------------|
| `string`  | Returns the name of the operating system, such as "Android", "iOS", "Linux", "Windows", "macOS", or "Unknown". |
| `undefined` | Returns `undefined` if the code is not being executed on a server. |

## Examples

```typescript
console.log(getOS()); // Example: "Android", "iOS", "macOS", etc.
```

## Notes

- The function uses the `userAgentData` API to obtain detailed information about the operating system when available.
- If `userAgentData` is not present, the function falls back to the `navigator.userAgent` value for operating system detection.
- The function also checks if the code is running on a server, returning `undefined` in that case.

## Dependencies

- [`isServer`](./isServer.md): The `isServer` function is used to determine whether the code is running on the server.

## Source Code

::: code-group
```typescript
import isServer from './isServer';

function getOS(): string | undefined {
  if (!isServer()) return;

  if ('userAgentData' in navigator) {
    return navigator.userAgentData.platform;
  }

  const userAgent = navigator.userAgent;

  if (/Android/i.test(userAgent)) return 'Android';
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
  if (/Linux/i.test(userAgent)) return 'Linux';
  if (/Windows/i.test(userAgent)) return 'Windows';
  if (/Mac/i.test(userAgent)) return 'macOS';

  return 'Unknown';
}
```

```javascript
import isServer from './isServer';

function getOS() {
  if (!isServer()) return;

  if ('userAgentData' in navigator) {
    return navigator.userAgentData.platform;
  }

  const userAgent = navigator.userAgent;

  if (/Android/i.test(userAgent)) return 'Android';
  if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';
  if (/Linux/i.test(userAgent)) return 'Linux';
  if (/Windows/i.test(userAgent)) return 'Windows';
  if (/Mac/i.test(userAgent)) return 'macOS';

  return 'Unknown';
}
```
:::

## References

- [navigator.userAgent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent)
- [navigator.userAgentData - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData)