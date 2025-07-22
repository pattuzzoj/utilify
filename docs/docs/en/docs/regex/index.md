# Regex

The Regex module provides a set of functions for validating strings using regular expressions. These functions return a boolean value (true/false) indicating whether the string matches the specified pattern.

All functions are optimized for performance and follow best validation practices for each specific case.

## Overview

### [isAlpha](./isAlpha.md)
```typescript
isAlpha(value: string): boolean;
```
Checks if the string contains only alphabetic characters (letters), including accents.

### [isAlphanumeric](./isAlphanumeric.md)
```typescript
isAlphanumeric(value: string): boolean;
```
Checks if the string contains only letters and numbers, without symbols or spaces.

### [isEmail](./isEmail.md)
```typescript
isEmail(value: string): boolean;
```
Checks if the string matches the format of a valid email.

### [isURL](./isURL.md)
```typescript
isURL(value: string): boolean;
```
Checks if the string matches the format of a valid URL (http/https).

### [isCreditCard](./isCreditCard.md)
```typescript
isCreditCard(value: string): boolean;
```
Checks if the string matches the format of a valid credit card number.

### [isSlug](./isSlug.md)
```typescript
isSlug(value: string): boolean;
```
Checks if the string is in slug format (lowercase letters, numbers, and hyphens).

### [isIPV4](./isIPV4.md)
```typescript
isIPV4(value: string): boolean;
```
Checks if the string matches the format of a valid IPv4 address, with or without port.

### [isIPV6](./isIPV6.md)
```typescript
isIPV6(value: string): boolean;
```
Checks if the string matches the format of a valid IPv6 address, with or without port.

### [isBase64URL](./isBase64URL.md)
```typescript
isBase64URL(value: string): boolean;
```
Checks if the string is in Base64URL format.

### [isJWT](./isJWT.md)
```typescript
isJWT(value: string): boolean;
```
Checks if the string matches the format of a JSON Web Token (JWT).

### [isFileExtension](./isFileExtension.md)
```typescript
isFileExtension(value: string): boolean;
```
Checks if the string matches the format of a file extension.
