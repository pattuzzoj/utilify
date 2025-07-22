## isInfinity

A função `isInfinity` verifica se um valor é infinito positivo ou negativo.

### Sintaxe

```typescript
isInfinity(value)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :---------| :--------| :-----------------------------------------|
| `value`   | `number` | Valor a ser verificado.                    |

### Retorno

Retorna `true` se o valor for `Infinity` ou `-Infinity`, caso contrário retorna `false`.

### Exemplos

```typescript
isInfinity(Infinity);  // true
isInfinity(-Infinity); // true
isInfinity(10);        // false
```

### Notas

- Lança um `TypeError` se o valor não for um número.
- Útil para validações matemáticas e controle de limites extremos.

### Referências
- [MDN: Infinity](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Infinity)