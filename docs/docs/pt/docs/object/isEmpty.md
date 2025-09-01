## isEmpty

A função `isEmpty` verifica se um valor (objeto, array, string, Map ou Set) está vazio.

### Sintaxe

```typescript
isEmpty(value): boolean
```

### Parâmetros

| Parâmetro | Tipo   | Descrição                                 |
| :---------| :------| :-----------------------------------------|
| `value`   | `any`  | Valor a ser verificado.                    |

### Retorno

Retorna `true` se o valor estiver vazio, caso contrário retorna `false`.

### Exemplos

```typescript
isEmpty({}); // true
isEmpty([]); // true
isEmpty(''); // true
isEmpty({ a: 1 }); // false
isEmpty([1, 2]); // false
```

### Notas

- Suporta objetos, arrays, strings, Map e Set.
- Retorna `true` para `null`.

### Referências
- [MDN: Object.keys()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)