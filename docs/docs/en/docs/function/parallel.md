# parallel

The `parallel` function runs multiple asynchronous functions concurrently, waiting for all of them to finish before resolving the promise. It takes an array of functions that return a promise and executes them in parallel.

## Syntax

```typescript
function parallel(...callbacks: (() => Promise<any>)[]): Promise<any[]>;
```

### Parameters

| Name        | Type                                    | Description                                                       |
|-------------|-----------------------------------------|-------------------------------------------------------------------|
| `callbacks` | `(() => Promise<any>)[]`               | An array of functions that return promises.                       |

### Return

| Type            | Description                                             |
|-----------------|---------------------------------------------------------|
| `Promise<any[]>` | A promise that resolves with an array of the results from each callback. |

## Examples

### Example 1: Fetching data from multiple APIs

```typescript
const fetchUser = () => fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
const fetchPosts = () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

async function fetchData() {
  const [user, posts] = await parallel(fetchUser, fetchPosts);
  console.log(user);
  console.log(posts);
}

fetchData();
```

- `fetchUser` and `fetchPosts` are both asynchronous functions that fetch data from an API.
- `parallel` runs both functions concurrently and waits for both to resolve.
- The results are logged once both promises resolve.

### Example 2: Running multiple promises

```typescript
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  const results = await parallel(
    () => delay(1000).then(() => 'First task done'),
    () => delay(500).then(() => 'Second task done'),
    () => delay(2000).then(() => 'Third task done')
  );
  console.log(results);  // Output: ["First task done", "Second task done", "Third task done"]
}

run();
```

- The `parallel` function runs all three delay promises concurrently, and once they all finish, the results are returned as an array.

## Notes

- If any of the promises rejects, the entire `Promise.all` will reject.
- All callbacks are executed in parallel and not sequentially.

## Source Code

::: code-group
```typescript
async function parallel(...callbacks: (() => Promise<any>)[]) {
  return Promise.all(callbacks.map(callback => callback()));
}
```

```javascript
async function parallel(...callbacks) {
  return Promise.all(callbacks.map(callback => callback()));
}
```
:::

## References

- [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)