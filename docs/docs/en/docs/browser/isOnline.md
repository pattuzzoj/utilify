# isOnline

The `isOnline` function checks if the browser is online.

## Syntax

```typescript
function isOnline(): boolean | undefined;
```

### Return

| Type              | Description                                                      |
|-------------------|---------------------------------------------------------------|
| `boolean`         | `true` if the browser is online, `false` otherwise.              |
| `undefined`       | If executed on the server, the function will return `undefined`. |

## Examples

```typescript
console.log(isOnline()); // true or false
```

## Notes

- If executed on the server, the function will return `undefined`.

## Dependencies

- [`isServer`](../environment/isServer.md): The `isServer` function is used to check if the code is running on the server.

## Source Code

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function isOnline(): boolean | undefined {
  if (isServer()) return;

  return navigator.onLine;
}
```

```javascript
function isOnline() {
  if (isServer()) return;

  return navigator.onLine;
}
```
:::

## References

- [Navigator.onLine - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)