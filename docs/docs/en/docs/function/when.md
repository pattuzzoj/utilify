# when

Creates a function that executes an action only if the predicate is true.

## Syntax
```typescript
when<T extends (...args: any) => any>(
  predicate: (...args: any) => boolean,
  action: T
): (...args: Parameters<T>) => ReturnType<T> | undefined
```

## Parameters
| Name         | Type                        | Description                                      |
| ------------ | --------------------------- | ------------------------------------------------ |
| `predicate`  | `(...args: any) => boolean` | Function that determines if the action will be executed. |
| `action`     | `T`                         | Function to be executed if the predicate returns true. |

## Returns
| Type                                              | Description                                                        |
| ------------------------------------------------- | ------------------------------------------------------------------ |
| `(...args: Parameters<T>) => ReturnType<T> \| undefined` | Function that executes the action only if the predicate is true, otherwise returns `undefined`. |

## Example
```typescript
const isPositive = (x: number) => x > 0;
const logIfPositive = when(isPositive, x => console.log(x));
logIfPositive(5); // prints 5
logIfPositive(-2); // does nothing
```

## Notes
- Throws a `TypeError` if predicate or action are not functions.
- Useful for conditional control of function execution.

## References
- [MDN: Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)