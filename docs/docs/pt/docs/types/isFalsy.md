# isFalsy

A função `isFalsy` verifica se o valor fornecido é considerado falsy em JavaScript.

## Sintaxe

```typescript
isFalsy(value: any): boolean;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um valor falsy           |

## Exemplos

```typescript
isFalsy(0); // => true
isFalsy(""); // => true
isFalsy(null); // => true
isFalsy(undefined); // => true
isFalsy(false); // => true
isFalsy(NaN); // => true
isFalsy(1); // => false
```

## Notas

* Valores falsy incluem: false, 0, "", null, undefined, NaN.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Glossary/Falsy