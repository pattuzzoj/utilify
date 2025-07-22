# parseColor

A função `parseColor` analisa uma string de cor e retorna um objeto com o modelo de cor (RGB ou HSL), valores e alfa, se aplicável.

## Sintaxe

```typescript
export type ParsedColor = {
  model: "rgb" | "hsl";
  values: [number, number, number];
  alpha?: number;
} | null;

parseColor(color: string): ParsedColor;
```

### Parâmetros

| Nome      | Tipo      | Descrição                        |
|-----------|-----------|----------------------------------|
| `color`   | `string`  | Cor em formato HEX, RGB ou HSL    |

### Retorno

| Tipo       | Descrição                                 |
|------------|-------------------------------------------|
| `object`   | Objeto com as propriedades da cor          |

## Exemplos

```typescript
parseColor("rgb(255, 0, 0)");
// => { model: "rgb", values: [255, 0, 0], alpha: 1 }

parseColor("hsl(0, 100%, 50%)");
// => { model: "hsl", values: [0, 100, 50], alpha: 1 }

parseColor("#ff0000");
// => { model: "rgb", values: [255, 0, 0], alpha: 1 }

parseColor("invalid");
// => null
```

## Notas

* Útil para normalizar e identificar cores em diferentes formatos.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value