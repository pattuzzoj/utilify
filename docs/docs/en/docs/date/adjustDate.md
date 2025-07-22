# adjustDate

The `adjustDate` function adjusts a date by adding or subtracting years, months, days, hours, minutes, seconds, or milliseconds.

## Syntax

```typescript
adjustDate(
  date: Date,
  adjustment: Partial<{
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
  }>
): Date;
```

### Parameters

| Name         | Type                                                                 | Description                                              |
| ------------ | -------------------------------------------------------------------- | -------------------------------------------------------- |
| `date`       | `Date`                                                              | The date to be adjusted                                  |
| `adjustment` | `Partial<{ years: number; months: number; days: number; hours: number; minutes: number; seconds: number; milliseconds: number; }>` | Object with fields to adjust (years, months, days, etc.) |

### Returns

| Type     | Description                |
| -------- | -------------------------- |
| `Date`   | Adjusted `Date` instance   |

## Examples

```typescript
adjustDate(new Date("2024-06-10"), { days: 5 });
// => Date Sat Jun 15 2024

adjustDate(new Date("2024-06-10"), { months: -1 });
// => Date Fri May 10 2024
```

## Notes

* Throws an error if the date is not valid.
* Useful for flexible date manipulation.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date