# flattenArr

A função `flattenArr` achata um array até a profundidade especificada.

## Sintaxe

```typescript
function flattenArr<T>(arr: T[], depth: number = Infinity): FlatArray<T[], number>[];
```

### Parâmetros

| Nome    | Tipo      | Descrição                                                              |
|---------|-----------|--------------------------------------------------------------------------|
| `arr`   | `T[]`     | O array a ser achatado.                                                  |
| `depth` | `number`  | O nível de profundidade que especifica até onde a estrutura do array aninhado deve ser achatada. O padrão é `Infinity`. |

### Retorno

| Tipo    | Descrição                                                              |
|---------|--------------------------------------------------------------------------|
| `FlatArray<T[], number>[]` | Um novo array com os elementos do subarray concatenados nele. |

## Exemplos

```typescript
console.log(flattenArr([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(flattenArr([1, [2, [3, [4]]]]));   // [1, 2, 3, [4]]
```

## Observações

- A função usa `Array.prototype.flat` para achatar o array.

## Código Fonte

::: code-group
```typescript
function flattenArr<T>(arr: T[], depth: number = Infinity): FlatArray<T[], number>[] {
  return (arr as T[]).flat(depth) as FlatArray<T[], number>[];
}
```

```javascript
function flattenArr(array, depth = Infinity) {
  return array.flat(depth);
}
```
:::

## Referências

- [Array.prototype.flat() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)