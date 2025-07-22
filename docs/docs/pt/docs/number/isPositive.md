## isPositive

A função `isPositive` verifica se um número é positivo.

### Sintaxe

```typescript
isPositive(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                      |
| :---------| :--------| :------------------------------|
| `value`   | `number` | Número a ser verificado.        |

### Retorno

Retorna `true` se o número for positivo, caso contrário retorna `false`.

### Exemplos

```typescript
isPositive(10); // true
isPositive(0);  // false
isPositive(-5); // false
```

### Notas

- Lança um `TypeError` se o valor não for um número.
- Útil para validações matemáticas e lógicas.

### Referências
- [MDN: Operadores aritméticos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritm%C3%A9ticos)