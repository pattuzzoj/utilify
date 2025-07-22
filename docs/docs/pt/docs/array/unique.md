# unique

A função `unique` retorna um novo array contendo apenas os elementos únicos do array original.

## Sintaxe

```typescript
unique<T>(array: T[]): T[];
```

### Parâmetros

| Nome     | Tipo    | Descrição                    |
|----------|---------|------------------------------|
| `array`  | `T[]`   | Array de origem              |

### Retorno

| Tipo    | Descrição                    |
|---------|------------------------------|
| `T[]`   | Novo array com elementos únicos |

## Exemplos

```typescript
unique([1, 2, 2, 3, 4, 4]); // => [1, 2, 3, 4]
```

## Notas

* A ordem dos elementos é preservada conforme a primeira ocorrência.
* Não modifica o array original.

## Referências

* https://lodash.com/docs/4.17.15#uniq