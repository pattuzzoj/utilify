# isRgbColor

A função `isRgbColor` verifica se uma string representa uma cor RGB ou RGBA válida.

## Sintaxe

```typescript
isRgbColor(rgb: string): boolean;
```

### Parâmetros

| Nome    | Tipo      | Descrição                 |
|---------|-----------|---------------------------|
| `rgb`   | `string`  | Cor em formato RGB ou RGBA |

### Retorno

| Tipo       | Descrição                                 |
|------------|-------------------------------------------|
| `boolean`  | Retorna `true` se for uma cor RGB ou RGBA  |

## Exemplos

```typescript
isRgbColor("rgb(255, 0, 0)");
// => true

isRgbColor("rgba(255, 0, 0, 0.5)");
// => true

isRgbColor("hsl(0, 100%, 50%)");
// => false
```

## Notas

* Útil para validação de entradas antes de conversão de cor.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value/rgb