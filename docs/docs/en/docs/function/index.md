# Function

The `function` module provides a set of utilities for manipulating and composing functions. These utilities help create more flexible and reusable functions, making common operations like memoization, functional composition, and partial argument application easier.

Main features:
- Function composition (`compose`, `pipe`)
- Memoization of results (`memo`)
- Partial argument application (`partialLeft`, `partialRight`)
- Utility functions (`identity`, `noop`, `not`, `once`)
- Conditional execution (`when`)
- Repeated execution (`times`)

## Overview

### [compose](./compose.md)
```typescript
compose<T>(...callbacks: ((value: T) => T)[]): (value: T) => T
```
Creates a composed function that executes a sequence of functions from right to left.

### [identity](./identity.md)
```typescript
identity<T>(value: T): T
```
Returns the received value without modifications.

### [memo](./memo.md)
```typescript
memo<T extends (...args: any[]) => any>(callback: T, options?: { cacheTimeout?: number, serializer?: (args: Parameters<T>) => string }): (...args: Parameters<T>) => ReturnType<T>
```
Creates a memoized function that caches the results of previous calls.

### [noop](./noop.md)
```typescript
noop(): void
```
A function that does nothing (no operation).

### [not](./not.md)
```typescript
not<T extends (...args: any[]) => boolean>(callback: T): (...args: Parameters<T>) => boolean
```
Creates a function that returns the boolean-inverted value of the provided function's result.

### [once](./once.md)
```typescript
once<T extends (...args: any[]) => any>(callback: T): (...args: Parameters<T>) => ReturnType<T>
```
Creates a function that can only be executed once; subsequent calls return the result of the first execution.

### [partialLeft](./partialLeft.md)
```typescript
partialLeft<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R,
  ...partial: P
): (...args: DropFirst<Args> extends P ? [] : DropFirst<Args>) => R
```
Creates a new function with pre-filled arguments on the left.

### [partialRight](./partialRight.md)
```typescript
partialRight<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R | Promise<R>,
  ...partial: P
): (...args: DropLast<Args, P>) => R | Promise<R>
```
Creates a new function with pre-filled arguments on the right.

### [pipe](./pipe.md)
```typescript
pipe<T>(...callbacks: ((value: T) => T)[]): (value: T) => T
```
Creates a composed function that executes a sequence of functions from left to right.

### [times](./times.md)
```typescript
times<T>(callback: (index: number) => T, count: number): T[]
```
Executes a callback function a specific number of times, returning an array with the results.

### [when](./when.md)
```typescript
when<T extends (...args: any) => any>(
  predicate: (...args: any) => boolean,
  action: T
): (...args: Parameters<T>) => ReturnType<T> | undefined
```
Creates a function that executes an action only if the predicate is true.