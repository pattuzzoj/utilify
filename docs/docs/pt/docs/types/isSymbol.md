# isSymbol

A função `isSymbol` verifica se o valor fornecido é do tipo symbol.

## Sintaxe

```typescript
isSymbol(value: any): value is symbol;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um símbolo              |

## Exemplos

```typescript
isSymbol(Symbol("id")); // => true
isSymbol("id"); // => false
```

## Notas

* Útil para validação de identificadores únicos.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol