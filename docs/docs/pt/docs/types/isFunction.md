# isFunction

A função `isFunction` verifica se o valor fornecido é uma função.

## Sintaxe

```typescript
isFunction(value: any): value is Function;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for uma função              |

## Exemplos

```typescript
isFunction(function() {}); // => true
isFunction(() => {}); // => true
isFunction(123); // => false
```

## Notas

* Útil para validação antes de executar ou aplicar funções.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function