# isDate  
Checks if the provided value is an instance of `Date`. The function returns `true` if the value is a `Date` object, and `false` otherwise.

## Syntax
```typescript
function isDate(value: Date): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `Date`    | The value to be checked. Must be a `Date` object. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is an instance of `Date`, otherwise returns `false`. |

## Examples

### Example 1: Checking `Date` instances
```typescript
const date = new Date();
isDate(date); // true
```

### Example 2: Checking other value types
```typescript
isDate(new Date("2023-01-01")); // true
isDate(42); // false
isDate("2023-01-01"); // false
isDate({}); // false
isDate(null); // false
```

## Notes
- The function uses `instanceof Date`, which checks if the value is an instance of the `Date` class.

## Source Code
::: code-group

```typescript
function isDate(value: Date): boolean {
  return value instanceof Date;
}
```

```javascript
function isDate(value) {
  return value instanceof Date;
}
```
:::

## References
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)