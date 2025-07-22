# isUndefined

A função `isUndefined` verifica se o valor fornecido é undefined.

## Sintaxe

```typescript
isUndefined(value: any): value is undefined;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for undefined               |

## Exemplos

```typescript
isUndefined(undefined); // => true
isUndefined(null); // => false
isUndefined(0); // => false
```

## Notas

* Útil para validação de variáveis não inicializadas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Glossary/undefined