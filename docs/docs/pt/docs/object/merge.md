## merge

A função `merge` combina dois ou mais objetos em um novo objeto, realizando a mesclagem profunda (deep merge) das propriedades.

### Sintaxe

```typescript
merge(target, ...sources): object
```

### Parâmetros

| Parâmetro   | Tipo     | Descrição                                 |
| :-----------| :--------| :-----------------------------------------|
| `target`    | `object` | Objeto de destino que receberá as propriedades. |
| `sources`   | `object` | Um ou mais objetos de origem a serem mesclados. |

### Retorno

Retorna um novo objeto resultante da mesclagem profunda dos objetos fornecidos.

### Exemplos

```typescript
merge({ a: 1 }, { b: 2 }); // { a: 1, b: 2 }
merge({ a: { x: 1 } }, { a: { y: 2 } }); // { a: { x: 1, y: 2 } }
merge({ a: 1 }, { a: 2, b: 3 }); // { a: 2, b: 3 }
```

### Notas

- Realiza mesclagem profunda, copiando propriedades aninhadas.
- Propriedades de mesmo nome em objetos posteriores sobrescrevem as anteriores.
- Não modifica os objetos de origem nem o objeto de destino original.

### Referências
- [MDN: Object.assign()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)