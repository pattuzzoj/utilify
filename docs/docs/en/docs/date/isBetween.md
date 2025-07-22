# isBetween

The `isBetween` function checks if a date is between two other dates (inclusive or exclusive).

## Syntax

```typescript
isBetween(date: Date, start: Date, end: Date, inclusive?: boolean): boolean;
```

### Parameters

| Name         | Type       | Description                                         |
| ------------ | ---------- | -------------------------------------------------- |
| `date`       | `Date`     | Date to be checked                                 |
| `start`      | `Date`     | Start date of the interval                         |
| `end`        | `Date`     | End date of the interval                           |
| `inclusive`  | `boolean`  | (Optional) If true, includes the start and end dates |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if the date is within the interval  |

## Examples

```typescript
isBetween(new Date("2024-06-10"), new Date("2024-06-01"), new Date("2024-06-30"));
// => true

isBetween(new Date("2024-06-01"), new Date("2024-06-01"), new Date("2024-06-30"), true);
// => true
```

## Notes

* Throws an error if any of the dates are not valid.
* Useful for validating date ranges.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date