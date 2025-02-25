# isAsync  
Verifica se a função fornecida é uma função assíncrona (`async`). A função retorna `true` se o valor for uma função assíncrona, e `false` caso contrário.

## Sintaxe
```typescript
function isAsync(callback: Function): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `callback`| `Function`| A função a ser verificada. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se a função for assíncrona, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando funções assíncronas
```typescript
async function myAsyncFunction() {
  return "Hello";
}

function mySyncFunction() {
  return "Hello";
}

isAsync(myAsyncFunction); // true
isAsync(mySyncFunction);  // false
```

### Exemplo 2: Verificando funções que não são funções
```typescript
isAsync(null); // false
isAsync(42); // false
isAsync("Hello"); // false
isAsync({}); // false
```

## Notas
- A função verifica se o `callback` fornecido é uma função assíncrona comparando seu construtor com o nome `"AsyncFunction"`. Isso é possível porque funções assíncronas têm o construtor `AsyncFunction` no JavaScript.
- A verificação do tipo da função é feita para garantir que o parâmetro seja uma função válida antes de tentar verificar se é assíncrona.

## Código Fonte
::: code-group

```typescript
function isAsync(callback: Function): boolean {
  if (typeof callback !== "function") {
    return false;
  }

  return callback.constructor.name === "AsyncFunction";
}
```

```javascript
function isAsync(callback) {
  if (typeof callback !== "function") {
    return false;
  }

  return callback.constructor.name === "AsyncFunction";
}
```
:::

## Referências
- [MDN: `AsyncFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)