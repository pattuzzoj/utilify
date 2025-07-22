# last

The `last` function returns the last element(s) of an array or character(s) of a string.

## Syntax

```typescript
last(string: string, count?: number): string;
last<T>(array: T[], count?: number): T[];
```

### Parameters

| Name     | Type               | Description                    |
|----------|--------------------|--------------------------------|
| `array`  | `T[]` \| `string`   | Source array or string         |
| `count`  | `number`           | Number of elements/characters to return (optional, default 1) |

### Returns

| Type                        | Description                                               |
|-----------------------------|-----------------------------------------------------------|
| `T` \| `string` \| `undefined` | Last element or character, or undefined if empty         |

## Examples

```typescript
last([1, 2, 3, 4], 2); // => [3, 4]
last('abcdef', 3); // => 'def'
last([1, 2, 3]); // => [3]
```

## Notes

* If `count` is greater than the length of the array/string, returns all elements.
* Returns an empty array or string if the array/string is empty.

## References

* https://lodash.com/docs/4.17.15#last