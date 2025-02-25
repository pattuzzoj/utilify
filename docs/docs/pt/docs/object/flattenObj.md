# flattenObj
A função `flattenObj` achata um objeto, transformando suas propriedades aninhadas em um único nível, utilizando um separador para indicar a hierarquia das chaves.

## Sintaxe

```typescript
flattenObj(obj: Record<string, any>, separator: string = ".", path: string = ''): Record<string, any>;
```

### Parâmetros

| Parâmetro  | Tipo                          | Descrição                                                   |
|------------|-------------------------------|-------------------------------------------------------------|
| `obj`      | `Record<string, any>`          | O objeto a ser achatado.                                    |
| `separator`| `string`                       | O separador utilizado para criar a chave do objeto achatado. O padrão é `"."`. |
| `path`     | `string`                       | A chave anterior, utilizada para criar o caminho completo. O padrão é uma string vazia. |

### Retorno

| Tipo                          | Descrição                                                   |
|-------------------------------|-------------------------------------------------------------|
| `Record<string, any>`          | Um objeto achatado, com as chaves representando a hierarquia original separada pelo delimitador. |

## Exemplos

### Exemplo 1: Achatar um Objeto Simples
```typescript
const obj = { nome: "Alice", idade: 30 };
const flatObj = flattenObj(obj);

console.log(flatObj);
// { nome: "Alice", idade: 30 }
```

### Exemplo 2: Achatar um Objeto com Propriedades Aninhadas
```typescript
const obj = { nome: "Alice", endereco: { cidade: "Wonderland", rua: "Rua das Flores" } };
const flatObj = flattenObj(obj);

console.log(flatObj);
// { nome: "Alice", endereco.cidade: "Wonderland", endereco.rua: "Rua das Flores" }
```

### Exemplo 3: Achatar com Separador Personalizado
```typescript
const obj = { nome: "Alice", endereco: { cidade: "Wonderland", rua: "Rua das Flores" } };
const flatObj = flattenObj(obj, "_");

console.log(flatObj);
// { nome: "Alice", endereco_cidade: "Wonderland", endereco_rua: "Rua das Flores" }
```

## Notas
- A função percorre recursivamente todas as propriedades do objeto e cria um novo objeto com as chaves "achatadas", usando o separador especificado.
- A função utiliza `isPlainObject` de `@utilify/types` para verificar se uma propriedade é um objeto plano, garantindo que a função possa achatar propriedades aninhadas.

## Dependências
- [`@utilify/types`](./types.md): Fornece a função `isPlainObject` para verificar se um valor é um objeto plano.

## Código Fonte
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function flattenObj(obj: Record<string, any>, separator: string = ".", path: string = ''): Record<string, any> {
  let flatObj: Record<string, any> = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newPath = path ? `${path}${separator}${key}` : key;
      
      if (isPlainObject(obj[key])) {
        Object.assign(flatObj, flattenObj(obj[key], separator, newPath));
      } else {
        flatObj[newPath] = obj[key];
      }
    }
  }

  return flatObj;
}
```

```javascript
function flattenObj(obj, separator = ".", path = "") {
  let flatObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newPath = path ? `${path}${separator}${key}` : key;
      
      if (isPlainObject(obj[key])) {
        Object.assign(flatObj, flattenObj(obj[key], separator, newPath));
      } else {
        flatObj[newPath] = obj[key];
      }
    }
  }

  return flatObj;
}
```
:::

## Referências
- [`isPlainObject`](./types.md)