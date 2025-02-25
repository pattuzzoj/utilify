# isUndefined  
Verifica se o valor fornecido é `undefined`. A função retorna `true` se o valor for do tipo `undefined`, e `false` caso contrário.

## Sintaxe
```typescript
function isUndefined(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for `undefined`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando `undefined`
```typescript
isUndefined(undefined); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isUndefined(null); // false
isUndefined(42); // false
isUndefined("Hello"); // false
isUndefined({}); // false
```

## Notas
- A função utiliza o operador `typeof`, que é uma forma segura de verificar o tipo de uma variável em JavaScript, garantindo que o valor seja estritamente `undefined`.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function isUndefined(value: any): boolean {
  return typeof value === "undefined";
}
```

```javascript
function isUndefined(value) {
  return typeof value === "undefined";
}
```
:::

## Referências
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)