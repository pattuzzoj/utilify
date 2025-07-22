# times

Executes a callback function a specific number of times, returning an array with the results.

## Syntax
```typescript
times<T>(callback: (index: number) => T, count: number): T[]
```

## Parameters
| Name        | Type                 | Description                                                        |
| ----------- | -------------------- | ------------------------------------------------------------------ |
| `callback`  | `(index: number) => T` | Function to be executed on each iteration, receiving the current index. |
| `count`     | `number`             | Number of times the function will be executed (must be a non-negative integer). |

## Returns
| Type   | Description                                      |
| ------ | ------------------------------------------------ |
| `T[]`  | Array containing the results of each callback execution. |

## Example
```typescript
times(i => i * 2, 4); // [0, 2, 4, 6]
```

## Notes
- Throws a `TypeError` if the callback is not a function or if count is not a non-negative integer.
- Useful for generating arrays of values or performing controlled side effects.

## References
- [MDN: Array.from()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)