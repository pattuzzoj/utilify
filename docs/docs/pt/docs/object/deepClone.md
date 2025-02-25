# deepClone
A função `deepClone` cria uma cópia profunda de um objeto ou array, clonando recursivamente todos os objetos e arrays aninhados.

## Sintaxe

```typescript
deepClone<T extends Record<string, any>>(value: T): T;
deepClone<T extends any[]>(value: T): T;
deepClone<T>(value: T): T;
```

### Parâmetros

| Parâmetro | Tipo                          | Descrição                                                   |
|-----------|-------------------------------|-------------------------------------------------------------|
| `value`   | `T extends Record<string, any>` | Um objeto a ser clonado profundamente.                      |
| `value`   | `T extends any[]`              | Um array a ser clonado profundamente.                       |
| `value`   | `T`                            | Qualquer tipo a ser clonado profundamente (objeto ou array).|

### Retorno

| Tipo       | Descrição                                                   |
|------------|-------------------------------------------------------------|
| `T`        | Uma cópia profunda do valor fornecido. A cópia será do tipo do valor original. |

## Exemplos

### Exemplo 1: Clonando um Objeto Profundamente
```typescript
const usuario = { id: 1, nome: "Alice", endereco: { cidade: "Wonderland" } };
const cloneUsuario = deepClone(usuario);
cloneUsuario.endereco.cidade = "New Wonderland";

console.log(usuario.endereco.cidade); // "Wonderland"
console.log(cloneUsuario.endereco.cidade); // "New Wonderland"
```

### Exemplo 2: Clonando um Array Profundamente
```typescript
const numeros = [1, [2, 3]];
const cloneNumeros = deepClone(numeros);
cloneNumeros[1][0] = 4;

console.log(numeros[1][0]); // 2
console.log(cloneNumeros[1][0]); // 4
```

### Exemplo 3: Alterando o Clone
```typescript
const pessoa = { nome: "Bob", idade: 30, endereco: { cidade: "Paris" } };
const clonePessoa = deepClone(pessoa);
clonePessoa.endereco.cidade = "Londres";

console.log(pessoa.endereco.cidade); // "Paris"
console.log(clonePessoa.endereco.cidade); // "Londres"
```

## Notas
- Esta função realiza uma cópia profunda, ou seja, ela copia recursivamente objetos e arrays aninhados.
- Ela utiliza `isPlainObject` de `@utilify/types` para verificar se um valor é um objeto plano, garantindo que apenas objetos planos e arrays sejam clonados profundamente.

## Dependências
- [`@utilify/types`](./types.md): Fornece a função `isPlainObject` para verificar se um valor é um objeto plano.

## Código Fonte
::: code-group

```typescript
import { isPlainObject } from '@utilify/types';

function deepClone<T extends Record<string, any>>(value: T): T;
function deepClone<T extends any[]>(value: T): T;
function deepClone<T>(value: T): T {
  const clonedValue = Array.isArray(value) ? ([] as T) : ({} as T);

  for (const key in value) {
    if (Array.isArray(value[key]) || isPlainObject(value[key])) {
      clonedValue[key] = deepClone(value[key] as any);
    } else {
      clonedValue[key] = value[key];
    }
  }

  return clonedValue;
}
```

```javascript
function deepClone(value) {
  const clonedValue = Array.isArray(value) ? [] : {};

  for (const key in value) {
    if (Array.isArray(value[key]) || isPlainObject(value[key])) {
      clonedValue[key] = deepClone(value[key]);
    } else {
      clonedValue[key] = value[key];
    }
  }

  return clonedValue;
}
```
:::

## Referências
- [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [`isPlainObject`](./types.md)