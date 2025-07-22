## isPrime

A função `isPrime` verifica se um número inteiro é primo.

### Sintaxe

```typescript
isPrime(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :---------| :--------| :-----------------------------------------|
| `value`   | `number` | Número inteiro a ser verificado.           |

### Retorno

Retorna `true` se o número for primo, caso contrário retorna `false`.

### Exemplos

```typescript
isPrime(7);  // true
isPrime(10); // false
isPrime(1);  // false
```

### Notas

- Lança um `TypeError` se o valor não for um número inteiro.
- Números primos são maiores que 1 e divisíveis apenas por 1 e por si mesmos.
- Útil para algoritmos matemáticos e criptografia.

### Referências
- [MDN: Operadores aritméticos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_aritm%C3%A9ticos)
- [Wikipedia: Número primo](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)