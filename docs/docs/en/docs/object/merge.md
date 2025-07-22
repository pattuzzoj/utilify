## merge

The `merge` function combines two or more objects into a new object, performing a deep merge of properties.

### Syntax

```typescript
merge(target, ...sources): object
```

### Parameters

| Name      | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| `target`  | `object` | Destination object to receive properties.   |
| `sources` | `object` | One or more source objects to be merged.    |

### Return

| Type     | Description                                               |
| :------- | :-------------------------------------------------------- |
| `object` | Returns a new object resulting from the deep merge of the provided objects. |

### Examples

```typescript
merge({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
merge({ a: { x: 1 } }, { a: { y: 2 } }); // { a: { x: 1, y: 2 } }
merge({ a: 1 }, { a: 2, b: 3 }); // { a: 2, b: 3 }
```

### Notes

- Performs deep merging, copying nested properties.
- Properties with the same name in later objects overwrite previous ones.
- Does not modify the original source or target objects.

### References
- [MDN: Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)