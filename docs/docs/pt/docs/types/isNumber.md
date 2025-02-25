# isNumber  
Verifica se o valor fornecido é do tipo `number`. A função retorna `true` se o valor for um número, e `false` caso contrário.

## Sintaxe
```typescript
function isNumber(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for um número, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando números
```typescript
isNumber(42); // true
isNumber(3.14); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isNumber("Hello"); // false
isNumber([]); // false
isNumber({}); // false
isNumber(null); // false
isNumber(undefined); // false
```

## Notas
- A função utiliza o operador `typeof`, que é a forma padrão e confiável de verificar se o valor é do tipo `number` em JavaScript.
- `NaN` (Not-a-Number) também é considerado do tipo `number` em JavaScript, mas pode ser tratado separadamente, se necessário.

## Código Fonte
::: code-group

```typescript
function isNumber(value: any): boolean {
  return typeof value === "number";
}
```

```javascript
function isNumber(value) {
  return typeof value === "number";
}
```
:::

## Referências
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)