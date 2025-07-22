# median

Calcula a mediana de um array de números.

## Sintaxe
```typescript
median(arr: number[]): number
```

## Parâmetros

| Nome   | Tipo        | Descrição           |
|--------|-------------|---------------------|
| `arr`  | `number[]`  | Array de números.   |

## Retorno

| Tipo      | Descrição            |
|-----------|----------------------|
| `number`  | Valor da mediana. |

## Exemplo
```typescript
median([1, 2, 3, 4, 5]); // 3
median([1, 2, 3, 4]); // 2.5
```

## Notas
- Lança `TypeError` se o argumento não for array de números.
- Lança `Error` se o array estiver vazio.
- Ordena o array antes de calcular a mediana.

## Referências
- [MDN: Mediana](https://developer.mozilla.org/pt-BR/docs/Glossary/Median)