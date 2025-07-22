## isEqual

A função `isEqual` compara dois valores para determinar se são equivalentes em estrutura e conteúdo, incluindo objetos, arrays e tipos primitivos.

### Sintaxe

```typescript
isEqual(value1, value2): boolean
```

### Parâmetros

| Parâmetro  | Tipo   | Descrição                                 |
| :----------| :------| :-----------------------------------------|
| `value1`   | `any`  | Primeiro valor a ser comparado.            |
| `value2`   | `any`  | Segundo valor a ser comparado.             |

### Retorno

Retorna `true` se os valores forem equivalentes, caso contrário retorna `false`.

### Exemplos

```typescript
isEqual({ a: 1 }, { a: 1 }); // true
isEqual([1, 2], [1, 2]); // true
isEqual({ a: 1 }, { a: 2 }); // false
isEqual([1, 2], [2, 1]); // false
isEqual(5, 5); // true
isEqual('abc', 'abc'); // true
```

### Notas

- Realiza comparação profunda (deep equality) para objetos e arrays.
- Pode não funcionar corretamente com objetos que possuem propriedades não enumeráveis ou símbolos.

### Referências
- [MDN: Object.is()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/is)
- [MDN: JSON.stringify()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)