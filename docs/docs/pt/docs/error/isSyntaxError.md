# isSyntaxError

A função `isSyntaxError` verifica se um valor é uma instância de `SyntaxError`.

## Sintaxe

```typescript
isSyntaxError(value: any): value is SyntaxError;
```

### Parâmetros

| Nome    | Tipo   | Descrição                             |
|---------|--------|---------------------------------------|
| `value` | `any`  | O valor a ser verificado.             |

### Retorno

| Tipo      | Descrição                                   |
|-----------|---------------------------------------------|
| `boolean` | Retorna `true` se o valor for um SyntaxError, caso contrário, `false`. |

## Exemplos

```typescript
isSyntaxError(new SyntaxError("Erro de sintaxe"));
// => true

isSyntaxError(new Error());
// => false

isSyntaxError({});
// => false
```

## Notas

* Útil para identificar erros de sintaxe em operações JavaScript.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError