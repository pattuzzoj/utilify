# clamp

Restringe um valor a um intervalo definido por limites mínimo e máximo.

## Sintaxe
```typescript
clamp(value: number, min: number, max: number): number
```

## Parâmetros

| Nome      | Tipo      | Descrição             |
|-----------|-----------|-----------------------|
| `value`   | `number`  | Valor a ser restringido. |
| `min`     | `number`  | Limite inferior.      |
| `max`     | `number`  | Limite superior.      |

## Retorno

| Tipo      | Descrição                                         |
|-----------|---------------------------------------------------|
| `number`  | Valor ajustado dentro do intervalo [`min`, `max`]. |

## Exemplo
```typescript
clamp(10, 0, 5); // 5
clamp(-2, 0, 5); // 0
clamp(3, 0, 5); // 3
```

## Notas
- Lança `TypeError` se algum argumento não for número.
- Lança `RangeError` se `min` for maior que `max`.

## Referências
- [MDN: Math.min()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
- [MDN: Math.max()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max)