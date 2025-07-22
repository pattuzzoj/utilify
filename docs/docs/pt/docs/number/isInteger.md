## isInteger

A função `isInteger` verifica se um valor é um número inteiro finito.

### Sintaxe

```typescript
isInteger(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :---------| :--------| :-----------------------------------------|
| `value`   | `number` | Valor a ser verificado.                    |

### Retorno

Retorna `true` se o valor for um número inteiro finito, caso contrário retorna `false`.

### Exemplos

```typescript
isInteger(10);    // true
isInteger(3.14);  // false
isInteger(NaN);   // false
```

### Notas

- Lança um `TypeError` se o valor não for um número.
- Útil para validações matemáticas e controle de tipos.

### Referências
- [MDN: Number.isInteger()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)