# memo

The `memo` function caches the results of a given function based on its arguments, preventing redundant computations and improving performance. The cache can optionally be configured to expire after a specific timeout.

## Syntax

```typescript
function memo(callback: (...args: any[]) => any, cacheTimeout?: number): (...args: any[]) => any;
```

### Parameters

| Name           | Type                  | Description                                                                                |
|-----------------|-----------------------|--------------------------------------------------------------------------------------------|
| `callback`      | `(...args: any[]) => any` | The function whose results will be cached.                                                |
| `cacheTimeout`  | `number` (optional)   | Time in milliseconds after which the cache for a specific call will be invalidated.       |

### Returns

| Type             | Description                                             |
|------------------|---------------------------------------------------------|
| `(...args: any[]) => any` | A new function that uses caching to optimize repeated calls. |

## Examples

### Example 1: Basic caching usage

```typescript
import memo from "@utilify/utils";

const add = (a: number, b: number) => {
  console.log("Computing sum...");
  return a + b;
};

const memoizedAdd = memo(add);

console.log(memoizedAdd(1, 2)); // Computes and returns 3
console.log(memoizedAdd(1, 2)); // Returns 3 without recomputing
```

### Example 2: Using a cache timeout

```typescript
const memoizedAddWithTimeout = memo(add, 5000);

console.log(memoizedAddWithTimeout(1, 2)); // Computes and returns 3
setTimeout(() => {
  console.log(memoizedAddWithTimeout(1, 2)); // Recomputes after 5 seconds
}, 6000);
```

## Dependencies

- [djb2](./djb2.md): Function used to generate a unique hash based on arguments.

## Source Code

::: code-group
```typescript
import { djb2 } from "@utilify/utils";

function memo(callback: (...args: any[]) => any, cacheTimeout?: number): (...args: any[]) => any {
  const cache = new Map();

  return (...args: any[]): any => {
    const key = djb2(JSON.stringify(args));

    if (!cache.has(key)) {
      cache.set(key, callback(...args));

      if (cacheTimeout) {
        setTimeout(() => cache.delete(key), cacheTimeout);
      }
    }

    return cache.get(key);
  };
}
```

```javascript
import { djb2 } from "@utilify/utils";

function memo(callback, cacheTimeout) {
  const cache = new Map();

  return (...args) => {
    const key = djb2(JSON.stringify(args));

    if (!cache.has(key)) {
      cache.set(key, callback(...args));

      if (cacheTimeout) {
        setTimeout(() => cache.delete(key), cacheTimeout);
      }
    }

    return cache.get(key);
  };
}
```
:::

## References

- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map): Object used to store data in cache.
- [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Method used to convert the arguments to a string for hash generation.