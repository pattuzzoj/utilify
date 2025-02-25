# partialRight

The `partialRight` function creates a new function by partially applying arguments from the right side to the original function. When the returned function is called, the arguments provided will be prepended to the partially applied ones.

## Syntax

```typescript
function partialRight<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

### Parameters

| Name       | Type           | Description                                            |
|------------|----------------|--------------------------------------------------------|
| `callback` | `(...args: any[]) => T` | The original function to which arguments are partially applied. |
| `...partial` | `any[]`       | Arguments to partially apply to the function from the right. |

### Return

| Type                      | Description                                           |
|---------------------------|-------------------------------------------------------|
| `(...args: any[]) => T` | A new function with the partial arguments applied.     |

## Examples

### Example 1: Adding numbers
```typescript
const add = (x: number, y: number, z: number) => x + y + z;

const addWithTen = partialRight(add, 10);

console.log(addWithTen(5, 3)); // Output: 18
```

- The original `add` function takes three arguments.
- `partialRight` creates a new function that fixes the last argument (`z = 10`).
- Calling the new function with `5` and `3` assigns them to `x` and `y` respectively, resulting in `5 + 3 + 10 = 18`.

### Example 2: String manipulation
```typescript
const concatenate = (a: string, b: string, c: string) => `${a}${b}${c}`;

const addExclamation = partialRight(concatenate, "!");

console.log(addExclamation("Hello", "World")); // Output: "HelloWorld!"
```

- The `concatenate` function takes three strings and joins them.
- Using `partialRight`, the exclamation mark (`"!"`) is fixed as the last argument.

## Notes

- `partialRight` is particularly useful when dealing with functions where the later arguments are more predictable or fixed.
- The order of arguments passed at runtime and those partially applied is significant.

## Code Source

::: code-group
```typescript
function partialRight<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T {
  return (...args: any[]): T => callback(...args, ...partial);
}
```

```javascript
function partialRight(callback, ...partial) {
  return (...args) => callback(...args, ...partial);
}
```
:::

## References

- [Function Currying and Partial Application](https://developer.mozilla.org/en-US/docs/Glossary/Currying)