# isSharedWorker

The `isSharedWorker` function checks if the code is running in a Shared Worker.

## Syntax

```typescript
isSharedWorker(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                         |
| ---------- | --------------------------------------------------- |
| `boolean`  | `true` if running in a Shared Worker, `false` otherwise |

## Examples

```typescript
isSharedWorker();
// => true (in Shared Worker)
// => false (in other environments)
```

## Notes

* Checks for the existence of the global `SharedWorkerGlobalScope` object and whether `self` is an instance of that scope.
* Useful for conditioning Shared Worker-specific executions.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope