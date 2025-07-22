# isAggregateError

A função `isAggregateError` verifica se um valor é uma instância de `AggregateError`.

## Sintaxe

```typescript
isAggregateError(value: any): value is AggregateError;
```

### Parâmetros

| Nome    | Tipo   | Descrição                             |
|---------|--------|---------------------------------------|
| `value` | `any`  | O valor a ser verificado.             |

### Retorno

| Tipo      | Descrição                                   |
|-----------|---------------------------------------------|
| `boolean` | Retorna `true` se o valor for um AggregateError, caso contrário, `false`. |

## Exemplos

```typescript
isAggregateError(new AggregateError([]));
// => true

isAggregateError(new Error());
// => false

isAggregateError({});
// => false
```

## Notas

* A verificação só retorna `true` se `AggregateError` estiver disponível no ambiente e o valor for uma instância dessa classe.
* Útil para identificar erros agregados em ambientes compatíveis.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/AggregateError