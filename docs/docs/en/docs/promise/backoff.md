## backoff

The `backoff` function executes an asynchronous action with automatic retries and progressive delays between attempts, using backoff and jitter strategies.

### Syntax

```typescript
await backoff(action, options?)
```

### Parameters

| Name        | Type                                   | Description                                                                 |
| :---------- | :------------------------------------- | :--------------------------------------------------------------------------|
| `action`    | `Function`                             | Asynchronous function to be executed and retried in case of error.          |
| `options`   | `object`                               | (Optional) Advanced backoff and jitter configuration.                       |

#### Options
- `backoffMode` (`'fixed' | 'linear' | 'exponential'`): Delay increase strategy (default: 'exponential').
- `initialDelay` (`number`): Initial delay in ms (default: 500).
- `jitterMode` (`'none' | 'full' | 'equal' | 'decorrelated'`): Random delay variation strategy (default: 'full').
- `maxDelay` (`number`): Maximum delay in ms (default: 60000).
- `maxAttempts` (`number`): Maximum number of attempts (default: 5).
- `onRetry` (`Function`): Function called on each retry, receiving the attempt number and current delay.

### Return Value

| Type         | Description                                                            |
| :----------- | :---------------------------------------------------------------------|
| `Promise`    | Resolves with the result of the action or rejects after all attempts.  |

### Examples

```typescript
await backoff(() => fetch('/api/data'), { maxAttempts: 3, backoffMode: 'linear' });
```

### Notes

- Throws an error if parameters are invalid.
- Useful for handling temporary failures in asynchronous operations, such as HTTP requests.

### References
- [MDN: Exponential backoff and jitter](https://aws.amazon.com/pt/blogs/architecture/exponential-backoff-and-jitter/)