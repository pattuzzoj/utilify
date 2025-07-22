## freeze

The `freeze` function recursively freezes an object, making it and all its internal objects immutable.

### Syntax

```typescript
freeze(obj: Record<PropertyKey, any>): Record<PropertyKey, any>
```

### Parameters

| Name    | Type                     | Description            |
| :------ | :----------------------- | :--------------------- |
| `obj`   | `Record<PropertyKey, any>` | Object to be frozen.   |

### Return

| Type                     | Description                                      |
| :----------------------- | :----------------------------------------------- |
| `Record<PropertyKey, any>` | Returns the frozen object, with all properties and internal objects immutable. |

### Examples

```typescript
const obj = { a: 1, b: { c: 2 } };
const frozen = freeze(obj);
frozen.a = 10; // No effect
frozen.b.c = 20; // No effect
```

### Notes

- Uses `Object.freeze` recursively to ensure deep immutability.
- Useful to prevent accidental mutations in data structures.

### References
- [MDN: Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)
