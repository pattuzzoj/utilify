# zip

A função `zip` agrupa elementos de dois ou mais arrays em arrays de pares correspondentes.

## Sintaxe

```typescript
zip<T>(...arrays: T[][]): T[][];
```

### Parâmetros

| Nome    | Tipo     | Descrição                     |
|---------|----------|-------------------------------|
| `arrays`| `T[][]`  | Dois ou mais arrays de origem |

### Retorno

| Tipo     | Descrição                      |
|----------|-------------------------------|
| `T[][]`  | Novo array de arrays agrupados |

## Exemplos

```typescript
zip([1, 2, 3], ['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
```

## Notas

* O agrupamento é feito até o menor comprimento dos arrays.
* Inverso da função `unzip`.

## Referências

* https://lodash.com/docs/4.17.15#zip