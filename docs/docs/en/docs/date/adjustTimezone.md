# adjustTimezone  
Adjusts the provided date to the specified timezone offset. The function calculates the difference between the current timezone offset and the desired offset, and adjusts the time accordingly.

## Syntax
```typescript
adjustTimezone(date: Date, timezoneOffset: number): Date
```

### Parameters

| Parameter       | Type      | Description                                                        |
|-----------------|-----------|--------------------------------------------------------------------|
| `date`          | `Date`    | The date to be adjusted based on the new timezone offset.          |
| `timezoneOffset`| `number`  | The desired timezone offset in minutes. A positive number indicates a timezone east of UTC, while a negative number indicates a timezone west of UTC. |

### Return

| Type    | Description                                              |
|---------|--------------------------------------------------------|
| `Date`  | Returns the adjusted date according to the specified timezone offset, or an invalid date (`NaN`) if the provided date is invalid. |

## Examples

### Example 1: Adjusting to a different timezone
```typescript
const currentDate = new Date();
const newTimezoneOffset = -240; // UTC -4
const adjustedDate = adjustTimezone(currentDate, newTimezoneOffset);
console.log(adjustedDate); // The date adjusted to the specified timezone
```

### Example 2: Passing an invalid date
```typescript
const invalidDate = new Date("invalid date");
const adjustedDate = adjustTimezone(invalidDate, -120);
console.log(adjustedDate); // Returns an invalid date (NaN)
```

## Notes
- The function uses the helper function `isValidDate` to validate the provided date.
- The `timezoneOffset` is in minutes, with positive values indicating a timezone ahead of UTC, and negative values indicating a timezone behind UTC.
- If the provided date is invalid, the function returns a new date with the value `NaN`.

## Dependencies
[isValidDate](./isValidDate.md): Function used to validate the provided date.

## Source Code
::: code-group
typescript
```typescript
import isValidDate from "./isValidDate";

function adjustTimezone(date: Date, timezoneOffset: number): Date {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  }

  const currentTimezoneOffset = date.getTimezoneOffset();
  const offsetDifference = timezoneOffset - currentTimezoneOffset;
  return new Date(date.getTime() + offsetDifference * 60 * 1000);
}
```

```javascript
import isValidDate from "./isValidDate";

function adjustTimezone(date, timezoneOffset) {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  }

  const currentTimezoneOffset = date.getTimezoneOffset();
  const offsetDifference = timezoneOffset - currentTimezoneOffset;
  return new Date(date.getTime() + offsetDifference * 60 * 1000);
}
```
:::

## References
- [MDN: `Date.getTimezoneOffset`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)
- [MDN: `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)