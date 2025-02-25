# String<Badge type="tip" text="1.0.2" />

The string utility functions provide a variety of methods for text manipulation, such as transforming, counting words, sanitizing, and formatting strings.

## **Installation**

To install the string utilities package, use one of the following commands, depending on your package manager:

::: code-group

```bash [npm]
npm install @utilify/string
```

```bash [yarn]
yarn add @utilify/string
```

```bash [pnpm]
pnpm add @utilify/string
```

:::

Once installed, you can import the functions into your project, using ESM or CJS.

::: code-group

```typescript [esm]
import { capitalize, invertCase, maskString, isUpperCase, isLowerCase } from '@utilify/string';
```

```javascript [cjs]
const { capitalize, invertCase, maskString, isUpperCase, isLowerCase } = require('@utilify/string');
```

:::

## **Overview**

Here is an overview of the available functions in the string utilities package:

### [capitalize](./capitalize.md)
```typescript
function capitalize(str: string): string
```
Capitalizes the first letter of a string.

### [invertCase](./invertCase.md)
```typescript
function invertCase(str: string): string
```
Inverts the case of each character in a string.

### [isLowerCase](./isLowerCase.md)
```typescript
function isLowerCase(str: string): boolean
```
Checks if the string is in lowercase.

### [isUpperCase](./isUpperCase.md)
```typescript
function isUpperCase(str: string): boolean
```
Checks if the string is in uppercase.

### [maskString](./maskString.md)
```typescript
function maskString(str: string, maskStart: number, maskEnd: number, mask: string = '*'): string
```
Replaces a portion of the string with a mask character.

### [removeAccents](./removeAccents.md)
```typescript
function removeAccents(str: string): string
```
Removes accents from a string.

### [slugify](./slugify.md)
```typescript
function slugify(str: string): string
```
Transforms a string into a URL-friendly format (slug).

### [toCamelCase](./toCamelCase.md)
```typescript
function toCamelCase(str: string): string
```
Transforms a string into camelCase format.

### [toKebabCase](./toKebabCase.md)
```typescript
function toKebabCase(str: string): string
```
Transforms a string into kebab-case format.

### [toPascalCase](./toPascalCase.md)
```typescript
function toPascalCase(str: string): string
```
Transforms a string into PascalCase format.

### [toSnakeCase](./toSnakeCase.md)
```typescript
function toSnakeCase(str: string): string
```
Transforms a string into snake_case format.

### [truncate](./truncate.md)
```typescript
function truncate(text: string, size: number): string
```
Truncates a string to a specific size and adds "..." at the end.

### [wordCount](./wordCount.md)
```typescript
function wordCount(str: string): number
```
Counts the number of words in a string.