# Colors <Badge type="tip" text="1.0.0" />

The **colors utility functions** provide a variety of methods for color conversion and validation operations. These functions help simplify common tasks, such as converting between different color formats and validating color strings.

## Installation

To install the colors utility functions, use one of the following commands, depending on your package manager:

::: code-group

```bash [npm]
npm install @utilify/colors
```

```bash [yarn]
yarn add @utilify/colors
```

```bash [pnpm]
pnpm add @utilify/colors
```

:::

After installation, you can import the functions into your project using either ESM or CJS.

## Usage

This library supports both the ESM and CJS module systems.

::: code-group

```typescript [esm]
import { rgbToHsl, rgbToHex, isRgb } from '@utilify/colors';
```

```javascript [cjs]
const { rgbToHsl, rgbToHex, isRgb } = require('@utilify/colors');
```

:::

## Overview

Here is an overview of the functions available in the color utilities package:

### [rgbToHsl](./rgbToHsl.md)
```typescript
function rgbToHsl(rgb: string): string | null
```
Converts an RGB color string to its HSL representation.

### [rgbToHex](./rgbToHex.md)
```typescript
function rgbToHex(rgb: string): string | null
```
Converts an RGB color string to its hexadecimal representation.

### [isRgb](./isRgb.md)
```typescript
function isRgb(rgb: string): boolean
```
Checks if a given string is a valid RGB or RGBA color.

### [isHsl](./isHsl.md)
```typescript
function isHsl(hsl: string): boolean
```
Checks if a given string is a valid HSL or HSLA color.

### [isHex](./isHex.md)
```typescript
function isHex(hex: string): boolean
```
Checks if a given string is a valid hexadecimal color, including the alpha channel.

### [hslToRgb](./hslToRgb.md)
```typescript
function hslToRgb(hsl: string): string | null
```
Converts an HSL color string to its RGB representation.

### [hslToHex](./hslToHex.md)
```typescript
function hslToHex(hsl: string): string | null
```
Converts an HSL color string to its hexadecimal representation.

### [hexToRgb](./hexToRgb.md)
```typescript
function hexToRgb(hex: string): string | null
```
Converts a hexadecimal color string to its RGB representation.

### [hexToHsl](./hexToHsl.md)
```typescript
function hexToHsl(hex: string): string | null
```
Converts a hexadecimal color string to its HSL representation.