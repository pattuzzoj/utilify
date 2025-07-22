## isNotNullObject

The `isNotNullObject` function checks if a value is a non-null object.

### Syntax

```typescript
isNotNullObject(value): boolean
```

### Parameters

| Name    | Type   | Description          |
| :------ | :----- | :------------------- |
| `value` | `any`  | Value to be checked. |

### Return

| Type      | Description                                                         |
| :-------- | :------------------------------------------------------------------ |
| `boolean` | Returns `true` if the value is an object and not `null`, otherwise `false`. |

### Examples

```typescript
isNotNullObject({}); // true
isNotNullObject([]); // true
isNotNullObject(null); // false
isNotNullObject(42); // false
```

### Notes

- Arrays and functions are also considered objects in JavaScript.
- Returns `false` for `null`, primitive types, and `undefined`.

### References
- [MDN: typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)