# isHslColor

A função `isHslColor` verifica se uma string representa uma cor HSL ou HSLA válida.

## Sintaxe

```typescript
isHslColor(hsl: string): boolean;
```

### Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `hsl`   | `string`  | Cor em formato HSL ou HSLA |

### Retorno

| Tipo       | Descrição                                 |
|------------|-------------------------------------------|
| `boolean`  | Retorna `true` se for uma cor HSL ou HSLA  |

## Exemplos

```typescript
isHslColor("hsl(0, 100%, 50%)");
// => true

isHslColor("hsla(0, 100%, 50%, 0.5)");
// => true

isHslColor("rgb(255, 0, 0)");
// => false
```

## Notas

* Útil para validação de entradas antes de conversão de cor.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value/hsl