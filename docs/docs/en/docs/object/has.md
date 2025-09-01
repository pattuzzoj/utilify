## has

The `has` function checks if an object has a (possibly nested) property specified by a path (string or array of strings).

### Syntax

```typescript
has<T>(obj: T, path: string | string[]): boolean
```

### Parameters

| Name    | Type                | Description                                                  |
| :------ | :------------------ | :----------------------------------------------------------- |
| `obj`   | `T`                 | Source object.                                               |
| `path`  | `string \| string[]` | Path to the property (e.g., "a.b.c" or ["a", "b", "c"]). |

### Return

| Type      | Description                                               |
| :-------- | :-------------------------------------------------------- |
| `boolean` | Returns `true` if the property exists, otherwise `false`. |

### Examples

```typescript
const obj = { a: { b: { c: 42 } } };
has(obj, 'a.b.c'); // true
has(obj, ['a', 'b', 'c']); // true
has(obj, 'a.b.x'); // false
```

### Notes

- Supports paths with array notation (e.g., "a.b[0].c").
- Useful for validating the existence of nested properties.

### References
- [MDN: Object.hasOwn()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
