# identity

The `identity` function returns the value passed as an argument without modifying it. It is useful in scenarios where you need to ensure the value is passed unchanged.

## Syntax

```typescript
function identity<T>(value: T): T;
```

### Parameters

| Name   | Type       | Description                                 |
|--------|------------|---------------------------------------------|
| `value`| `T`        | The value to be returned without modifications. |

### Return

| Type | Description                                            |
|------|--------------------------------------------------------|
| `T`  | The same value that was passed into the function.      |

## Examples

### Example 1: Returning a number

```typescript
const result = identity(42);
console.log(result); // Output: 42
```

### Example 2: Returning a string

```typescript
const result = identity("Hello, World!");
console.log(result); // Output: "Hello, World!"
```

### Example 3: Using with generics

```typescript
const result = identity([1, 2, 3]);
console.log(result); // Output: [1, 2, 3]
```

## Notes

- The `identity` function is often used as an identity function in functional programming, especially in cases where you need to pass a function that doesn't alter the value but satisfies the function signature.
- The function is generic and can be used with any type of data.

## Code

::: code-group
```typescript
function identity<T>(value: T): T {
  return value;
}
```

```javascript
function identity(value) {
  return value;
}
```
:::

## References

- [Functions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Generics in TypeScript](https://www.typescriptlang.org/docs/handbook/2/generics.html)