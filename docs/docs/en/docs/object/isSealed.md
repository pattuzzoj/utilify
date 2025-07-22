## isSealed

The `isSealed` function checks if an object is sealed, meaning new properties cannot be added and existing ones cannot be removed.

### Syntax

```typescript
isSealed(obj): boolean
```

### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `obj`   | `object` | Object to be checked. |

### Return

| Type      | Description                                               |
| :-------- | :-------------------------------------------------------- |
| `boolean` | Returns `true` if the object is sealed, otherwise `false`. |

### Examples

```typescript
const obj = Object.seal({ a: 1 });
isSealed(obj); // true
isSealed({ b: 2 }); // false
```

### Notes

- Internally uses `Object.isSealed`.
- Sealed objects cannot have properties added or removed, but existing property values can still be changed.

### References
- [MDN: Object.isSealed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)