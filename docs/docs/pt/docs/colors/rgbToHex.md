# rgbToHex

A função `rgbToHex` converte uma cor no formato RGB ou RGBA para o formato hexadecimal.

## Sintaxe

```typescript
rgbToHex(rgb: string): string;
```

### Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `rgb`   | `string`  | Cor em formato RGB ou RGBA |

### Retorno

| Tipo      | Descrição                                 |
|---------- |-------------------------------------------|
| `string`  | Cor convertida para o formato hexadecimal  |

## Exemplos

```typescript
rgbToHex("rgb(255, 0, 0)");
// => "#ff0000"

rgbToHex("rgba(255, 0, 0, 0.5)");
// => "#ff000080"
```

## Notas

* O canal alfa é convertido para dois dígitos hexadecimais, se presente.
* Útil para normalizar cores para uso em CSS.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value/hex