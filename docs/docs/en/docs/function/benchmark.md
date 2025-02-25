# benchmark

Executes a function repeatedly to measure its performance, returning the average execution time of the iterations.

## Syntax
```typescript
benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number>
```

### Parameters

| Parameter   | Type                                    | Description                                  |
|-------------|-----------------------------------------|--------------------------------------------|
| `callback`  | `() => void \| Promise<void>`            | The function to be executed and measured. It can be either a synchronous or asynchronous function. |
| `iterations`| `number`                                | The number of times the function will be executed (default is 1). |

### Return

| Type     | Description                                      |
|----------|------------------------------------------------|
| `Promise<number>` | Returns a promise that resolves with the average execution time in milliseconds. |

## Examples

```typescript
import { benchmark } from "@utilify/function";

async function example() {
  await new Promise(resolve => setTimeout(resolve, 100));
}

benchmark(example, 3).then(avgTime => {
  console.log(`Average execution time: ${avgTime}ms`);
});
```

## Notes
- The `benchmark` function allows you to measure the performance of both synchronous and asynchronous functions.
- The time is measured using `performance.now()` for better accuracy.

## Dependencies
[average](../math/average.md): Used to calculate the average execution time.

## Source Code
::: code-group

```typescript
import { average } from "@utilify/math";

function benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number> {
  return new Promise(async (resolve) => {
    const times: number[] = [];

    for (let i = 0; i < iterations; i++) {
      const start = performance.now();

      await callback();

      const end = performance.now();
      times.push(end - start);
    }
    
    resolve(average(times));
  });
}
```

```javascript
import { average } from "@utilify/math";

function benchmark(callback, iterations = 1) {
  return new Promise(async (resolve) => {
    const times = [];

    for (let i = 0; i < iterations; i++) {
      const start = performance.now();

      await callback();

      const end = performance.now();
      times.push(end - start);
    }

    resolve(average(times));
  });
}
```
:::

## References
- [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)
- [average](./math.md)