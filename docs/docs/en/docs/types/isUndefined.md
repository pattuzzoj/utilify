# isUndefined  
Checks if the provided value is `undefined`. The function returns `true` if the value is of type `undefined`, and `false` otherwise.

## Syntax
```typescript
function isUndefined(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|--------------------------------------------|
| `boolean`| Returns `true` if the value is `undefined`, otherwise returns `false`. |

## Examples

### Example 1: Checking for `undefined`
```typescript
isUndefined(undefined); // true
```

### Example 2: Checking other types of values
```typescript
isUndefined(null); // false
isUndefined(42); // false
isUndefined("Hello"); // false
isUndefined({}); // false
```

## Notes
- The function uses the `typeof` operator, which is a safe way to check the type of a variable in JavaScript, ensuring the value is strictly `undefined`.

## Source Code
::: code-group

```typescript
function isUndefined(value: any): boolean {
  return typeof value === "undefined";
}
```

```javascript
function isUndefined(value) {
  return typeof value === "undefined";
}
```
:::

## References
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)