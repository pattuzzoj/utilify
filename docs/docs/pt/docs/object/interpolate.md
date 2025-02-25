# interpolate
A função `interpolate` substitui os espaços reservados nas strings de um objeto pelos valores correspondentes de um objeto de dados.

## Sintaxe

```typescript
interpolate<T extends Record<string, any>>(obj: T, data: Record<string, any>): T;
```

### Parâmetros

| Parâmetro | Tipo                          | Descrição                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `obj`     | `Record<string, any>`          | O objeto contendo valores de string com espaços reservados a serem substituídos. |
| `data`    | `Record<string, any>`          | O objeto de dados contendo os valores para substituir os espaços reservados. |

### Retorno

| Tipo                          | Descrição                                                   |
|-------------------------------|-------------------------------------------------------------|
| `T`                             | O objeto com os valores de string interpolados.              |

## Exemplos

### Exemplo 1: Interpolação Básica de Strings
```typescript
const obj = { name: "Olá {{name}}", age: "Idade: {{age}}" };
const data = { name: "Alice", age: 30 };
const result = interpolate(obj, data);

console.log(result);
// { name: "Olá Alice", age: "Idade: 30" }
```

### Exemplo 2: Interpolando Objetos Aninhados
```typescript
const obj = { user: { name: "Olá {{name}}", age: "Idade: {{age}}" } };
const data = { name: "Alice", age: 30 };
const result = interpolate(obj, data);

console.log(result);
// { user: { name: "Olá Alice", age: "Idade: 30" } }
```

### Exemplo 3: Espaço Reservado Ausente nos Dados
```typescript
const obj = { greeting: "Olá {{name}}, bem-vindo a {{place}}!" };
const data = { name: "Alice" };
const result = interpolate(obj, data);

console.log(result);
// { greeting: "Olá Alice, bem-vindo a {{place}}!" }
```

## Notas
- A função usa uma expressão regular para encontrar espaços reservados no formato `{{placeholder}}` e substituí-los pelos valores correspondentes do objeto `data`.
- Se um espaço reservado não for encontrado em `data`, o espaço reservado original (por exemplo, `{{name}}`) será mantido no resultado.

## Dependências
- [`@utilify/types`](./types.md): Fornece a função `isPlainObject` para verificar se um valor é um objeto simples, o que garante que objetos aninhados sejam tratados de forma recursiva.

## Código Fonte
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function interpolate<T extends Record<string, any>>(obj: T, data: Record<string, any>): T {
  const result: T = {} as T;

  for (const key in obj) {
    if (isPlainObject(obj[key])) {
      result[key] = interpolate(obj[key], data);
    } else if (typeof obj[key] === "string") {
      result[key] = obj[key].replace(/{{(\w+)}}/g, (_: string, match: string) => 
        match in data ? data[match] : `{{${match}}}`
      );
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```

```javascript
function interpolate(obj, data) {
  const result = {};

  for (const key in obj) {
    if (isPlainObject(obj[key])) {
      result[key] = interpolate(obj[key], data);
    } else if (typeof obj[key] === "string") {
      result[key] = obj[key].replace(/{{(\w+)}}/g, (_, match) => 
        match in data ? data[match] : `{{${match}}}`
      );
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
```
:::

## Referências
- [`isPlainObject`](./types.md)