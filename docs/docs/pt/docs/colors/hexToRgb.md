# hexToRgb

A função `hexToRgb` converte uma string de cor hexadecimal para sua representação RGB.

## Assinatura

```typescript
function hexToRgb(hex: string): string | null;
```

### Parâmetros

| Nome | Tipo   | Descrição                                               |
|------|--------|---------------------------------------------------------|
| `hex` | `string` | A string de cor hexadecimal a ser convertida.          |

### Retorno

| Tipo   | Descrição                                               |
|--------|---------------------------------------------------------|
| `string` | A string de cor RGB representando a cor, caso a entrada seja válida. |
| `null`  | Retornado se a entrada não for uma cor hexadecimal válida. |

## Exemplos

```typescript
console.log(hexToRgb("ff0000")); // "255, 0, 0"
console.log(hexToRgb("00ff007f")); // "0, 255, 0, 0.5"
console.log(hexToRgb("invalid")); // null
```

## Notas

- A função suporta strings hexadecimais com ou sem canal alfa.
- O canal alfa, se presente, é convertido para um valor decimal entre 0 e 1.

## Dependências

- [`isHex`](./isHex.md): A função `isHex` é usada para verificar se a string fornecida é uma cor hexadecimal válida, garantindo que a função `hexToRgb` processe corretamente a entrada.
- [`chunk`](./chunk.md): A função `chunk` é utilizada para dividir a string hexadecimal em segmentos de caracteres necessários para a conversão.

## Código Fonte

::: code-group
```typescript
function hexToRgb(hex: string): string | null {
  if (!isHex(hex)) {
    console.error("Invalid HEX color", hex);
    return null;
  }

  const channels: string[] = chunk(hex, hex.length > 4 ? 2 : 1);
  const rgb = channels
    .slice(0, 3)
    .map((channel: string) => Number.parseInt(channel.padEnd(2, channel), 16));

  if (channels.length === 4) {
    rgb.push(Math.trunc((Number.parseInt(channels[3], 16) / 255) * 100) / 100);
  }

  return rgb.join(", ");
}
```

```javascript
function hexToRgb(hex) {
  if (!isHex(hex)) {
    console.error("Invalid HEX color", hex);
    return null;
  }

  const channels = chunk(hex, hex.length > 4 ? 2 : 1);
  const rgb = channels
    .slice(0, 3)
    .map((channel) => parseInt(channel.padEnd(2, channel), 16));

  if (channels.length === 4) {
    rgb.push(Math.trunc((parseInt(channels[3], 16) / 255) * 100) / 100);
  }

  return rgb.join(", ");
}
```
:::

## Referências

- [Modelo de cor RGB - Wikipedia](https://pt.wikipedia.org/wiki/RGB)