## defer

The `defer` function schedules the execution of a function for the next event loop cycle, allowing you to defer code execution asynchronously.

### Syntax

```typescript
defer(callback)
```

### Parameters

| Name        | Type       | Description                    |
| :---------- | :--------- | :-----------------------------|
| `callback`  | `Function` | Function to be executed later. |

### Return Value

| Type   | Description         |
| :----- | :------------------|
| `void` | Returns nothing.    |

### Examples

```typescript
defer(() => console.log('Executed later!'));
console.log('Executed first!');
// Output:
// Executed first!
// Executed later!
```

### Notes

- Throws a `TypeError` if the callback is not a function.
- Useful for deferring tasks without blocking the main flow.

### References
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)