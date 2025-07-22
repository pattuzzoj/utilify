## isSealed

A função `isSealed` verifica se um objeto está selado, ou seja, se não pode ter novas propriedades adicionadas e as existentes não podem ser removidas.

### Sintaxe

```typescript
isSealed(obj): boolean
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                      |
| :-------- | :------- | :-----------------------------|
| `obj`     | `object` | Objeto a ser verificado.       |

### Retorno

Retorna `true` se o objeto estiver selado, caso contrário retorna `false`.

### Exemplos

```typescript
const obj = Object.seal({ a: 1 });
isSealed(obj); // true
isSealed({ b: 2 }); // false
```

### Notas

- Utiliza internamente `Object.isSealed`.
- Objetos selados não podem ter propriedades adicionadas ou removidas, mas os valores das propriedades existentes ainda podem ser alterados.

### Referências
- [MDN: Object.isSealed()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)