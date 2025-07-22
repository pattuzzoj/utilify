## sleep

The `sleep` function returns a Promise that resolves after a specified time, allowing you to pause asynchronous execution for a given interval.

### Syntax

```typescript
await sleep(timeout)
```

### Parameters

| Name      | Type     | Description                              |
| :-------- | :------- | :---------------------------------------|
| `timeout` | `number` | Wait time in milliseconds (non-negative).|

### Return Value

| Type           | Description                                 |
| :------------- | :------------------------------------------|
| `Promise<void>`| Resolves after the specified time.          |

### Examples

```typescript
await sleep(1000); // Pauses for 1 second

sleep(500).then(() => console.log('Half a second has passed!'));
```

### Notes

- Throws a `TypeError` if the value provided is not a non-negative number.
- Useful for delays in asynchronous flows, testing, or simulating wait times.

### References
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)
- [MDN: Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)