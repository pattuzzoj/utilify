# once

The `once` function ensures that a given callback is executed only once, regardless of how many times it is called. It returns a new function that, on its first invocation, executes the provided callback and stores the result. On subsequent calls, it returns the same result as the first call.

## Syntax

```typescript
function once<T>(callback: (...args: any[]) => T): (...args: any[]) => T;
```

### Parameters

| Name        | Type                                    | Description                                                       |
|-------------|-----------------------------------------|-------------------------------------------------------------------|
| `callback`  | `(...args: any[]) => T`                 | The function to be executed only once.                            |

### Return

| Type               | Description                                             |
|--------------------|-------------------------------------------------------|
| `(...args: any[]) => T` | A function that, on the first call, executes `callback`, but on subsequent calls, returns the result of the first execution. |

## Examples

### Example 1: Executing a function only once

```typescript
let count = 0;
const incrementOnce = once(() => count++);

console.log(incrementOnce()); // 1
console.log(incrementOnce()); // 1
console.log(incrementOnce()); // 1
```

- The `incrementOnce` function only increments the `count` on the first call.
- On subsequent calls, it returns the same value of `count` without executing the callback.

### Example 2: Calling an async function only once

```typescript
const fetchData = once(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
});

fetchData().then(data => console.log(data)); // Executes the fetch and returns the data
fetchData().then(data => console.log(data)); // Returns the same data from the first fetch without making a new request
```

- The `fetchData` function executes the HTTP request only once.
- On subsequent calls, it returns the result of the first execution without making a new request.

## Notes

- The result of the first execution is cached and returned on subsequent calls.
- `once` is useful in scenarios where an operation should only be performed once, such as initialization or data fetching.

## Source Code

::: code-group
```typescript
function once<T>(callback: (...args: any[]) => T): (...args: any[]) => T {
  let called = false;
  let result: T;

  return (...args: any[]): T => {
    if (!called) {
      called = true;
      result = callback(...args);
    }

    return result;
  }
}
```

```javascript
function once(callback) {
  let called = false;
  let result;

  return (...args) => {
    if (!called) {
      called = true;
      result = callback(...args);
    }

    return result;
  };
}
```
:::

## References

- [Function.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)