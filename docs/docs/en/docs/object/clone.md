## clone

The `clone` function performs a deep clone of any value, including objects, arrays, and primitive types.

### Syntax

```typescript
clone<T>(value: T): T
```

### Parameters

| Name    | Type | Description |
| :------ | :--- | :---------- |
| `value` | `T`  | Value to be cloned. Can be an object, array, or primitive value. |

### Return

| Type | Description |
| :--- | :---------- |
| `T`  | Returns a deep copy of the provided value. |

### Examples

```typescript
const original = { a: 1, b: { c: 2 } };
const copy = clone(original);
copy.b.c = 3;
console.log(original.b.c); // 2
```

### Notes

- Internally uses `structuredClone`, ensuring support for complex types.
- May throw an error if the value contains types not clonable by `structuredClone` (e.g., functions).

### References
- [MDN: structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone)