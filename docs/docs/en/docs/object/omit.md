## omit

The `omit` function creates a copy of an object, excluding the specified properties.

### Syntax

```typescript
omit(obj, keys): object
```

### Parameters

| Name    | Type       | Description               |
| :------ | :--------- | :------------------------ |
| `obj`   | `object`   | Source object.            |
| `keys`  | `string[]` | List of keys to omit.     |

### Return

| Type     | Description                                               |
| :------- | :-------------------------------------------------------- |
| `object` | Returns a new object without the properties specified in `keys`. |

### Examples

```typescript
omit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
omit({ x: 10, y: 20 }, ['x']); // { y: 20 }
```

### Notes

- Does not modify the original object.
- Useful for removing sensitive or unnecessary properties.

### References
- [MDN: delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)