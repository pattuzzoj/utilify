# rgbToHsl

A função `rgbToHsl` converte uma string de cor RGB para sua representação HSL.

## Assinatura

```typescript
function rgbToHsl(rgb: string): string | null;
```

### Parâmetros

| Nome  | Tipo    | Descrição                                          |
|-------|---------|----------------------------------------------------|
| `rgb` | `string`| A string de cor RGB a ser convertida.              |

### Retorno

| Tipo   | Descrição                                                   |
|--------|-------------------------------------------------------------|
| `string` | Retorna a string de cor HSL se a entrada for válida, caso contrário `null`. |

## Exemplos

```typescript
console.log(rgbToHsl("255,0,0")); // "0, 100%, 50%"
console.log(rgbToHsl("0,255,0,0.5")); // "120, 100%, 50%, 0.5"
console.log(rgbToHsl("invalid")); // null
```

## Notas

- A função suporta strings RGB com ou sem canal alfa.
- Os valores HSL são arredondados para duas casas decimais.

## Dependências

- [`isRgb`](./isRgb.md): A função `isRgb` é usada para validar a entrada RGB antes de realizar a conversão.

## Código Fonte

::: code-group
```typescript
import isRgb from "./isRgb";

function rgbToHsl(rgb: string): string | null {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  let [r, g, b, a] = rgb.split(",") as unknown[] as number[];
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360 * 100) / 100;
  s = Math.round(s * 100 * 100) / 100 + "%";
  l = Math.round(l * 100 * 100) / 100 + "%";

  const hsl = [h, s, l];

  if (a) {
    hsl.push(a);
  }

  return hsl.join(", ");
}
```

```javascript
import isRgb from "./isRgb";

function rgbToHsl(rgb) {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  let [r, g, b, a] = rgb.split(",").map(Number);
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  h = Math.round(h * 360 * 100) / 100;
  s = Math.round(s * 100 * 100) / 100 + "%";
  l = Math.round(l * 100 * 100) / 100 + "%";

  const hsl = [h, s, l];

  if (a) {
    hsl.push(a);
  }

  return hsl.join(", ");
}
```
:::

## Referências

- [HSL e HSV - Wikipedia](https://pt.wikipedia.org/wiki/HSL_e_HSV)