# flatMap

A função `flatMap` aplica uma função a cada elemento de um array e "achata" o resultado em um novo array.

## Sintaxe

```typescript
flatMap<T, U>(array: T[], fn: (value: T, index: number, array: T[]) => U | U[]): U[];
```

### Parâmetros

| Nome     | Tipo                                         | Descrição              |
|----------|----------------------------------------------|------------------------|
| `array`  | `T[]`                                        | Array de origem        |
| `fn`     | `(value: T, index: number, array: T[]) => U \| U[]` | Função de mapeamento   |

### Retorno

| Tipo    | Descrição              |
|---------|------------------------|
| `U[]`   | Novo array "achatado"  |

## Exemplos

```typescript
flatMap([1, 2, 3], x => [x, x * 2]); // => [1, 2, 2, 4, 3, 6]
flatMap([1, 2, 3], x => x * 2); // => [2, 4, 6]
```

## Notas

* Equivalente a map seguido de flat com profundidade 1.
* Não modifica o array original.

## Referências

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap