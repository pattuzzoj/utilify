# deepMerge
A função `deepMerge` faz a mesclagem profunda de múltiplos objetos ou arrays em um único objeto ou array, mesclando recursivamente quaisquer objetos ou arrays internos.

## Sintaxe

```typescript
deepMerge(...values: Record<string, any>[]): Record<string, any>;
deepMerge(...values: any[][]): any[];
deepMerge(...values: any[]): any;
```

### Parâmetros

| Parâmetro | Tipo                          | Descrição                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `values`  | `Record<string, any>[]`        | Uma lista de objetos ou arrays a serem mesclados profundamente. |
| `values`  | `any[][]`                      | Uma lista de arrays a serem mesclados profundamente.        |
| `values`  | `any[]`                        | Uma lista de valores a serem mesclados profundamente, que podem incluir objetos ou arrays. |

### Retorno

| Tipo                          | Descrição                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | Um objeto profundamente mesclado com todas as propriedades dos objetos fornecidos. |
| `any[]`                        | Um array profundamente mesclado com todos os valores dos arrays fornecidos. |

## Exemplos

### Exemplo 1: Mesclando Objetos Profundamente
```typescript
const obj1 = { nome: "Alice", endereco: { cidade: "Wonderland" } };
const obj2 = { idade: 25, endereco: { pais: "Fictionland" } };

const objMesclado = deepMerge(obj1, obj2);

console.log(objMesclado);
// { nome: "Alice", idade: 25, endereco: { cidade: "Wonderland", pais: "Fictionland" } }
```

### Exemplo 2: Mesclando Arrays Profundamente
```typescript
const arr1 = [1, 2, [3, 4]];
const arr2 = [5, 6, [7, 8]];

const arrMesclado = deepMerge(arr1, arr2);

console.log(arrMesclado);
// [1, 2, [3, 4], 5, 6, [7, 8]]
```

### Exemplo 3: Mesclando Objetos e Arrays Aninhados
```typescript
const obj1 = { dados: [1, 2], info: { nome: "Alice" } };
const obj2 = { dados: [3, 4], info: { idade: 25 } };

const mesclado = deepMerge(obj1, obj2);

console.log(mesclado);
// { dados: [3, 4], info: { nome: "Alice", idade: 25 } }
```

## Notas
- Esta função mescla recursivamente objetos e arrays. Se for encontrado um objeto ou array em uma chave, ele será mesclado recursivamente.
- Utiliza `Array.isArray()` para verificar se o valor é um array e `isPlainObject` de `@utilify/types` para verificar se o valor é um objeto plano.

## Dependências
- [`@utilify/types`](./types.md): Fornece a função `isPlainObject` para verificar se um valor é um objeto plano.

## Código Fonte
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function deepMerge(...values: Record<string, any>[]): Record<string, any>;
function deepMerge(...values: any[][]): any[];
function deepMerge(...values: any[]): any {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      if(Array.isArray(obj[key]) || isPlainObject(obj[key])) {
        merged[key] = deepMerge(merged[key], obj[key]);
      } else {
        merged[key] = obj[key];
      }
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}
```

```javascript
function deepMerge(...values) {
  return values.reduce((merged, obj) => {
    for (const key in obj) {
      if (Array.isArray(obj[key]) || isPlainObject(obj[key])) {
        merged[key] = deepMerge(merged[key], obj[key]);
      } else {
        merged[key] = obj[key];
      }
    }

    return merged;
  }, Array.isArray(values[0]) ? [] : {});
}
```
:::

## Referências
- [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [`isPlainObject`](./types.md)