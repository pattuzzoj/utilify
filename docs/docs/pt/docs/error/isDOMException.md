# isDOMException

A função `isDOMException` verifica se um valor é uma instância de `DOMException`.

## Sintaxe

```typescript
isDOMException(value: any): value is DOMException;
```

### Parâmetros

| Nome    | Tipo   | Descrição                             |
|---------|--------|---------------------------------------|
| `value` | `any`  | O valor a ser verificado.             |

### Retorno

| Tipo      | Descrição                                   |
|-----------|---------------------------------------------|
| `boolean` | Retorna `true` se o valor for um DOMException, caso contrário, `false`. |

## Exemplos

```typescript
isDOMException(new DOMException("Erro de DOM"));
// => true

isDOMException(new Error());
// => false

isDOMException({});
// => false
```

## Notas

* Útil para identificar exceções relacionadas à API do DOM em ambientes compatíveis.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/DOMException