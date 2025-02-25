# Function Utilities

**Function utility functions** provide a variety of methods for managing and enhancing function execution. These utilities help with tasks such as debouncing, throttling, function composition, and managing async behavior, making it easier to handle function flow and optimize performance.

## Installation

To install the function utility functions, use one of the following commands, depending on your package manager:

```bash [npm]
npm install @utilify/function
```

```bash [yarn]
yarn add @utilify/function
```

```bash [pnpm]
pnpm add @utilify/function
```

Once installed, you can import the functions into your project, using either ESM or CJS.

## Usage

This library supports both the ESM and CJS module systems.

```typescript [esm]
import { debounce } from '@utilify/function'; 
```

```javascript [cjs]
const { debounce } = require('@utilify/function');  
```
## Overview

### [benchmark](./benchmark.md)

```typescript
async function benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number>;
```

Measures the average execution time (in milliseconds) of a given synchronous or asynchronous function over a specified number of iterations.

### [compose](./compose.md)

```typescript
function compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

A utility to compose functions, applying them from right to left to a value.

### [debounce](./debounce.md)

```typescript
function debounce(callback: (...args: any[]) => void, delay: number = 300): (...args: any[]) => void;
```

Delays the execution of a function until a period of inactivity has occurred after the last invocation.

### [defer](./defer.md)

```typescript
function defer(callback: () => void): void;
```

Queues the execution of a function to run after the current event loop cycle.

### [fallback](./fallback.md)

```typescript
function fallback<T>(callback: () => T, fallback: () => T): T;
```

Executes the `callback` function and, in case of an error, executes the `fallback` function.

### [guard](./guard.md)

```typescript
function guard<T, U = T>(validator: (value: T) => boolean, callback: (value: T) => U, fallback: (value: T) => U): (value: T) => U;
```

Executes a callback function if a value passes validation; otherwise, executes a fallback function.

### [identity](./identity.md)

```typescript
function identity<T>(value: T): T;
```

Returns the provided value, useful as an identity function.

### [lock](./lock.md)

```typescript
function lock(callback: (...args: any[]) => Promise<void>): (...args: any[]) => void;
```

Prevents simultaneous execution of a function, ensuring that one execution completes before allowing another.

### [memo](./memo.md)

```typescript
function memo(callback: (...args: any[]) => any, cacheTimeout?: number): (...args: any[]) => any;
```

Caches the results of a function based on its arguments and returns them immediately if the function is called again with the same arguments.

### [noop](./noop.md)

```typescript
function noop(): void;
```

A function that does nothing, used as a placeholder.

### [once](./once.md)

```typescript
function once<T>(callback: (...args: any[]) => T): (...args: any[]) => T;
```

Ensures that a function is executed only once, regardless of how many times it is called.

### [parallel](./parallel.md)

```typescript
function parallel(...callbacks: (() => Promise<any>)[]): Promise<any[]>;
```

Executes multiple asynchronous functions in parallel and waits for all promises to resolve.

### [partialLeft](./partialLeft.md)

```typescript
function partialLeft<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

Creates a version of the provided function with the initial arguments pre-defined.

### [partialRight](./partialRight.md)

```typescript
function partialRight<T>(callback: (...args: any[]) => T, ...partial: any[]): (...args: any[]) => T;
```

Creates a version of the provided function with the final arguments pre-defined.

### [pipe](./pipe.md)

```typescript
function pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T;
```

A utility to compose functions, applying them from left to right to a value.

### [rate](./rate.md)

```typescript
function rate(callback: (...args: any[]) => void, limit: number, interval: number): (...args: any[]) => boolean;
```

Limits the number of times a function can be executed within a time interval.

### [sleep](./sleep.md)

```typescript
function sleep(timeout: number): Promise<void>;
```

Pauses the execution of a function for a specified time, useful in asynchronous functions.

### [throttle](./throttle.md)

```typescript
function throttle(callback: (...args: any[]) => void, wait: number = 300): (...args: any[]) => void;
```

Limits the frequency at which a function can be invoked, allowing it to run at most once every `wait` milliseconds.