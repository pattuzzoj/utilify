# once

Creates a function that can only be executed once; subsequent calls return the result of the first execution.

## Syntax
```typescript
once<T extends (...args: any[]) => any>(callback: T): (...args: Parameters<T>) => ReturnType<T>
```

## Parameters
| Name       | Type   | Description                  |
| ---------- | ------ | ----------------------------|
| `callback` | `T`    | Function to be executed only once. |

## Returns
| Type                                         | Description                                   |
| --------------------------------------------- | --------------------------------------------- |
| `(...args: Parameters<T>) => ReturnType<T>`   | Function that executes `callback` only on the first call. |

## Example
```typescript
let count = 0;
const incrementOnce = once(() => ++count);
incrementOnce(); // 1
incrementOnce(); // 1
```

## Notes
- Throws a `TypeError` if the argument is not a function.
- Useful for initializations, one-time events, or idempotent operations.

## References
- [MDN: Idempotence](https://developer.mozilla.org/en-US/docs/Glossary/Idempotence)