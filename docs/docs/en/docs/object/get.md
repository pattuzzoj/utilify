## get

The `get` function accesses the value of a nested property in an object using a path (string or array of strings). It allows you to set a default value if the path does not exist.

### Syntax

```typescript
get<T>(obj: T, path: string | string[], defaultValue?: any): any
```

### Parameters

| Name           | Type                | Description                                                  |
| :------------- | :------------------ | :----------------------------------------------------------- |
| `obj`          | `T`                 | Source object.                                               |
| `path`         | `string \| string[]` | Path to the property (e.g., "a.b.c" or ["a", "b", "c"]). |
| `defaultValue` | `any` (optional)    | Default value if the path does not exist.                    |

### Return

| Type   | Description                                                        |
| :----- | :----------------------------------------------------------------- |
| `any`  | Returns the value found at the specified path, or `defaultValue` if the path does not exist. |

### Examples

```typescript
const obj = { a: { b: { c: 42 } } };
get(obj, 'a.b.c'); // 42
get(obj, ['a', 'b', 'c']); // 42
get(obj, 'a.b.x', 0); // 0
```

### Notes

- Supports paths with array notation (e.g., "a.b[0].c").
- Useful for safely accessing nested properties.

### References
- [MDN: Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)