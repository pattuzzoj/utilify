# sanitizeObj
A função `sanitizeObj` percorre um objeto e substitui valores específicos por um valor de substituição fornecido.

## Sintaxe

```typescript
sanitizeObj(obj: Record<string, any>, values: any[], replace?: any): Record<string, any>;
```

### Parâmetros

| Parâmetro  | Tipo                         | Descrição                                                                 |
|------------|------------------------------|---------------------------------------------------------------------------|
| `obj`      | `Record<string, any>`         | O objeto que será sanitizado, onde os valores específicos serão substituídos. |
| `values`   | `any[]`                       | Um array com os valores a serem substituídos no objeto.                   |
| `replace`  | `any`                         | O valor que substituirá os valores encontrados no objeto (opcional).      |

### Retorno

| Tipo                         | Descrição                                                    |
|------------------------------|--------------------------------------------------------------|
| `Record<string, any>`         | O objeto sanitizado, com os valores substituídos.            |

## Exemplos

### Exemplo 1: Substituindo valores em um objeto
```typescript
const obj = { name: "Alice", age: 30, country: "USA" };
const result = sanitizeObj(obj, ["USA"], "Canada");

console.log(result);
// { name: "Alice", age: 30, country: "Canada" }
```

### Exemplo 2: Substituindo valores em objetos aninhados
```typescript
const obj = { user: { name: "Alice", country: "USA" }, address: { city: "New York" } };
const result = sanitizeObj(obj, ["USA"], "Canada");

console.log(result);
// { user: { name: "Alice", country: "Canada" }, address: { city: "New York" } }
```

### Exemplo 3: Substituindo valores com um valor customizado
```typescript
const obj = { name: "Alice", age: 30, country: "USA" };
const result = sanitizeObj(obj, [30], "Unknown");

console.log(result);
// { name: "Alice", age: "Unknown", country: "USA" }
```

## Notas
- Se o parâmetro `replace` for fornecido, ele substituirá os valores encontrados em `values` dentro do objeto.
- A função também lida com objetos aninhados e aplica as substituições recursivamente.

## Dependências
- [isPlainObject](./types.md): Verifica se o valor é um objeto simples.

## Código Fonte
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function sanitizeObj(obj: Record<string, any>, values: any[], replace?: any): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (isPlainObject(obj[key])) {
      result[key] = sanitizeObj(obj[key], values, replace);
    } else if (values.includes(obj[key])) {
      if (replace !== undefined) {
        result[key] = replace;
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```

```javascript
function sanitizeObj(obj, values, replace) {
  const result = {};

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      result[key] = sanitizeObj(obj[key], values, replace);
    } else if (values.includes(obj[key])) {
      if (replace !== undefined) {
        result[key] = replace;
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```
:::

## Referências
- [isPlainObject](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)