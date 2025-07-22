# arrayToObject

The `arrayToObject` function converts an array into an object, using functions to determine the keys and values.

## Syntax

```typescript
arrayToObject<T, K extends PropertyKey>(
  array: T[],
  keyFn?: (item: T, index: number, array: T[]) => K,
  valueFn?: (item: T, index: number, array: T[]) => any
): Record<K, any>;
```

### Parameters

| Name      | Type                                         | Description                               |
|-----------|----------------------------------------------|-------------------------------------------|
| `array`   | `T[]`                                        | Source array                              |
| `keyFn`   | `(item: T, index: number, array: T[]) => K`  | Function to generate keys (optional)      |
| `valueFn` | `(item: T, index: number, array: T[]) => any`| Function to generate values (optional)    |

### Returns

| Type             | Description                               |
|------------------|-------------------------------------------|
| `Record<K, any>` | Resulting object                          |

## Examples

```typescript
arrayToObject(["a", "b"], (item, i) => item, (item, i) => i); // => { a: 0, b: 1 }
arrayToObject([1, 2, 3]); // => { 0: 1, 1: 2, 2: 3 }
```

## Notes

* The keyFn and valueFn functions are optional.
* Useful for transforming arrays into indexed objects.

## References

* https://lodash.com/docs/4.17.15#keyBy