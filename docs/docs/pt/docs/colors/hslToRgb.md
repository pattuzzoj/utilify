# hslToRgb

A função `hslToRgb` converte uma cor em formato HSL ou HSLA para o formato RGB ou RGBA.

## Sintaxe

```typescript
hslToRgb(hsl: string): string;
```

### Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `hsl`   | `string`  | Cor em formato HSL ou HSLA |

### Retorno

| Tipo      | Descrição                                 |
|---------- |-------------------------------------------|
| `string`  | Cor convertida para o formato RGB ou RGBA  |

## Exemplos

```typescript
hslToRgb("hsl(0, 100%, 50%)");
// => "rgb(255, 0, 0)"

hslToRgb("hsla(0, 100%, 50%, 0.5)");
// => "rgba(255, 0, 0, 0.5)"
```

## Notas

* Lança um erro se o valor não for um HSL válido.
* Útil para conversão entre modelos de cor.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value/hsl