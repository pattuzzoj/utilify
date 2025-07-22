# Math

The Math module provides a comprehensive set of mathematical and statistical functions for manipulating and analyzing numbers. From basic operations like addition and multiplication to more complex calculations such as standard deviation and Fibonacci sequence, this module offers essential tools for numerical processing.

The functions are designed to be intuitive and easy to use, maintaining high performance even with large data sets. All implement appropriate error checks and follow best programming practices.

## Overview

### [add](./add.md)
```typescript
add(...values: number[]): number
```
Sums all numeric values provided as arguments.

### [clamp](./clamp.md)
```typescript
clamp(value: number, min: number, max: number): number
```
Restricts a value to a range defined by minimum and maximum limits.

### [divide](./divide.md)
```typescript
divide(dividend: number, divisor: number): number
```
Divides one number (dividend) by another (divisor).

### [factorial](./factorial.md)
```typescript
factorial(value: number): number
```
Calculates the factorial of a non-negative integer.

### [fibonacci](./fibonacci.md)
```typescript
fibonacci(num: number): number
```
Calculates the nth number in the Fibonacci sequence.

### [frequency](./frequency.md)
```typescript
frequency(arr: any[]): Record<PropertyKey, number>
```
Counts the frequency of each element in an array, returning an object with the occurrences.

### [lerp](./lerp.md)
```typescript
lerp(start: number, end: number, amount: number): number
```
Performs linear interpolation between two numeric values.

### [mean](./mean.md)
```typescript
mean(values: number[]): number
```
Calculates the arithmetic mean of an array of numbers.

### [median](./median.md)
```typescript
median(arr: number[]): number
```
Calculates the median of an array of numbers.

### [mod](./mod.md)
```typescript
mod(dividend: number, divisor: number): number
```
Calculates the modulus (remainder) of the division between two numbers, always returning a non-negative value.

### [mode](./mode.md)
```typescript
mode(numbers: number[]): number[]
```
Calculates the value(s) that appear most frequently in an array of numbers.

### [multiply](./multiply.md)
```typescript
multiply(...values: number[]): number
```
Multiplies two or more numeric values.

### [pow](./pow.md)
```typescript
pow(base: number, exponent: number): number
```
Calculates the power of a number raised to another.

### [random](./random.md)
```typescript
random(min?: number, max?: number): number
```
Generates a random number within a specified range.

### [roundTo](./roundTo.md)
```typescript
roundTo(value: number, decimals: number): number
```
Rounds a number to a specific number of decimal places.

### [std](./std.md)
```typescript
std(numbers: number[]): number
```
Calculates the standard deviation of an array of numbers.

### [subtract](./subtract.md)
```typescript
subtract(...values: number[]): number
```
Subtracts two or more numeric values sequentially.

### [variance](./variance.md)
```typescript
variance(numbers: number[]): number
```
Calculates the sample variance of an array of numbers.
