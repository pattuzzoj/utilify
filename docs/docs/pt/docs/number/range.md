# range

A função `range` cria um array de números dentro de um intervalo especificado, com um passo definido.

## Sintaxe

```typescript
range(start: number, end: number, step?: number): number[];
```

### Parâmetros

| Nome      | Tipo       | Descrição                                         |
|-----------|------------|--------------------------------------------------|
| `start`   | `number`   | Valor inicial (inclusivo)                         |
| `end`     | `number`   | Valor final (exclusivo)                           |
| `step`    | `number`   | Passo entre os valores (opcional, padrão 1)       |

### Retorno

| Tipo         | Descrição                     |
|--------------|------------------------------|
| `number[]`   | Array de números no intervalo |

## Exemplos

```typescript
range(0, 5); // => [0, 1, 2, 3, 4]
range(1, 10, 2); // => [1, 3, 5, 7, 9]
range(5, 0, -1); // => [5, 4, 3, 2, 1]
```

## Notas

* O valor de `end` não é incluído no resultado.
* Se `step` for 0, lança um erro.
* Útil para gerar sequências numéricas.

## Referências

* https://lodash.com/docs/4.17.15#range