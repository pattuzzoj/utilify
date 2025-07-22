# isTomorrow

The `isTomorrow` function checks if a date corresponds to tomorrow.

## Syntax

```typescript
isTomorrow(date: Date): boolean;
```

### Parameters

| Name     | Type      | Description         |
| -------- | --------- | ------------------ |
| `date`   | `Date`    | Date to check      |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if the date is tomorrow             |

## Examples

```typescript
isTomorrow(new Date(Date.now() + 24 * 60 * 60 * 1000));
// => true

isTomorrow(new Date("2024-06-11"));
// => depends on the current day
```

## Notes

* Throws an error if the date is invalid.
* Useful for validations related to the next day.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date