# merge
A função `merge` combina múltiplos objetos ou arrays em um único. Ela pode mesclar objetos em um único objeto ou arrays em um único array.

## Sintaxe

```typescript
merge(...values: Record<string, any>[]): Record<string, any>;
merge(...values: any[][]): any[];
merge(...values: any[]): any;
```

### Parâmetros

| Parâmetro | Tipo                          | Descrição                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `values`  | `Record<string, any>[]`         | Um array de objetos a serem mesclados em um único objeto.    |
| `values`  | `any[][]`                      | Um array de arrays a serem mesclados em um único array.      |
| `values`  | `any[]`                        | Vários objetos ou arrays a serem mesclados, o primeiro determina o tipo de retorno. |

### Retorno

| Tipo                       | Descrição                                              |
|----------------------------|----------------------------------------------------------|
| `Record<string, any>`       | Se o primeiro argumento for um objeto, retorna um objeto mesclado. |
| `any[]`                     | Se o primeiro argumento for um array, retorna um array mesclado. |
| `any`                       | O resultado mesclado, o tipo depende da entrada.         |

## Exemplos

### Exemplo 1: Mesclando Objetos
```typescript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const objMesclado = merge(obj1, obj2);
console.log(objMesclado); // { a: 1, b: 2, c: 3, d: 4 }
```

### Exemplo 2: Mesclando Arrays
```typescript
const arr1 = [1, 2];
const arr2 = [3, 4];
const arrMesclado = merge(arr1, arr2);
console.log(arrMesclado); // [1, 2, 3, 4]
```

### Exemplo 3: Mesclando Tipos Mistos
```typescript
const obj = { a: 1 };
const arr = [2, 3];
const misturado = merge(obj, arr);
console.log(misturado); // { a: 1, 0: 2, 1: 3 }
```

## Notas
- A função lida de maneira diferente com a mesclagem de objetos e arrays. Ao mesclar objetos, ela combina as propriedades, e ao mesclar arrays, ela as concatena.
- Se o tipo de entrada for misto (ex.: um array e um objeto), o tipo resultante será um objeto que combina ambos.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function merge(...values: Record<string, any>[]): Record<string, any>;
function merge(...values: any[][]): any[];
function merge(...values: any[]): any {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      merged[key] = obj[key];
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}
```

```javascript
function merge(...values) {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      merged[key] = obj[key];
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}
```
:::

## Referências
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)