# adjust

A função `adjust` aplica uma função a um elemento em um índice específico de um array, retornando um novo array com o valor ajustado.

## Sintaxe

```typescript
adjust<T>(array: T[], index: number, fn: (value: T) => T): T[];
```

### Parâmetros

| Nome     | Tipo              | Descrição                        |
|----------|-------------------|----------------------------------|
| `array`  | `T[]`             | Array a ser ajustado             |
| `index`  | `number`          | Índice do elemento a ser ajustado|
| `fn`     | `(value: T) => T` | Função a ser aplicada ao elemento|

### Retorno

| Tipo    | Descrição                        |
|---------|----------------------------------|
| `T[]`   | Novo array com o elemento ajustado|

## Exemplos

```typescript
adjust([1, 2, 3], 1, x => x * 10); // => [1, 20, 3]
adjust([1, 2, 3], -1, x => x + 1); // => [1, 2, 4]
```

## Notas

* O índice pode ser negativo para contar a partir do final do array.
* Não modifica o array original.

## Referências

* https://ramdajs.com/docs/#adjust