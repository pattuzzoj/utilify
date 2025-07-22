## unflattenObj

A função `unflattenObj` reconstrói objetos aninhados a partir de um objeto com chaves planas (flattened).

### Sintaxe

```typescript
unflattenObj(obj): object
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :-------- | :------- | :-----------------------------------------|
| `obj`     | `object` | Objeto com chaves planas a ser reconstruído. |

### Retorno

Retorna um novo objeto com a estrutura aninhada restaurada.

### Exemplos

```typescript
unflattenObj({ 'a.b.c': 1, 'a.b.d': 2 }); // { a: { b: { c: 1, d: 2 } } }
unflattenObj({ 'arr[0]': 10, 'arr[1]': 20 }); // { arr: [10, 20] }
```

### Notas

- Suporta caminhos com notação de ponto e de array (ex: 'arr[0].prop').
- Útil para converter dados serializados ou vindos de formulários em objetos aninhados.

### Referências
- [MDN: Object](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)
