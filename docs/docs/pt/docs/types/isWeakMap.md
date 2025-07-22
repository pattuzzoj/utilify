# isWeakMap

A função `isWeakMap` verifica se o valor fornecido é uma instância de WeakMap.

## Sintaxe

```typescript
isWeakMap(value: any): value is WeakMap<object, any>;
```

### Parâmetros

| Nome   | Tipo   | Descrição                |
|--------|--------|--------------------------|
| `value` | `any` | Valor a ser verificado   |

### Retorno
```
| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um WeakMap              |
```
## Exemplos

```typescript
isWeakMap(new WeakMap()); // => true
isWeakMap(new Map()); // => false
```

## Notas

* Útil para validação de coleções fracas antes de operações específicas de WeakMap.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakMap