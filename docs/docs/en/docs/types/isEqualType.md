# isEqualType  
Compares the types of two values, returning `true` if both values are of the same type and `false` otherwise. The function uses `getType` to obtain the type of each value and performs the comparison.

## Syntax
```typescript
function isEqualType(value1: any, value2: any): boolean
```

### Parameters

| Parameter | Type      | Description                               |
|-----------|-----------|-------------------------------------------|
| `value1`  | `any`     | The first value to be compared.           |
| `value2`  | `any`     | The second value to be compared.          |

### Return

| Type     | Description                                  |
|----------|----------------------------------------------|
| `boolean`| Returns `true` if both values are of the same type, otherwise returns `false`. |

## Examples

### Example 1: Comparing simple value types
```typescript
isEqualType(42, 56); // true (both are numbers)
isEqualType("Hello", "World"); // true (both are strings)
isEqualType(42, "Hello"); // false (one is a number, the other is a string)
```

### Example 2: Comparing complex types
```typescript
isEqualType([], {}); // false (one is an array, the other is a plain object)
isEqualType(new Map(), new Set()); // false (one is a Map, the other is a Set)
isEqualType(new Date(), new Date()); // true (both are Date instances)
```

### Example 3: Comparing special value types
```typescript
isEqualType(NaN, NaN); // true (both are NaN)
isEqualType(Infinity, -Infinity); // true (both are Infinity)
```

## Notes
- The function uses `getType` to identify the type of each value before comparing them.
- The comparison is strict, meaning that even if the values are of similar types (such as arrays and objects), they will be considered different if the type is not exactly the same.

## Dependencies
[getType](./getType.md): Used to obtain the type of the values to be compared.

## Source Code
::: code-group

```typescript
import getType from "./getType";

function isEqualType(value1: any, value2: any): boolean {
  return getType(value1) === getType(value2);
}
```

```javascript
import getType from "./getType";

function isEqualType(value1, value2) {
  return getType(value1) === getType(value2);
}
```
:::

## References
- [MDN: `Object.prototype.toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- [MDN: `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- [MDN: `Infinity`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)