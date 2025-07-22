## isFinite

A função `isFinite` verifica se um valor é um número finito.

### Sintaxe

```typescript
isFinite(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :---------| :--------| :-----------------------------------------|
| `value`   | `number` | Valor a ser verificado.                    |

### Retorno

Retorna `true` se o valor for um número finito, caso contrário retorna `false`.

### Exemplos

```typescript
isFinite(10); // true
isFinite(Infinity); // false
isFinite(NaN); // false
```

### Notas

- Lança um `TypeError` se o valor não for um número.
- Útil para validações matemáticas e controle de limites.

### Referências
- [MDN: Number.isFinite()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)