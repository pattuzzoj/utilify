# isBoolean  
Checks if the provided value is of type `boolean`. The function returns `true` if the value is a `boolean`, and `false` otherwise.

## Syntax
```typescript
function isBoolean(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is a `boolean`, otherwise returns `false`. |

## Examples

### Example 1: Checking boolean values
```typescript
isBoolean(true); // true
isBoolean(false); // true
```

### Example 2: Checking other value types
```typescript
isBoolean(42); // false
isBoolean("Hello"); // false
isBoolean([]); // false
isBoolean({}); // false
```

## Notes
- The function uses the `typeof` operator, which is the simplest and most effective way to check if the type of a value is `boolean`.

## Source Code
::: code-group

```typescript
function isBoolean(value: any): boolean {
  return typeof value === "boolean";
}
```

```javascript
function isBoolean(value) {
  return typeof value === "boolean";
}
```
:::

## References
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)