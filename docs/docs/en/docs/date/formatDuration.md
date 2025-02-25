# formatDuration
The `formatDuration` function formats a given duration in milliseconds into a human-readable string based on the specified format.

## Syntax

```typescript
formatDuration(ms: number, format: string = "hh:mm:ss", autoHour: boolean = true): string
```

### Parameters

| Parameter  | Type          | Description                                                        |
|------------|---------------|--------------------------------------------------------------------|
| `ms`       | `number`      | The duration in milliseconds to be formatted.                      |
| `format`   | `string`      | The format string for the output. Default is `"hh:mm:ss"`.         |
| `autoHour` | `boolean`     | If `true`, the hours part will be omitted if the duration is less than an hour. Default is `true`. |

### Return

| Type     | Description                                                        |
|----------|--------------------------------------------------------------------|
| `string` | A formatted string representing the duration, based on the format. |

## Examples

### Example 1: Default format
```typescript
console.log(formatDuration(3661000)); // "01:01:01"
```

### Example 2: Custom format (hours and minutes)
```typescript
console.log(formatDuration(3661000, "hh:mm:ss")); // "01:01:01"
```

### Example 3: Custom format without hours
```typescript
console.log(formatDuration(61000, "mm:ss")); // "01:01"
```

### Example 4: With milliseconds
```typescript
console.log(formatDuration(3661000, "hh:mm:ss.ms")); // "01:01:01.000"
```

### Example 5: With automatic hour removal
```typescript
console.log(formatDuration(61000, "hh:mm:ss", true)); // "01:01"
```

## Notes
- The `format` string is case-insensitive.
- The `autoHour` parameter, when set to `true`, will remove the hour portion from the output if the duration is less than one hour.

## Dependencies
- None.

## Code
::: code-group

```typescript
function formatDuration(ms: number, format: string = "hh:mm:ss", autoHour: boolean = true): string {
  const hours = String(Math.floor(ms / 3_600_000));
  const minutes = String(Math.floor((ms % 3_600_000) / 60_000)).padStart(2, "0");
  const seconds = String(Math.floor((ms % 60_000) / 1000)).padStart(2, "0");
  const milliseconds = String(ms % 1000).padStart(3, "0");

  let formatedDuration = format.toLowerCase();

  if (autoHour && hours === "0") {
    formatedDuration = formatedDuration.slice(formatedDuration.indexOf("mm"));
  }

  return formatedDuration
    .replace("hh", hours)
    .replace("mm", minutes)
    .replace("ss", seconds)
    .replace("ms", milliseconds);
}
```

```javascript
function formatDuration(ms, format = "hh:mm:ss", autoHour = true) {
  const hours = String(Math.floor(ms / 3_600_000));
  const minutes = String(Math.floor((ms % 3_600_000) / 60_000)).padStart(2, "0");
  const seconds = String(Math.floor((ms % 60_000) / 1000)).padStart(2, "0");
  const milliseconds = String(ms % 1000).padStart(3, "0");

  let formatedDuration = format.toLowerCase();

  if (autoHour && hours === "0") {
    formatedDuration = formatedDuration.slice(formatedDuration.indexOf("mm"));
  }

  return formatedDuration
    .replace("hh", hours)
    .replace("mm", minutes)
    .replace("ss", seconds)
    .replace("ms", milliseconds);
}
```
:::

## References
- [String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)