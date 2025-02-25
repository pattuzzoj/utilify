# isFunction  
Verifica se o valor fornecido é uma função. A função retorna `true` se o valor for uma função, e `false` caso contrário.

## Sintaxe
```typescript
function isFunction(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for uma função, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando funções
```typescript
function myFunction() {}
isFunction(myFunction); // true

const arrowFunction = () => {};
isFunction(arrowFunction); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isFunction(42); // false
isFunction("Hello"); // false
isFunction([]); // false
isFunction({}); // false
```

## Notas
- A função utiliza o operador `typeof`, que é a maneira mais direta e confiável de verificar se um valor é do tipo `function`.

## Código Fonte
::: code-group

```typescript
function isFunction(value: any): boolean {
  return typeof value === "function";
}
```

```javascript
function isFunction(value) {
  return typeof value === "function";
}
```
:::

## Referências
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)