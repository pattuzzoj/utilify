# isSameDay

The `isSameDay` function checks if two dates represent the same day (year, month, and day).

## Syntax

```typescript
isSameDay(date1: Date, date2: Date): boolean;
```

### Parameters

| Name      | Type      | Description         |
| --------- | --------- | ------------------ |
| `date1`   | `Date`    | First date         |
| `date2`   | `Date`    | Second date        |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if both dates are on the same day    |

## Examples

```typescript
isSameDay(new Date("2024-06-10T10:00:00"), new Date("2024-06-10T23:59:59"));
// => true

isSameDay(new Date("2024-06-10"), new Date("2024-06-11"));
// => false
```

## Notes

* Throws an error if either date is invalid.
* Useful for comparing dates while ignoring the time.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date