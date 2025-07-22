## seal

The `seal` function recursively seals an object, preventing the addition or removal of properties.

### Syntax

```typescript
seal(obj): object
```

### Parameters

| Name    | Type     | Description           |
| :------ | :------- | :-------------------- |
| `obj`   | `object` | Object to be sealed.  |

### Return

| Type     | Description                                               |
| :------- | :-------------------------------------------------------- |
| `object` | Returns the sealed object.                                |

### Examples

```typescript
const obj = { a: 1, b: { c: 2 } };
seal(obj);
// obj and obj.b cannot have properties added or removed
```

### Notes

- Internally uses `Object.seal` recursively.
- Existing properties can still be modified, but not added or removed.
- Useful for protecting data structures from structural changes.

### References
- [MDN: Object.seal()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)