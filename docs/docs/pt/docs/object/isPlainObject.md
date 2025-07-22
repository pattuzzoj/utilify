## isPlainObject

A função `isPlainObject` verifica se um valor é um objeto simples, criado por um literal ou por `Object`.

### Sintaxe

```typescript
isPlainObject(value): boolean
```

### Parâmetros

| Parâmetro | Tipo   | Descrição                        |
| :-------- | :------| :--------------------------------|
| `value`   | `any`  | Valor a ser verificado.           |

### Retorno

Retorna `true` se o valor for um objeto simples, caso contrário retorna `false`.

### Exemplos

```typescript
isPlainObject({}); // true
isPlainObject(Object.create(null)); // true
isPlainObject([]); // false
isPlainObject(new Date()); // false
```

### Notas

- Objetos simples são criados por `{}` ou `new Object()`.
- Retorna `false` para arrays, funções, instâncias de classes e objetos nativos.

### Referências
- [MDN: Object.getPrototypeOf()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)