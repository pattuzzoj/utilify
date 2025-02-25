# isSharedWorker

The `isSharedWorker` function checks whether the code is running inside a **Shared Worker**, which is a type of web worker that can be shared between multiple pages or tabs, allowing those pages to communicate with each other.

## Syntax

```typescript
function isSharedWorker(): boolean;
```

### Return

| Type     | Description                                                   |
|----------|---------------------------------------------------------------|
| `boolean`| Returns `true` if the code is running inside a **Shared Worker**, otherwise returns `false`. |

## Examples

```typescript
console.log(isSharedWorker()); // true if inside a Shared Worker, false otherwise
```

## Notes

- A **Shared Worker** is different from a **Dedicated Worker**, as it can be shared by multiple pages, tabs, or even browser windows.
- The function checks for the presence of `SharedWorkerGlobalScope` and the `self` context to determine if the code is running in a Shared Worker environment.

## Source Code

::: code-group
```typescript
function isSharedWorker(): boolean {
  return typeof SharedWorkerGlobalScope !== 'undefined' && self instanceof SharedWorkerGlobalScope;
}
```

```javascript
function isSharedWorker() {
  return typeof SharedWorkerGlobalScope !== 'undefined' && self instanceof SharedWorkerGlobalScope;
}
```
:::

## References

- [Shared Worker - MDN](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope)