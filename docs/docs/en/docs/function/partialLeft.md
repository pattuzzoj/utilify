# partialLeft

Creates a new function with arguments pre-filled on the left.

## Syntax
```typescript
partialLeft<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R,
  ...partial: P
): (...args: DropFirst<Args> extends P ? [] : DropFirst<Args>) => R
```

## Parameters
| Name         | Type                   | Description                           |
| ------------ | ---------------------- | ------------------------------------- |
| `callback`   | `(...args: Args) => R` | Original function to be partially applied. |
| `...partial` | `P`                    | Arguments to be pre-filled on the left. |

## Returns
| Type                                                      | Description                        |
| --------------------------------------------------------- | ---------------------------------- |
| `(...args: DropFirst<Args> extends P ? [] : DropFirst<Args>) => R` | New function with partial arguments applied. |

## Example
```typescript
const sum = (a: number, b: number, c: number) => a + b + c;
const partialSum = partialLeft(sum, 1);
partialSum(2, 3); // 6
```

## Notes
- Throws a `TypeError` if the callback is not a function.
- Useful for creating specialized functions from generic ones.

## References
- [MDN: Partial application](https://developer.mozilla.org/en-US/docs/Glossary/Partial_application)