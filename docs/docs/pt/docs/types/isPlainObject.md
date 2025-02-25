# isPlainObject  
Verifica se o valor fornecido é um "objeto simples", ou seja, a função retorna `true` apenas para objetos simples criados diretamente com a notação literal `{}` ou com `new Object()`.

## Sintaxe
```typescript
function isPlainObject(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for um objeto simples, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando objetos simples
```typescript
const obj = { key: "value" };
isPlainObject(obj); // true

const obj2 = new Object();
isPlainObject(obj2); // true
```

### Exemplo 2: Verificando objetos não simples
```typescript
const arr = [];
isPlainObject(arr); // false (arrays não são objetos simples)
const customObj = new (class CustomClass {})();
isPlainObject(customObj); // false (instâncias de classes personalizadas não são objetos simples)
```

### Exemplo 3: Verificando outros tipos de valor
```typescript
isPlainObject("Hello"); // false (string não é um objeto simples)
isPlainObject(42); // false (número não é um objeto simples)
isPlainObject(null); // false (null não é um objeto simples)
isPlainObject(undefined); // false
```

## Notas
- A função faz uma verificação estrita de `value.constructor === Object` para garantir que o valor seja uma instância direta de `Object`, excluindo objetos derivados como arrays e instâncias de outras classes.
- `null` e `undefined` não são considerados objetos simples.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function isPlainObject(value: any): boolean {
  return value !== null && typeof value === 'object' && value.constructor === Object;
}
```

```javascript
function isPlainObject(value) {
  return value !== null && typeof value === 'object' && value.constructor === Object;
}
```
:::

## Referências
- [MDN: `Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)