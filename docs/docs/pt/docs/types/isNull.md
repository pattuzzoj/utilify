# isNull  
Verifica se o valor fornecido é `null`. A função retorna `true` se o valor for `null`, e `false` caso contrário.

## Sintaxe
```typescript
function isNull(value: any): boolean
```

### Parâmetros

| Parâmetro | Tipo      | Descrição                               |
|-----------|-----------|-----------------------------------------|
| `value`   | `any`     | O valor a ser verificado. Pode ser de qualquer tipo. |

### Retorno

| Tipo     | Descrição                                  |
|----------|--------------------------------------------|
| `boolean`| Retorna `true` se o valor for `null`, caso contrário, retorna `false`. |

## Exemplos

### Exemplo 1: Verificando `null`
```typescript
isNull(null); // true
```

### Exemplo 2: Verificando outros tipos de valor
```typescript
isNull(42); // false
isNull("Hello"); // false
isNull([]); // false
isNull({}); // false
isNull(undefined); // false
```

## Notas
- A função utiliza o operador de comparação estrita `===`, que verifica se o valor é exatamente igual a `null` sem fazer conversões de tipo.

## Código Fonte
::: code-group

```typescript
function isNull(value: any): boolean {
  return value === null;
}
```

```javascript
function isNull(value) {
  return value === null;
}
```
:::

## Referências
- [MDN: `null`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)