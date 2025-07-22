# isPrimitive

A função `isPrimitive` verifica se o valor fornecido é um tipo primitivo em JavaScript.

## Sintaxe

```typescript
isPrimitive(value: any): value is (string | number | boolean | symbol | bigint | null | undefined);
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um tipo primitivo        |

## Exemplos

```typescript
isPrimitive(123); // => true
isPrimitive("abc"); // => true
isPrimitive({}); // => false
```

## Notas

* Tipos primitivos: string, number, boolean, symbol, bigint, null, undefined.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Glossary/Primitive