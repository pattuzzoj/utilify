# reject

A função `reject` retorna um novo array com os elementos que não satisfazem a função de teste fornecida.

## Sintaxe

```typescript
reject<T>(array: T[], fn: (value: T, index?: number, array?: T[]) => boolean): T[];
```

### Parâmetros

| Nome     | Tipo                                               | Descrição                                  |
|----------|----------------------------------------------------|--------------------------------------------|
| `array`  | `T[]`                                              | Array de origem                            |
| `fn`     | `(value: T, index?: number, array?: T[]) => boolean`| Função de teste (retorna true para rejeitar) |

### Retorno

| Tipo    | Descrição                        |
|---------|----------------------------------|
| `T[]`   | Novo array com elementos rejeitados |

## Exemplos

```typescript
reject([1, 2, 3, 4], x => x % 2 === 0); // => [1, 3]
reject(['a', 'b', 'c'], x => x === 'b'); // => ['a', 'c']
```

## Notas

* Útil para filtrar elementos indesejados.
* Não modifica o array original.

## Referências

* https://lodash.com/docs/4.17.15#reject