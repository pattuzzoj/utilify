# compose

The `compose` function takes a sequence of functions and returns a new function that applies the provided functions cumulatively from right to left.

## Syntax

```typescript
function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

### Parameters

| Name        | Type                      | Description                                 |
|-------------|---------------------------|---------------------------------------------|
| `callbacks` | `((value: T) => T)[]`      | An array of functions to be composed.       |

### Return

| Type         | Description                                     |
|--------------|-------------------------------------------------|
| `(value: T) => T` | A function that applies the given functions from right to left. |

## Examples

### Example 1: Composing simple functions

```typescript
const add1 = (x: number): number => x + 1;
const multiply2 = (x: number): number => x * 2;

const add1ThenMultiply2 = compose(multiply2, add1);

console.log(add1ThenMultiply2(5)); // Output: 12 (5 + 1 = 6, 6 * 2 = 12)
```

### Example 2: Composing multiple functions

```typescript
const subtract3 = (x: number): number => x - 3;
const divideBy2 = (x: number): number => x / 2;

const result = compose(divideBy2, subtract3, add1)(10);
console.log(result); // Output: 3.5 (10 + 1 = 11, 11 - 3 = 8, 8 / 2 = 3.5)
```

## Notes

- Function composition is a functional programming pattern.
- The function on the right is applied first, and the one on the left is the last to be applied.
- `compose` is useful for chaining data transformations in a declarative and clear manner.

## Code

::: code-group
```typescript
function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  return (value: T): T => callbacks.reduceRight((currentValue, callback) => callback(currentValue), value);
}
```

```javascript
function compose(...callbacks) {
  return (value) => callbacks.reduceRight((currentValue, callback) => callback(currentValue), value);
}
```
:::

## References

- [Array.prototype.reduceRight](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)