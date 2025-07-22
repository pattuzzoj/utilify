## isFrozen

A função `isFrozen` verifica se um objeto está congelado, ou seja, se não pode ser modificado.

### Sintaxe

```typescript
isFrozen(obj): boolean
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                      |
| :-------- | :------- | :-----------------------------|
| `obj`     | `object` | Objeto a ser verificado.       |

### Retorno

Retorna `true` se o objeto estiver congelado, caso contrário retorna `false`.

### Exemplos

```typescript
const obj = Object.freeze({ a: 1 });
isFrozen(obj); // true
isFrozen({ b: 2 }); // false
```

### Notas

- Utiliza internamente `Object.isFrozen`.
- Objetos congelados não podem ter propriedades adicionadas, removidas ou modificadas.

### Referências
- [MDN: Object.isFrozen()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)