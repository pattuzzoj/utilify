## inRange

A função `inRange` verifica se um número está dentro de um intervalo inclusivo.

### Sintaxe

```typescript
inRange(value, min, max)
```

### Parâmetros

| Parâmetro | Tipo     | Descrição                                 |
| :---------| :--------| :-----------------------------------------|
| `value`   | `number` | Número a ser verificado.                   |
| `min`     | `number` | Limite inferior do intervalo.              |
| `max`     | `number` | Limite superior do intervalo.              |

### Retorno

Retorna `true` se `value` estiver entre `min` e `max` (inclusive), caso contrário retorna `false`.

### Exemplos

```typescript
inRange(5, 1, 10); // true
inRange(0, 1, 10); // false
```

### Notas

- Lança um `TypeError` se algum parâmetro não for número.
- Útil para validação de limites e restrições numéricas.

### Referências
- [MDN: Operadores de comparação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_de_compara%C3%A7%C3%A3o)