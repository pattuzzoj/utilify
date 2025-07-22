# flatMap

The `flatMap` function applies a function to each element of an array and "flattens" the result into a new array.

## Syntax

```typescript
flatMap<T, U>(array: T[], fn: (value: T, index: number, array: T[]) => U | U[]): U[];
```

### Parameters

| Name     | Type                                         | Description                    |
|----------|----------------------------------------------|--------------------------------|
| `array`  | `T[]`                                        | Source array                   |
| `fn`     | `(value: T, index: number, array: T[]) => U \| U[]` | Mapping function              |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `U[]`   | New flattened array                       |

## Examples

```typescript
flatMap([1, 2, 3], x => [x, x * 2]); // => [1, 2, 2, 4, 3, 6]
flatMap([1, 2, 3], x => x * 2); // => [2, 4, 6]
```

## Notes

* Equivalent to map followed by flat with depth 1.
* Does not modify the original array.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap