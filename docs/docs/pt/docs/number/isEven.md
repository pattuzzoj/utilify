## isEven

A função `isEven` verifica se um número é par.

### Sintaxe

```typescript
isEven(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :---------| :--------| :-----------------------------------------|
| `value`   | `number` | Número a ser verificado.                   |

### Retorno

Retorna `true` se o número for par, caso contrário retorna `false`.

### Exemplos

```typescript
isEven(4); // true
isEven(7); // false
```

### Notas

- Lança um `TypeError` se o valor não for um número.
- Útil para validações matemáticas e lógicas.

### Referências
- [MDN: Operador de resto](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder)