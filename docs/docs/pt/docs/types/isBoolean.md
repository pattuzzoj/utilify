# isBoolean  
Verifica se o valor fornecido é do tipo `boolean`. A função retorna `true` se o valor for um `boolean`, e `false` caso contrário.

## Sintaxe
```typescript
function isBoolean(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for um `boolean`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando valores booleanos
```typescript
isBoolean(true); // true
isBoolean(false); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isBoolean(42); // false
isBoolean("Hello"); // false
isBoolean([]); // false
isBoolean({}); // false
```

## Notas
- A função utiliza o operador `typeof`, que é a maneira mais simples e eficaz de verificar se o tipo de um valor é `boolean`.

## Código Fonte
::: code-group

```typescript
function isBoolean(value: any): boolean {
  return typeof value === "boolean";
}
```

```javascript
function isBoolean(value) {
  return typeof value === "boolean";
}
```
:::

## Referências
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)