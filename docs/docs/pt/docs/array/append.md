# append

A função `append` adiciona um valor ao final de um array, retornando um novo array.

## Sintaxe

```typescript
append<T>(array: T[], value: T): T[];
```

### Parâmetros

| Nome      | Tipo    | Descrição                |
|-----------|---------|--------------------------|
| `array`   | `T[]`   | Array de origem          |
| `value`   | `T`     | Valor a ser adicionado   |

### Retorno

| Tipo    | Descrição                      |
|---------|-------------------------------|
| `T[]`   | Novo array com o valor adicionado |

## Exemplos

```typescript
append([1, 2, 3], 4); // => [1, 2, 3, 4]
append([], 1); // => [1]
```

## Notas

* Não modifica o array original.

## Referências

* https://ramdajs.com/docs/#append