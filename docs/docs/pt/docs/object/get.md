## get

A função `get` acessa o valor de uma propriedade aninhada em um objeto, utilizando um caminho (string ou array de strings). Permite definir um valor padrão caso o caminho não exista.

### Sintaxe

```typescript
get<T>(obj: T, path: string | string[], defaultValue?: any): any
```

### Parâmetros

| Parâmetro      | Tipo                     | Descrição                                                    |
| :--------------| :------------------------| :------------------------------------------------------------|
| `obj`          | `T`                      | Objeto de origem.                                            |
| `path`         | `string \| string[]`      | Caminho até a propriedade (ex: "a.b.c" ou ["a", "b", "c"]). |
| `defaultValue` | `any` (opcional)         | Valor padrão caso o caminho não exista.                      |

### Retorno

Retorna o valor encontrado no caminho especificado, ou `defaultValue` caso o caminho não exista.

### Exemplos

```typescript
const obj = { a: { b: { c: 42 } } };
get(obj, 'a.b.c'); // 42
get(obj, ['a', 'b', 'c']); // 42
get(obj, 'a.b.x', 0); // 0
```

### Notas

- Suporta caminhos com notação de array (ex: "a.b[0].c").
- Útil para acessar propriedades aninhadas de forma segura.

### Referências
- [MDN: Optional chaining](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining)