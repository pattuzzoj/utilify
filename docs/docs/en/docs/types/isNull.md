# isNull  
Checks if the provided value is `null`. The function returns `true` if the value is `null`, and `false` otherwise.

## Syntax
```typescript
function isNull(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is `null`, otherwise returns `false`. |

## Examples

### Example 1: Checking `null`
```typescript
isNull(null); // true
```

### Example 2: Checking other types of values
```typescript
isNull(42); // false
isNull("Hello"); // false
isNull([]); // false
isNull({}); // false
isNull(undefined); // false
```

## Notes
- The function uses the strict equality operator `===`, which checks if the value is exactly equal to `null` without type conversion.

## Source Code
::: code-group

```typescript
function isNull(value: any): boolean {
  return value === null;
}
```

```javascript
function isNull(value) {
  return value === null;
}
```
:::

## References
- [MDN: `null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)