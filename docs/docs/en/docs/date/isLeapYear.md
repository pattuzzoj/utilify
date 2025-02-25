# isLeapYear  
Checks if a year is a leap year. A year is considered a leap year if it is divisible by 4, except if it is divisible by 100, unless it is also divisible by 400.

## Syntax
```typescript
isLeapYear(year: number): boolean
```

### Parameters

| Parameter | Type     | Description                                          |
|-----------|----------|----------------------------------------------------|
| `year`    | `number` | The year to be checked to determine if it is a leap year. |

### Return

| Type      | Description                                            |
|-----------|------------------------------------------------------|
| `boolean` | Returns `true` if the year is a leap year, otherwise returns `false`. |

## Examples

### Example 1: Leap year
```typescript
isLeapYear(2024); // true
```

### Example 2: Non-leap year
```typescript
isLeapYear(2023); // false
```

### Example 3: Leap year due to the 400 rule
```typescript
isLeapYear(2000); // true
```

### Example 4: Non-leap year due to the 100 rule
```typescript
isLeapYear(1900); // false
```

## Notes
- The function follows the Gregorian calendar rules to determine if a year is a leap year:
  - A year is a leap year if it is divisible by 4.
  - If the year is divisible by 100, it is not a leap year unless it is also divisible by 400.

## Code Source
::: code-group

```typescript
function isLeapYear(year: number): boolean {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}
```

```javascript
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}
```
:::

## References
- [MDN: `Date.prototype.getFullYear`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)