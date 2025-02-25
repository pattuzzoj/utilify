# isObject  
Verifica se o valor fornecido é um **objeto simples (Plain Object)** ou se é um **objeto criado a partir de uma classe personalizada** (não built-in). A função retorna `true` para objetos simples, instâncias de classes personalizadas ou objetos criados com `new` de classes que não sejam nativas do JavaScript, como `Object`, mas não para tipos como `Date`, `Map`, `Set`, etc.

## Sintaxe
```typescript
function isObject(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for um objeto simples ou uma instância de uma classe personalizada, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando objetos simples
```typescript
const obj = { key: "value" };
isObject(obj); // true (objeto simples)

const obj2 = new Object();
isObject(obj2); // true (objeto simples criado com new Object())
```

### Exemplo 2: Verificando instâncias de classes personalizadas
```typescript
class CustomClass {}
const customObj = new CustomClass();
isObject(customObj); // true (instância de classe personalizada)
```

### Exemplo 3: Verificando outros tipos de valor
```typescript
isObject([]); // true (arrays são objetos em JavaScript)
isObject(function() {}); // true (funções são objetos em JavaScript)
isObject(null); // false (null não é considerado um objeto)
isObject(undefined); // false (undefined não é considerado um objeto)
```

### Exemplo 4: Verificando objetos de classes built-in
```typescript
isObject(new Date()); // false (instâncias de Date não são consideradas como objetos criados por classes personalizadas)
isObject(new Map()); // false (instâncias de Map não são consideradas como objetos criados por classes personalizadas)
isObject(new Set()); // false (instâncias de Set não são consideradas como objetos criados por classes personalizadas)
```

### Exemplo 5: Verificando tipos primitivos
```typescript
isObject("Hello"); // false (string não é um objeto)
isObject(42); // false (número não é um objeto)
```

## Notas
- A função `isObject` verifica se o valor é um tipo de objeto, incluindo objetos simples e instâncias de classes personalizadas.
- **Objetos simples** são aqueles criados com a notação literal `{}` ou com `new Object()`.
- **Instâncias de classes personalizadas** são criadas a partir de classes definidas pelo usuário, como `new CustomClass()`.
- Para valores como `null`, tipos primitivos (como `number`, `string`, `boolean`), ou instâncias de tipos built-in (como `Date`, `Map`, `Set`), a função retorna `false`.

## Dependências
[getType](./getType.md): Utilizada para obter o tipo do valor.

## Código Fonte
::: code-group

```typescript
import getType from "./getType";

function isObject(value: any): boolean {
  return getType(value) === "object";
}
```

```javascript
import getType from "./getType";

function isObject(value) {
  return getType(value) === "object";
}
```
:::

## Referências
- [MDN: `Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)