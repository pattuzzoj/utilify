# aperture

The `aperture` function returns a list of consecutive subsets of fixed size extracted from an array.

## Syntax

```typescript
aperture<T>(array: T[], size: number = 1): T[][];
```

### Parameters

| Name     | Type      | Description                               |
|----------|-----------|-------------------------------------------|
| `array`  | `T[]`     | Source array                              |
| `size`   | `number`  | Size of each subset                       |

### Returns

| Type     | Description                               |
|----------|-------------------------------------------|
| `T[][]`  | List of consecutive subsets                |

## Examples

```typescript
aperture([1, 2, 3, 4], 2); // => [[1,2],[2,3],[3,4]]
aperture([1, 2, 3], 1); // => [[1],[2],[3]]
```

## Notes

* If the size is greater than the length of the array, returns an empty array.
* Useful for sliding window operations.

## References

* https://ramdajs.com/docs/#aperture