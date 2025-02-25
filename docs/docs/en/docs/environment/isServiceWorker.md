# isServiceWorker

The `isServiceWorker` function checks if the code is being executed within a **Service Worker**, which is a type of web worker used for background tasks like caching, notifications, and offline functionality.

## Syntax

```typescript
function isServiceWorker(): boolean;
```

### Return

| Type     | Description                                                   |
|----------|---------------------------------------------------------------|
| `boolean`| Returns `true` if the code is being executed within a **Service Worker**, otherwise returns `false`. |

## Examples

```typescript
console.log(isServiceWorker()); // true if inside a Service Worker, false otherwise
```

## Notes

- A **Service Worker** is a special type of web worker that operates separately from the web page and allows you to handle network requests, cache resources, and create background tasks.
- The function checks for the presence of `ServiceWorkerGlobalScope` and the `self` context to determine if the code is running in a service worker environment.

## Source Code

::: code-group
```typescript
function isServiceWorker(): boolean {
  return typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope;
}
```

```javascript
function isServiceWorker() {
  return typeof ServiceWorkerGlobalScope !== 'undefined' && self instanceof ServiceWorkerGlobalScope;
}
```
:::

## References

- [Service Worker - MDN](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope)