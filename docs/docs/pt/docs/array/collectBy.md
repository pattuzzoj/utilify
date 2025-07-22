# collectBy

A função `collectBy` agrupa elementos de um array em subarrays com base em uma função seletora de chave.

## Sintaxe

```typescript
collectBy<T, K extends PropertyKey>(
  array: T[],
  keySelector: (value: T, index: number) => K
): T[][];
```

### Parâmetros

| Nome           | Tipo                                   | Descrição                                 |
|----------------|----------------------------------------|-------------------------------------------|
| `array`        | `T[]`                                  | Array de origem                           |
| `keySelector`  | `(value: T, index: number) => K`       | Função para selecionar a chave de agrupamento |

### Retorno

| Tipo     | Descrição                      |
|----------|-------------------------------|
| `T[][]`  | Subarrays agrupados pela chave |

## Exemplos

```typescript
collectBy([1, 2, 3, 4], x => x % 2); // => [[2,4],[1,3]]
collectBy(["a", "b", "aa"], x => x.length); // => [["a","b"],["aa"]]
```

## Notas

* Útil para agrupar elementos por critérios personalizados.

## Referências

* https://lodash.com/docs/4.17.15#groupBy