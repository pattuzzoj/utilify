# isEvalError

A função `isEvalError` verifica se um valor é uma instância de `EvalError`.

## Sintaxe

```typescript
isEvalError(value: any): value is EvalError;
```

### Parâmetros

| Nome    | Tipo   | Descrição                             |
|---------|--------|---------------------------------------|
| `value` | `any`  | O valor a ser verificado.             |

### Retorno

| Tipo      | Descrição                                   |
|-----------|---------------------------------------------|
| `boolean` | Retorna `true` se o valor for um EvalError, caso contrário, `false`. |

## Exemplos

```typescript
isEvalError(new EvalError("Erro de avaliação"));
// => true

isEvalError(new Error());
// => false

isEvalError({});
// => false
```

## Notas

* Útil para identificar erros relacionados ao uso da função `eval`.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/EvalError