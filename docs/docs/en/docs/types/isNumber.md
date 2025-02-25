# isNumber  
Checks if the provided value is of type `number`. The function returns `true` if the value is a number, and `false` otherwise.

## Syntax
```typescript
function isNumber(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is a number, otherwise returns `false`. |

## Examples

### Example 1: Checking numbers
```typescript
isNumber(42); // true
isNumber(3.14); // true
```

### Example 2: Checking other types of values
```typescript
isNumber("Hello"); // false
isNumber([]); // false
isNumber({}); // false
isNumber(null); // false
isNumber(undefined); // false
```

## Notes
- The function uses the `typeof` operator, which is the standard and reliable way to check if a value is of type `number` in JavaScript.
- `NaN` (Not-a-Number) is also considered a `number` type in JavaScript, but it can be handled separately if needed.

## Source Code
::: code-group

```typescript
function isNumber(value: any): boolean {
  return typeof value === "number";
}
```

```javascript
function isNumber(value) {
  return typeof value === "number";
}
```
:::

## References
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)