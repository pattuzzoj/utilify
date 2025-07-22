## isEqual

The `isEqual` function compares two values to determine if they are equivalent in structure and content, including objects, arrays, and primitive types.

### Syntax

```typescript
isEqual(value1, value2): boolean
```

### Parameters

| Name      | Type   | Description           |
| :-------- | :----- | :-------------------- |
| `value1`  | `any`  | First value to compare. |
| `value2`  | `any`  | Second value to compare. |

### Return

| Type      | Description                                                      |
| :-------- | :--------------------------------------------------------------- |
| `boolean` | Returns `true` if the values are equivalent, otherwise `false`. |

### Examples

```typescript
isEqual({ a: 1 }, { a: 1 }); // true
isEqual([1, 2], [1, 2]); // true
isEqual({ a: 1 }, { a: 2 }); // false
isEqual([1, 2], [2, 1]); // false
isEqual(5, 5); // true
isEqual('abc', 'abc'); // true
```

### Notes

- Performs deep equality comparison for objects and arrays.
- May not work correctly with objects that have non-enumerable properties or symbols.

### References
- [MDN: Object.is()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [MDN: JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)