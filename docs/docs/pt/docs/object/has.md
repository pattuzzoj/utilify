## has

A função `has` verifica se um objeto possui uma propriedade (aninhada) especificada por um caminho (string ou array de strings).

### Sintaxe

```typescript
has<T>(obj: T, path: string | string[]): boolean
```

### Parâmetros

| Parâmetro | Tipo                | Descrição                                                    |
| :---------| :-------------------| :------------------------------------------------------------|
| `obj`     | `T`                 | Objeto de origem.                                            |
| `path`    | `string \| string[]` | Caminho até a propriedade (ex: "a.b.c" ou ["a", "b", "c"]). |

### Retorno

Retorna `true` se a propriedade existir, caso contrário retorna `false`.

### Exemplos

```typescript
const obj = { a: { b: { c: 42 } } };
has(obj, 'a.b.c'); // true
has(obj, ['a', 'b', 'c']); // true
has(obj, 'a.b.x'); // false
```

### Notas

- Suporta caminhos com notação de array (ex: "a.b[0].c").
- Útil para validação de existência de propriedades aninhadas.

### Referências
- [MDN: Object.hasOwn()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)
