# swap

A função `swap` troca dois elementos em um array nos índices especificados.

## Sintaxe

```typescript
function swap<T>(arr: T[], fromIndex: number, toIndex: number): T[];
```

### Parâmetros

| Nome        | Tipo     | Descrição                                               |
|-------------|----------|---------------------------------------------------------|
| `arr`       | `T[]`    | O array contendo os elementos a serem trocados.          |
| `fromIndex` | `number` | O índice do primeiro elemento a ser trocado.             |
| `toIndex`   | `number` | O índice do segundo elemento a ser trocado.              |

### Retorno

| Tipo   | Descrição                                                  |
|--------|------------------------------------------------------------|
| `T[]`  | O array modificado com os elementos trocados.               |

## Exemplos

```typescript
const arr = [1, 2, 3, 4];
console.log(swap(arr, 0, 3));  // [4, 2, 3, 1]
console.log(swap(arr, 1, 2));  // [4, 3, 2, 1]
```

## Observações

- Modifica o array de entrada no local
- Retorna o array modificado para encadeamento
- Tenha cuidado com os limites dos índices - nenhuma validação é realizada

## Código Fonte

::: code-group
```typescript
function swap<T>(arr: T[], fromIndex: number, toIndex: number): T[] {
  [arr[fromIndex], arr[toIndex]] = [arr[toIndex] as T, arr[fromIndex] as T];
  return arr;
}
```

```javascript
function swap(arr, fromIndex, toIndex) {
  [arr[fromIndex], arr[toIndex]] = [arr[toIndex], arr[fromIndex]];
  return arr;
}
```
:::

## Referências

- [Atribuição via desestruturação - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)