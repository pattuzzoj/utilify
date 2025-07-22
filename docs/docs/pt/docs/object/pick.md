## pick

A função `pick` cria um novo objeto contendo apenas as propriedades especificadas do objeto original.

### Sintaxe

```typescript
pick(obj, keys): object
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :-------- | :------- | :-----------------------------------------|
| `obj`     | `object` | Objeto de origem.                         |
| `keys`    | `string[]` | Lista de chaves a serem selecionadas.    |

### Retorno

Retorna um novo objeto contendo apenas as propriedades especificadas em `keys`.

### Exemplos

```typescript
pick({ a: 1, b: 2, c: 3 }, ['b']); // { b: 2 }
pick({ x: 10, y: 20 }, ['x']); // { x: 10 }
```

### Notas

- Não modifica o objeto original.
- Útil para extrair subconjuntos de dados de objetos maiores.

### Referências
- [MDN: Object.hasOwn](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)