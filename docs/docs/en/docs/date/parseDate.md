# parseDate  
Converts a string representing a date to a `Date` object. The function validates the string before attempting parsing and returns `undefined` if the date is invalid.

## Syntax
```typescript
parseDate(date: string): Date | undefined
```

### Parameters

| Parameter | Type    | Description                                                      |
|-----------|---------|------------------------------------------------------------------|
| `date`    | `string`| The string representing the date to be converted into a `Date` object. |

### Return

| Type       | Description                                              |
|------------|--------------------------------------------------------|
| `Date`     | Returns a `Date` object corresponding to the provided string. |
| `undefined`| Returns `undefined` if the provided string is not a valid date. |

## Examples

### Example 1: Valid date string
```typescript
const validDateString = "2025-01-05T12:00:00Z";
const parsedDate = parseDate(validDateString);
console.log(parsedDate); // The date corresponding to the provided string
```

### Example 2: Invalid date string
```typescript
const invalidDateString = "invalid date string";
const parsedDate = parseDate(invalidDateString);
console.log(parsedDate); // undefined
```

## Notes
- The function uses the helper function `isValidDateString` to validate the string before attempting to convert it to a `Date` object.
- If the string is not valid, the function returns `undefined` and logs an error message in the console.

## Dependencies
[isValidDateString](./isValidDateString.md): Function used to validate the provided date string.

## Source Code
::: code-group

```typescript
import isValidDateString from "./isValidDateString";

function parseDate(date: string): Date | undefined {
  if (!isValidDateString(date)) {
    console.error("Invalid date");
    return;
  }
  
  return new Date(date);
}
```

```javascript
import isValidDateString from "./isValidDateString";

function parseDate(date) {
  if (!isValidDateString(date)) {
    console.error("Invalid date");
    return;
  }
  
  return new Date(date);
}
```
:::

## References
- [MDN: `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)