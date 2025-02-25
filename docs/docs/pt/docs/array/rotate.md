# rotate

A função `rotate` rotaciona os elementos de um array por um deslocamento especificado. Deslocamento positivo rotaciona para a direita, deslocamento negativo rotaciona para a esquerda.

## Sintaxe

```typescript
function rotate<T>(arr: T[], offset: number): T[];
```

### Parâmetros

| Nome     | Tipo     | Descrição                                               |
|----------|----------|---------------------------------------------------------|
| `arr`    | `T[]`    | O array a ser rotacionado.                              |
| `offset` | `number` | O número de posições para rotacionar. Positivo rotaciona para a direita, negativo para a esquerda. |

### Retorno

| Tipo   | Descrição                                                  |
|--------|------------------------------------------------------------|
| `T[]`  | Um novo array com elementos rotacionados pelo deslocamento especificado. |

## Exemplos

```typescript
console.log(rotate([1, 2, 3, 4], 1));  // [4, 1, 2, 3]
console.log(rotate([1, 2, 3, 4], -1)); // [2, 3, 4, 1]
console.log(rotate([1, 2, 3, 4], 2));  // [3, 4, 1, 2]
```

## Observações

- A função lida com deslocamentos positivos e negativos
- O deslocamento é normalizado para estar dentro dos limites do array usando módulo
- Retorna um novo array; não modifica o array original
- Se o array estiver vazio ou tiver um elemento, retorna uma cópia do array

## Código Fonte

::: code-group
```typescript
function rotate<T>(arr: T[], offset: number): T[] {
  const arrLength = arr.length;
  offset = ((offset % arrLength) + arrLength) % arrLength;
  return arr.slice(offset).concat(arr.slice(0, offset));
}
```

```javascript
function rotate(arr, offset) {
  const arrLength = arr.length;
  offset = ((offset % arrLength) + arrLength) % arrLength;
  return arr.slice(offset).concat(arr.slice(0, offset));
}
```
:::

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.concat() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)