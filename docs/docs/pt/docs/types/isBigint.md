# isBigint

A função `isBigint` verifica se o valor fornecido é do tipo bigint.

## Sintaxe

```typescript
isBigint(value: any): value is bigint;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um bigint               |

## Exemplos

```typescript
isBigint(10n); // => true
isBigint(10); // => false
```

## Notas

* Útil para validação de valores numéricos grandes.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/BigInt