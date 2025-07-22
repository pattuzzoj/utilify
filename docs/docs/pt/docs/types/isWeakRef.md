# isWeakRef

A função `isWeakRef` verifica se o valor fornecido é uma instância de WeakRef.

## Sintaxe

```typescript
isWeakRef(value: any): value is WeakRef<any>;
```

### Parâmetros

| Nome   | Tipo   | Descrição                |
|--------|--------|--------------------------|
| `value` | `any` | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um `WeakRef`            |

## Exemplos

```typescript
isWeakRef(new WeakRef({})); // => true
isWeakRef({}); // => false
```

## Notas

* Útil para validação de referências fracas antes de operações específicas de WeakRef.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakRef