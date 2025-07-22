## flattenObj

The `flattenObj` function transforms a nested object into a flat object, where the keys represent the full path to each value.

### Syntax

```typescript
flattenObj(obj): Record<string, any>
```

### Parameters

| Name    | Type   | Description            |
| :------ | :----- | :--------------------- |
| `obj`   | `any`  | Object to be flattened. |

### Return

| Type                | Description                         |
| :------------------ | :---------------------------------- |
| `Record<string, any>` | Returns a new flat object with property paths as keys. |

### Examples

```typescript
const obj = { a: 1, b: { c: 2, d: [3, 4] } };
flattenObj(obj);
// { 'a': 1, 'b.c': 2, 'b.d[0]': 3, 'b.d[1]': 4 }
```

### Notes

- Supports arrays and nested objects.
- Useful for serialization, logging, and data manipulation.

### References
- [MDN: Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)