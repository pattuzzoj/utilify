# isArray  
Checks if the provided value is an array. The function returns `true` if the value is an array, and `false` otherwise.

## Syntax
```typescript
function isArray(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is an array, otherwise returns `false`. |

## Examples

### Example 1: Checking arrays
```typescript
isArray([1, 2, 3]); // true
isArray(["apple", "banana"]); // true
```

### Example 2: Checking other value types
```typescript
isArray(null); // false
isArray(42); // false
isArray("Hello"); // false
isArray({}); // false
```

## Notes
- The function uses `Array.isArray`, which is the recommended and most reliable way to check if a value is an array, as it can distinguish arrays from generic objects and other types.

## Source Code
::: code-group
```typescript
function isArray(value: any): boolean {
  return Array.isArray(value);
}
```

```javascript
function isArray(value) {
  return Array.isArray(value);
}
```
:::

## References
- [MDN: `Array.isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)