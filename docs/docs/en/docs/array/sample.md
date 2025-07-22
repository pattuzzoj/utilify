# sample

The `sample` function returns a random element from an array.

## Syntax

```typescript
sample<T>(array: T[]): T | undefined;
```

### Parameters

| Name     | Type               | Description                    |
|----------|--------------------|--------------------------------|
| `array`  | `T[]` \| `string`   | Source array or string         |

### Returns

| Type                        | Description                                               |
|-----------------------------|-----------------------------------------------------------|
| `T` \| `string` \| `undefined` | Random element or character, or undefined if empty         |

## Examples

```typescript
sample([1, 2, 3, 4]); // => 2 (example)
sample([]); // => undefined
```

## Notes

* Returns undefined if the array is empty.
* Useful for obtaining random samples.

## References

* https://lodash.com/docs/4.17.15#sample