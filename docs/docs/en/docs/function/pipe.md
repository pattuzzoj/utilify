# pipe

Creates a composed function that executes a sequence of functions from left to right.

## Syntax
```typescript
pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T
```

## Parameters
| Name           | Type                        | Description                                      |
| -------------- | --------------------------- | ------------------------------------------------ |
| `...callbacks` | `((value: T) => T)[]`       | Functions to be composed, executed from first to last. |

## Returns
| Type              | Description                                                      |
| ----------------- | --------------------------------------------------------------- |
| `(value: T) => T` | A function that applies all provided functions in sequence to the initial value. |

## Example
```typescript
const add1 = (x: number) => x + 1;
const double = (x: number) => x * 2;
const piped = pipe(add1, double);
piped(3); // 8 (add1(3) = 4, double(4) = 8)
```

## Notes
- Throws a `TypeError` if any argument is not a function.
- Useful for functional composition and data transformation pipelines.

## References
- [MDN: composition](https://developer.mozilla.org/en-US/docs/Glossary/Function_composition)