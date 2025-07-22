# isTypeError

A função `isTypeError` verifica se um valor é uma instância de `TypeError`.

## Sintaxe

```typescript
isTypeError(value: any): value is TypeError;
```

### Parâmetros

| Nome    | Tipo   | Descrição                             |
|---------|--------|---------------------------------------|
| `value` | `any`  | O valor a ser verificado.             |

### Retorno

| Tipo      | Descrição                                   |
|-----------|---------------------------------------------|
| `boolean` | Retorna `true` se o valor for um TypeError, caso contrário, `false`. |

## Exemplos

```typescript
isTypeError(new TypeError("Tipo inválido"));
// => true

isTypeError(new Error());
// => false

isTypeError({});
// => false
```

## Notas

* Útil para identificar erros de tipo em operações JavaScript.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypeError