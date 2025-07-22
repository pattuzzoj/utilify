## retry

The `retry` function executes a provided function and retries on error, up to a maximum number of attempts.

### Syntax

```typescript
retry(callback, attempts)
```

### Parameters

| Name        | Type       | Description                                         |
| :---------- | :--------- | :--------------------------------------------------|
| `callback`  | `Function` | Function to be executed, which may throw an error.  |
| `attempts`  | `number`   | Maximum number of attempts (positive integer).      |

### Return Value

| Type   | Description                                                                 |
| :----- | :--------------------------------------------------------------------------|
| `any`  | Value returned by the `callback` if it succeeds, or throws if all fail.     |

### Examples

```typescript
let count = 0;
const result = retry(() => {
  count++;
  if (count < 3) throw new Error('Failure!');
  return 'Success';
}, 5);
// result: 'Success' (after 3 attempts)

retry(() => { throw new Error('Always fails'); }, 2);
// Throws error after 2 attempts
```

### Notes

- Throws a `TypeError` if the callback is not a function or if attempts is not a positive integer.
- Useful for operations that may temporarily fail, such as network requests.

### References
- [MDN: try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN: Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)