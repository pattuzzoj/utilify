# Promise

The Promise module provides utility functions for working with asynchronous operations and promises. It includes features like backoff retries, benchmarking, debouncing, throttling, parallel execution, and more.

The module helps manage complex asynchronous workflows and provides better control over promise-based operations through various utility functions.

Key features:
- Exponential backoff retries
- Performance benchmarking
- Debouncing and throttling
- Deferred promises
- Exclusive execution locks
- Parallel task execution
- Rate limiting
- Retry mechanisms
- Sleep/delay utilities

## Overview

### [backoff](./backoff.md)
```typescript
backoff(fn: Function, options?: BackoffOptions): Promise<any>;
```
Attempts to execute a function with an exponential backoff strategy.

### [benchmark](./benchmark.md)
```typescript
benchmark(fn: Function): Promise<number>;
```
Measures the execution time of an asynchronous function.

### [debounce](./debounce.md)
```typescript
debounce(fn: Function, wait: number): Function;
```
Returns a debounced version of a function that delays its execution.

### [defer](./defer.md)
```typescript
defer<T>(): { promise: Promise<T>; resolve: Function; reject: Function };
```
Creates a deferred promise with external resolve and reject methods.

### [lock](./lock.md)
```typescript
lock<T>(fn: () => Promise<T>): Promise<T>;
```
Ensures the provided asynchronous function executes exclusively, preventing concurrent executions.

### [parallel](./parallel.md)
```typescript
parallel(tasks: Function[], concurrency?: number): Promise<any[]>;
```
Executes multiple asynchronous functions in parallel with optional concurrency limit.

### [rateLimit](./rateLimit.md)
```typescript
rateLimit(fn: Function, limit: number, interval: number): Function;
```
Returns a rate-limited version of the function.

### [retry](./retry.md)
```typescript
retry(fn: Function, retries: number, delay?: number): Promise<any>;
```
Attempts to execute a function a specified number of times, with optional delay.

### [sleep](./sleep.md)
```typescript
sleep(ms: number): Promise<void>;
```
Delays execution for a specified number of milliseconds.

### [throttle](./throttle.md)
```typescript
throttle(fn: Function, wait: number): Function;
```
Returns a throttled version of a function that only executes once per interval.