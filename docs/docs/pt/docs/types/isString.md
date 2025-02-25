# isString  
Verifica se o valor fornecido é do tipo `string`. A função retorna `true` se o valor for uma `string`, e `false` caso contrário.

## Sintaxe
```typescript
function isString(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for uma `string`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando `string`
```typescript
isString("Hello"); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isString(undefined); // false
isString(null); // false
isString(42); // false
isString({}); // false
```

## Notas
- A função utiliza o operador `typeof`, que é a forma padrão e recomendada para verificar o tipo de dados primitivos como `string` em JavaScript.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function isString(value: any): boolean {
  return typeof value === "string";
}
```

```javascript
function isString(value) {
  return typeof value === "string";
}
```
:::

## Referências
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)