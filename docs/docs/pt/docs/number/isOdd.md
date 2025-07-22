## isOdd

A função `isOdd` verifica se um número é ímpar.

### Sintaxe

```typescript
isOdd(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                      |
| :---------| :--------| :------------------------------|
| `value`   | `number` | Número a ser verificado.        |

### Retorno

Retorna `true` se o número for ímpar, caso contrário retorna `false`.

### Exemplos

```typescript
isOdd(3); // true
isOdd(4); // false
```

### Notas

- Lança um `TypeError` se o valor não for um número.
- Útil para validações matemáticas e lógicas.

### Referências
- [MDN: Operador de resto](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder)