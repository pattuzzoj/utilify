# isAsync  
Checks if the provided function is asynchronous (`async`). The function returns `true` if the value is an asynchronous function, and `false` otherwise.

## Syntax
```typescript
function isAsync(callback: Function): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `callback`| `Function`| The function to be checked.               |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the function is asynchronous, otherwise returns `false`. |

## Examples

### Example 1: Checking asynchronous functions
```typescript
async function myAsyncFunction() {
  return "Hello";
}

function mySyncFunction() {
  return "Hello";
}

isAsync(myAsyncFunction); // true
isAsync(mySyncFunction);  // false
```

### Example 2: Checking non-function values
```typescript
isAsync(null); // false
isAsync(42); // false
isAsync("Hello"); // false
isAsync({}); // false
```

## Notes
- The function checks if the provided `callback` is an asynchronous function by comparing its constructor with the name `"AsyncFunction"`. This is possible because asynchronous functions have the `AsyncFunction` constructor in JavaScript.
- The function ensures that the parameter is a valid function before attempting to check if it's asynchronous.

## Source Code
::: code-group

```typescript
function isAsync(callback: Function): boolean {
  if (typeof callback !== "function") {
    return false;
  }

  return callback.constructor.name === "AsyncFunction";
}
```

```javascript
function isAsync(callback) {
  if (typeof callback !== "function") {
    return false;
  }

  return callback.constructor.name === "AsyncFunction";
}
```
:::

## References
- [MDN: `AsyncFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)