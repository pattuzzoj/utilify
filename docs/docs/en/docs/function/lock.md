# lock

The `lock` function ensures that a given callback function is executed only once at a time, preventing concurrent executions. If the callback is already running, further invocations will be ignored until the current execution finishes.

## Syntax

```typescript
function lock(callback: (...args: any[]) => Promise<void>): (...args: any[]) => void;
```

### Parameters

| Name      | Type                         | Description                                                            |
|-----------|------------------------------|------------------------------------------------------------------------|
| `callback`| `(...args: any[]) => Promise<void>` | The asynchronous callback function to be locked. It returns a `Promise` and accepts any number of arguments. |

### Return

| Type                                | Description                                                         |
|-------------------------------------|---------------------------------------------------------------------|
| `(...args: any[]) => void`          | A wrapped function that can be invoked multiple times, but the callback will only run once at a time. |

## Examples

### Example 1: Locking an async function

```typescript
async function task() {
  console.log("Task started");
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating async work
  console.log("Task finished");
}

const lockedTask = lock(task);

lockedTask(); // Output: Task started -> Task finished
lockedTask(); // No output, ignored as the task is locked
```

### Example 2: Handling errors in the locked callback

```typescript
async function failingTask() {
  console.log("Task started");
  throw new Error("Something went wrong");
}

const lockedFailingTask = lock(failingTask);

lockedFailingTask(); // Output: Task started -> Callback execution error: Error: Something went wrong
```

## Notes

- The `lock` function is helpful when dealing with situations where multiple invocations of an asynchronous function could cause issues (e.g., race conditions).
- It uses a flag (`isLocked`) to track whether the function is currently executing, ensuring no concurrent executions.

## Code

::: code-group
```typescript
function lock(callback: (...args: any[]) => Promise<void>): (...args: any[]) => void {
  let isLocked = false;

  return async (...args: any[]): Promise<void> => {
    if (isLocked) return;

    isLocked = true;

    try {
      await callback(...args);
    } catch (error) {
      console.error("Callback execution error:", error);
    } finally {
      isLocked = false;
    }
  }
}
```

```javascript
function lock(callback) {
  let isLocked = false;

  return async (...args) => {
    if (isLocked) return;

    isLocked = true;

    try {
      await callback(...args);
    } catch (error) {
      console.error("Callback execution error:", error);
    } finally {
      isLocked = false;
    }
  }
}
```
:::

## References

- [Async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Promises in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)