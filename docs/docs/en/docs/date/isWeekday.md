# isWeekday

The `isWeekday` function checks if a date corresponds to a weekday (Monday to Friday).

## Syntax

```typescript
isWeekday(date: Date): boolean;
```

### Parameters

| Name     | Type      | Description         |
| -------- | --------- | ------------------ |
| `date`   | `Date`    | Date to check      |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if the date is a weekday            |

## Examples

```typescript
isWeekday(new Date("2024-06-10")); // Monday
// => true

isWeekday(new Date("2024-06-09")); // Sunday
// => false
```

## Notes

* Throws an error if the date is invalid.
* Useful for calendar validations and business rules.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date