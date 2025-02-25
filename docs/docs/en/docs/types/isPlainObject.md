# isPlainObject  
Checks if the provided value is a "plain object," meaning the function returns `true` only for objects created directly with the literal notation `{}` or with `new Object()`.

## Syntax
```typescript
function isPlainObject(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is a plain object, otherwise returns `false`. |

## Examples

### Example 1: Checking plain objects
```typescript
const obj = { key: "value" };
isPlainObject(obj); // true

const obj2 = new Object();
isPlainObject(obj2); // true
```

### Example 2: Checking non-plain objects
```typescript
const arr = [];
isPlainObject(arr); // false (arrays are not plain objects)
const customObj = new (class CustomClass {})();
isPlainObject(customObj); // false (instances of custom classes are not plain objects)
```

### Example 3: Checking other types of values
```typescript
isPlainObject("Hello"); // false (string is not a plain object)
isPlainObject(42); // false (number is not a plain object)
isPlainObject(null); // false (null is not a plain object)
isPlainObject(undefined); // false
```

## Notes
- The function strictly checks `value.constructor === Object` to ensure that the value is a direct instance of `Object`, excluding objects derived from arrays or other classes.
- `null` and `undefined` are not considered plain objects.

## Source Code
::: code-group

```typescript
function isPlainObject(value: any): boolean {
  return value !== null && typeof value === 'object' && value.constructor === Object;
}
```

```javascript
function isPlainObject(value) {
  return value !== null && typeof value === 'object' && value.constructor === Object;
}
```
:::

## References
- [MDN: `Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)