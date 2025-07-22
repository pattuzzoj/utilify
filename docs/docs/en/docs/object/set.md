## set

The `set` function sets the value of a property in an object, supporting nested paths (deep set).

### Syntax

```typescript
set(obj, path, value): object
```

### Parameters

| Name    | Type                | Description                              |
| :------ | :------------------ | :--------------------------------------- |
| `obj`   | `object`            | Target object.                           |
| `path`  | `string \| string[]`   | Property path (dot or array notation).   |
| `value` | `any`               | Value to set.                            |

### Return

| Type     | Description                                               |
| :------- | :-------------------------------------------------------- |
| `object` | Returns the modified object with the value set at the specified path. |

### Examples

```typescript
set({}, 'a.b.c', 5); // { a: { b: { c: 5 } } }
set({ x: 1 }, ['y', 'z'], 2); // { x: 1, y: { z: 2 } }
set({ arr: [] }, 'arr[0]', 10); // { arr: [10] }
```

### Notes

- Creates intermediate objects as needed.
- Supports paths with array notation (e.g., 'arr[0].prop').
- Useful for safely updating nested properties.

### References
- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)