# freeze
The `freeze` function freezes an object, preventing modifications to its properties.

## Syntax

```typescript
freeze(obj: Record<string, any>): Record<string, any>;
```

### Parameters

| Parameter | Type                          | Description                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `obj`     | `Record<string, any>`          | The object to be frozen.                                      |

### Return

| Type                          | Description                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | The frozen object, where its properties cannot be modified.  |

## Examples

### Example 1: Freezing an Object
```typescript
const obj = { name: "Alice", age: 30 };
const frozenObj = freeze(obj);

console.log(frozenObj);
// { name: "Alice", age: 30 }

frozenObj.age = 31;  // Modification will not be allowed
console.log(frozenObj.age);
// 30
```

### Example 2: Freezing an Object with Nested Properties
```typescript
const obj = { name: "Alice", address: { city: "Wonderland" } };
const frozenObj = freeze(obj);

console.log(frozenObj);
// { name: "Alice", address: { city: "Wonderland" } }

frozenObj.address.city = "Fictionland";  // Modification will not be allowed
console.log(frozenObj.address.city);
// "Wonderland"
```

## Notes
- `Object.freeze()` only freezes the object at the shallow level, meaning that properties of the object cannot be modified, but nested objects are not frozen recursively.
- To deeply freeze an object, a function like `deepFreeze` should be used.

## Dependencies
No external dependencies.

## Source Code
::: code-group

```typescript
function freeze(obj: Record<string, any>): Record<string, any> {
  return Object.freeze(obj);
}
```

```javascript
function freeze(obj) {
  return Object.freeze(obj);
}
```
:::

## References
- [Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)