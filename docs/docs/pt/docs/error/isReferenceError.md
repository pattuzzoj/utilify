# isReferenceError

A função `isReferenceError` verifica se um valor é uma instância de `ReferenceError`.

## Sintaxe

```typescript
isReferenceError(value: any): value is ReferenceError;
```

### Parâmetros

| Nome    | Tipo   | Descrição                             |
|---------|--------|---------------------------------------|
| `value` | `any`  | O valor a ser verificado.             |

### Retorno

| Tipo      | Descrição                                   |
|-----------|---------------------------------------------|
| `boolean` | Retorna `true` se o valor for um ReferenceError, caso contrário, `false`. |

## Exemplos

```typescript
isReferenceError(new ReferenceError("Variável não definida"));
// => true

isReferenceError(new Error());
// => false

isReferenceError({});
// => false
```

## Notas

* Útil para identificar erros de referência em operações JavaScript.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError