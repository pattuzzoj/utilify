# adjust

The `adjust` function applies a function to an element at a specific index in an array, returning a new array with the adjusted value.

## Syntax

```typescript
adjust<T>(array: T[], index: number, fn: (value: T) => T): T[];
```

### Parameters

| Name    | Type              | Description                            |
|---------|-------------------|----------------------------------------|
| `array` | `T[]`             | Array to be adjusted                   |
| `index` | `number`          | Index of the element to be adjusted    |
| `fn`    | `(value: T) => T` | Function to apply to the element       |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | New array with the adjusted element        |

## Examples

```typescript
adjust([1, 2, 3], 1, x => x * 10); // => [1, 20, 3]
adjust([1, 2, 3], -1, x => x + 1); // => [1, 2, 4]
```

## Notes

* The index can be negative to count from the end of the array.
* Does not modify the original array.

## References

* https://ramdajs.com/docs/#adjust