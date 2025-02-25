# Utilities - Crypto

The **Crypto** category provides functions that help with generating cryptographic hashes and creating unique identifiers. These functions are useful for ensuring data security and integrity in web and back-end applications.

## Installation

To install the **Crypto** package, use one of the following commands:

```bash [npm]
npm install @utilify/crypto
```

```bash [yarn]
yarn add @utilify/crypto
```

```bash [pnpm]
pnpm add @utilify/crypto
```

Import the functions into your project:

```typescript [esm]
import { djb2, hash, randomUUID } from '@utilify/crypto';
```

```javascript [cjs]
const { djb2, hash, randomUUID } = require('@utilify/crypto');
```

## Overview

### [djb2](./djb2.md)

```typescript
function djb2(str: string): string;
```

Calculates the **DJB2 hash** of a string. The DJB2 algorithm is a fast and efficient way to generate a hash from a text input.

### [hash](./hash.md)

```typescript
async function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512',
  output: 'hex' | 'base64' | 'buffer' = 'buffer'
): Promise<string | ArrayBuffer | undefined>;
```

Generates a cryptographic hash of the given data using the specified algorithm and output format.

### [randomUUID](./randomUUID.md)

```typescript
function randomUUID(): string | undefined;
```

Generates a secure UUID using the browser's Web Crypto API. Returns `undefined` if the API is unavailable.