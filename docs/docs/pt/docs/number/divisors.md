## divisors

A função `divisors` retorna todos os divisores inteiros positivos de um número.

### Sintaxe

```typescript
divisors(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :---------| :--------| :-----------------------------------------|
| `value`   | `number` | Número inteiro positivo a ser analisado.   |

### Retorno

Retorna um array de números contendo todos os divisores positivos de `value`.

### Exemplos

```typescript
divisors(12); // [1, 2, 3, 4, 6, 12]
divisors(7);  // [1, 7]
```

### Notas

- Lança um `TypeError` se o valor não for um inteiro positivo.
- Útil para análise de fatores, matemática e algoritmos.

### Referências
- [MDN: Remainder operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder)