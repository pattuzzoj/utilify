# Environment Utilities

The **Environment** category contains utility functions that help detect and identify the environment in which the code is running, whether it's in the browser, server, or within different types of workers. These functions are useful for providing environment-specific behaviors.

## Installation

To install the environment utilities, use one of the following commands, depending on your package manager:

```bash [npm]
npm install @utilify/environment
```

```bash [yarn]
yarn add @utilify/environment
```

```bash [pnpm]
pnpm add @utilify/environment
```

Once installed, you can import the functions into your project, using either ESM or CJS.

## Usage

This library supports both ESM and CJS module systems.

```typescript [esm]
import { isBrowser } from '@utilify/environment'; 
```

```javascript [cjs]
const { isBrowser } = require('@utilify/environment');  
```

## Overview

Here’s an overview of the functions available in the **environment** category:

### [getOS](./getOS.md)  
```typescript  
function getOS(): string | undefined;
```  
Returns the user's operating system based on the browser's `userAgent`. Returns `undefined` if executed in the server.

### [isBun](./isBun.md)  
```typescript  
function isBun(): boolean;
```  
Checks if the code is running in the Bun environment by identifying the execution type through the `Bun` object.

### [isBrowser](./isBrowser.md)  
```typescript  
function isBrowser(): boolean;
```  
Checks if the code is running in a browser environment by checking the type of `window`.

### [isDeno](./isDeno.md)  
```typescript  
function isDeno(): boolean;
```  
Checks if the code is running in the Deno environment by verifying the presence of the `Deno` object.

### [isDedicatedWorker](./isDedicatedWorker.md)  
```typescript  
function isDedicatedWorker(): boolean;
```  
Determines if the code is running inside a **Dedicated Worker** by checking the type of `self`.

### [isMobile](./isMobile.md)  
```typescript  
function isMobile(): boolean | undefined;
```  
Checks if the code is running on a mobile device based on the browser's `userAgent`.

### [isNode](./isNode.md)  
```typescript  
function isNode(): boolean;
```  
Determines if the code is running in a Node.js environment by checking the presence of `global` and `process` objects.

### [isServer](./isServer.md)  
```typescript  
function isServer(): boolean;
```  
Detects if the code is running on the server by checking if the environment is Node.js, Deno, or Bun.

### [isServiceWorker](./isServiceWorker.md)  
```typescript  
function isServiceWorker(): boolean;
```  
Checks if the code is running inside a **Service Worker** by using the type of `self`.

### [isSharedWorker](./isSharedWorker.md)  
```typescript  
function isSharedWorker(): boolean;
```  
Determines if the code is running inside a **Shared Worker** by checking the type of `self`.

### [isWebWorker](./isWebWorker.md)  
```typescript  
function isWebWorker(): boolean;
```  
Checks if the code is running inside any type of **Web Worker**, including **Dedicated**, **Shared**, or **Service Worker**.