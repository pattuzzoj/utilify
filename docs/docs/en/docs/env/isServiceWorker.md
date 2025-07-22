# isServiceWorker

The `isServiceWorker` function checks if the code is running in a Service Worker.

## Syntax

```typescript
isServiceWorker(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                         |
| ---------- | --------------------------------------------------- |
| `boolean`  | `true` if running in a Service Worker, `false` otherwise |

## Examples

```typescript
isServiceWorker();
// => true (in Service Worker)
// => false (in other environments)
```

## Notes

* Checks for the existence of the global `ServiceWorkerGlobalScope` object and whether `self` is an instance of that scope.
* Useful for conditioning Service Worker-specific executions.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope
