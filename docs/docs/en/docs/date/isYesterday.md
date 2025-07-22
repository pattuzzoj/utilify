# isYesterday

The `isYesterday` function checks if a date corresponds to the day before the current date.

## Syntax

```typescript
isYesterday(date: Date): boolean;
```

### Parameters

| Name     | Type      | Description         |
| -------- | --------- | ------------------ |
| `date`   | `Date`    | Date to check      |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if the date is yesterday            |

## Examples

```typescript
isYesterday(new Date(Date.now() - 24 * 60 * 60 * 1000));
// => true

isYesterday(new Date());
// => false
```

## Notes

* Throws an error if the date is invalid.
* Useful for relative date validations.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date