# isSymbol  
Checks if the provided value is of type `symbol`. The function returns `true` if the value is a `symbol`, and `false` otherwise.

## Syntax
```typescript
function isSymbol(value: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value`   | `any`     | The value to be checked. Can be of any type. |

### Return

| Type     | Description                                  |
|----------|--------------------------------------------|
| `boolean`| Returns `true` if the value is a `symbol`, otherwise returns `false`. |

## Examples

### Example 1: Checking for `symbol`
```typescript
const sym = Symbol("description");
isSymbol(sym); // true
```

### Example 2: Checking for other types of values
```typescript
isSymbol(undefined); // false
isSymbol(null); // false
isSymbol(42); // false
isSymbol("Hello"); // false
isSymbol({}); // false
```

## Notes
- The function uses the `typeof` operator, which is the standard and recommended way to check primitive data types like `symbol` in JavaScript.

## Source Code
::: code-group

```typescript
function isSymbol(value: any): boolean {
  return typeof value === "symbol";
}
```

```javascript
function isSymbol(value) {
  return typeof value === "symbol";
}
```
:::

## References
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)