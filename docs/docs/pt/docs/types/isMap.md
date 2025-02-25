# isMap  
Verifica se o valor fornecido é uma instância de `Map`. A função retorna `true` se o valor for um objeto do tipo `Map`, e `false` caso contrário.

## Sintaxe
```typescript
function isMap(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for uma instância de `Map`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando instâncias de `Map`
```typescript
const map = new Map();
isMap(map); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isMap(new Map([["key", "value"]])); // true
isMap(42); // false
isMap("Hello"); // false
isMap([]); // false
isMap({}); // false
```

## Notas
- A função utiliza `instanceof Map`, que é a maneira recomendada e confiável de verificar se o valor é uma instância da classe `Map`.

## Código Fonte
::: code-group

```typescript
function isMap(value: any): boolean {
  return value instanceof Map;
}
```

```javascript
function isMap(value) {
  return value instanceof Map;
}
```
:::

## Referências
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)