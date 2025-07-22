## lock

The `lock` function ensures that an asynchronous function is not executed simultaneously, allowing calls to be queued or rejected according to configuration.

### Syntax

```typescript
lock(callback, options?)
```

### Parameters

| Name        | Type       | Description                                                                |
| :---------- | :--------- | :-------------------------------------------------------------------------|
| `callback`  | `Function` | Asynchronous function to be protected by the lock.                         |
| `options`   | `object`   | (Optional) Settings: `{ queue, onLocked, onError }`.                       |

#### `options` object
| Name        | Type       | Description                                                      |
| :---------- | :--------- | :---------------------------------------------------------------|
| `queue`     | `boolean`  | If `true`, calls during the lock are queued (default: `true`).   |
| `onLocked`  | `Function` | Function called when a call is blocked.                          |
| `onError`   | `Function` | Function called in case of an error during callback execution.   |

### Return Value

| Type       | Description                                                                 |
| :--------- | :--------------------------------------------------------------------------|
| `Function` | Asynchronous function that respects the lock and the configured options.    |

### Examples

```typescript
const lockedFn = lock(async () => {
  await sleep(100);
  console.log('Executed!');
});

lockedFn();
lockedFn(); // Executes in sequence, not simultaneously
```

### Notes

- Throws an error if the callback is not a function.
- Useful for avoiding race conditions in asynchronous operations.

### References
- [MDN: Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)