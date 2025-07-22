# first

The `first` function returns the first element of an array or the first character of a string.

## Syntax

```typescript
first<T>(array: T[]): T | undefined;
first(string: string): string | undefined;
```

### Parameters

| Name     | Type               | Description                    |
|----------|--------------------|--------------------------------|
| `array`  | `T[]` \| `string`   | Source array or string         |

### Returns

| Type                        | Description                                               |
|-----------------------------|-----------------------------------------------------------|
| `T` \| `string` \| `undefined` | First element or character, or undefined if empty         |

## Examples

```typescript
first([1, 2, 3]); // => 1
first("abc"); // => "a"
first([]); // => undefined
```

## Notes

* Returns undefined if the array or string is empty.
* Useful for quickly accessing the first item.

## References

* https://lodash.com/docs/4.17.15#head