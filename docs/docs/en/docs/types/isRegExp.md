# isRegExp  
Checks if the provided value is an instance of `RegExp`. The function returns `true` if the value is a `RegExp` object, and `false` otherwise.

## Syntax
```typescript
function isRegExp(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|--------------------------------------------|
| `boolean`| Returns `true` if the value is a `RegExp`, otherwise returns `false`. |

## Examples

### Example 1: Checking `RegExp`
```typescript
const regex = /abc/;
isRegExp(regex); // true
```

### Example 2: Checking other types of values
```typescript
isRegExp(undefined); // false
isRegExp(null); // false
isRegExp(42); // false
isRegExp("Hello"); // false
isRegExp({}); // false
```

## Notes
- The function uses the `instanceof` operator, which is used to check if an object is an instance of a class, in this case, the `RegExp` class.



## Source Code
::: code-group

```typescript
function isRegExp(value: any): boolean {
  return value instanceof RegExp;
}
```

```javascript
function isRegExp(value) {
  return value instanceof RegExp;
}
```
:::

## References
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)