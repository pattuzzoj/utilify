# isObject

A função `isObject` verifica se o valor fornecido é um objeto (excluindo null).

## Sintaxe

```typescript
isObject(value: any): value is object;
```

### Parâmetros

| Nome    | Tipo    | Descrição                |
|---------|---------|--------------------------|
| `value` | `any`   | Valor a ser verificado   |

### Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `boolean` | Verdadeiro se for um objeto               |

## Exemplos

```typescript
isObject({}); // => true
isObject([]); // => true
isObject(null); // => false
```

## Notas

* Arrays e funções também são considerados objetos em JavaScript.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object