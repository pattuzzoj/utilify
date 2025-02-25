# adjustDate  
Adjusts the provided date by adding or subtracting the specified amount and time unit. The function supports different time units such as milliseconds, seconds, minutes, hours, days, months, and years.

## Syntax
```typescript
adjustDate(date: Date, amount: number, unit: TimeUnit): Date
```

### Parameters

| Parameter | Type        | Description                                |
|-----------|-------------|--------------------------------------------|
| `date`    | `Date`      | The date to be adjusted.                   |
| `amount`  | `number`    | The amount to be added or subtracted from the date. A negative number subtracts the amount. |
| `unit`    | `TimeUnit`  | The time unit to adjust. It can be one of the following values: `"milliseconds"`, `"seconds"`, `"minutes"`, `"hours"`, `"days"`, `"months"`, `"years"`. |

### Return

| Type    | Description                                              |
|---------|--------------------------------------------------------|
| `Date`  | Returns the adjusted date, or an invalid date (`NaN`) if the provided date is invalid. |

## Examples

### Example 1: Adjusting the date by milliseconds
```typescript
const currentDate = new Date();
const newDate = adjustDate(currentDate, 500, "milliseconds");
console.log(newDate); // The date adjusted by 500 milliseconds
```

### Example 2: Adjusting the date by hours
```typescript
const currentDate = new Date();
const newDate = adjustDate(currentDate, -2, "hours");
console.log(newDate); // The date adjusted to 2 hours ago
```

### Example 3: Adjusting the date by days
```typescript
const currentDate = new Date();
const newDate = adjustDate(currentDate, 5, "days");
console.log(newDate); // The date adjusted to 5 days ahead
```

### Example 4: Passing an invalid date
```typescript
const invalidDate = new Date("invalid date");
const newDate = adjustDate(invalidDate, 1, "days");
console.log(newDate); // Returns an invalid date (NaN)
```

## Notes
- The function uses the helper function `isValidDate` to validate the provided date.
- If the provided date is invalid, the function returns a new date with the value `NaN`.
- If the time unit is invalid, the function logs an error to the console.

## Dependencies
[isValidDate](./isValidDate.md): Function used to validate the provided date.

## Source Code
::: code-group
typescript
```typescript
import isValidDate from "./isValidDate";

type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years";

function adjustDate(date: Date, amount: number, unit: TimeUnit): Date {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  };

  const adjustedDate = new Date(date);

  switch (unit) {
    case "milliseconds":
      adjustedDate.setMilliseconds(adjustedDate.getMilliseconds() + amount);
      break;
    case "seconds":
      adjustedDate.setSeconds(adjustedDate.getSeconds() + amount);
      break;
    case "minutes":
      adjustedDate.setMinutes(adjustedDate.getMinutes() + amount);
      break;
    case "hours":
      adjustedDate.setHours(adjustedDate.getHours() + amount);
      break;
    case "days":
      adjustedDate.setDate(adjustedDate.getDate() + amount);
      break;
    case "months":
      adjustedDate.setMonth(adjustedDate.getMonth() + amount);
      break;
    case "years":
      adjustedDate.setFullYear(adjustedDate.getFullYear() + amount);
      break;
    default:
      console.error("Invalid time unit");
  }

  return adjustedDate;
}
```

```javascript
import isValidDate from "./isValidDate";

function adjustDate(date, amount, unit) {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return new Date(NaN);
  };

  const adjustedDate = new Date(date);

  switch (unit) {
    case "milliseconds":
      adjustedDate.setMilliseconds(adjustedDate.getMilliseconds() + amount);
      break;
    case "seconds":
      adjustedDate.setSeconds(adjustedDate.getSeconds() + amount);
      break;
    case "minutes":
      adjustedDate.setMinutes(adjustedDate.getMinutes() + amount);
      break;
    case "hours":
      adjustedDate.setHours(adjustedDate.getHours() + amount);
      break;
    case "days":
      adjustedDate.setDate(adjustedDate.getDate() + amount);
      break;
    case "months":
      adjustedDate.setMonth(adjustedDate.getMonth() + amount);
      break;
    case "years":
      adjustedDate.setFullYear(adjustedDate.getFullYear() + amount);
      break;
    default:
      console.error("Invalid time unit");
  }

  return adjustedDate;
}
```
:::

## References
- [MDN: `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN: `setMilliseconds`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds)
- [MDN: `setSeconds`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)
- [MDN: `setMinutes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)
- [MDN: `setHours`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)
- [MDN: `setDate`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)
- [MDN: `setMonth`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)
- [MDN: `setFullYear`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)