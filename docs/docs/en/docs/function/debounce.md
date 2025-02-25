# debounce

The `debounce` function ensures that a given callback function is executed only after a specified delay, limiting how often it can be triggered in quick succession. This is useful for scenarios such as limiting API calls or user input handling.

## Syntax

```typescript
function debounce(callback: (...args: any[]) => void, delay: number = 300): (...args: any[]) => void;
```

### Parameters

| Name        | Type                      | Description                                       |
|-------------|---------------------------|---------------------------------------------------|
| `callback`  | `(...args: any[]) => void` | The function to be executed after the delay.      |
| `delay`     | `number`                  | The delay (in milliseconds) before the callback is triggered. Default is 300ms. |

### Return

| Type         | Description                                   |
|--------------|-----------------------------------------------|
| `(...args: any[]) => void` | A debounced version of the provided callback function. |

## Examples

### Example 1: Basic debounce usage

```typescript
const log = (message: string): void => {
  console.log(message);
};

const debouncedLog = debounce(log, 1000);

debouncedLog('Hello');  // Will not log immediately
debouncedLog('World');  // Will cancel the previous call and log 'World' after 1000ms
```

### Example 2: Debouncing user input

```typescript
const handleSearchInput = (query: string): void => {
  console.log(`Searching for: ${query}`);
};

const debouncedSearch = debounce(handleSearchInput, 500);

// The search function will only trigger after 500ms of no typing
debouncedSearch('apple');
debouncedSearch('apple pie');  // This call cancels the previous one
```

## Notes

- `debounce` is useful for scenarios where you want to limit the rate at which a function is executed, such as handling keypresses or resizing events.
- The function only triggers once the user has stopped invoking it for a specified period of time.

## Code

::: code-group
```typescript
function debounce(callback: (...args: any[]) => void, delay: number = 300): (...args: any[]) => void {
  let timerId: number;

  return (...args: any[]): void => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay) as unknown as number;
  }
}
```

```javascript
function debounce(callback, delay = 300) {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay);
  };
}
```
:::

## References

- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [clearTimeout](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)