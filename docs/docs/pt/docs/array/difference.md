# difference

A função `difference` retorna um novo array contendo elementos que estão presentes no primeiro array mas não no segundo array.

## Sintaxe

```typescript
function difference<T>(arr1: T[], arr2: T[]): T[];
```

### Parâmetros

| Nome   | Tipo         | Descrição                                                        |
|--------|--------------|--------------------------------------------------------------------|
| `arr1` | `T[]`        | O array original.                                                   |
| `arr2` | `T[]`        | O array de valores a serem excluídos do array original.            |

### Retorno

| Tipo   | Descrição                                                                 |
|--------|-----------------------------------------------------------------------------|
| `T[]`  | Um novo array contendo elementos que estão presentes no primeiro array mas não no segundo. |

## Exemplos

```typescript
const data1 = [1, 2, 3];
const data2 = [2, 3, 4];

// Elementos no primeiro array mas não no segundo
console.log(difference(data1, data2)); // [1]

const data3 = [1, 2, 3];

// Arrays idênticos, nenhum elemento restante
console.log(difference(data3, data3)); // []
```

## Observações

- A função usa `Array.prototype.filter` e `Array.prototype.includes` para determinar a diferença.

## Código Fonte

::: code-group
```typescript
function difference<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter((value: T) => !arr2.includes(value));
}
```

```javascript
function difference(arr1, arr2) {
  return arr1.filter((value) => !arr2.includes(value));
}
```
:::

## Referências

- [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.includes() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)