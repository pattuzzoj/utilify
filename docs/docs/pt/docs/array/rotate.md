# rotate

A função `rotate` desloca os elementos de um array para a esquerda ou direita, conforme o offset informado.

## Sintaxe

```typescript
rotate<T>(array: T[], offset: number): T[];
```

### Parâmetros

| Nome      | Tipo      | Descrição                          |
|-----------|-----------|------------------------------------|
| `array`   | `T[]`     | Array de origem                    |
| `offset`  | `number`  | Número de posições para rotacionar |

### Retorno

| Tipo    | Descrição              |
|---------|------------------------|
| `T[]`   | Novo array rotacionado |

## Exemplos

```typescript
rotate([1, 2, 3, 4], 1); // => [2, 3, 4, 1]
rotate([1, 2, 3, 4], -1); // => [4, 1, 2, 3]
rotate([1, 2, 3, 4], 2); // => [3, 4, 1, 2]
```

## Notas

* O offset pode ser positivo (direita) ou negativo (esquerda).
* Não modifica o array original.

## Referências

* https://lodash.com/docs/4.17.15#rotate