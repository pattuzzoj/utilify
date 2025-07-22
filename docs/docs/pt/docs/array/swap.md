# swap

A função `swap` troca os elementos de duas posições em um array.

## Sintaxe

```typescript
swap<T>(array: T[], indexA: number, indexB: number): T[];
```

### Parâmetros

| Nome     | Tipo      | Descrição                        |
|----------|-----------|----------------------------------|
| `array`  | `T[]`     | Array de origem                  |
| `i`      | `number`  | Índice do primeiro elemento      |
| `j`      | `number`  | Índice do segundo elemento       |

### Retorno

| Tipo    | Descrição                        |
|---------|----------------------------------|
| `T[]`   | Novo array com elementos trocados |

## Exemplos

```typescript
swap([1, 2, 3, 4], 0, 2); // => [3, 2, 1, 4]
```

## Notas

* Não modifica o array original.
* Se os índices forem iguais, retorna o array inalterado.

## Referências

* https://lodash.com/docs/4.17.15#swap
