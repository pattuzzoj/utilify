# isDate  
Verifica se o valor fornecido é uma instância de `Date`. A função retorna `true` se o valor for um objeto `Date`, e `false` caso contrário.

## Sintaxe
```typescript
function isDate(value: Date): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `Date`    | O valor a ser verificado. Deve ser um objeto `Date`. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for uma instância de `Date`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando instâncias de `Date`
```typescript
const date = new Date();
isDate(date); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isDate(new Date("2023-01-01")); // true
isDate(42); // false
isDate("2023-01-01"); // false
isDate({}); // false
isDate(null); // false
```

## Notas
- A função utiliza `instanceof Date`, que verifica se o valor é uma instância da classe `Date`.

## Código Fonte
::: code-group

```typescript
function isDate(value: Date): boolean {
  return value instanceof Date;
}
```

```javascript
function isDate(value) {
  return value instanceof Date;
}
```
:::

## Referências
- [MDN: `instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)