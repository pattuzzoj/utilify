# formatDate

The `formatDate` function formats a date according to a specified string pattern, such as 'dd/MM/yyyy' or 'yyyy-MM-dd'.

## Syntax

```typescript
formatDate(date: Date, pattern?: string): string;
```

### Parameters

| Name       | Type      | Description                                         |
| ---------- | --------- | -------------------------------------------------- |
| `date`     | `Date`    | The date to be formatted                            |
| `pattern`  | `string`  | (Optional) Formatting pattern (e.g., `dd/MM/yyyy`)  |

### Returns

| Type      | Description                                 |
| --------- | ------------------------------------------- |
| `string`  | Date formatted according to the pattern      |

## Examples

```typescript
formatDate(new Date("2024-06-10"), 'dd/MM/yyyy');
// => "10/06/2024"

formatDate(new Date("2024-06-10"), 'yyyy-MM-dd');
// => "2024-06-10"
```

## Notes

* Throws an error if the date is not valid.
* Useful for displaying dates in different regional formats.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date