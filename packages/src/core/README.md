# Core Package

The **`@utilify/core`** package brings together all the functionalities of the **Utilify** library into a single package. It offers a collection of essential utility functions for JavaScript and TypeScript development, focusing on type safety, minimalistic design, and optimized performance. The library is designed to be modular, allowing easy import and use of functions as needed without overloading your project with unnecessary dependencies.

---

## Features

- **Type Safety:** The functions are strongly typed, improving the development experience and reducing the chance of errors.
- **Minimalistic Design:** The code is simple and straightforward, making it easy to understand and maintain.
- **Tree Shaking Support:** Only the functions you use are included in the final bundle, which helps reduce the code size.
- **Modularity:** The library is divided into various logical categories, such as array, object, string, and function manipulation, so you can import only what you need.
- **Easy Installation and Use:** Simple installation via `npm`, `yarn`, or `pnpm`, with support for ESM and CommonJS.
- **Comprehensive Documentation:** Extensive and well-structured documentation, with usage examples for all functions.

---

## Installation

Install the **`@utilify/core`** package using your preferred package manager:

### **npm**
```bash
npm install @utilify/core
```

### **Yarn**
```bash
yarn add @utilify/core
```

### **pnpm**
```bash
pnpm add @utilify/core
```

---

## Importing

The package provides a centralized interface for importing functions. You can import specific functions as needed:

### **ESM**
```typescript
import { clone, deepClone, deepMerge } from '@utilify/core';
```

### **CommonJS**
```javascript
const { clone, deepClone, deepMerge } = require('@utilify/core');
```

## Overview

The **`@utilify/core`** package includes functions from various categories, making it easy to work with common data types in software development. The main categories are:

- **[Array](https://www.npmjs.com/package/@utilify/array):** Functions for manipulating arrays, such as filtering, transforming, and searching.
- **[Browser](https://www.npmjs.com/package/@utilify/browser):** Functions specific to browser environments, such as device detection and event handling.
- **[Colors](https://www.npmjs.com/package/@utilify/colors):** Functions for working with colors, such as conversion and manipulation of color values.
- **[Crypto](https://www.npmjs.com/package/@utilify/crypto):** Cryptographic functions, including hashing and UUID generation.
- **[Date](https://www.npmjs.com/package/@utilify/date):** Functions for working with dates and times, such as formatting and comparison.
- **[Environment](https://www.npmjs.com/package/@utilify/environment):** Functions for interacting with the runtime environment, such as environment variables and platform detection.
- **[Function](https://www.npmjs.com/package/@utilify/function):** Functions for manipulating and controlling functions, such as debouncing, throttling, and memoization.
- **[Math](https://www.npmjs.com/package/@utilify/math):** Mathematical utility functions, such as distance calculation and number manipulation.
- **[Object](https://www.npmjs.com/package/@utilify/object):** Functions for manipulating objects, such as cloning, merging, and deep comparison.
- **[Regex](https://www.npmjs.com/package/@utilify/regex):** Functions for pattern matching and validation with regular expressions.
- **[String](https://www.npmjs.com/package/@utilify/string):** Functions for manipulating strings, such as formatting, word counting, and case transformation.
- **[Types](https://www.npmjs.com/package/@utilify/types):** Functions for checking and transforming types, such as primitive type validation.

## References

Each function and category in the **`@utilify/core`** package has complete documentation, including detailed explanations and usage examples. For further details, refer to the documentation of each function or explore the respective category.