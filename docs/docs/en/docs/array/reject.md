# reject

The `reject` function returns a new array with elements that do not satisfy the provided test function.

## Syntax

```typescript
reject<T>(array: T[], fn: (value: T, index?: number, array?: T[]) => boolean): T[];
```

### Parameters

| Name     | Type                                         | Description                    |
|----------|----------------------------------------------|--------------------------------|
| `array`  | `T[]`                                        | Source array                   |
| `fn`     | `(value: T, index: number, array: T[]) => boolean` | Predicate function         |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | New array with elements that fail predicate |

## Examples

```typescript
reject([1, 2, 3, 4], x => x % 2 === 0); // => [1, 3]
reject(['a', 'b', 'c'], x => x === 'b'); // => ['a', 'c']
```

## Notes

* Useful for filtering unwanted elements.
* Does not modify the original array.

## References

* https://lodash.com/docs/4.17.15#reject