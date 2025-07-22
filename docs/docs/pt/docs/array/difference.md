# difference

A função `difference` retorna um novo array com os elementos do primeiro array que não estão presentes nos demais arrays fornecidos.

## Sintaxe

```typescript
difference<T>(array: T[], ...values: T[][]): T[];
```

### Parâmetros

| Nome      | Tipo      | Descrição                              |
|-----------|-----------|----------------------------------------|
| `array`   | `T[]`     | Array de origem                        |
| `values`  | `T[][]`   | Arrays com valores a serem excluídos   |

### Retorno

| Tipo    | Descrição                                         |
|---------|---------------------------------------------------|
| `T[]`   | Novo array com elementos exclusivos do primeiro array |

## Exemplos

```typescript
difference([1, 2, 3, 4], [2, 4]); // => [1, 3]
difference(["a", "b", "c"], ["b"]); // => ["a", "c"]
```

## Notas

* Útil para comparar listas e remover duplicatas.
* Não modifica o array original.

## Referências

* https://lodash.com/docs/4.17.15#difference