# Regex <Badge type="tip" text="1.0.2" />

The **Regex Utilities** provide methods for validating common patterns such as email addresses, URLs, UUIDs, and more.

## **Installation**

To install the regex utilities package, use the appropriate command:

::: code-group

```bash [npm]
npm install @utilify/regex
```

```bash [yarn]
yarn add @utilify/regex
```

```bash [pnpm]
pnpm add @utilify/regex
```

:::

Import the functions into your project:

::: code-group

```typescript [esm]
import { isAlpha, isAlphanumeric, isEmail, isURL } from '@utilify/regex';
```

```javascript [cjs]
const { isAlpha, isAlphanumeric, isEmail, isURL } = require('@utilify/regex');
```

:::

## **Available Functions**

### [isAlpha](./isAlpha.md)
```typescript
function isAlpha(value: string): boolean;
```
Checks if the string contains only letters (a-z and A-Z).

### [isAlphanumeric](./isAlphanumeric.md)
```typescript
function isAlphanumeric(value: string): boolean;
```
Checks if the string contains only letters and numbers (a-z, A-Z, 0-9).

### [isBase64](./isBase64.md)
```typescript
function isBase64(value: string): boolean;
```
Checks if the string is encoded in Base64 format.

### [isCreditCard](./isCreditCard.md)
```typescript
function isCreditCard(value: string): boolean;
```
Checks if the string follows the pattern of a valid credit card number.

### [isEmail](./isEmail.md)
```typescript
function isEmail(value: string): boolean;
```
Checks if the string is a valid email address.

### [isIPV4](./isIPV4.md)
```typescript
function isIPV4(value: string): boolean;
```
Checks if the string is an IPv4 address.

### [isIPV6](./isIPV6.md)
```typescript
function isIPV6(value: string): boolean;
```
Checks if the string is an IPv6 address.

### [isSlug](./isSlug.md)
```typescript
function isSlug(value: string): boolean;
```
Checks if the string is in a URL-friendly slug format.

### [isURL](./isURL.md)
```typescript
function isURL(value: string): boolean;
```
Checks if the string is a valid URL.

### [isUUID](./isUUID.md)
```typescript
function isUUID(value: string): boolean;
```
Checks if the string follows the format of a valid UUID.