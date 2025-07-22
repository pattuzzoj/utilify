# isRangeError

A função `isRangeError` verifica se um valor é uma instância de `RangeError`.

## Sintaxe

```typescript
isRangeError(value: any): value is RangeError;
```

### Parâmetros

| Nome    | Tipo   | Descrição                             |
|---------|--------|---------------------------------------|
| `value` | `any`  | O valor a ser verificado.             |

### Retorno

| Tipo      | Descrição                                   |
|-----------|---------------------------------------------|
| `boolean` | Retorna `true` se o valor for um RangeError, caso contrário, `false`. |

## Exemplos

```typescript
isRangeError(new RangeError("Fora do intervalo"));
// => true

isRangeError(new Error());
// => false

isRangeError({});
// => false
```

## Notas

* Útil para identificar erros de intervalo em operações matemáticas ou de array.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RangeError