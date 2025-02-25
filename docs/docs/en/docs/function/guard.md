# guard

The `guard` function is a utility that conditionally executes one of two functions based on a validation result. If the value passes the validation function, it executes the `callback` function; otherwise, it executes the `fallback` function.

## Syntax

```typescript
function guard<T, U = T>(
  validator: (value: T) => boolean,
  callback: (value: T) => U,
  fallback: (value: T) => U
): (value: T) => U;
```

### Parameters

| Name        | Type                  | Description                                                        |
|-------------|-----------------------|--------------------------------------------------------------------|
| `validator` | `(value: T) => boolean` | A function that validates the value. It should return `true` or `false`. |
| `callback`  | `(value: T) => U`      | A function executed if the value is valid (the `validator` returns `true`). |
| `fallback`  | `(value: T) => U`      | A function executed if the value is invalid (the `validator` returns `false`). |

### Return

| Type            | Description                                             |
|-----------------|---------------------------------------------------------|
| `(value: T) => U` | A function that applies the validation logic and returns the result of either `callback` or `fallback`. |

## Examples

### Example 1: Basic usage with numbers

```typescript
const isPositive = (value: number): boolean => value > 0;
const increment = (value: number): number => value + 1;
const decrement = (value: number): number => value - 1;

const processNumber = guard(isPositive, increment, decrement);

console.log(processNumber(5));  // Output: 6 (value is positive, so increment is called)
console.log(processNumber(-3)); // Output: -4 (value is negative, so decrement is called)
```

### Example 2: Validating strings with a custom length condition

```typescript
const isLongString = (value: string): boolean => value.length > 5;
const capitalize = (value: string): string => value.toUpperCase();
const shorten = (value: string): string => value.slice(0, 3);

const processString = guard(isLongString, capitalize, shorten);

console.log(processString("Hello World")); // Output: "HELLO WORLD" (string length > 5, capitalize called)
console.log(processString("Hi"));          // Output: "Hi" (string length <= 5, shorten called)
```

## Notes

- The `guard` function can be used in a variety of scenarios, such as form validation, conditional processing, or data transformation.
- The generic types `T` and `U` allow the `guard` function to work with any data type, ensuring flexibility across different use cases.

## Code

::: code-group
```typescript
function guard<T, U = T>(
  validator: (value: T) => boolean,
  callback: (value: T) => U,
  fallback: (value: T) => U
): (value: T) => U {
  return (value: T): U => validator(value) ? callback(value) : fallback(value);
}
```

```javascript
function guard(validator, callback, fallback) {
  return (value) => validator(value) ? callback(value) : fallback(value);
}
```
:::

## References

- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)