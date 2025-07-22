# stripTime

The `stripTime` function removes the time information from a date, returning the date with only year, month, and day.

## Syntax

```typescript
stripTime(date: Date): Date;
```

### Parameters

| Name     | Type      | Description                |
| -------- | --------- | -------------------------- |
| `date`   | `Date`    | Date to strip time         |

### Returns

| Type      | Description                        |
| --------- | ---------------------------------- |
| `Date`    | Date with time set to 00:00:00     |

## Examples

```typescript
stripTime(new Date("2024-06-10T15:30:00"));
// => Date Mon Jun 10 2024 00:00:00
```

## Notes

* Throws an error if the date is invalid.
* Useful for comparing dates without considering the time.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date