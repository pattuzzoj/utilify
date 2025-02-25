# isSet  
Verifica se o valor fornecido é uma instância de `Set`. A função retorna `true` se o valor for um `Set`, e `false` caso contrário.

## Sintaxe
```typescript
function isSet(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for um `Set`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando `Set`
```typescript
const mySet = new Set([1, 2, 3]);
isSet(mySet); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isSet(undefined); // false
isSet(null); // false
isSet(42); // false
isSet("Hello"); // false
isSet({}); // false
```

## Notas
- A função utiliza o operador `instanceof`, que é utilizado para verificar se um objeto é uma instância de uma classe, nesse caso, a classe `Set`.

## Dependências
Nenhuma.

## Código Fonte
::: code-group

```typescript
function isSet(value: any): boolean {
  return value instanceof Set;
}
```

```javascript
function isSet(value) {
  return value instanceof Set;
}
```
:::

## Referências
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)