# isValidDate  
Checks if the provided value is a valid `Date` object. The function verifies that the value is an instance of the `Date` class and that the date is not `NaN`.

## Syntax
```typescript
isValidDate(date: Date): boolean
```

### Parameters

| Parameter | Type     | Description                                           |
|-----------|----------|-------------------------------------------------------|
| `date`    | `Date`   | The value to be checked for validity as a `Date` object. |

### Return

| Type      | Description                                            |
|-----------|--------------------------------------------------------|
| `boolean` | Returns `true` if the value is a valid `Date` object, otherwise returns `false`. |

## Examples

### Example 1: Valid `Date` object
```typescript
isValidDate(new Date()); // true
```

### Example 2: Invalid `Date` object (NaN Date)
```typescript
isValidDate(new Date("invalid date")); // false
```

### Example 3: Non-Date value
```typescript
isValidDate("2025-01-05"); // false
```

## Notes
- The function first checks if the value is an instance of the `Date` class using `instanceof Date`.
- It then checks whether the date is valid by ensuring that `getTime()` does not return `NaN`. The `getTime()` method returns `NaN` for invalid date strings.

## Source Code
::: code-group

```typescript
function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}
```

```javascript
function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
```
:::

## References
- [MDN: `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN: `Date.prototype.getTime`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)