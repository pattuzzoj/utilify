# repeat

The `repeat` function creates a new array or string by repeating the given value a specific number of times.

## Syntax

```typescript
repeat<T>(value: T, count: number): T[];
repeat(value: string, count: number): string;
```

### Parameters

| Name     | Type      | Description                    |
|----------|-----------|--------------------------------|
| `value`  | `T`       | Value to repeat                |
| `times`  | `number`  | Number of repetitions          |

### Returns

| Type    | Description                               |
|---------|-------------------------------------------|
| `T[]`   | Array with repeated values                |

## Examples

```typescript
repeat(1, 3); // => [1, 1, 1]
repeat('a', 4); // => 'aaaa'
repeat([2], 2); // => [[2], [2]]
```

## Notes

* If `count` is 0, returns an empty array or string.
* Throws an error if `count` is negative.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat