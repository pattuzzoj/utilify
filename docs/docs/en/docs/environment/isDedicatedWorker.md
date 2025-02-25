# isDedicatedWorker

The `isDedicatedWorker` function checks if the code is being executed within a **Dedicated Worker**, meaning it's running in a dedicated worker thread in JavaScript.

## Syntax

```typescript
function isDedicatedWorker(): boolean;
```

### Return

| Type     | Description                                                   |
|----------|---------------------------------------------------------------|
| `boolean`| Returns `true` if the code is being executed within a **Dedicated Worker**, otherwise returns `false`. |

## Examples

```typescript
console.log(isDedicatedWorker()); // true if inside a Dedicated Worker, false otherwise
```

## Notes

- A **Dedicated Worker** is a type of Web Worker that runs tasks in the background without blocking the main thread.
- The function checks for the presence of `DedicatedWorkerGlobalScope` and the `self` context to determine if the code is running in a dedicated worker environment.

## Source Code

::: code-group
```typescript
function isDedicatedWorker(): boolean {
  return typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}
```

```javascript
function isDedicatedWorker() {
  return typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}
```
:::

## References

- [Dedicated Worker - MDN](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope)