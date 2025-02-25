# isPrimitive  
Verifica se o valor fornecido é um valor primitivo. Valores primitivos incluem `null`, `undefined`, `boolean`, `number`, `string`, `symbol`, e `bigint`. A função retorna `true` se o valor for considerado primitivo, e `false` caso contrário.

## Sintaxe
```typescript
function isPrimitive(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for primitivo, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando valores primitivos
```typescript
isPrimitive(42); // true
isPrimitive("Hello"); // true
isPrimitive(true); // true
isPrimitive(Symbol("desc")); // true
isPrimitive(null); // true
```

### Exemplo 2: Verificando valores não primitivos
```typescript
isPrimitive(undefined); // true
isPrimitive({}); // false
isPrimitive([]); // false
isPrimitive(function() {}); // false
isPrimitive(new Date()); // false
```

## Notas
- A função verifica se o valor é um tipo que não seja um objeto ou função. O `null` é tratado separadamente porque é tecnicamente um objeto em JavaScript, mas é considerado um valor primitivo.
- A verificação de `typeof` é feita de forma que valores como objetos e funções sejam filtrados.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function isPrimitive(value: any): boolean {
  return value === null || typeof value !== "object" && typeof value !== "function";
}
```

```javascript
function isPrimitive(value) {
  return value === null || typeof value !== "object" && typeof value !== "function";
}
```
:::

## Referências
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
- [MDN: `null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)