# partialLeft

The `partialLeft` function creates a new function by partially applying arguments at the beginning of the original function's argument list. When the new function is called, the arguments provided are used before the arguments given during the call.

## Syntax

```typescript
function partialLeft<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

### Parameters

| Name        | Type                      | Description                                                         |
|-------------|---------------------------|---------------------------------------------------------------------|
| `callback`  | `(...args: any[]) => T`   | The original function to which the arguments will be partially applied. |
| `...partial`| `any[]`                   | Arguments to be partially applied at the beginning.               |

### Return

| Type                      | Description                                                  |
|---------------------------|------------------------------------------------------------|
| `(...args: any[]) => T` | A new function with the arguments partially applied at the start.  |

## Examples

### Example 1: Sum of numbers
```typescript
const sum = (x: number, y: number, z: number) => x + y + z;

const addFive = partialLeft(sum, 5);

console.log(addFive(3, 4)); // Output: 12
```

- The original `sum` function takes three arguments.
- `partialLeft` creates a new function that fixes the first argument (`x = 5`).
- When the new function is called with `3` and `4`, they are assigned to `y` and `z` respectively, resulting in `5 + 3 + 4 = 12`.

### Example 2: String manipulation
```typescript
const concatenate = (a: string, b: string, c: string) => `${a}${b}${c}`;

const addPrefix = partialLeft(concatenate, "Hello");

console.log(addPrefix("World", "!")); // Output: "HelloWorld!"
```

- The `concatenate` function takes three strings and joins them.
- By using `partialLeft`, the string `"Hello"` is fixed as the first argument.

## Notes

- `partialLeft` is particularly useful when the initial arguments are more predictable or fixed.
- The order of the arguments passed in execution and those partially applied is significant.

## Source Code

::: code-group
```typescript
function partialLeft<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T {
  return (...args: any[]): T => callback(...partial, ...args);
}
```

```javascript
function partialLeft(callback, ...partial) {
  return (...args) => callback(...partial, ...args);
}
```
:::

## References

- [Currying and Partial Application](https://developer.mozilla.org/en-US/docs/Glossary/Currying)