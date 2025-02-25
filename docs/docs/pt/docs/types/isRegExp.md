# isRegExp  
Verifica se o valor fornecido é uma instância de `RegExp`. A função retorna `true` se o valor for um objeto `RegExp`, e `false` caso contrário.

## Sintaxe
```typescript
function isRegExp(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for um `RegExp`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando `RegExp`
```typescript
const regex = /abc/;
isRegExp(regex); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isRegExp(undefined); // false
isRegExp(null); // false
isRegExp(42); // false
isRegExp("Hello"); // false
isRegExp({}); // false
```

## Notas
- A função utiliza o operador `instanceof`, que é utilizado para verificar se um objeto é uma instância de uma classe, nesse caso, a classe `RegExp`.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function isRegExp(value: any): boolean {
  return value instanceof RegExp;
}
```

```javascript
function isRegExp(value) {
  return value instanceof RegExp;
}
```
:::

## Referências
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)