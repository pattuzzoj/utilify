# adjustTimezone

The `adjustTimezone` function adjusts a date to a target timezone, returning a new `Date` instance.

## Syntax

```typescript
adjustTimezone(date: Date, targetTimezone: number): Date;
```

### Parameters

| Name              | Type       | Description                                         |
| ----------------- | ---------- | -------------------------------------------------- |
| `date`            | `Date`     | The date to be adjusted                            |
| `targetTimezone`  | `number`   | The target timezone (in hours, e.g., -3 for GMT-3) |

### Returns

| Type     | Description                           |
| -------- | ------------------------------------- |
| `Date`   | `Date` instance adjusted to timezone  |

## Examples

```typescript
adjustTimezone(new Date("2024-06-10T12:00:00Z"), -3);
// => Date Mon Jun 10 2024 09:00:00 GMT-0300
```

## Notes

* Throws an error if the date is not valid.
* Useful for converting dates between different timezones.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
