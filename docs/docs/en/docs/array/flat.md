# flat

The `flat` function "flattens" an array of arrays into a single array up to the specified depth.

## Syntax

```typescript
flat<T>(array: any[], depth?: number): T[];
```

### Parameters

| Name     | Type      | Description                                 |
|----------|-----------|---------------------------------------------|
| `array`  | `any[]`   | Source array                                |
| `depth`  | `number`  | Flattening depth (optional, default 1)      |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | New flattened array                       |

## Examples

```typescript
flat([1, [2, [3, [4]]]], 2); // => [1, 2, 3, [4]]
flat([1, [2, 3]]); // => [1, 2, 3]
```

## Notes

* If depth is not provided, the default is 1.
* Does not modify the original array.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat