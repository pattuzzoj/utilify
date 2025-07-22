# groupBy

A função `groupBy` agrupa os elementos de um array de acordo com o valor retornado por uma função seletora de chave.

## Sintaxe

```typescript
groupBy<T, K extends PropertyKey>(
  array: T[],
  keySelector: (value: T, index: number) => K
): Record<K, T[]>;
```

### Parâmetros

| Nome           | Tipo                                   | Descrição                                 |
|----------------|----------------------------------------|-------------------------------------------|
| `array`        | `T[]`                                  | Array de origem                           |
| `keySelector`  | `(value: T, index: number) => K`       | Função para selecionar a chave de agrupamento |

### Retorno

| Tipo                | Descrição                         |
|---------------------|-----------------------------------|
| `Record<K, T[]>`    | Objeto com arrays agrupados pela chave |

## Exemplos

```typescript
groupBy([1, 2, 3, 4], x => x % 2); // => {0: [2,4], 1: [1,3]}
groupBy(["a", "b", "aa"], x => x.length); // => {1: ["a","b"], 2: ["aa"]}
```

## Notas

* Útil para categorizar elementos por critérios personalizados.

## Referências

* https://lodash.com/docs/4.17.15#groupBy