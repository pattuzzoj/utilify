# Date <Badge type="tip" text="1.0.1" />

The `@utilify/date` package offers essential utilities for working with dates and times in JavaScript and TypeScript. These functions are designed to be intuitive, efficient, and type-safe.

## Installation

To install the **Date** package, use one of the following commands:

::: code-group

```bash [npm]
npm install @utilify/date
```

```bash [yarn]
yarn add @utilify/date
```

```bash [pnpm]
pnpm add @utilify/date
```

:::

Import the functions into your project:

::: code-group

```typescript [esm]
import { formatDate, isLeapYear } from '@utilify/date';
```

```javascript [cjs]
const { formatDate, isLeapYear } = require('@utilify/date');
```

:::

## Overview

### [adjustDate](./adjustDate.md)

```typescript
function adjustDate(date: Date, amount: number, unit: TimeUnit): Date
```
Adjusts a date by adding or subtracting a time interval.

### [adjustTimezone](./adjustTimezone.md)

```typescript
function adjustTimezone(date: Date, timezoneOffset: number): Date
```
Converts a date to a different timezone.

### [convertTimeUnit](./convertTimeUnit.md)

```typescript
function convertTimeUnit(time: number, from: TimeUnit, to: TimeUnit): number
```
Converts time units, such as milliseconds to minutes.

### [convertDateTo](./convertDateTo.md)

```typescript
function convertDateTo(date: Date, format: DateFormat): string | undefined
```
Converts a date to another format or representation.

### [formatDate](./formatDate.md)

```typescript
function formatDate(date: Date, format: DateFormat = "DMY", separator: string = "/"): string | undefined
```
Formats a date into a user-friendly string.

### [formatDuration](./formatDuration.md)

```typescript
function formatDuration(ms: number, format: string = "hh:mm:ss", autoHour: boolean = true): string
```
Formats a duration of time into a readable string.

### [formatTime](./formatTime.md)

```typescript
function formatTime(date: Date, format: string = "hh:mm:ss"): string | undefined
```
Formats the time component of a date.

### [isLeapYear](./isLeapYear.md)

```typescript
function isLeapYear(year: number): boolean
```
Checks if a year is a leap year.

### [isValidDate](./isValidDate.md)

```typescript
function isValidDate(date: Date): boolean
```
Validates whether an object or string represents a valid date.

### [isValidDateString](./isValidDateString.md)

```typescript
function isValidDateString(date: string): boolean
```
Validates whether a string follows a recognized date format.

### [isWeekday](./isWeekday.md)

```typescript
function isWeekday(date: Date): boolean | undefined
```
Checks if a date is a weekday (Monday to Friday).

### [isWeekend](./isWeekend.md)

```typescript
function isWeekend(date: Date): boolean | undefined
```
Checks if a date is a weekend (Saturday or Sunday).

### [parseDate](./parseDate.md)

```typescript
function parseDate(date: string): Date | undefined
```
Converts a string or number to a `Date` object.