# isTouchDevice

The `isTouchDevice` function checks if the device supports touch events.

## Syntax

```typescript
function isTouchDevice(): boolean | undefined;
```

### Return

| Type              | Description                                                       |
|-------------------|---------------------------------------------------------------|
| `boolean`         | `true` if the device supports touch events, `false` otherwise.    |
| `undefined`       | If executed on the server, the function will return `undefined`. |

## Examples

```typescript
console.log(isTouchDevice()); // true or false
```

## Notes

- If executed on the server, the function will return `undefined`.

## Dependencies

- [`isServer`](../environment/isServer.md): The `isServer` function is used to check if the code is running on the server.

## Source Code

::: code-group
```typescript
import { isServer } from '@utilify/environment';

function isTouchDevice(): boolean | undefined {
  if (isServer()) return;

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
```

```javascript
function isTouchDevice() {
  if (isServer()) return;

  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
```
:::

## References

- [Touch events - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)