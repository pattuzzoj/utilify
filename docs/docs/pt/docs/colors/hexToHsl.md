# hexToHsl

A função `hexToHsl` converte uma string de cor hexadecimal para sua representação HSL.

## Assinatura

```typescript
function hexToHsl(hex: string): string | null;
```

### Parâmetros

| Nome | Tipo   | Descrição                                               |
|------|--------|---------------------------------------------------------|
| `hex` | `string` | A string de cor hexadecimal a ser convertida.          |

### Retorno

| Tipo   | Descrição                                               |
|--------|---------------------------------------------------------|
| `string` | A string de cor HSL representando a cor, caso a entrada seja válida. |
| `null`  | Retornado se a entrada não for uma cor hexadecimal válida. |

## Exemplos

```typescript
console.log(hexToHsl("ff0000")); // "0, 100%, 50%"
console.log(hexToHsl("00ff007f")); // "120, 100%, 50%, 0.5"
console.log(hexToHsl("invalid")); // null
```

## Notas

- A função suporta strings hexadecimais com ou sem canal alfa.
- Os valores HSL são arredondados para duas casas decimais.
- A conversão para RGB é necessária porque a representação hexadecimal é baseada no modelo de cores RGB.

## Dependências

- [`hexToRgb`](./hexToRgb.md): A função `hexToRgb` é usada para converter o valor hexadecimal em uma representação RGB, necessária para calcular os valores HSL correspondentes.

## Código Fonte

::: code-group
```typescript
import hexToRgb from "./hexToRgb";

function hexToHsl(hex: string): string | null {
  const rgb = hexToRgb(hex);

  if (!rgb) return null;

  return rgbToHsl(rgb);
}
```

```javascript
import hexToRgb from "./hexToRgb";

function hexToHsl(hex) {
  const rgb = hexToRgb(hex);

  if (!rgb) return null;

  return rgbToHsl(rgb);
}
```
:::

## Referências

- [HSL e HSV - Wikipedia](https://pt.wikipedia.org/wiki/HSL_e_HSV)