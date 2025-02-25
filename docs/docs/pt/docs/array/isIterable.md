# isIterable

A função `isIterable` verifica se um valor implementa o protocolo iterável.

## Sintaxe

```typescript
function isIterable(value: any): boolean;
```

### Parâmetros

| Nome    | Tipo    | Descrição                                      |
|---------|---------|--------------------------------------------------|
| `value` | `any`   | O valor a ser verificado quanto à iterabilidade.  |

### Retorno

| Tipo      | Descrição                                                       |
|-----------|-------------------------------------------------------------------|
| `boolean` | `true` se o valor for iterável (possui Symbol.iterator), caso contrário `false`. |

## Exemplos

```typescript
console.log(isIterable([1, 2, 3]));     // true
console.log(isIterable("hello"));        // true
console.log(isIterable(new Set([1,2]))); // true
console.log(isIterable(123));            // false
console.log(isIterable(null));           // false
console.log(isIterable(undefined));      // false
```

## Observações

- A função verifica se o valor não é null/undefined e possui um método Symbol.iterator
- Arrays, strings, Sets, Maps e outros iteráveis nativos retornarão true
- Objetos simples e primitivos (exceto strings) retornarão false

## Código Fonte

::: code-group
```typescript
function isIterable(value: any): boolean {
  return value != null && typeof value?.[Symbol.iterator] === 'function';
}
```

```javascript
function isIterable(value) {
  return value != null && typeof value?.[Symbol.iterator] === 'function';
}
```
:::

## Referências

- [Symbol.iterator - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
- [Protocolos de iteração - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols)