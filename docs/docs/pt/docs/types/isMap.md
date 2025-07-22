# isMap

A função `isMap` verifica se o valor fornecido é uma instância de Map.

## Sintaxe

```typescript
isMap(value: any): value is Map<any, any>;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um Map                  |

## Exemplos

```typescript
isMap(new Map()); // => true
isMap({}); // => false
```

## Notas

* Útil para validação de coleções antes de operações específicas de Map.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map