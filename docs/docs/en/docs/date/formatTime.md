# formatTime  
Formats a `Date` instance into a string based on the specified format. The default format is `"hh:mm"`.

## Syntax
```typescript
formatTime(date: Date, format?: string): string | undefined
```

### Parameters

| Parameter   | Type     | Description                                                                                   |
|-------------|----------|-----------------------------------------------------------------------------------------------|
| `date`      | `Date`   | The date object to be formatted.                                                              |
| `format`    | `string` | (Optional) The desired format for the output string. Supported tokens include `hh`, `mm`, `ss`, `ms`, and `a`. Default: `"hh:mm"`. |

### Returns

| Type          | Description                                                                                            |
|---------------|--------------------------------------------------------------------------------------------------------|
| `string`      | A formatted date string based on the specified format.                                                 |
| `undefined`   | Returns `undefined` if the provided date is invalid.                                                   |

## Examples

### Example 1: Using the default format
```typescript
formatTime(new Date("2025-01-01T15:30:45")); 
// Output: "15:30"
```

### Example 2: Formatting with AM/PM
```typescript
formatTime(new Date("2025-01-01T15:30:45"), "hh:mm a"); 
// Output: "3:30 PM"
```

### Example 3: Including milliseconds
```typescript
formatTime(new Date("2025-01-01T15:30:45.123"), "hh:mm:ss.ms"); 
// Output: "15:30:45.123"
```

### Example 4: Invalid date
```typescript
formatTime(new Date("invalid-date"), "hh:mm:ss");
// Output: undefined and log: "Invalid date"
```

## Notes
- Supported formatting tokens:
  - `hh`: Hours (12-hour format or 24-hour format, depending on whether `a` is included in the format).
  - `mm`: Minutes (always two digits).
  - `ss`: Seconds (always two digits).
  - `ms`: Milliseconds (always three digits).
  - `a`: Indicates the time period (`AM` or `PM`) for 12-hour formats.
- If the `format` parameter is not provided, the default format `"hh:mm"` will be used.
- The function uses `isValidDate` to ensure the provided value is a valid `Date` instance.

## Dependencies
- [isValidDate](./isValidDate.md): Ensures the provided value is a valid `Date` instance.

## Source Code
::: code-group

```typescript
import isValidDate from "./isValidDate";

function formatTime(date: Date, format: string = "hh:mm"): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  }

  const useAMPM = format.search("a") !== -1;
  const hours = String(useAMPM ? date.getHours() % 12 || 12 : date.getHours());
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  const period = date.getHours() >= 12 ? "PM" : "AM";

  return format
  .toLowerCase()
  .replace("hh", hours)
  .replace("mm", minutes)
  .replace("ss", seconds)
  .replace("ms", milliseconds)
  .replace("a", period);
}
```

```javascript
import isValidDate from "./isValidDate";

function formatTime(date, format = "hh:mm") {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  }

  const useAMPM = format.search("a") !== -1;
  const hours = String(useAMPM ? date.getHours() % 12 || 12 : date.getHours());
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  const period = date.getHours() >= 12 ? "PM" : "AM";

  return format
  .toLowerCase()
  .replace("hh", hours)
  .replace("mm", minutes)
  .replace("ss", seconds)
  .replace("ms", milliseconds)
  .replace("a", period);
}
```
:::

## References
- [MDN: `Date.prototype.getHours`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)
- [MDN: `Date.prototype.getMinutes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)
- [MDN: `Date.prototype.getSeconds`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)
- [MDN: `String.prototype.padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)