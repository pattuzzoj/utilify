# Env

The `env` module provides utility functions to detect and interact with the code execution environment, including:

- Detection of operating system and runtime (Node.js, Deno, Bun, browser)
- Environment checking (development/production)
- Manipulation of environment variables
- Detection of context type (server, browser, workers)
- Mobile device identification

All functions are optimized to work in different environments and return consistent results regardless of platform.

## Overview

[equalsEnv](./equalsEnv.md)
```typescript
equalsEnv(env: string): boolean;
```
Checks if the current environment matches the given value (`env`).

[getEnv](./getEnv.md)
```typescript
getEnv(key: string): string | undefined;
```
Gets the value of an environment variable.

[getOS](./getOS.md)
```typescript
getOS(): 'windows' | 'macos' | 'linux' | 'android' | 'ios' | 'unknown';
```
Detects the current operating system.

[getRuntime](./getRuntime.md)
```typescript
getRuntime(): 'node' | 'deno' | 'bun' | 'browser' | 'unknown';
```
Detects the execution runtime.

[hasEnv](./hasEnv.md)
```typescript
hasEnv(key: string): boolean;
```
Checks if an environment variable is set.

[isBrowser](./isBrowser.md)
```typescript
isBrowser(): boolean;
```
Checks if the code is running in a browser.

[isBun](./isBun.md)
```typescript
isBun(): boolean;
```
Checks if the code is running in the Bun environment.

[isDedicatedWorker](./isDedicatedWorker.md)
```typescript
isDedicatedWorker(): boolean;
```
Checks if the code is running in a Dedicated Worker.

[isDeno](./isDeno.md)
```typescript
isDeno(): boolean;
```
Checks if the code is running in the Deno environment.

[isDev](./isDev.md)
```typescript
isDev(): boolean;
```
Checks if the environment is in development mode.

[isMobile](./isMobile.md)
```typescript
isMobile(): boolean;
```
Checks if the code is running on a mobile device.

[isNode](./isNode.md)
```typescript
isNode(): boolean;
```
Checks if the code is running in Node.js.

[isProd](./isProd.md)
```typescript
isProd(): boolean;
```
Checks if the environment is in production mode.

[isServer](./isServer.md)
```typescript
isServer(): boolean;
```
Checks if the code is running in a server environment (not browser).

[isServiceWorker](./isServiceWorker.md)
```typescript
isServiceWorker(): boolean;
```
Checks if the code is running in a Service Worker.

[isWebWorker](./isWebWorker.md)
```typescript
isWebWorker(): boolean;
```
Checks if the code is running in any type of Web Worker.