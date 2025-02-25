# isWeekend  
Checks if the given `Date` object represents a weekend (Saturday or Sunday). The function returns `undefined` if the provided date is invalid.

## Syntax
```typescript
isWeekend(date: Date): boolean | undefined
```

### Parameters

| Parameter | Type    | Description                                                  |
|-----------|---------|--------------------------------------------------------------|
| `date`    | `Date`  | The `Date` object to be checked.                              |

### Return

| Type        | Description                                                  |
|-------------|--------------------------------------------------------------|
| `boolean`   | Returns `true` if the date is on the weekend (Saturday or Sunday), otherwise `false`. |
| `undefined` | Returns `undefined` if the provided date is invalid.         |

## Examples

### Example 1: Date on a weekend
```typescript
const weekendDate = new Date("2025-01-04"); // Saturday
console.log(isWeekend(weekendDate)); // true
```

### Example 2: Date on a weekday
```typescript
const weekdayDate = new Date("2025-01-06"); // Monday
console.log(isWeekend(weekdayDate)); // false
```

### Example 3: Invalid date
```typescript
const invalidDate = new Date("invalid date");
console.log(isWeekend(invalidDate)); // undefined
```

## Notes
- The function uses `isValidDate` to ensure that the provided date is valid before checking if it falls on a weekend.
- It checks if the day is `0` (Sunday) or `6` (Saturday) based on the `getDay()` method of the `Date` object.

## Dependencies
[isValidDate](./isValidDate.md): Function used to validate the provided date.

## Source Code
::: code-group

```typescript
import isValidDate from "./isValidDate";

function isWeekend(date: Date): boolean | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDay();

  return 0 === day || day === 6;
}
```

```javascript
import isValidDate from "./isValidDate";

function isWeekend(date) {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDay();

  return 0 === day || day === 6;
}
```
:::

## References
- [MDN: `Date.prototype.getDay`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)