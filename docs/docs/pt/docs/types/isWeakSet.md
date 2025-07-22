# isWeakSet

A função `isWeakSet` verifica se o valor fornecido é uma instância de WeakSet.

## Sintaxe

```typescript
isWeakSet(value: any): value is WeakSet<object>;
```

### Parâmetros

| Nome   | Tipo   | Descrição                |
|--------|--------|--------------------------|
| `value` | `any` | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for uma instância de `WeakSet`|

## Exemplos

```typescript
isWeakSet(new WeakSet()); // => true
isWeakSet(new Set()); // => false
```

## Notas

* Útil para validação de coleções fracas antes de operações específicas de WeakSet.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakSet