# unzip

A função `unzip` transforma um array de arrays agrupados em arrays de elementos correspondentes.

## Sintaxe

```typescript
unzip<T>(array: T[][]): T[][];
```

### Parâmetros

| Nome     | Tipo      | Descrição                          |
|----------|-----------|------------------------------------|
| `array`  | `T[][]`   | Array de arrays a ser descompactado |

### Retorno

| Tipo      | Descrição                  |
|-----------|---------------------------|
| `T[][]`   | Novo array descompactado   |

## Exemplos

```typescript
unzip([[1, 'a'], [2, 'b'], [3, 'c']]); // => [[1, 2, 3], ['a', 'b', 'c']]
```

## Notas

* Inverso da função `zip`.
* Útil para manipulação de dados tabulares.

## Referências

* https://lodash.com/docs/4.17.15#unzip