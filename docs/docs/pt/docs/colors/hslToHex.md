# hslToHex

A função `hslToHex` converte uma string de cor HSL para sua representação hexadecimal.

## Assinatura

```typescript
function hslToHex(hsl: string): string | null;
```

### Parâmetros

| Nome  | Tipo    | Descrição                                         |
|-------|---------|---------------------------------------------------|
| `hsl` | `string`| A string de cor HSL a ser convertida.             |

### Retorno

| Tipo   | Descrição                                           |
|--------|-----------------------------------------------------|
| `string` | A string de cor hexadecimal representando a cor HSL, caso a entrada seja válida. |
| `null`  | Retornado se a entrada não for uma cor HSL válida. |

## Exemplos

```typescript
console.log(hslToHex("0, 100%, 50%")); // "ff0000"
console.log(hslToHex("120, 100%, 50%, 0.5")); // "00ff007f"
console.log(hslToHex("invalid")); // null
```

## Notas

- A função suporta strings HSL com ou sem canal alfa.
- Os valores hexadecimais são convertidos da representação RGB.
- A conversão para RGB é necessária porque a representação hexadecimal é baseada no modelo de cores RGB.

## Dependências

- [`hslToRgb`](./hslToRgb.md): A função `hslToRgb` é usada para converter a string HSL para RGB, o que permite a conversão subsequente para hexadecimal.

## Código Fonte

::: code-group
```typescript
import hslToRgb from "./hslToRgb";

function hslToHex(hsl: string): string | null {
  const rgb = hslToRgb(hsl);

  if (!rgb) return null;

  return rgbToHex(rgb);
}
```

```javascript
import hslToRgb from "./hslToRgb";

function hslToHex(hsl) {
  const rgb = hslToRgb(hsl);

  if (!rgb) return null;

  return rgbToHex(rgb);
}
```
:::

## Referências

- [Modelo de cor RGB - Wikipedia](https://pt.wikipedia.org/wiki/RGB)