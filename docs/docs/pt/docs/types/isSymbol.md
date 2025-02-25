# isSymbol  
Verifica se o valor fornecido é do tipo `symbol`. A função retorna `true` se o valor for um `symbol`, e `false` caso contrário.

## Sintaxe
```typescript
function isSymbol(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for um `symbol`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando `symbol`
```typescript
const sym = Symbol("description");
isSymbol(sym); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isSymbol(undefined); // false
isSymbol(null); // false
isSymbol(42); // false
isSymbol("Hello"); // false
isSymbol({}); // false
```

## Notas
- A função utiliza o operador `typeof`, que é a forma padrão e recomendada para verificar o tipo de dados primitivos como `symbol` em JavaScript.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function isSymbol(value: any): boolean {
  return typeof value === "symbol";
}
```

```javascript
function isSymbol(value) {
  return typeof value === "symbol";
}
```
:::

## Referências
- [MDN: `typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)