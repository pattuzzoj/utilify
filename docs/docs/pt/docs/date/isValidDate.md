# isValidDate  
Verifica se o valor fornecido é um objeto `Date` válido. A função verifica se o valor é uma instância da classe `Date` e se a data não é `NaN`.

## Sintaxe
```typescript
isValidDate(date: Date): boolean
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                            |
|-----------|----------|------------------------------------------------------|
| `date`    | `Date`   | O valor a ser verificado para determinar se é um objeto `Date` válido. |

### Retorno

| Tipo      | Descrição                                            |
|-----------|------------------------------------------------------|
| `boolean` | Retorna `true` se o valor for um objeto `Date` válido, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Objeto `Date` válido
```typescript
isValidDate(new Date()); // true
```

### Exemplo 2: Objeto `Date` inválido (Data `NaN`)
```typescript
isValidDate(new Date("invalid date")); // false
```

### Exemplo 3: Valor não `Date`
```typescript
isValidDate("2025-01-05"); // false
```

## Notas
- A função primeiro verifica se o valor é uma instância da classe `Date` usando `instanceof Date`.
- Em seguida, verifica se a data é válida, garantindo que o método `getTime()` não retorne `NaN`. O método `getTime()` retorna `NaN` para datas inválidas.

## Código Fonte
::: code-group

```typescript
function isValidDate(date: Date): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}
```

```javascript
function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
```
:::

## Referências
- [MDN: `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN: `Date.prototype.getTime`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)