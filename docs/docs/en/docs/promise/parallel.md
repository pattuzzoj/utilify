## parallel

The `parallel` function executes multiple asynchronous functions in parallel and returns a resolved Promise when all have finished.

### Syntax

```typescript
await parallel(...callbacks)
```

### Parameters

| Name        | Type         | Description                                 |
| :---------- | :----------- | :------------------------------------------|
| `callbacks` | `Function[]` | List of asynchronous functions to be executed. |

### Return Value

| Type         | Description                                             |
| :----------- | :------------------------------------------------------|
| `Promise`    | Resolves with an array of the results of all functions.|

### Examples

```typescript
await parallel(
  () => fetch('/api/1'),
  () => fetch('/api/2'),
  () => fetch('/api/3')
);

// Or using then:
parallel(
  () => fetch('/api/1'),
  () => fetch('/api/2')
).then(results => console.log(results));
```

### Notes

- Throws a `TypeError` if any of the arguments is not a function.
- Useful for executing asynchronous tasks simultaneously and waiting for all to complete.

### References
- [MDN: Promise.all()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)