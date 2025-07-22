# compose

Creates a composed function that executes a sequence of functions from right to left.

## Syntax
```typescript
compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T
```

## Parameters
| Name           | Type                        | Description                                      |
| -------------- | --------------------------- | ------------------------------------------------ |
| `...callbacks` | `((value: T) => T)[]`       | Functions to be composed, executed from last to first. |

## Returns
| Type              | Description                                                      |
| ----------------- | --------------------------------------------------------------- |
| `(value: T) => T` | A function that applies all provided functions in sequence to the initial value. |

## Example
```typescript
const add1 = (x: number) => x + 1;
const double = (x: number) => x * 2;
const composed = compose(add1, double);
composed(3); // 7 (double(3) = 6, add1(6) = 7)
```

## Notes
- Throws a `TypeError` if any argument is not a function.
- Useful for functional composition and data transformation pipelines.

## References
- [MDN: composition](https://developer.mozilla.org/en-US/docs/Glossary/Function_composition)