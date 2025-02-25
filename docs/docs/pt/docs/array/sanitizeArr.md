# sanitizeArr

A função `sanitizeArr` remove ou substitui valores especificados em um array.

## Sintaxe

```typescript
function sanitizeArr<T>(arr: T[], values: T[], replace?: T): T[];
```

### Parâmetros

| Nome      | Tipo    | Descrição                                                      |
|-----------|---------|------------------------------------------------------------------|
| `arr`     | `T[]`   | O array fonte a ser limpo.                                       |
| `values`  | `T[]`   | Array de valores a serem removidos ou substituídos.              |
| `replace` | `T`     | Valor opcional para substituir os elementos correspondentes. Se omitido, as correspondências são removidas. |

### Retorno

| Tipo   | Descrição                                                      |
|--------|------------------------------------------------------------------|
| `T[]`  | Um novo array com os valores especificados removidos ou substituídos. |

## Exemplos

```typescript
console.log(sanitizeArr([1, 2, 3, 4], [2, 3]));      // [1, 4]
console.log(sanitizeArr([1, 2, 3, 4], [2, 3], 0));   // [1, 0, 0, 4]
console.log(sanitizeArr(['a', 'b', 'c'], ['b']));    // ['a', 'c']
```

## Observações

- Retorna um novo array; não modifica o array original
- Se nenhum valor de substituição for fornecido, os valores correspondentes são removidos
- Se um valor de substituição for fornecido, os valores correspondentes são substituídos por ele
- A ordem dos elementos restantes é preservada

## Código Fonte

::: code-group
```typescript
function sanitizeArr<T>(arr: T[], values: T[], replace?: T): T[] {
  const result: T[] = [];

  for (const value of arr) {
    if (values.includes(value)) {
      if (replace !== undefined) {
        result.push(replace);
      }
    } else {
      result.push(value);
    }
  }

  return result;
}
```

```javascript
function sanitizeArr(arr, values, replace) {
  const result = [];

  for (const value of arr) {
    if (values.includes(value)) {
      if (replace !== undefined) {
        result.push(replace);
      }
    } else {
      result.push(value);
    }
  }

  return result;
}
```
:::

## Referências

- [Array.prototype.includes() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)