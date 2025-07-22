## seal

A função `seal` sela recursivamente um objeto, impedindo a adição ou remoção de propriedades.

### Sintaxe

```typescript
seal(obj): object
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                      |
| :-------- | :------- | :-----------------------------|
| `obj`     | `object` | Objeto a ser selado.           |

### Retorno

Retorna o objeto selado.

### Exemplos

```typescript
const obj = { a: 1, b: { c: 2 } };
seal(obj);
// obj e obj.b não podem ter propriedades adicionadas ou removidas
```

### Notas

- Utiliza internamente `Object.seal` de forma recursiva.
- Propriedades existentes ainda podem ser modificadas, mas não adicionadas ou removidas.
- Útil para proteger estruturas de dados contra alterações estruturais.

### Referências
- [MDN: Object.seal()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)