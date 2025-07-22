# String

The String module provides a comprehensive set of utility functions for manipulating and transforming strings. From basic operations like capitalization and character counting to more complex transformations such as converting to different case formats (camelCase, kebab-case, etc.), this module offers essential tools for efficient text processing in your applications.

Key features:
- Case manipulation (uppercase/lowercase)
- Character and word counting
- Removal of accents and special characters
- String masking
- Conversion to different formats (camelCase, kebab-case, PascalCase, snake_case)
- Template processing
- HTML manipulation
- Slug generation for URLs

## Overview

### [capitalize](./capitalize.md)
```typescript
capitalize(str: string): string
```
Capitalizes the first letter of the string and makes the rest lowercase.

### [charCount](./charCount.md)
```typescript
charCount(str: string, char: string): number
```
Counts how many times a specific character appears in a string.

### [escapeHtml](./escapeHtml.md)
```typescript
escapeHtml(str: string): string
```
Escapes special HTML characters in a string to their corresponding HTML entities.

### [interpolate](./interpolate.md)
```typescript
interpolate(str: string, data: Record<PropertyKey, any>, pattern?: RegExp): string
```
Replaces placeholders in a string with values from a data object.

### [invertCase](./invertCase.md)
```typescript
invertCase(str: string): string
```
Inverts the case of each character in the string (uppercase becomes lowercase and vice versa).

### [isLowerCase](./isLowerCase.md)
```typescript
isLowerCase(str: string): boolean
```
Returns true if all alphabetic characters in the string are lowercase.

### [isUpperCase](./isUpperCase.md)
```typescript
isUpperCase(str: string): boolean
```
Returns true if all alphabetic characters in the string are uppercase.

### [maskString](./maskString.md)
```typescript
maskString(str: string, mask: string, maskStart: number, maskLength: number): string
```
Masks part of the string by replacing characters with a defined character.

### [removeAccents](./removeAccents.md)
```typescript
removeAccents(str: string): string
```
Removes accents and diacritics from characters in the string.

### [slugify](./slugify.md)
```typescript
slugify(str: string): string
```
Converts the string into a URL-friendly slug, removing special characters and spaces.

### [stripHTML](./stripHTML.md)
```typescript
stripHTML(html: string): string
```
Removes all HTML tags from the string.

### [template](./template.md)
```typescript
template(str: string, options?: TemplateOptions): (data: Record<string, any>) => string
```
Creates a template function for string interpolation with custom options.

### [toCamelCase](./toCamelCase.md)
```typescript
toCamelCase(str: string): string
```
Converts the string to camelCase format.

### [toKebabCase](./toKebabCase.md)
```typescript
toKebabCase(str: string): string
```
Converts the string to kebab-case format.

### [toPascalCase](./toPascalCase.md)
```typescript
toPascalCase(str: string): string
```
Converts the string to PascalCase format.

### [toSnakeCase](./toSnakeCase.md)
```typescript
toSnakeCase(str: string): string
```
Converts the string to snake_case format.

### [truncate](./truncate.md)
```typescript
truncate(text: string, size: number): string
```
Truncates the string to a maximum length and adds a suffix if necessary.

### [wordCount](./wordCount.md)
```typescript
wordCount(str: string): number
```
Counts the number of words in a string.