## unflattenObj

The `unflattenObj` function reconstructs nested objects from an object with flat (flattened) keys.

### Syntax

```typescript
unflattenObj(obj): object
```

### Parameters

| Name    | Type     | Description                              |
| :------ | :------- | :--------------------------------------- |
| `obj`   | `object` | Object with flat keys to be reconstructed. |

### Return

| Type     | Description                                               |
| :------- | :-------------------------------------------------------- |
| `object` | Returns a new object with the nested structure restored.  |

### Examples

```typescript
unflattenObj({ 'a.b.c': 1, 'a.b.d': 2 }); // { a: { b: { c: 1, d: 2 } } }
unflattenObj({ 'arr[0]': 10, 'arr[1]': 20 }); // { arr: [10, 20] }
```

### Notes

- Supports paths with dot and array notation (e.g., 'arr[0].prop').
- Useful for converting serialized data or form inputs into nested objects.

### References
- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
