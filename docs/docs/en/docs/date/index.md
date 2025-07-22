# Date

The Date module provides a comprehensive set of functions for manipulating, formatting, and validating dates in JavaScript. With these functions, you can easily perform common date operations such as timezone adjustments, elapsed time calculations, special date checks, and much more.

- Date and time manipulation
- Date formatting and validation
- Elapsed time calculations
- Special date checks
- Timezone adjustments

## Overview

[adjustDate](./adjustDate.md)
```typescript
adjustDate(date: Date, adjustment: Partial<{ years: number; months: number; days: number; hours: number; minutes: number; seconds: number; milliseconds: number; }>): Date
```
Adjusts a date by adding or subtracting years, months, days, hours, minutes, seconds, or milliseconds.

[adjustTimezone](./adjustTimezone.md)
```typescript
adjustTimezone(date: Date, targetTimezone: number): Date
```
Adjusts a date to a target timezone, returning a new Date instance.

[convertDateTo](./convertDateTo.md)
```typescript
convertDateTo<T extends 'string' | 'number' | 'date'>(date: Date, type: T): string | number | Date
```
Converts a date to a specific output type: string, number, or Date object.

[convertTimeUnit](./convertTimeUnit.md)
```typescript
convertTimeUnit(value: number, from: string, to: string): number
```
Converts values between different time units.

[elapsedTime](./elapsedTime.md)
```typescript
elapsedTime(start: Date, end: Date, unit?: string): number
```
Calculates the elapsed time between two dates and returns the result in the desired unit.

[formatDate](./formatDate.md)
```typescript
formatDate(date: Date, pattern?: string): string
```
Formats a date according to a specified string pattern.

[formatDuration](./formatDuration.md)
```typescript
formatDuration(ms: number, options?: { compact?: boolean }): string
```
Converts a duration in milliseconds to a human-readable string.

[formatTime](./formatTime.md)
```typescript
formatTime(date: Date, pattern?: string): string
```
Formats a time (Date) to a string in the specified format.

[isBetween](./isBetween.md)
```typescript
isBetween(date: Date, start: Date, end: Date, inclusive?: boolean): boolean
```
Checks if a date is between two other dates.

[isLeapYear](./isLeapYear.md)
```typescript
isLeapYear(yearOrDate: number | Date): boolean
```
Checks if a year or date corresponds to a leap year.

[isSameDay](./isSameDay.md)
```typescript
isSameDay(date1: Date, date2: Date): boolean
```
Checks if two dates represent the same day.

[isToday](./isToday.md)
```typescript
isToday(date: Date): boolean
```
Checks if a date corresponds to today.

[isTomorrow](./isTomorrow.md)
```typescript
isTomorrow(date: Date): boolean
```
Checks if a date corresponds to tomorrow.

[isValidDate](./isValidDate.md)
```typescript
isValidDate(value: any): boolean
```
Checks if a value is a valid JavaScript date.

[isValidDateString](./isValidDateString.md)
```typescript
isValidDateString(value: string): boolean
```
Checks if a string represents a valid date.

[isWeekday](./isWeekday.md)
```typescript
isWeekday(date: Date): boolean
```
Checks if a date is a weekday (Monday to Friday).

[isWeekend](./isWeekend.md)
```typescript
isWeekend(date: Date): boolean
```
Checks if a date is a weekend.

[isYesterday](./isYesterday.md)
```typescript
isYesterday(date: Date): boolean
```
Checks if a date corresponds to the day before today.

[parseDate](./parseDate.md)
```typescript
parseDate(date: Date | string | number): Date
```
Converts a value into a valid Date instance.

[stripTime](./stripTime.md)
```typescript
stripTime(date: Date): Date
```
Removes the time information from a date, returning only the year, month, and day.

[toDate](./toDate.md)
```typescript
toDate(value: Date | string | number): Date
```
Converts a value into a Date instance.
