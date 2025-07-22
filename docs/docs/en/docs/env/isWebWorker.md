# isWebWorker

The `isWebWorker` function checks if the code is running in any type of Web Worker (Dedicated, Shared, or Service Worker).

## Syntax

```typescript
isWebWorker(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                         |
| ---------- | --------------------------------------------------- |
| `boolean`  | `true` if running in a Web Worker, `false` otherwise |

## Examples

```typescript
isWebWorker();
// => true (in Dedicated, Shared, or Service Worker)
// => false (in other environments)
```

## Notes

* Uses the `isDedicatedWorker`, `isSharedWorker`, and `isServiceWorker` functions to identify the environment.
* Useful for conditioning Web Worker-specific executions.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API