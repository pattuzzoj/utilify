# parseDate

The `parseDate` function converts a value into a valid `Date` instance, throwing an error if the value is not valid.

## Syntax

```typescript
parseDate(date: Date): Date;
parseDate(date: string): Date;
parseDate(date: number): Date;
```

### Parameters

| Name     | Type                  | Description                      |
| -------- | --------------------- | -------------------------------- |
| `date`   | `Date` \| `string` \| `number` | The value to be converted to date |

### Returns

| Type      | Description           |
| --------- | --------------------- |
| `Date`    | Parsed Date object    |

## Examples

```typescript
parseDate("2024-06-10");
// => Date Mon Jun 10 2024

parseDate(1717977600000);
// => Date Mon Jun 10 2024

parseDate(new Date());
// => Current date

parseDate("invalid date");
// => throws TypeError
```

## Notes

* Throws an error if the value cannot be converted to a valid date.
* Useful for normalizing different date formats.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date