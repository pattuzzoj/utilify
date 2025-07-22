# isDedicatedWorker

The `isDedicatedWorker` function checks if the code is running in a Dedicated Worker.

## Syntax

```typescript
isDedicatedWorker(): boolean;
```

### Parameters

This function does not take any parameters.

### Returns

| Type       | Description                                                |
| ---------- | ---------------------------------------------------------- |
| `boolean`  | `true` if running in a Dedicated Worker, `false` otherwise |

## Examples

```typescript
isDedicatedWorker();
// => true (in Dedicated Worker)
// => false (in other environments)
```

## Notes

* Checks for the existence of the global object `DedicatedWorkerGlobalScope` and whether `self` is an instance of that scope.
* Useful for conditionally executing Dedicated Worker-specific code.

## References

* https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope
