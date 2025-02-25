# formatDate  
Formats a `Date` instance into a string using a specified date format and separator.

## Syntax
```typescript
formatDate(date: Date, format?: DateFormat, separator?: string): string | undefined
```

### Parameters

| Parameter   | Type           | Description                                                                                   |
|-------------|----------------|-----------------------------------------------------------------------------------------------|
| `date`      | `Date`         | The date object to be formatted.                                                              |
| `format`    | `"DMY" \| "MDY" \| "YMD"` | (Optional) The desired date format: `"DMY"` (day/month/year), `"MDY"` (month/day/year), or `"YMD"` (year/month/day). Default: `"DMY"`. |
| `separator` | `string`       | (Optional) The separator used between date parts (e.g., `/`, `-`, `.`). Default: `/`.         |

### Returns

| Type          | Description                                                                                            |
|---------------|--------------------------------------------------------------------------------------------------------|
| `string`      | The formatted date string based on the specified format and separator.                                  |
| `undefined`   | Returns `undefined` if the provided date is invalid or the date format is unsupported.                 |

## Examples

### Example 1: Default format and separator
```typescript
formatDate(new Date("2025-01-05")); 
// Output: "05/01/2025"
```

### Example 2: Using the MDY format
```typescript
formatDate(new Date("2025-01-05"), "MDY"); 
// Output: "01/05/2025"
```

### Example 3: Using the YMD format with a custom separator
```typescript
formatDate(new Date("2025-01-05"), "YMD", "-"); 
// Output: "2025-01-05"
```

### Example 4: Invalid date
```typescript
formatDate(new Date("invalid-date"));
// Output: undefined and log: "Invalid date"
```

### Example 5: Invalid format
```typescript
formatDate(new Date("2025-01-05"), "XYZ" as DateFormat);
// Output: undefined and log: "Invalid date format: XYZ"
```

## Notes
- Supported formats:
  - `"DMY"`: Day/Month/Year.
  - `"MDY"`: Month/Day/Year.
  - `"YMD"`: Year/Month/Day.
- The function ensures the `Date` instance is valid using `isValidDate`.
- Custom separators can be used to format the date, such as `-` or `.`.

## Dependencies
- [isValidDate](./isValidDate.md): Ensures the provided value is a valid `Date` instance.

## Source Code
::: code-group

```typescript
import isValidDate from "./isValidDate";

type DateFormat = "DMY" | "MDY" | "YMD";

function formatDate(date: Date, format: DateFormat = "DMY", separator: string = "/"): string | undefined {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  };

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  switch (format) {
    case "DMY":
      return `${day}${separator}${month}${separator}${year}`;
    case "MDY":
      return `${month}${separator}${day}${separator}${year}`;
    case "YMD":
      return `${year}${separator}${month}${separator}${day}`;
    default:
      console.error(`Invalid date format: ${format}`);
      return;
  }
}
```

```javascript
import isValidDate from "./isValidDate";

function formatDate(date, format = "DMY", separator = "/") {
  if (!isValidDate(date)) {
    console.error("Invalid date");
    return;
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  switch (format) {
    case "DMY":
      return `${day}${separator}${month}${separator}${year}`;
    case "MDY":
      return `${month}${separator}${day}${separator}${year}`;
    case "YMD":
      return `${year}${separator}${month}${separator}${day}`;
    default:
      console.error(`Invalid date format: ${format}`);
      return;
  }
}
```
:::

## References
- [MDN: `Date.prototype.getDate`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)
- [MDN: `Date.prototype.getMonth`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)
- [MDN: `Date.prototype.getFullYear`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
- [MDN: `String.prototype.padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)