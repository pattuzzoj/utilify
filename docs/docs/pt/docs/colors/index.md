# Utilitários Colors <Badge type="tip" text="1.0.0" />

As **funções utilitárias de cores** fornecem uma variedade de métodos para operações de conversão e validação de cores. Estas funções ajudam a simplificar operações comuns como conversão entre diferentes formatos de cores e validação de strings de cores.

## Instalação

Para instalar as funções utilitárias de cores, use um dos seguintes comandos, dependendo do seu gerenciador de pacotes:

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

Após a instalação, você pode importar as funções no seu projeto, utilizando ESM ou CJS.

## Uso

Esta biblioteca suporta tanto o sistema de módulos ESM quanto CJS.

::: code-group

```typescript [esm]
import { rgbToHsl, rgbToHex, isRgb } from '@utilify/colors';
```

```javascript [cjs]
const { rgbToHsl, rgbToHex, isRgb } = require('@utilify/colors');
```

:::

## Visão Geral

Aqui está uma visão geral das funções disponíveis no pacote de utilitários de cores:

### [rgbToHsl](./rgbToHsl.md)
```typescript
function rgbToHsl(rgb: string): string | null
```
Converte uma string de cor RGB para sua representação HSL.

### [rgbToHex](./rgbToHex.md)
```typescript
function rgbToHex(rgb: string): string | null
```
Converte uma string de cor RGB para sua representação hexadecimal.

### [isRgb](./isRgb.md)
```typescript
function isRgb(rgb: string): boolean
```
Verifica se uma string fornecida é uma cor RGB ou RGBA válida.

### [isHsl](./isHsl.md)
```typescript
function isHsl(hsl: string): boolean
```
Verifica se uma string fornecida é uma cor HSL ou HSLA válida.

### [isHex](./isHex.md)
```typescript
function isHex(hex: string): boolean
```
Verifica se uma string fornecida é uma cor hexadecimal válida, incluindo o canal alfa.

### [hslToRgb](./hslToRgb.md)
```typescript
function hslToRgb(hsl: string): string | null
```
Converte uma string de cor HSL para sua representação RGB.

### [hslToHex](./hslToHex.md)
```typescript
function hslToHex(hsl: string): string | null
```
Converte uma string de cor HSL para sua representação hexadecimal.

### [hexToRgb](./hexToRgb.md)
```typescript
function hexToRgb(hex: string): string | null
```
Converte uma string de cor hexadecimal para sua representação RGB.

### [hexToHsl](./hexToHsl.md)
```typescript
function hexToHsl(hex: string): string | null
```
Converte uma string de cor hexadecimal para sua representação HSL.