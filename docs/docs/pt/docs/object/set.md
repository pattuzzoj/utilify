## set

A função `set` define o valor de uma propriedade em um objeto, suportando caminhos aninhados (deep set).

### Sintaxe

```typescript
set(obj, path, value): object
```

### Parâmetros

| Parâmetro | Tipo                | Descrição                                              |
| :-------- | :------------------ | :-----------------------------------------------------|
| `obj`     | `object`            | Objeto de destino.                                     |
| `path`    | `string \| string[]`   | Caminho da propriedade (ponto ou array notation).       |
| `value`   | `any`               | Valor a ser definido.                                  |

### Retorno

Retorna o objeto modificado com o valor definido no caminho especificado.

### Exemplos

```typescript
set({}, 'a.b.c', 5); // { a: { b: { c: 5 } } }
set({ x: 1 }, ['y', 'z'], 2); // { x: 1, y: { z: 2 } }
set({ arr: [] }, 'arr[0]', 10); // { arr: [10] }
```

### Notas

- Cria objetos intermediários conforme necessário.
- Suporta caminhos com notação de array (ex: 'arr[0].prop').
- Útil para atualizar propriedades aninhadas de forma segura.

### Referências
- [MDN: Object](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)