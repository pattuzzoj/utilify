# isPromise  
Verifica se o valor fornecido é uma instância de `Promise`. A função retorna `true` se o valor for uma instância de `Promise`, e `false` caso contrário.

## Sintaxe
```typescript
function isPromise(value: object): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `object`  | O valor a ser verificado. Deve ser um objeto, geralmente uma instância de `Promise`. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for uma instância de `Promise`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando `Promise`
```typescript
const promise = new Promise((resolve) => resolve("Success"));
isPromise(promise); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isPromise(undefined); // false
isPromise(null); // false
isPromise(42); // false
isPromise("Hello"); // false
isPromise({}); // false
```

## Notas
- A função utiliza o operador `instanceof`, que verifica se o valor é uma instância da classe `Promise`.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function isPromise(value: object): boolean {
  return value instanceof Promise;
}
```

```javascript
function isPromise(value) {
  return value instanceof Promise;
}
```
:::

## Referências
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)