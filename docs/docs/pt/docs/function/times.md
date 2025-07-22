# times

Executa uma função callback um número específico de vezes, retornando um array com os resultados.

## Sintaxe
```typescript
times<T>(callback: (index: number) => T, count: number): T[]
```

## Parâmetros

| Nome       | Tipo                      | Descrição                                                              |
|------------|---------------------------|------------------------------------------------------------------------|
| `callback` | `(index: number) => T`    | Função a ser executada em cada iteração, recebendo o índice atual.     |
| `count`    | `number`                  | Número de vezes que a função será executada (deve ser inteiro não negativo). |

## Retorno

| Tipo   | Descrição                                         |
|--------|---------------------------------------------------|
| `T[]`  | Array contendo os resultados de cada execução do callback. |

## Exemplo
```typescript
times(i => i * 2, 4); // [0, 2, 4, 6]
```

## Notas
- Lança um `TypeError` se o callback não for função ou se count não for inteiro não negativo.
- Útil para gerar arrays de valores ou executar efeitos colaterais controlados.

## Referências
- [MDN: Array.from()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from)