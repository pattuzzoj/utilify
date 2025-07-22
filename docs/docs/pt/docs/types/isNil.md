# isNil

A função `isNil` verifica se o valor fornecido é null ou undefined.

## Sintaxe

```typescript
isNil(value: any): value is null | undefined;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for null ou undefined        |

## Exemplos

```typescript
isNil(null); // => true
isNil(undefined); // => true
isNil(0); // => false
```

## Notas

* Útil para validação de ausência de valor.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Glossary/undefined
* https://developer.mozilla.org/pt-BR/docs/Glossary/null