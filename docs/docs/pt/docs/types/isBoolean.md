# isBoolean

A função `isBoolean` verifica se o valor fornecido é do tipo booleano.

## Sintaxe

```typescript
isBoolean(value: any): value is boolean;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um booleano             |

## Exemplos

```typescript
isBoolean(true); // => true
isBoolean(false); // => true
isBoolean(0); // => false
```

## Notas

* Útil para validação de tipos antes de operações lógicas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean