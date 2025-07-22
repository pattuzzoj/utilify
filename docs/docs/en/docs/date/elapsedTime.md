# elapsedTime

The `elapsedTime` function calculates the elapsed time between two dates and returns the result in milliseconds, seconds, minutes, hours, or days.

## Syntax

```typescript
elapsedTime(start: Date, end: Date, unit?: string): number;
```

### Parameters

| Name     | Type      | Description                                         |
| -------- | --------- | -------------------------------------------------- |
| `start`  | `Date`    | Start date                                        |
| `end`    | `Date`    | End date                                          |
| `unit`   | `string`  | (Optional) Time unit: `ms`, `s`, `min`, `h`, `d`  |

### Returns

| Type      | Description                              |
| --------- | ---------------------------------------- |
| `number`  | Elapsed time in the specified unit       |

## Examples

```typescript
elapsedTime(new Date("2024-06-10T10:00:00Z"), new Date("2024-06-10T12:00:00Z"), 'h');
// => 2

elapsedTime(new Date("2024-06-10T10:00:00Z"), new Date("2024-06-10T10:01:00Z"), 'min');
// => 1
```

## Notes

* Throws an error if the dates are not valid.
* Useful for measuring time intervals between events.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date