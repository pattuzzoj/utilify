# Colors

The Colors module provides a comprehensive set of functions for manipulating and converting colors in different formats (HEX, RGB/RGBA, HSL/HSLA). With these functions, you can easily:

- Parse color strings to extract their components
- Convert between different color formats (HEX ↔ RGB ↔ HSL)
- Validate color strings in various formats
- Generate random colors

All functions are designed to be simple to use and return consistent results, properly handling alpha (transparency) values when applicable.

## Overview

[parseColor](./parseColor.md)
```typescript
parseColor(color: string): ParsedColor
```
Parses a color string and returns an object with model, values, and alpha, or null.

[hexToHsl](./hexToHsl.md)
```typescript
hexToHsl(hex: string): string
```
Converts a hexadecimal color to HSL format.

[hexToRgb](./hexToRgb.md)
```typescript
hexToRgb(hex: string): string
```
Converts a hexadecimal color to RGB or RGBA format.

[hslToHex](./hslToHex.md)
```typescript
hslToHex(hsl: string): string
```
Converts an HSL/HSLA color to hexadecimal.

[hslToRgb](./hslToRgb.md)
```typescript
hslToRgb(hsl: string): string
```
Converts an HSL/HSLA color to RGB/RGBA.

[isHexColor](./isHexColor.md)
```typescript
isHexColor(hex: string): boolean
```
Checks if a string represents a valid hexadecimal color.

[isHslColor](./isHslColor.md)
```typescript
isHslColor(hsl: string): boolean
```
Checks if a string represents a valid HSL/HSLA color.

[isRgbColor](./isRgbColor.md)
```typescript
isRgbColor(rgb: string): boolean
```
Checks if a string represents a valid RGB/RGBA color.

[rgbToHex](./rgbToHex.md)
```typescript
rgbToHex(rgb: string): string
```
Converts an RGB/RGBA color to hexadecimal.

[rgbToHsl](./rgbToHsl.md)
```typescript
rgbToHsl(rgb: string): string
```
Converts an RGB/RGBA color to HSL/HSLA.

[randomColor](./randomColor.md)
```typescript
randomColor(format?: "hex" | "rgb" | "hsl", alpha?: boolean): string
```
Generates a random color in the specified format, with optional alpha channel.
