# isBigint  
Verifica se o valor fornecido é do tipo `bigint`. A função retorna `true` se o valor for um `bigint`, e `false` caso contrário.

## Sintaxe
```typescript
function isBigint(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for um `bigint`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando `bigint`
```typescript
const bigIntValue = 12345678901234567890n;
isBigint(bigIntValue); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isBigint(42); // false
isBigint("Hello"); // false
isBigint([]); // false
isBigint({}); // false
isBigint(null); // false
```

## Notas
- A função utiliza o operador `typeof`, que é a forma recomendada e confiável para verificar o tipo de dados primitivos como `bigint` em JavaScript.

## Código Fonte
::: code-group

```typescript
function isBigint(value: any): boolean {
  return typeof value === "bigint";
}
```

```javascript
function isBigint(value) {
  return typeof value === "bigint";
}
```
:::

## Referências
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)