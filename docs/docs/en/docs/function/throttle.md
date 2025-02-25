# throttle

The `throttle` function limits the execution rate of a callback function, ensuring that it is called at most once every specified time interval.

## Syntax

```typescript
function throttle(callback: (...args: any[]) => void, wait?: number): (...args: any[]) => void
```

### Parameters

| Name      | Type                        | Description                                                     |
|-----------|-----------------------------|-----------------------------------------------------------------|
| callback  | `(...args: any[]) => void`  | The function to be throttled.                                   |
| wait      | `number` (optional)         | The time interval (in milliseconds) to wait before re-executing. Default is `300`. |

### Return

| Type                        | Description                                                   |
|-----------------------------|-------------------------------------------------------------|
| `(...args: any[]) => void`  | A throttled version of the provided callback function.       |

## Examples

```typescript
// Example: Throttling a resize event
const onResize = () => {
  console.log("Resize event handled at", new Date());
};

const throttledResize = throttle(onResize, 500);

window.addEventListener("resize", throttledResize);
```

## Notes

- The returned function will execute the callback at most once per the specified `wait` interval.
- Useful for optimizing performance in high-frequency events like `scroll`, `resize`, or `input`.
- Ensures that the callback is executed with the most recent arguments provided.

## Code

::: code-group
```typescript
function throttle(callback: (...args: any[]) => void, wait: number = 300): (...args: any[]) => void {
  let timerId: number | null;

  return (...args: any[]): void => {
    if (!timerId) {
      timerId = setTimeout(() => (timerId = null), wait) as any as number;
      callback(...args);
    }
  };
}
```

```javascript
function throttle(callback, wait = 300) {
  let timerId = null;

  return (...args) => {
    if (!timerId) {
      timerId = setTimeout(() => (timerId = null), wait);
      callback(...args);
    }
  };
}
```
:::

## References

- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [ClearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)