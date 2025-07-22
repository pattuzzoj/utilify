# isWeekend

The `isWeekend` function checks if a date falls on a weekend (Saturday or Sunday).

## Syntax

```typescript
isWeekend(date: Date): boolean;
```

### Parameters

| Name     | Type      | Description         |
| -------- | --------- | ------------------ |
| `date`   | `Date`    | Date to check      |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if the date is a weekend            |

## Examples

```typescript
isWeekend(new Date("2024-06-08")); // Saturday
// => true

isWeekend(new Date("2024-06-10")); // Monday
// => false
```

## Notes

* Throws an error if the date is invalid.
* Useful for calendar validations and business rules.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date