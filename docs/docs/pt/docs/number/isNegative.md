## isNegative

A função `isNegative` verifica se um número é negativo.

### Sintaxe

```typescript
isNegative(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                      |
| :---------| :--------| :------------------------------|
| `value`   | `number` | Número a ser verificado.        |

### Retorno

Retorna `true` se o número for negativo, caso contrário retorna `false`.

### Exemplos

```typescript
isNegative(-5); // true
isNegative(0);  // false
isNegative(10); // false
```

### Notas

- Lança um `TypeError` se o valor não for um número.
- Útil para validações matemáticas e lógicas.

### Referências
- [MDN: Operadores aritméticos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritm%C3%A9ticos)