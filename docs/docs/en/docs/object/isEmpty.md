## isEmpty

The `isEmpty` function checks if a value (object, array, string, Map, or Set) is empty.

### Syntax

```typescript
isEmpty(value): boolean
```

### Parameters

| Name    | Type   | Description          |
| :------ | :----- | :------------------- |
| `value` | `any`  | Value to be checked. |

### Return

| Type      | Description                                         |
| :-------- | :-------------------------------------------------- |
| `boolean` | Returns `true` if the value is empty, otherwise `false`. |

### Examples

```typescript
isEmpty({}); // true
isEmpty([]); // true
isEmpty(''); // true
isEmpty({ a: 1 }); // false
isEmpty([1, 2]); // false
```

### Notes

- Supports objects, arrays, strings, Map, and Set.
- Returns `true` for `null`.

### References
- [MDN: Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)