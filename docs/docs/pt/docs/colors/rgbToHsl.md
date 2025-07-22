# rgbToHsl

A função `rgbToHsl` converte uma cor no formato RGB ou RGBA para o formato HSL ou HSLA.

## Sintaxe

```typescript
rgbToHsl(rgb: string): string;
```

### Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `rgb`   | `string`  | Cor em formato RGB ou RGBA |

### Retorno

| Tipo      | Descrição                                 |
|---------- |-------------------------------------------|
| `string`  | Cor convertida para o formato HSL ou HSLA  |

## Exemplos

```typescript
rgbToHsl("rgb(255, 0, 0)");
// => "hsl(0, 100%, 50%)"

rgbToHsl("rgba(255, 0, 0, 0.5)");
// => "hsla(0, 100%, 50%, 0.5)"
```

## Notas

* O canal alfa é mantido se presente.
* Útil para conversão de cores para manipulação em HSL.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value/hsl
