# shuffle

A função `shuffle` reordena aleatoriamente os elementos em um array usando o algoritmo de embaralhamento Fisher-Yates.

## Sintaxe

```typescript
function shuffle<T>(arr: T[]): T[];
```

### Parâmetros

| Nome  | Tipo   | Descrição                                      |
|-------|--------|--------------------------------------------------|
| `arr` | `T[]`  | O array a ser embaralhado.                       |

### Retorno

| Tipo   | Descrição                                           |
|--------|-------------------------------------------------------|
| `T[]`  | O mesmo array com seus elementos reordenados aleatoriamente. |

## Exemplos

```typescript
console.log(shuffle([1, 2, 3, 4, 5]));          // ex: [3, 1, 5, 2, 4]
console.log(shuffle(['a', 'b', 'c', 'd']));     // ex: ['c', 'a', 'd', 'b']

// Múltiplos embaralhamentos produzem resultados diferentes
const arr = [1, 2, 3, 4];
console.log(shuffle([...arr]));                 // ex: [2, 4, 1, 3]
console.log(shuffle([...arr]));                 // ex: [3, 1, 4, 2]
```

## Observações

- Modifica o array de entrada no local e o retorna
- Usa o algoritmo de embaralhamento Fisher-Yates (Knuth)
- Para embaralhamento imutável, passe uma cópia do array: `shuffle([...arr])`
- A qualidade da aleatoriedade depende do Math.random()

## Código Fonte

::: code-group
```typescript
function shuffle<T>(arr: T[]): T[] {
  for (let index = arr.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[randomIndex]] = [arr[randomIndex] as T, arr[index] as T];
  }

  return arr;
}
```

```javascript
function shuffle(arr) {
  for (let index = arr.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
  }

  return arr;
}
```
:::

## Referências

- [Embaralhamento de Fisher-Yates - Wikipedia](https://pt.wikipedia.org/wiki/Embaralhamento_de_Fisher-Yates)
- [Math.random() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)