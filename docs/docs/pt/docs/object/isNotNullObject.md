## isNotNullObject

A função `isNotNullObject` verifica se um valor é um objeto não nulo.

### Sintaxe

```typescript
isNotNullObject(value): boolean
```

### Parâmetros

| Parâmetro | Tipo   | Descrição                        |
| :-------- | :------| :--------------------------------|
| `value`   | `any`  | Valor a ser verificado.           |

### Retorno

Retorna `true` se o valor for um objeto e não for `null`, caso contrário retorna `false`.

### Exemplos

```typescript
isNotNullObject({}); // true
isNotNullObject([]); // true
isNotNullObject(null); // false
isNotNullObject(42); // false
```

### Notas

- Arrays e funções também são considerados objetos em JavaScript.
- Retorna `false` para `null`, tipos primitivos e `undefined`.

### Referências
- [MDN: typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)