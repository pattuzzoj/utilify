## isFloat

A função `isFloat` verifica se um valor é um número de ponto flutuante finito.

### Sintaxe

```typescript
isFloat(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :---------| :--------| :-----------------------------------------|
| `value`   | `number` | Valor a ser verificado.                    |

### Retorno

Retorna `true` se o valor for um número de ponto flutuante finito, caso contrário retorna `false`.

### Exemplos

```typescript
isFloat(3.14); // true
isFloat(10);   // false
isFloat(NaN);  // false
```

### Notas

- Lança um `TypeError` se o valor não for um número.
- Útil para validações matemáticas e diferenciação entre inteiros e floats.

### Referências
- [MDN: Number.isFinite()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)