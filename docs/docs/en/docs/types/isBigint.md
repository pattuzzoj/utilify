# isBigint  
Checks if the provided value is of type `bigint`. The function returns `true` if the value is a `bigint`, and `false` otherwise.

## Syntax
```typescript
function isBigint(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is a `bigint`, otherwise returns `false`. |

## Examples

### Example 1: Checking `bigint`
```typescript
const bigIntValue = 12345678901234567890n;
isBigint(bigIntValue); // true
```

### Example 2: Checking other value types
```typescript
isBigint(42); // false
isBigint("Hello"); // false
isBigint([]); // false
isBigint({}); // false
isBigint(null); // false
```

## Notes
- The function uses the `typeof` operator, which is the recommended and reliable way to check the type of primitive data types such as `bigint` in JavaScript.

## Source Code
::: code-group

```typescript
function isBigint(value: any): boolean {
  return typeof value === "bigint";
}
```

```javascript
function isBigint(value) {
  return typeof value === "bigint";
}
```
:::

## References
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)