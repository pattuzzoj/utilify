# Math <Badge type="tip" text="1.0.2" />

The math utility functions provide methods to perform common and complex mathematical operations. These functions can be extremely helpful for number manipulation, such as calculating averages, checking prime numbers, and other mathematical tasks.

## **Installation**

To install the math utilities package, use one of the following commands, depending on your package manager:

::: code-group

```bash [npm]
npm install @utilify/math
```

```bash [yarn]
yarn add @utilify/math
```

```bash [pnpm]
pnpm add @utilify/math
```

:::

Once installed, you can import the functions into your project, using ESM or CJS.

::: code-group

```typescript [esm]
import { average, clamp, divisors } from '@utilify/math';
```

```javascript [cjs]
const { average, clamp, divisors } = require('@utilify/math');
```

:::

## **Overview**

Here is an overview of the available functions in the math utilities package:

### [average](./average.md)
```typescript
function average(values: number[]): number;
```
Returns the arithmetic average of the provided values.

### [clamp](./clamp.md)
```typescript
function clamp(value: number, min: number, max: number): number;
```
Restricts the provided value to a range between a minimum and maximum value.

### [divisors](./divisors.md)
```typescript
function divisors(num: number): number[];
```
Returns an array with all divisors of a number.

### [factorial](./factorial.md)
```typescript
function factorial(value: number): number;
```
Calculates the factorial of a number.

### [fibonacci](./fibonacci.md)
```typescript
function fibonacci(num: number): number;
```
Returns the Fibonacci number at the specified position.

### [frequency](./frequency.md)
```typescript
function frequency<T>(arr: T[]): Record<string, number>;
```
Returns an object with the frequency of each value in an array.

### [isBetween](./isBetween.md)
```typescript
function isBetween(value: number, min: number, max: number): boolean;
```
Checks if a value is within a specific range.

### [isEven](./isEven.md)
```typescript
function isEven(value: number): boolean;
```
Checks if the provided number is even.

### [isInteger](./isInteger.md)
```typescript
function isInteger(value: number): boolean;
```
Checks if the provided value is an integer.

### [isOdd](./isOdd.md)
```typescript
function isOdd(value: number): boolean;
```
Checks if the provided number is odd.

### [isPrime](./isPrime.md)
```typescript
function isPrime(num: number): boolean;
```
Checks if the provided number is prime.

### [random](./random.md)
```typescript
function random(min: number = 0, max: number = 10): number;
```
Returns a random number between the provided minimum and maximum values.

### [round](./round.md)
```typescript
function round(value: number, precision: number): number;
```
Rounds a number to the specified number of decimal places.

### [sum](./sum.md)
```typescript
function sum(values: number[]): number;
```
Returns the sum of all values in an array.

### [sumOfDigits](./sumOfDigits.md)
```typescript
function sumOfDigits(num: number): number;
```
Returns the sum of the digits of a number.