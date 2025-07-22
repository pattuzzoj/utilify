# cycle

The `cycle` function repeats the elements of an array or characters of a string a specified number of times.

## Syntax

```typescript
cycle<T>(array: T[], times: number): T[];
cycle(string: string, times: number): string;
```

### Parameters

| Name     | Type               | Description                    |
|----------|--------------------|--------------------------------|
| `array`  | `T[]` \| `string`   | Source array or string         |
| `times`  | `number`           | Number of repetitions          |

### Returns

| Type             | Description                               |
|------------------|-------------------------------------------|
| `T[]` \| `string` | New repeated array or string             |

## Examples

```typescript
cycle([1, 2], 3); // => [1,2,1,2,1,2]
cycle("ab", 2); // => "abab"
```

## Notes

* If times is 0 or negative, returns an empty array or string.
* Does not modify the original array or string.

## References

* https://lodash.com/docs/4.17.15#repeat
