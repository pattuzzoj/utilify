# std

Calcula o desvio padrão de um array de números.

## Sintaxe
```typescript
std(numbers: number[]): number
```

## Parâmetros

| Nome      | Tipo        | Descrição                                      |
|-----------|-------------|------------------------------------------------|
| `numbers` | `number[]`  | Array de números para calcular o desvio padrão.|

## Retorno

| Tipo      | Descrição                        |
|-----------|-----------------------------------|
| `number`  | O desvio padrão dos valores fornecidos. |

## Exemplo
```typescript
std([2, 4, 4, 4, 5, 5, 7, 9]); // 2
std([1, 2, 3, 4, 5]); // 1.4142135623730951
```

## Notas
- Lança `TypeError` se o argumento não for um array de números.
- Retorna `NaN` para array vazio.
- Utiliza a fórmula do desvio padrão amostral.

## Referências
- [Wikipedia: Desvio padrão](https://pt.wikipedia.org/wiki/Desvio_padr%C3%A3o)