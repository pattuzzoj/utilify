# last

A função `last` retorna os últimos `count` elementos de um array ou caracteres de uma string.

## Sintaxe

```typescript
function last(str: string, count?: number): string;
function last<T>(arr: T[], count?: number): T[];
```

### Parâmetros

| Nome      | Tipo             | Descrição                                                      |
|-----------|------------------|---------------------------------------------------------------|
| `str/arr` | `string \| T[]`  | A string ou array de entrada da qual os elementos serão extraídos. |
| `count`   | `number`         | O número de elementos a serem retornados a partir do final. O padrão é 1. |

### Retorno

| Tipo           | Descrição                                                      |
|----------------|---------------------------------------------------------------|
| `string \| T[]` | Para strings: Os últimos `count` caracteres. Para arrays: Um novo array com os últimos `count` elementos. |

## Exemplos

```typescript
// Exemplos com arrays
console.log(last([1, 2, 3, 4, 5], 2)); // [4, 5]
console.log(last([1, 2, 3, 4, 5]));    // [5]

// Exemplos com strings
console.log(last("hello", 2));         // "lo"
console.log(last("hello"));            // "o"
```

## Observações

- Se `count` for maior que o comprimento da entrada, todos os elementos serão retornados.
- Se `count` não for fornecido, retorna apenas o último elemento.

## Código Fonte

::: code-group
```typescript
function last(str: string, count?: number): string;
function last<T>(arr: T[], count?: number): T[];
function last(arr: any, count: number = 1): any {
  return arr.slice(-count);
}
```

```javascript
function last(arr, count = 1) {
  return arr.slice(-count);
}
```
:::

## Referências

- [Array.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)