# deepFreeze
The `deepFreeze` function deeply freezes an object and all its nested objects, preventing any modifications to its properties.

## Syntax

```typescript
deepFreeze(obj: Record<string, any>): Record<string, any>;
```

### Parameters

| Parameter | Type                          | Description                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `obj`     | `Record<string, any>`          | The object to be deeply frozen.                              |

### Return

| Type                          | Description                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | The frozen object, with all its properties and nested objects immutable. |

## Examples

### Example 1: Freezing an Object
```typescript
const person = { name: "Alice", address: { city: "Wonderland" } };
const frozenPerson = deepFreeze(person);

frozenPerson.name = "Bob"; // Cannot modify
console.log(frozenPerson.name); // "Alice"
```

### Example 2: Freezing an Object with Nested Objects
```typescript
const user = { id: 1, name: "Alice", address: { city: "Wonderland" } };
const frozenUser = deepFreeze(user);

frozenUser.address.city = "New Wonderland"; // Cannot modify
console.log(frozenUser.address.city); // "Wonderland"
```

### Example 3: Trying to Modify After Freezing
```typescript
const product = { name: "Book", price: 29.99 };
const frozenProduct = deepFreeze(product);

frozenProduct.price = 35.00; // Cannot modify
console.log(frozenProduct.price); // 29.99
```

## Notes
- This function deeply freezes the object, preventing any changes to both the original object and any nested objects.
- It uses `Object.freeze()` to freeze the object and `isPlainObject` from `@utilify/types` to check if a property is a plain object, ensuring that nested objects are also frozen.

## Dependencies
- [`@utilify/types`](./types.md): Provides the `isPlainObject` function to check if a value is a plain object.

## Source Code
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function deepFreeze(obj: Record<string, any>): Record<string, any> {
  const freezedObj = Object.freeze(obj);

  for (const key in freezedObj) {
    if (isPlainObject(obj[key])) {
      deepFreeze(obj[key]);
    }
  }

  return freezedObj;
}
```

```javascript
function deepFreeze(obj) {
  const freezedObj = Object.freeze(obj);

  for (const key in freezedObj) {
    if (isPlainObject(obj[key])) {
      deepFreeze(obj[key]);
    }
  }

  return freezedObj;
}
```
:::

## References
- [Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
- [`isPlainObject`](./types.md)