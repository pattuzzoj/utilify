# isLeapYear

The `isLeapYear` function checks if a year or a date is a leap year.

## Syntax

```typescript
isLeapYear(yearOrDate: number | Date): boolean;
```

### Parameters

| Name         | Type              | Description                               |
| ------------ | ----------------- | ----------------------------------------- |
| `yearOrDate` | `number` \| `Date`  | The year (e.g., 2024) or a Date instance |

### Returns

| Type       | Description                              |
| ---------- | ---------------------------------------- |
| `boolean`  | True if it is a leap year                |

## Examples

```typescript
isLeapYear(2024);
// => true

isLeapYear(new Date("2020-01-01"));
// => true

isLeapYear(2023);
// => false
```

## Notes

* Throws an error if the parameter is not a number or a valid date.
* Useful for date calculations and leap year validation.

## References

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date