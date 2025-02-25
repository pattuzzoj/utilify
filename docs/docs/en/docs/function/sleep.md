# sleep

The `sleep` function creates an asynchronous pause in the code for a specified duration.

## Syntax

```typescript
function sleep(timeout: number): Promise<void>
```

### Parameters

| Name     | Type     | Description                    |
|----------|----------|--------------------------------|
| timeout  | `number` | The wait duration in milliseconds. |

### Return

| Type          | Description                                |
|---------------|--------------------------------------------|
| `Promise<void>` | A promise resolved after the specified duration.|

## Examples

```typescript
async function example() {
  console.log("Waiting for 2 seconds...");
  await sleep(2000);
  console.log("Pause completed!");
}

example();
```

## Notes

- Useful in scenarios where a temporary delay is needed, such as in testing or simulating API call delays.
- Since `sleep` returns a promise, you need to use `await` or `.then` to handle the delay properly.

## Source Code

::: code-group
```typescript
async function sleep(timeout: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
```

```javascript
async function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
```
:::

## References

- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)