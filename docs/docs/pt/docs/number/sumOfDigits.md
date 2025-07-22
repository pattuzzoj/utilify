## sumOfDigits

A função `sumOfDigits` retorna a soma dos dígitos de um número.

### Sintaxe

```typescript
sumOfDigits(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                      |
| :---------| :--------| :------------------------------|
| `value`   | `number` | Número a ser analisado.         |

### Retorno

Retorna a soma dos dígitos do número informado.

### Exemplos

```typescript
sumOfDigits(123);   // 6
sumOfDigits(2023);  // 7
```

### Notas

- Lança um `TypeError` se o valor não for um número.
- Útil para algoritmos matemáticos, validação e checksum.

### Referências
- [MDN: String.prototype.split()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)