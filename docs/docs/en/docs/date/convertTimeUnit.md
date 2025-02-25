# convertTimeUnit  
Converts a time value from one unit to another.

## Syntax
```typescript
convertTimeUnit(time: number, from: TimeUnit, to: TimeUnit): number
```

### Parameters

| Parameter | Type                     | Description                                         |
|-----------|--------------------------|-----------------------------------------------------|
| `time`    | `number`                 | The time value to be converted.                    |
| `from`    | `"milliseconds" \| "seconds" \| "minutes" \| "hours" \| "days"` | The original unit of the time value.              |
| `to`      | `"milliseconds" \| "seconds" \| "minutes" \| "hours" \| "days"` | The desired unit for the converted time value.    |

### Return

| Type     | Description                                    |
|----------|------------------------------------------------|
| `number` | The time value converted to the specified unit.|

## Examples

### Example 1: Convert seconds to minutes
```typescript
convertTimeUnit(120, "seconds", "minutes");
// Output: 2
```

### Example 2: Convert hours to milliseconds
```typescript
convertTimeUnit(1, "hours", "milliseconds");
// Output: 3600000
```

### Example 3: Convert days to hours
```typescript
convertTimeUnit(2, "days", "hours");
// Output: 48
```

### Example 4: Convert minutes to milliseconds
```typescript
convertTimeUnit(5, "minutes", "milliseconds");
// Output: 300000
```

### Example 5: Convert milliseconds to days
```typescript
convertTimeUnit(86400000, "milliseconds", "days");
// Output: 1
```

## Notes
- Values are converted to milliseconds as an intermediate step.
- The result is rounded down using `Math.floor` to avoid decimal values.

## Source Code
::: code-group
typescript
```typescript
type TimeUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days";

function convertTimeUnit(time: number, from: TimeUnit, to: TimeUnit): number {
  const conversionFactors: Record<TimeUnit, number> = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000
  };

  const timeInMilliseconds = time * conversionFactors[from];
  return Math.floor(timeInMilliseconds / conversionFactors[to]);
}
```

javascript
```javascript
function convertTimeUnit(time, from, to) {
  const conversionFactors = {
    milliseconds: 1,
    seconds: 1000,
    minutes: 60 * 1000,
    hours: 60 * 60 * 1000,
    days: 24 * 60 * 60 * 1000
  };

  const timeInMilliseconds = time * conversionFactors[from];
  return Math.floor(timeInMilliseconds / conversionFactors[to]);
}
```
:::

## References
- [MDN: `Math.floor`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)