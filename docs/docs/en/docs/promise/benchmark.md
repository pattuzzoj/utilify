## benchmark

The `benchmark` function measures the average execution time of a synchronous or asynchronous function, useful for performance analysis.

### Syntax

```typescript
await benchmark(callback, iterations)
```

### Parameters

| Name         | Type         | Description                                                    |
| :----------- | :----------- | :-------------------------------------------------------------|
| `callback`   | `Function`   | Function to be executed and measured (can be asynchronous).    |
| `iterations` | `number`     | Number of executions to calculate the average (>= 1).          |

### Return Value

| Type             | Description                                         |
| :--------------- | :--------------------------------------------------|
| `Promise<number>`| Average execution time in milliseconds.            |

### Examples

```typescript
await benchmark(() => fetch('/api/data'), 10); // Measures 10 executions
```

### Notes

- Throws a `TypeError` if the callback is not a function or iterations is not a valid number.
- Useful for comparing the performance of different implementations.

### References
- [MDN: performance.now()](https://developer.mozilla.org/pt-BR/docs/Web/API/Performance/now)