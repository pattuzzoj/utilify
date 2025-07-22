# hexToRgb

A função `hexToRgb` converte uma cor em formato hexadecimal para o formato RGB ou RGBA.

## Sintaxe

```typescript
hexToRgb(hex: string): string;
```

### Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `hex`   | `string`  | Cor em formato hexadecimal |

### Retorno

| Tipo      | Descrição                                 |
|---------- |-------------------------------------------|
| `string`  | Cor convertida para o formato RGB ou RGBA  |

## Exemplos

```typescript
hexToRgb("#ff0000");
// => "rgb(255, 0, 0)"

hexToRgb("#ff000080");
// => "rgba(255, 0, 0, 0.5)"
```

## Notas

* Lança um erro se o valor não for um hexadecimal válido.
* Útil para conversão entre modelos de cor.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value/rgb