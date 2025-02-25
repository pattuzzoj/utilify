# isArray  
Verifica se o valor fornecido é um array. A função retorna `true` se o valor for um array, e `false` caso contrário.

## Sintaxe
```typescript
function isArray(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for um array, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando arrays
```typescript
isArray([1, 2, 3]); // true
isArray(["apple", "banana"]); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isArray(null); // false
isArray(42); // false
isArray("Hello"); // false
isArray({}); // false
```

## Notas
- A função utiliza `Array.isArray`, que é a maneira recomendada e mais confiável de verificar se um valor é um array, já que pode distinguir arrays de objetos genéricos e outros tipos.

## Código Fonte
::: code-group
```typescript
function isArray(value: any): boolean {
  return Array.isArray(value);
}
```

```javascript
function isArray(value) {
  return Array.isArray(value);
}
```
:::

## Referências
- [MDN: `Array.isArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)