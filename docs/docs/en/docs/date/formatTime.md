# formatTime

The `formatTime` function formats a time (Date) to a string in the specified format, such as 'HH:mm:ss' or 'HH:mm'.

## Syntax

```typescript
formatTime(date: Date, pattern?: string): string;
```

### Parameters

| Name       | Type      | Description                                         |
| ---------- | --------- | -------------------------------------------------- |
| `date`     | `Date`    | The date/time to be formatted                      |
| `pattern`  | `string`  | (Optional) Formatting pattern (e.g., `HH:mm:ss`)   |

### Returns

| Type      | Description                                 |
| --------- | ------------------------------------------- |
| `string`  | Time formatted according to the pattern      |

## Examples

```typescript
formatTime(new Date("2024-06-10T14:05:09"), 'HH:mm:ss');
// => "14:05:09"

formatTime(new Date("2024-06-10T14:05:09"), 'HH:mm');
// => "14:05"
```

## Notes

* Throws an error if the date is not valid.
* Useful for displaying only the time part of a date.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date