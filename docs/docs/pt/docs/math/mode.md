# mode

Calcula o(s) valor(es) que mais aparecem em um array de números.

## Sintaxe
```typescript
mode(numbers: number[]): number[]
```

## Parâmetros

| Nome      | Tipo        | Descrição                                   |
|-----------|-------------|----------------------------------------------|
| `numbers` | `number[]`  | Array de números para calcular a moda.       |

## Retorno

| Tipo        | Descrição                                                                 |
|-------------|---------------------------------------------------------------------------|
| `number[]`  | Um array contendo o(s) valor(es) mais frequente(s). Pode conter mais de um valor em caso de empate. |

## Exemplo
```typescript
mode([1, 2, 2, 3, 3]); // [2, 3]
mode([4, 4, 4, 2, 2, 1]); // [4]
mode([1, 2, 3]); // [1, 2, 3]
```

## Notas
- Lança `TypeError` se o argumento não for um array de números.
- Retorna todos os valores empatados como moda.
- Retorna array vazio se o array de entrada for vazio.

## Referências
- [Wikipedia: Moda (estatística)](https://pt.wikipedia.org/wiki/Moda_(estat%C3%ADstica))