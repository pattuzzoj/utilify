# partialRight

Creates a new function with arguments pre-filled on the right.

## Syntax
```typescript
partialRight<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R | Promise<R>,
  ...partial: P
): (...args: DropLast<Args, P>) => R | Promise<R>
```

## Parameters
| Name         | Type                              | Description                           |
| ------------ | --------------------------------- | ------------------------------------- |
| `callback`   | `(...args: Args) => R \| Promise<R>` | Original function to be partially applied. |
| `...partial` | `P`                               | Arguments to be pre-filled on the right. |

## Returns
| Type                                         | Description                        |
| --------------------------------------------- | ---------------------------------- |
| `(...args: DropLast<Args, P>) => R \| Promise<R>` | New function with partial arguments applied to the right. |

## Example
```typescript
const concat = (a: string, b: string, c: string) => a + b + c;
const partialConcat = partialRight(concat, "C");
partialConcat("A", "B"); // "ABC"
```

## Notes
- Throws a `TypeError` if the callback is not a function.
- Useful for creating specialized functions from generic ones.

## References
- [MDN: Partial application](https://developer.mozilla.org/en-US/docs/Glossary/Partial_application)