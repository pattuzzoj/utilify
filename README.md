# @utilify

**Utilify** is a modern, strongly typed, and safe utility function library for the JavaScript ecosystem. It was created to address the need for:

- **Ease of use** with clear and straightforward APIs
- **Clear and accessible documentation** for quick learning and reference
- **Robust typing** for safety and TypeScript autocomplete
- **Lightweight** design to avoid performance or bundle bloat
- **Reliability** to prevent unexpected behaviors common in generic utilities

Utilify offers a wide range of utilities, organized into well-defined scopes, making navigation and quick access in the documentation easier. It is compatible with **Browser**, **Node.js**, **Deno**, and **Bun**.

[![npm version](https://img.shields.io/npm/v/@utilify/core.svg?style=flat)](https://npmjs.com/package/@utilify/core)
[![Documentation](https://img.shields.io/badge/docs-available-brightgreen)](https://utilify-docs.vercel.app/)

---

## 🚀 Installation

Utilify can be easily installed using the main package managers, with full support for [JSR](https://jsr.io/) — the official Deno module registry, also compatible with Node.js and other modern runtimes.

```bash
npm install @utilify/core
# or
yarn add @utilify/core
# or
pnpm add @utilify/core
# or (Deno)
deno add jsr:@utilify/core
```

### About JSR
[JSR](https://jsr.io/) is the official Deno module registry. It allows you to install modern packages with a single command, even in environments like Node.js, Bun, or npm-compatible runtimes.

#### JSR Usage Examples:
```bash
# Deno
deno add jsr:@utilify/core
# npm
npx jsr add @utilify/core
# bun
bunx jsr add @utilify/core
# pnpm
pnpm add jsr:@utilify/core
# yarn
yarn add jsr:@utilify/core
```

---

## 📦 Usage

The package is compatible with ES modules (ESM) and can be used in both TypeScript and JavaScript projects.

```ts
// ESM
import { isString, chunk, formatDate } from '@utilify/core';
```

```js
// CJS
const { isString, chunk, formatDate } = require('@utilify/core');
```

---

## 📚 Overview

We organize our documentation by functional categories to make it easier for you to navigate and quickly access the features we offer. Each scope groups utilities related to a specific domain, ensuring an intuitive and coherent experience for you, the developer.

### Scopes

- **Array**: Functions for array manipulation, such as filtering, chunking, flattening, and other essential operations.
- **Browser**: Functions related to browser-specific tasks, including language detection, active theme, connection status, and browser-specific conditions.
- **Colors**: Tools for converting between color formats (HEX, RGB, HSL) and color validation.
- **Crypto**: Utilities for encoding, decoding, hashing, UUID generation, and cryptographic checks.
- **Date**: Functions for date and time manipulation, including formatting, parsing, calculations, and validation.
- **Env**: Helpers to detect the execution environment, identifying browser, Node.js, runtime, and environment variables.
- **Function**: Helper functions for composition, memoization, partial application, and flow control.
- **Promise**: Utilities for working with Promises, concurrency, throttling, debouncing, and asynchronous control.
- **Math**: Mathematical tools for calculations, statistics, random number generation, and other operations.
- **Number**: Helpers focused on numeric validation, range checking, and specific number operations.
- **Object**: Functions for deep cloning, merging, property access, and object manipulation.
- **Regex**: Common regular expressions and helper functions for pattern validation.
- **String**: Utilities for string manipulation, such as capitalization, trimming, slug generation, and other transformations.
- **Types**: Functions for type checking and refinement in JavaScript/TypeScript, increasing the safety and robustness of your code.

Our modular structure allows you to quickly find the ideal set of utilities for each need, keeping the documentation lightweight and straightforward.

---

## 📚 Documentation

Explore the full documentation at: **[Utilify](https://utilify-docs.vercel.app/)**

---

## License

MIT © [Your Name / Organization]  
See [LICENSE](https://utilify-docs.vercel.app/license) for details.

---

[Documentation](https://utilify-docs.vercel.app/) | 
[Report Issue](https://github.com/pattuzzoj/utilify/issues) | 
[View on npm](https://www.npmjs.com/package/@utilify/core)
[View on jsr](https://jsr.io/@utilify/core)