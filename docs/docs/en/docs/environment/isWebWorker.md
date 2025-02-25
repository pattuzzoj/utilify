# isWebWorker

The `isWebWorker` function checks whether the current environment is any type of web worker (Dedicated, Shared, or Service Worker). Web workers run in the background and allow for multi-threading in JavaScript, enabling the main thread to offload tasks without blocking the user interface.

## Syntax

```typescript
function isWebWorker(): boolean;
```

### Return

| Type     | Description                                                   |
|----------|---------------------------------------------------------------|
| `boolean`| Returns `true` if the environment is a Dedicated, Shared, or Service Worker, otherwise returns `false`. |

## Examples

```typescript
console.log(isWebWorker()); // true if inside any Web Worker, false otherwise
```

## Notes

- The function combines checks for **Dedicated Worker**, **Shared Worker**, and **Service Worker** environments. If the code is running in any of these worker types, the function will return `true`.
- A **Web Worker** refers to any of the worker types used to run code in a separate thread.

## Dependencies

- [`isDedicatedWorker`](./isDedicatedWorker.md): Used to check if the environment is a Dedicated Worker.
- [`isSharedWorker`](./isSharedWorker.md): Used to check if the environment is a Shared Worker.
- [`isServiceWorker`](./isServiceWorker.md): Used to check if the environment is a Service Worker.

## Code Source

::: code-group
```typescript
import isDedicatedWorker from "./isDedicatedWorker";
import isSharedWorker from "./isSharedWorker";
import isServiceWorker from "./isServiceWorker";

function isWebWorker(): boolean {
  return isDedicatedWorker() || isSharedWorker() || isServiceWorker();
}
```

```javascript
import isDedicatedWorker from "./isDedicatedWorker";
import isSharedWorker from "./isSharedWorker";
import isServiceWorker from "./isServiceWorker";

function isWebWorker() {
  return isDedicatedWorker() || isSharedWorker() || isServiceWorker();
}
```
:::

## References

- [Web Workers - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)