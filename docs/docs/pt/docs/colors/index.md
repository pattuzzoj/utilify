# Colors

O módulo de cores fornece um conjunto abrangente de funções para manipulação e conversão de cores em diferentes formatos (HEX, RGB/RGBA, HSL/HSLA). Com estas funções, você pode facilmente:

- Analisar strings de cores para extrair seus componentes
- Converter entre diferentes formatos de cores (HEX ↔ RGB ↔ HSL)
- Validar strings de cores em diferentes formatos
- Gerar cores aleatórias

Todas as funções são projetadas para serem simples de usar e retornam resultados consistentes, lidando adequadamente com valores alfa (transparência) quando aplicável.

## Visão Geral

[parseColor](./parseColor.md)
```typescript
parseColor(color: string): ParsedColor
```
Analisa uma string de cor e retorna um objeto com modelo, valores e alfa, ou null.

[hexToHsl](./hexToHsl.md)
```typescript
hexToHsl(hex: string): string
```
Converte uma cor hexadecimal para o formato HSL.

[hexToRgb](./hexToRgb.md)
```typescript
hexToRgb(hex: string): string
```
Converte uma cor hexadecimal para o formato RGB ou RGBA.

[hslToHex](./hslToHex.md)
```typescript
hslToHex(hsl: string): string
```
Converte uma cor HSL/HSLA para hexadecimal.

[hslToRgb](./hslToRgb.md)
```typescript
hslToRgb(hsl: string): string
```
Converte uma cor HSL/HSLA para RGB/RGBA.

[isHexColor](./isHexColor.md)
```typescript
isHexColor(hex: string): boolean
```
Verifica se uma string representa uma cor hexadecimal válida.

[isHslColor](./isHslColor.md)
```typescript
isHslColor(hsl: string): boolean
```
Verifica se uma string representa uma cor HSL/HSLA válida.

[isRgbColor](./isRgbColor.md)
```typescript
isRgbColor(rgb: string): boolean
```
Verifica se uma string representa uma cor RGB/RGBA válida.

[rgbToHex](./rgbToHex.md)
```typescript
rgbToHex(rgb: string): string
```
Converte uma cor RGB/RGBA para hexadecimal.

[rgbToHsl](./rgbToHsl.md)
```typescript
rgbToHsl(rgb: string): string
```
Converte uma cor RGB/RGBA para HSL/HSLA.

[randomColor](./randomColor.md)
```typescript
randomColor(format?: "hex" | "rgb" | "hsl", alpha?: boolean): string
```
Gera uma cor aleatória no formato especificado, com opção de canal alfa.
