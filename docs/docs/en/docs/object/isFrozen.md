## isFrozen

The `isFrozen` function checks if an object is frozen, meaning it cannot be modified.

### Syntax

```typescript
isFrozen(obj): boolean
```

### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `obj`   | `object` | Object to be checked. |

### Return

| Type      | Description                                               |
| :-------- | :-------------------------------------------------------- |
| `boolean` | Returns `true` if the object is frozen, otherwise `false`. |

### Examples

```typescript
const obj = Object.freeze({ a: 1 });
isFrozen(obj); // true
isFrozen({ b: 2 }); // false
```

### Notes

- Internally uses `Object.isFrozen`.
- Frozen objects cannot have properties added, removed, or modified.

### References
- [MDN: Object.isFrozen()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)