Aqui está a documentação da função `rgbToHex`:

---

# rgbToHex

A função `rgbToHex` converte uma string de cor RGB para sua representação hexadecimal.

## Assinatura

```typescript
function rgbToHex(rgb: string): string | null;
```

### Parâmetros

| Nome  | Tipo    | Descrição                                          |
|-------|---------|----------------------------------------------------|
| `rgb` | `string`| A string de cor RGB a ser convertida.              |

### Retorno

| Tipo   | Descrição                                                   |
|--------|-------------------------------------------------------------|
| `string` | Retorna a string de cor hexadecimal se a entrada for válida, caso contrário `null`. |

## Exemplos

```typescript
console.log(rgbToHex("255,0,0")); // "ff0000"
console.log(rgbToHex("0,255,0,0.5")); // "00ff007f"
console.log(rgbToHex("invalid")); // null
```

## Notas

- A função suporta strings RGB com ou sem canal alfa.
- O canal alfa, se presente, é convertido para um valor hexadecimal de dois dígitos.

## Dependências

- [`isRgb`](./isRgb.md): A função `isRgb` é usada para validar a entrada RGB antes de realizar a conversão.

## Código Fonte

::: code-group
```typescript
import isRgb from "./isRgb";

function rgbToHex(rgb: string): string | null {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  const channels = rgb.split(",");
  const hex = channels
    .slice(0, 3)
    .map((channel) => Number(channel).toString(16).padStart(2, "0"));

  if (channels.length === 4) {
    hex.push(Math.ceil(Number.parseFloat(channels[3]) * 255).toString(16));
  }

  return hex.join("");
}
```

```javascript
import isRgb from "./isRgb";

function rgbToHex(rgb) {
  if (!isRgb(rgb)) {
    console.error("Invalid RGB color", rgb);
    return null;
  }

  const channels = rgb.split(",");
  const hex = channels
    .slice(0, 3)
    .map((channel) => Number(channel).toString(16).padStart(2, "0"));

  if (channels.length === 4) {
    hex.push(Math.ceil(Number.parseFloat(channels[3]) * 255).toString(16));
  }

  return hex.join("");
}
```
:::

## Referências

- [Modelo de cor RGB - Wikipedia](https://pt.wikipedia.org/wiki/RGB)

---

Esta documentação segue o formato que você especificou, incluindo exemplos, notas e a dependência necessária para a validação da entrada.