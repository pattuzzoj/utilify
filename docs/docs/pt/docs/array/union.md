# union

A função `union` retorna um novo array contendo todos os elementos únicos de dois ou mais arrays.

## Sintaxe

```typescript
union<T>(...arrays: T[][]): T[];
```

### Parâmetros

| Nome      | Tipo      | Descrição                        |
|-----------|-----------|----------------------------------|
| `arrays`  | `T[][]`   | Arrays a serem unidos             |

### Retorno

| Tipo    | Descrição                        |
|---------|----------------------------------|
| `T[]`   | Novo array unido sem duplicatas  |

## Exemplos

```typescript
union([1, 2], [2, 3], [3, 4]); // => [1, 2, 3, 4]
```

## Notas

* A ordem dos elementos é preservada conforme a primeira ocorrência.
* Não modifica os arrays originais.

## Referências

* https://lodash.com/docs/4.17.15#union