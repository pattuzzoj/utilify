# first

A função `first` retorna os primeiros `count` elementos de um array ou caracteres de uma string. Se `count` não for fornecido, retorna o primeiro elemento.

## Sintaxe

```typescript
function first(str: string, count?: number): string;
function first<T>(arr: T[], count?: number): T[];
```

### Parâmetros

| Nome    | Tipo                  | Descrição                                                                 |
|---------|----------------------|-----------------------------------------------------------------------------|
| `str`   | `string`            | A string de entrada.                                                        |
| `arr`   | `T[]`               | O array de entrada.                                                         |
| `count` | `number` (opcional) | O número de elementos a retornar do início. O padrão é 1.                  |

### Retorno

| Tipo          | Descrição                                                                         |
|---------------|-------------------------------------------------------------------------------------|
| `string`      | Para strings: Os primeiros `count` caracteres.                                     |
| `T[]`         | Para arrays: Um novo array com os primeiros `count` elementos.                     |

## Exemplos

```typescript
// Exemplos com Array
console.log(first([1, 2, 3, 4], 2)); // [1, 2]
console.log(first([1, 2, 3, 4]));    // [1]

// Exemplos com String
console.log(first("hello", 2));      // "he"
console.log(first("hello"));         // "h"
```

## Observações

- Se `count` for maior que o comprimento da entrada, toda a entrada será retornada.
- Se `count` não for fornecido, a função retorna apenas o primeiro elemento.

## Código Fonte

::: code-group
```typescript
function first(str: string, count?: number): string;
function first<T>(arr: T[], count?: number): T[];
function first(arr: any, count: number = 1): any {
  return arr.slice(0, count);
}
```

```javascript
function first(arr, count = 1) {
  return arr.slice(0, count);
}
```
:::

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)