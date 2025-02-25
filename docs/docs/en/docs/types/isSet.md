# isSet  
Checks if the provided value is an instance of `Set`. The function returns `true` if the value is a `Set`, and `false` otherwise.

## Syntax
```typescript
function isSet(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|--------------------------------------------|
| `boolean`| Returns `true` if the value is a `Set`, otherwise returns `false`. |

## Examples

### Example 1: Checking `Set`
```typescript
const mySet = new Set([1, 2, 3]);
isSet(mySet); // true
```

### Example 2: Checking other types of values
```typescript
isSet(undefined); // false
isSet(null); // false
isSet(42); // false
isSet("Hello"); // false
isSet({}); // false
```

## Notes
- The function uses the `instanceof` operator, which is used to check if an object is an instance of a class, in this case, the `Set` class.

## Source Code
::: code-group

```typescript
function isSet(value: any): boolean {
  return value instanceof Set;
}
```

```javascript
function isSet(value) {
  return value instanceof Set;
}
```
:::

## References
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)