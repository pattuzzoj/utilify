## clone

A função `clone` realiza uma cópia profunda (deep clone) de qualquer valor, incluindo objetos, arrays e tipos primitivos.

### Sintaxe

```typescript
clone<T>(value: T): T
```

### Parâmetros

| Parâmetro | Tipo | Descrição |
| :---------| :----| :---------|
| `value`   | `T`  | Valor a ser clonado. Pode ser objeto, array ou valor primitivo. |

### Retorno

Retorna uma cópia profunda do valor informado.

### Exemplos

```typescript
const original = { a: 1, b: { c: 2 } };
const copia = clone(original);
copia.b.c = 3;
console.log(original.b.c); // 2
```

### Notas

- Utiliza internamente `structuredClone`, garantindo suporte a tipos complexos.
- Pode lançar erro se o valor contiver tipos não clonáveis pelo `structuredClone` (ex: funções).

### Referências
- [MDN: structuredClone](https://developer.mozilla.org/pt-BR/docs/Web/API/structuredClone)