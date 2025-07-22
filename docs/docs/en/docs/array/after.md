# after

The `after` function returns all elements of an array or characters of a string after the specified index.

## Syntax

```typescript
after(string: string, index: number): string;
after<T>(array: T[], index: number): T[];
```

### Parameters

| Name     | Type             | Description                                 |
|----------|------------------|---------------------------------------------|
| `array`  | `T[]` \| `string` | Source array or string                      |
| `index`  | `number`         | Index after which elements are returned     |

### Returns

| Type           | Description                                 |
|----------------|---------------------------------------------|
| `T[]` \| `string` | Elements or characters after the index       |

## Examples

```typescript
after([1, 2, 3, 4], 1); // => [3, 4]
after("abcdef", 2); // => "def"
```

## Notes

* The index is zero-based.
* Returns an empty array or string if the index is the last element.

## References

* https://lodash.com/docs/4.17.15#drop