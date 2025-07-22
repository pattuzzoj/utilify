## pick

The `pick` function returns a new object containing only the specified properties.

### Syntax

```typescript
pick(obj, keys): object
```

### Parameters

| Name    | Type       | Description               |
| :------ | :--------- | :------------------------ |
| `obj`   | `object`   | Source object.            |
| `keys`  | `string[]` | List of properties to select. |

### Return

| Type     | Description                                               |
| :------- | :-------------------------------------------------------- |
| `object` | Returns a new object containing only the properties specified in `keys`. |

### Examples

```typescript
pick({ a: 1, b: 2, c: 3 }, ['b']); // { b: 2 }
pick({ x: 10, y: 20 }, ['x', 'y']); // { x: 10, y: 20 }
```

### Notes

- Does not modify the original object.
- Useful for extracting subsets of properties.

### References
- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)