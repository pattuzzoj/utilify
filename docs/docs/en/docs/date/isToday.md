# isToday

The `isToday` function checks if a date corresponds to the current day.

## Syntax

```typescript
isToday(date: Date): boolean;
```

### Parameters

| Name     | Type      | Description         |
| -------- | --------- | ------------------ |
| `date`   | `Date`    | Date to check      |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if the date is today                |

## Examples

```typescript
isToday(new Date());
// => true

isToday(new Date("2024-06-10"));
// => depends on the current day
```

## Notes

* Throws an error if the date is invalid.
* Useful for validations related to the current day.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
