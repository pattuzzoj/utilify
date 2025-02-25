# pipe

The `pipe` function composes a sequence of functions that process a value in order. It takes an initial value and applies each function in the sequence, passing the result of each function to the next.

## Syntax

```typescript
function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

### Parameters

| Name         | Type                           | Description                                                   |
|--------------|--------------------------------|---------------------------------------------------------------|
| `...callbacks` | `((value: T) => T)[]`          | A list of functions to be applied sequentially to the value. |

### Return Value

| Type             | Description                                           |
|------------------|-------------------------------------------------------|
| `(value: T) => T` | A composed function that applies the given callbacks. |

## Examples

### Example 1: Simple Number Transformations
```typescript
const add = (x: number) => x + 2;
const multiply = (x: number) => x * 3;

const transform = pipe(add, multiply);

console.log(transform(5)); // Output: 21
```

- Initial value `5` is passed through the `add` function, resulting in `7`.
- Then, `7` is passed through the `multiply` function, resulting in `21`.

### Example 2: String Transformations
```typescript
const toUpperCase = (s: string) => s.toUpperCase();
const addExclamation = (s: string) => `${s}!`;

const shout = pipe(toUpperCase, addExclamation);

console.log(shout("hello")); // Output: "HELLO!"
```

- The string `"hello"` is first converted to uppercase, then `"!"` is appended.

## Notes

- `pipe` processes functions left-to-right, making the order of operations clear.
- If no functions are passed, the returned function simply returns the input value unchanged.

## Code Source

::: code-group
```typescript
function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T {
  return (value: T): T => callbacks.reduce((currentValue, callback) => callback(currentValue), value);
}
```

```javascript
function pipe(...callbacks) {
  return (value) => callbacks.reduce((currentValue, callback) => callback(currentValue), value);
}
```
:::

## References

- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)