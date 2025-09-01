# Error

The Error module provides a set of utility functions for working with errors in JavaScript/TypeScript. These functions allow you to create custom errors and check for specific error types.

Main features:
- Creation of custom error classes
- Checking for specific error types
- Support for native JavaScript errors
- Validation of error-like objects

All functions are strongly typed and designed for use in modern TypeScript/JavaScript environments.

## Overview

### [customError](./customError.md)
```typescript
customError(name: string): typeof Error;
```
Creates a custom error class with the given name.

### [isAggregateError](./isAggregateError.md)
```typescript
isAggregateError(value: any): value is AggregateError;
```
Checks if the value is an instance of `AggregateError`.

### [isDOMException](./isDOMException.md)
```typescript
isDOMException(value: any): value is DOMException;
```
Checks if the value is an instance of `DOMException`.

### [isError](./isError.md)
```typescript
isError(value: any): value is { name: string; message: string; stack?: string };
```
Checks if the value is an error-like object (has `name` and `message`).

### [isEvalError](./isEvalError.md)
```typescript
isEvalError(value: any): value is EvalError;
```
Checks if the value is an instance of `EvalError`.

### [isRangeError](./isRangeError.md)
```typescript
isRangeError(value: any): value is RangeError;
```
Checks if the value is an instance of `RangeError`.

### [isReferenceError](./isReferenceError.md)
```typescript
isReferenceError(value: any): value is ReferenceError;
```
Checks if the value is an instance of `ReferenceError`.

### [isSyntaxError](./isSyntaxError.md)
```typescript
isSyntaxError(value: any): value is SyntaxError;
```
Checks if the value is an instance of `SyntaxError`.

### [isTypeError](./isTypeError.md)
```typescript
isTypeError(value: any): value is TypeError;
```
Checks if the value is an instance of `TypeError`.

### [isURIError](./isURIError.md)
```typescript
isURIError(value: any): value is URIError;
```
Checks if the value is an instance of `URIError`.
