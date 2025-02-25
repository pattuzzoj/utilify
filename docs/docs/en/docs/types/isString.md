# isString  
Checks if the provided value is of type `string`. The function returns `true` if the value is a `string`, and `false` otherwise.

## Syntax
```typescript
function isString(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|--------------------------------------------|
| `boolean`| Returns `true` if the value is a `string`, otherwise returns `false`. |

## Examples

### Example 1: Checking for `string`
```typescript
isString("Hello"); // true
```

### Example 2: Checking for other types of values
```typescript
isString(undefined); // false
isString(null); // false
isString(42); // false
isString({}); // false
```

## Notes
- The function uses the `typeof` operator, which is the standard and recommended way to check primitive data types like `string` in JavaScript.

## Source Code
::: code-group

```typescript
function isString(value: any): boolean {
  return typeof value === "string";
}
```

```javascript
function isString(value) {
  return typeof value === "string";
}
```
:::

## References
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)