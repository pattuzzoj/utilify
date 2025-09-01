## debounce

The `debounce` function limits how often a function can be executed, delaying its call until a period of inactivity is reached.

### Syntax

```typescript
debounce(callback, wait?, options?)
```

### Parameters

| Name        | Type     | Description                                                        |
| :---------- | :------- | :-----------------------------------------------------------------|
| `callback`  | `Function` | Function to be executed in a controlled manner.                  |
| `wait`      | `number`   | (Optional) Wait time in milliseconds (default: 300).             |
| `options`   | `object`   | (Optional) `{ leading, trailing, maxWait }` for advanced control.|

#### `options` object
| Name        | Type      | Description                                              |
| :---------- | :-------- | :------------------------------------------------------|
| `leading`   | `boolean` | Executes at the start of the interval (default: false). |
| `trailing`  | `boolean` | Executes at the end of the interval (default: true).    |
| `maxWait`   | `number`  | Maximum time without execution (in ms).                 |

### Return Value

| Type     | Description                                                      |
| :------- | :---------------------------------------------------------------|
| `Function` | Debounced function with `cancel()` and `flush()` methods.      |

### Examples

```typescript
const debounced = debounce(() => console.log('Executed!'), 500, { leading: true });
debounced();
debounced(); // Only the first call executes immediately
```

### Notes

- Throws an error if both `leading` and `trailing` are `false`.
- Useful for optimizing frequent events like typing or resizing.

### References
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)
