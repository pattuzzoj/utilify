# isPromise  
Checks if the provided value is an instance of `Promise`. The function returns `true` if the value is an instance of `Promise`, and `false` otherwise.

## Syntax
```typescript
function isPromise(value: object): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `object`  | The value to be checked. Must be an object, typically an instance of `Promise`. |

### Return

| Type     | Description                                  |
|----------|--------------------------------------------|
| `boolean`| Returns `true` if the value is an instance of `Promise`, otherwise returns `false`. |

## Examples

### Example 1: Checking for `Promise`
```typescript
const promise = new Promise((resolve) => resolve("Success"));
isPromise(promise); // true
```

### Example 2: Checking other types of values
```typescript
isPromise(undefined); // false
isPromise(null); // false
isPromise(42); // false
isPromise("Hello"); // false
isPromise({}); // false
```

## Notes
- The function uses the `instanceof` operator to check if the value is an instance of the `Promise` class.

## Source Code
::: code-group

```typescript
function isPromise(value: object): boolean {
  return value instanceof Promise;
}
```

```javascript
function isPromise(value) {
  return value instanceof Promise;
}
```
:::

## References
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)