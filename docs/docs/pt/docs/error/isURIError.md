# isURIError

A função `isURIError` verifica se um valor é uma instância de `URIError`.

## Sintaxe

```typescript
isURIError(value: any): value is URIError;
```

### Parâmetros

| Nome    | Tipo   | Descrição                             |
|---------|--------|---------------------------------------|
| `value` | `any`  | O valor a ser verificado.             |

### Retorno

| Tipo      | Descrição                                   |
|-----------|---------------------------------------------|
| `boolean` | Retorna `true` se o valor for um URIError, caso contrário, `false`. |

## Exemplos

```typescript
isURIError(new URIError("URI inválida"));
// => true

isURIError(new Error());
// => false

isURIError({});
// => false
```

## Notas

* Útil para identificar erros relacionados a URIs em operações JavaScript.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/URIError
