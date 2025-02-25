# fallback

The `fallback` function executes a primary callback function and returns its result. If the callback throws an error, a secondary fallback function is executed instead, providing a safe alternative value.

## Syntax

```typescript
function fallback<T, U = T>(callback: () => T, fallback: () => U): T | U;
```

### Parameters

| Name       | Type               | Description                                                             |
|------------|--------------------|-------------------------------------------------------------------------|
| `callback` | `() => T`          | The primary function to execute.                                        |
| `fallback` | `() => U`          | The fallback function executed if the `callback` throws an error.       |

### Return

| Type      | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| `T`       | The result of the `callback` function if it executes successfully.          |
| `U`       | The result of the `fallback` function if the `callback` throws an error.    |

## Examples

### Example 1: Providing a fallback value

```typescript
function riskyOperation() {
  if (Math.random() > 0.5) {
    throw new Error("Operation failed");
  }
  return "Success!";
}

function defaultValue() {
  return "Fallback value";
}

const result = fallback(riskyOperation, defaultValue);
console.log(result); // Output: "Success!" or "Fallback value"
```

### Example 2: Handling exceptions gracefully

```typescript
const parseJson = (str: string) => JSON.parse(str);
const invalidJson = "{ invalid: true }";

const safeParse = fallback(
  () => parseJson(invalidJson),
  () => ({ error: "Invalid JSON" })
);

console.log(safeParse); // Output: { error: "Invalid JSON" }
```

## Notes

- This function is useful for safely handling operations that might throw exceptions.
- The `fallback` function will only execute if an error is thrown by the `callback`.

## Source Code

::: code-group
```typescript
function fallback<T, U = T>(callback: () => T, fallback: () => U): T | U {
  try {
    return callback();
  } catch {
    return fallback();
  }
}
```

```javascript
function fallback(callback, fallback) {
  try {
    return callback();
  } catch {
    return fallback();
  }
}
```
:::

## References

- [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)