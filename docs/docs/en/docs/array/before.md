# before

The `before` function returns all elements of an array or characters of a string before the specified index.

## Syntax

```typescript
before(string: string, index: number): string;
before<T>(array: T[], index: number): T[];
```

### Parameters

| Name     | Type             | Description                                 |
|----------|------------------|---------------------------------------------|
| `array`  | `T[]` \| `string` | Source array or string                      |
| `index`  | `number`         | Index before which elements are returned    |

### Returns

| Type           | Description                                 |
|----------------|---------------------------------------------|
| `T[]` \| `string` | Elements or characters before the index      |

## Examples

```typescript
before([1, 2, 3, 4], 2); // => [1, 2]
before("abcdef", 3); // => "abc"
```

## Notes

* The index is zero-based.
* Returns an empty array or string if the index is 0.

## References

* https://lodash.com/docs/4.17.15#take