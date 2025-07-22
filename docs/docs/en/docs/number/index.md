# Number

The Number module provides a set of utility functions for working with numbers in JavaScript/TypeScript. These functions allow you to perform common operations such as checking number types, testing mathematical properties, and executing numerical calculations.

All functions are designed to be simple, efficient, and easy to use, following best development practices.

## Overview

### [divisors](./divisors.md)
```typescript
divisors(value: number): number[]
```
Returns all positive integer divisors of a number.

### [inRange](./inRange.md)
```typescript
inRange(value: number, min: number, max: number): boolean
```
Checks if a number is within an inclusive range.

### [isEven](./isEven.md)
```typescript
isEven(value: number): boolean
```
Checks if a number is even.

### [isFinite](./isFinite.md)
```typescript
isFinite(value: number): boolean
```
Checks if a value is a finite number.

### [isFloat](./isFloat.md)
```typescript
isFloat(value: number): boolean
```
Checks if a value is a finite floating-point number.

### [isInfinity](./isInfinity.md)
```typescript
isInfinity(value: number): boolean
```
Checks if a value is positive or negative infinity.

### [isInteger](./isInteger.md)
```typescript
isInteger(value: number): boolean
```
Checks if a value is a finite integer.

### [isNaN](./isNaN.md)
```typescript
isNaN(value: any): boolean
```
Checks if a value is NaN (Not-a-Number).

### [isNegative](./isNegative.md)
```typescript
isNegative(value: number): boolean
```
Checks if a number is negative.

### [isOdd](./isOdd.md)
```typescript
isOdd(value: number): boolean
```
Checks if a number is odd.

### [isPositive](./isPositive.md)
```typescript
isPositive(value: number): boolean
```
Checks if a number is positive.

### [isPrime](./isPrime.md)
```typescript
isPrime(value: number): boolean
```
Checks if an integer is prime.

[range](./range.md)
```typescript
range(start: number, end: number, step?: number): number[]
```
Creates an array of numbers within a specified range, with a defined step.

### [sumOfDigits](./sumOfDigits.md)
```typescript
sumOfDigits(value: number): number
```
Returns the sum of the digits of a number.
