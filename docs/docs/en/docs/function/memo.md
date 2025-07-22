# memo

Creates a memoized function that caches the results of previous calls.

## Syntax
```typescript
memo<T extends (...args: any[]) => any>(callback: T, options?: { cacheTimeout?: number, serializer?: (args: Parameters<T>) => string }): (...args: Parameters<T>) => ReturnType<T>
```

## Parameters
| Name         | Type      | Description                                                                 |
| ------------ | --------- | ---------------------------------------------------------------------------|
| `callback`   | `T`       | Function to be memoized.                                                   |
| `options`    | `object` | (optional) Options for memoization. |
| `options.cacheTimeout` | `number` | (optional) Time in milliseconds for cache expiration. |
| `options.serializer`   | `function` | (optional) Function to serialize the arguments (default: `JSON.stringify`). |

## Returns
| Type                                 | Description         |
| ------------------------------------- | -------------------|
| `(...args: Parameters<T>) => ReturnType<T>` | Memoized function. |

## Example
```typescript
const slowFn = (x: number) => x * 2;
const fastFn = memo(slowFn, { cacheTimeout: 1000 });
fastFn(2); // Calculates and stores
fastFn(2); // Returns from cache
```

## Notes
- Throws a `TypeError` if the arguments are invalid.
- The cache is based on the serialization of the arguments.

## References
- [MDN: Memoization](https://developer.mozilla.org/en-US/docs/Glossary/Memoization)