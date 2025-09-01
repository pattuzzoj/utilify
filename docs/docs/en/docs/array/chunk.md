# chunk

The `chunk` function splits an array or string into smaller parts of fixed size.

## Syntax

```typescript
chunk(string: string, size: number): string;
chunk<T>(array: T[], size: number): T[][];
```

### Parameters

| Name     | Type               | Description                                 |
|----------|--------------------|---------------------------------------------|
| `array`  | `T[]` \| `string`   | Source array or string                      |
| `size`   | `number`           | Size of each chunk                          |

### Returns

| Type             | Description                                 |
|------------------|---------------------------------------------|
| `T[][]` \| `string` | Array of chunks or divided string            |

## Examples

```typescript
chunk([1, 2, 3, 4, 5], 2); // => [[1,2],[3,4],[5]]
chunk("abcdef", 3); // => ["abc", "def"]
```

## Notes

* If the size is not positive, throws an error.
* Useful for splitting data into smaller blocks.

## References

* https://lodash.com/docs/4.17.15#chunk