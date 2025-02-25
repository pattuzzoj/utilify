# isMap  
Checks if the provided value is an instance of `Map`. The function returns `true` if the value is a `Map` object, and `false` otherwise.

## Syntax
```typescript
function isMap(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is an instance of `Map`, otherwise returns `false`. |

## Examples

### Example 1: Checking `Map` instances
```typescript
const map = new Map();
isMap(map); // true
```

### Example 2: Checking other types of values
```typescript
isMap(new Map([["key", "value"]])); // true
isMap(42); // false
isMap("Hello"); // false
isMap([]); // false
isMap({}); // false
```

## Notes
- The function uses `instanceof Map`, which is the recommended and reliable way to check if a value is an instance of the `Map` class.

## Source Code
::: code-group

```typescript
function isMap(value: any): boolean {
  return value instanceof Map;
}
```

```javascript
function isMap(value) {
  return value instanceof Map;
}
```
:::

## References
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)