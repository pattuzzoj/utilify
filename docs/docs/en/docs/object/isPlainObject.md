## isPlainObject

The `isPlainObject` function checks if a value is a plain object, created by a literal or by `Object`.

### Syntax

```typescript
isPlainObject(value): boolean
```

### Parameters

| Name    | Type   | Description          |
| :------ | :----- | :------------------- |
| `value` | `any`  | Value to be checked. |

### Return

| Type      | Description                                                      |
| :-------- | :--------------------------------------------------------------- |
| `boolean` | Returns `true` if the value is a plain object, otherwise `false`. |

### Examples

```typescript
isPlainObject({}); // true
isPlainObject(Object.create(null)); // true
isPlainObject([]); // false
isPlainObject(new Date()); // false
```

### Notes

- Plain objects are created by `{}` or `new Object()`.
- Returns `false` for arrays, functions, class instances, and native objects.

### References
- [MDN: Object.getPrototypeOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)