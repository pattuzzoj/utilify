# toDate

The `toDate` function converts a value into a `Date` instance. It accepts `Date` objects, strings, or numbers.

## Syntax

```typescript
toDate(value: Date): Date;
toDate(value: string): Date;
toDate(value: number): Date;
```

### Parameters

| Name     | Type      | Description                  |
| -------- | --------- | --------------------------- |
| `value`  | `any`     | Value to convert to Date    |

### Returns

| Type      | Description                  |
| --------- | --------------------------- |
| `Date`    | Converted Date object        |

## Examples

```typescript
toDate("2024-06-10");
// => Date Mon Jun 10 2024

toDate(1717977600000);
// => Date Mon Jun 10 2024

toDate(new Date());
// => Current date

toDate({});
// => Invalid Date
```

## Notes

* Returns an invalid `Date` instance if the value cannot be converted.
* Useful for normalizing different date formats.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date