## rate

The `rate` function limits the number of times a function can be executed within a given time interval, useful for rate limiting frequent calls.

### Syntax

```typescript
rate(callback, limit, interval)
```

### Parameters

| Name        | Type       | Description                                         |
| :---------- | :--------- | :--------------------------------------------------|
| `callback`  | `Function` | Function to be executed.                            |
| `limit`     | `number`   | Maximum number of executions allowed per interval.  |
| `interval`  | `number`   | Time interval in milliseconds for the limit.        |

### Return Value

| Type       | Description                                                                                     |
| :--------- | :----------------------------------------------------------------------------------------------|
| `Function` | Executes the callback if the limit has not been reached and returns `true`, else returns `false`|

### Examples

```typescript
const limited = rate(() => console.log('Executed!'), 2, 1000);

limited(); // true
limited(); // true
limited(); // false (limit reached)
// After 1 second, the limit is reset
```

### Notes

- Throws a `TypeError` if the callback is not a function or if limit/interval are not positive numbers.
- Useful for preventing resource overload or excessive API calls.

### References
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)