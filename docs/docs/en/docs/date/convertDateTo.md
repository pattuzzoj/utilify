# convertDateTo  
Converts a given `Date` object into a specified string format.

## Syntax
```typescript
convertDateTo(date: Date, format: DateFormat): string | undefined
```

### Parameters

| Parameter | Type                           | Description                                         |
|-----------|--------------------------------|-----------------------------------------------------|
| `date`    | `Date`                         | The `Date` object to be converted.                  |
| `format`  | `"string" \| "utc" \| "iso"`   | The desired format for the date. Possible values are `"string"`, `"utc"`, or `"iso"`. |

### Return

| Type     | Description                                    |
|----------|------------------------------------------------|
| `string` | The formatted date as a string.                |
| `undefined` | Returns `undefined` if the date is invalid. |

## Examples

### Example 1: Convert date to UTC string
```typescript
const date = new Date();
convertDateTo(date, "utc");
// Output: "Sat, 05 Jan 2025 10:30:00 GMT" (for example)
```

### Example 2: Convert date to ISO string
```typescript
const date = new Date();
convertDateTo(date, "iso");
// Output: "2025-01-05T10:30:00.000Z"
```

### Example 3: Convert date to string format
```typescript
const date = new Date();
convertDateTo(date, "string");
// Output: "Sat Jan 05 2025 10:30:00 GMT+0000 (Coordinated Universal Time)"
```

## Notes
- The function checks if the provided `date` is valid using the `isValidDate` function.
- The `utc` format returns the date in the UTC string format (`Date.prototype.toUTCString`).
- The `iso` format returns the date in ISO string format (`Date.prototype.toISOString`).
- If no valid format is provided, the function defaults to using `Date.prototype.toString()`.

## Source Code
::: code-group

```typescript
import isValidDate from "./isValidDate";

type DateFormat = "string" | "utc" | "iso";

function convertDateTo(date: Date, format: DateFormat): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  if (format === "utc") {
    return date.toUTCString();
  } else if (format === "iso") {
    return date.toISOString();
  }

  return date.toString();
}
```

```javascript
function convertDateTo(date, format) {
  if (isNaN(date.getTime())) {
    console.error("Invalid date");
    return;
  }

  if (format === "utc") {
    return date.toUTCString();
  } else if (format === "iso") {
    return date.toISOString();
  }

  return date.toString();
}
```
:::

## References
- [MDN: `Date.prototype.toUTCString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)
- [MDN: `Date.prototype.toISOString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
- [MDN: `Date.prototype.toString`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString)