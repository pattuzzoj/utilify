# isSet

A função `isSet` verifica se o valor fornecido é uma instância de Set.

## Sintaxe

```typescript
isSet(value: any): value is Set<any>;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um Set                  |

## Exemplos

```typescript
isSet(new Set()); // => true
isSet([]); // => false
```

## Notas

* Útil para validação de coleções antes de operações específicas de Set.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set