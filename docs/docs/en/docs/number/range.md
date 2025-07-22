# range

The `range` function creates an array of numbers within a specified interval, with a defined step.

## Syntax

```typescript
range(start: number, end: number, step?: number): number[];
```

### Parameters

| Name     | Type      | Description                                 |
|----------|-----------|---------------------------------------------|
| `start`  | `number`  | Start of range                              |
| `end`    | `number`  | End of range (exclusive)                    |
| `step`   | `number`  | Step between values (optional, default 1)   |

### Returns

| Type        | Description                               |
|-------------|-------------------------------------------|
| `number[]`  | Array of numbers in the specified range    |

## Examples

```typescript
range(0, 5); // => [0, 1, 2, 3, 4]
range(1, 10, 2); // => [1, 3, 5, 7, 9]
range(5, 0, -1); // => [5, 4, 3, 2, 1]
```

## Notes

* The `end` value is not included in the result.
* Throws an error if `step` is 0.
* Useful for generating numeric sequences.

## References

* https://lodash.com/docs/4.17.15#range