## omit

A função `omit` cria uma cópia de um objeto, excluindo as propriedades especificadas.

### Sintaxe

```typescript
omit(obj, keys): object
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :-------- | :------- | :-----------------------------------------|
| `obj`     | `object` | Objeto de origem.                         |
| `keys`    | `string[]` | Lista de chaves a serem omitidas.        |

### Retorno

Retorna um novo objeto sem as propriedades especificadas em `keys`.

### Exemplos

```typescript
omit({ a: 1, b: 2, c: 3 }, ['b']); // { a: 1, c: 3 }
omit({ x: 10, y: 20 }, ['x']); // { y: 20 }
```

### Notas

- Não modifica o objeto original.
- Útil para remover propriedades sensíveis ou desnecessárias.

### Referências
- [MDN: delete operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/delete)