# isPrimitive  
Checks if the provided value is a primitive value. Primitive values include `null`, `undefined`, `boolean`, `number`, `string`, `symbol`, and `bigint`. The function returns `true` if the value is considered primitive, and `false` otherwise.

## Syntax
```typescript
function isPrimitive(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if the value is primitive, otherwise returns `false`. |

## Examples

### Example 1: Checking primitive values
```typescript
isPrimitive(42); // true
isPrimitive("Hello"); // true
isPrimitive(true); // true
isPrimitive(Symbol("desc")); // true
isPrimitive(null); // true
```

### Example 2: Checking non-primitive values
```typescript
isPrimitive(undefined); // true
isPrimitive({}); // false
isPrimitive([]); // false
isPrimitive(function() {}); // false
isPrimitive(new Date()); // false
```

## Notes
- The function checks if the value is a type that is neither an object nor a function. `null` is treated separately because it is technically an object in JavaScript, but it is considered a primitive value.
- The `typeof` check is done in such a way that objects and functions are filtered out.

## Source Code
::: code-group

```typescript
function isPrimitive(value: any): boolean {
  return value === null || typeof value !== "object" && typeof value !== "function";
}
```

```javascript
function isPrimitive(value) {
  return value === null || typeof value !== "object" && typeof value !== "function";
}
```
:::

## References
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [MDN: `null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)