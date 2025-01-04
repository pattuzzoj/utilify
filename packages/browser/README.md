# Browser Utilities

The **browser utility functions** provide a variety of methods for interacting with the browser environment. These functions help simplify common operations, such as checking the connection state, detecting touch devices, generating secure hashes, and more.

## Installation

To install the browser utility functions, use one of the following commands, depending on your package manager:

```bash [npm]
npm install @utilify/browser
```

```bash [yarn]
yarn add @utilify/browser
```

```bash [pnpm]
pnpm add @utilify/browser
```

Once installed, you can import the functions into your project, using either ESM or CJS.

## Usage

This library supports both the ESM and CJS module systems.

```typescript [esm]
import { getLanguage, getTheme, isOnline, hash } from '@utilify/browser';
```

```javascript [cjs]
const { getLanguage, getTheme, isOnline, hash } = require('@utilify/browser');
```

## Overview

Here’s an overview of the functions available in the **browser** utility package:

### [getLanguage](./getLanguage.md)  
```typescript  
function getLanguage(): string | undefined  
```  
Returns the browser’s language code.

### [getTheme](./getTheme.md)  
```typescript  
function getTheme(): string | undefined  
```  
Returns the current theme preference of the user.

### [hash](./hash.md)  
```typescript  
async function hash(
  data: string | ArrayBuffer | DataView,
  algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512',
  output: 'hex' | 'base64' | 'buffer' = 'buffer'
): Promise<string | ArrayBuffer | undefined>
```  
Generates a cryptographic hash of the given data using the specified algorithm and output format.

### [isCookieEnabled](./isCookieEnabled.md)  
```typescript  
function isCookieEnabled(): boolean | undefined  
```  
Checks if cookies are enabled in the browser.

### [isFullscreenEnabled](./isFullscreenEnabled.md)  
```typescript  
function isFullscreenEnabled(): boolean | undefined  
```  
Checks if fullscreen mode is enabled.

### [isOnline](./isOnline.md)  
```typescript  
function isOnline(): boolean | undefined  
```  
Checks if the browser is online.

### [isTouchDevice](./isTouchDevice.md)  
```typescript  
function isTouchDevice(): boolean | undefined  
```  
Checks if the device supports touch events.

### [randomUUID](./randomUUID.md)  
```typescript  
function randomUUID(): string | undefined  
```  
Generates a secure UUID using the browser's Web Crypto API. Returns `undefined` if the API is unavailable.

### [toggleFullscreen](./toggleFullscreen.md)  
```typescript  
function toggleFullscreen(elem: HTMLElement): void  
```  
Toggles fullscreen mode for the given element.