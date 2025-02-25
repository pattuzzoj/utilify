# isFunction  
Checks if the provided value is a function. The function returns `true` if the value is a function, and `false` otherwise.

## Syntax
```typescript
function isFunction(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is a function, otherwise returns `false`. |

## Examples

### Example 1: Checking functions
```typescript
function myFunction() {}
isFunction(myFunction); // true

const arrowFunction = () => {};
isFunction(arrowFunction); // true
```

### Example 2: Checking other value types
```typescript
isFunction(42); // false
isFunction("Hello"); // false
isFunction([]); // false
isFunction({}); // false
```

## Notes
- The function uses the `typeof` operator, which is the most straightforward and reliable way to check if a value is of type `function`.

## Source Code
::: code-group

```typescript
function isFunction(value: any): boolean {
  return typeof value === "function";
}
```

```javascript
function isFunction(value) {
  return typeof value === "function";
}
```
:::

## References
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)