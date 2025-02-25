# rate

The `rate` function creates a rate-limited wrapper for a callback, ensuring it is executed no more than a specified number of times within a given interval.

## Syntax

```typescript
function rate(
  callback: (...args: any[]) => void,
  limit: number,
  interval: number
): (...args: any[]) => boolean;
```

### Parameters

| Name       | Type                         | Description                                             |
|------------|------------------------------|---------------------------------------------------------|
| callback   | `(...args: any[]) => void`   | The function to be invoked within the rate limit.       |
| limit      | `number`                     | Maximum number of allowed calls within the interval.    |
| interval   | `number`                     | Time window (in milliseconds) for the rate limit.       |

### Return

| Type                          | Description                                            |
|-------------------------------|--------------------------------------------------------|
| `(...args: any[]) => boolean` | A wrapped function that returns `true` if the call is allowed, `false` otherwise.|

## Examples

```typescript
const rateLimitedLog = rate(console.log, 3, 1000);

setInterval(() => {
  const allowed = rateLimitedLog("Hello, World!");
  if (!allowed) {
    console.log("Rate limit exceeded.");
  }
}, 250);
```

In this example:
- The `rateLimitedLog` function is allowed to execute a maximum of 3 times within a 1-second interval.
- Calls beyond the limit are blocked, returning `false`.

## Notes

- Useful for rate-limiting API requests or controlling frequent operations.
- The `interval` resets the call count after the specified time.

## Source Code

::: code-group
```typescript
function rate(callback: (...args: any[]) => void, limit: number, interval: number): (...args: any[]) => boolean {
  let calls = 0;

  return (...args: any[]): boolean => {
    if (calls < limit) {
      if (calls === 0) {
        setTimeout(() => {
          calls = 0;
        }, interval);
      }

      calls++;
      callback(...args);
      return true;
    }

    return false;
  };
}
```

```javascript
function rate(callback, limit, interval) {
  let calls = 0;

  return (...args) => {
    if (calls < limit) {
      if (calls === 0) {
        setTimeout(() => {
          calls = 0;
        }, interval);
      }

      calls++;
      callback(...args);
      return true;
    }

    return false;
  };
}
```
:::

## References

- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)