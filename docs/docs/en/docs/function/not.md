# not

Creates a function that returns the boolean-inverted value of the provided function's result.

## Syntax
```typescript
not<T extends (...args: any[]) => boolean>(callback: T): (...args: Parameters<T>) => boolean
```

## Parameters
| Name        | Type   | Description                        |
| ----------- | ------ | ---------------------------------- |
| `callback`  | `T`    | Function whose result will be inverted. |

## Returns
| Type                                 | Description                       |
| ------------------------------------- | --------------------------------- |
| `(...args: Parameters<T>) => boolean` | Function that returns the boolean-inverted value. |

## Example
```typescript
const isEven = (x: number) => x % 2 === 0;
const isOdd = not(isEven);
isOdd(3); // true
isOdd(4); // false
```

## Notes
- Throws a `TypeError` if the argument is not a function.
- Useful for creating inverse predicates in a functional way.

## References
- [MDN: Logical NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)