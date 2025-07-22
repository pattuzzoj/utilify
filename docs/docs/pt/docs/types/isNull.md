# isNull

A função `isNull` verifica se o valor fornecido é exatamente null.

## Sintaxe

```typescript
isNull(value: any): value is null;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for null                    |

## Exemplos

```typescript
isNull(null); // => true
isNull(undefined); // => false
isNull(0); // => false
```

## Notas

* Útil para validação de valores nulos explicitamente.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Glossary/null