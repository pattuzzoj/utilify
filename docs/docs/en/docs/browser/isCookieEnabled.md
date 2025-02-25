# isCookieEnabled

The `isCookieEnabled` function checks if cookies are enabled in the browser.

## Syntax

```typescript
function isCookieEnabled(): boolean | undefined;
```

### Return

| Type              | Description                                                     |
|-------------------|---------------------------------------------------------------|
| `boolean`         | `true` if cookies are enabled, `false` otherwise.               |
| `undefined`       | If the function is executed on the server, it will return `undefined`. |

## Examples

```typescript
console.log(isCookieEnabled()); // true or false
```

## Notes

- If executed on the server, the function will return `undefined`.

## Dependencies

- [`isServer`](../environment/isServer.md): The `isServer` function is used to check if the code is running on the server.

## Source Code

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function isCookieEnabled(): boolean | undefined {
  if (isServer()) return undefined;

  return navigator.cookieEnabled;
}
```

```javascript
function isCookieEnabled() {
  if (isServer()) return undefined;

  return navigator.cookieEnabled;
}
```
:::

## References

- [Navigator.cookieEnabled - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled)