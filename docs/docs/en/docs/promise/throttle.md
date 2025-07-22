## throttle

The `throttle` function limits how frequently a function can be executed, ensuring it is called at most once every defined time interval.

### Syntax

```typescript
throttle(callback, wait, options?)
```

### Parameters

| Name        | Type       | Description                                                                |
| :---------- | :--------- | :-------------------------------------------------------------------------|
| `callback`  | `Function` | Function to be executed in a controlled manner.                            |
| `wait`      | `number`   | Minimum interval (in milliseconds) between function executions.            |
| `options`   | `object`   | (Optional) Additional settings: `{ leading, trailing, maxWait }`.          |

#### `options` object
| Name        | Type      | Description                                              |
| :---------- | :-------- | :------------------------------------------------------|
| `leading`   | `boolean` | Executes at the start of the interval (default: true).  |
| `trailing`  | `boolean` | Executes at the end of the interval (default: true).    |
| `maxWait`   | `number`  | Maximum time without execution, even with continuous calls.|

### Return Value

| Type     | Description                                                                 |
| :------- | :--------------------------------------------------------------------------|
| `Function` | Throttled function with `cancel()` and `flush()` methods.                |

### Examples

```typescript
const throttledFn = throttle(() => console.log('Executed!'), 1000);
window.addEventListener('resize', throttledFn);

// Cancel pending calls
throttledFn.cancel();

// Force immediate execution
throttledFn.flush();
```

### Notes

- Throws a `TypeError` if the callback is not a function.
- Useful for optimizing high-frequency events like scroll, resize, etc.

### References
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)
- [MDN: performance.now()](https://developer.mozilla.org/pt-BR/docs/Web/API/Performance/now)