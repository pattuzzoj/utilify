## isNaN

A função `isNaN` verifica se um valor é NaN (Not-a-Number).

### Sintaxe

```typescript
isNaN(value)
```

### Parâmetros

| Parâmetro | Tipo  | Descrição                      |
| :---------| :-----| :------------------------------|
| `value`   | `any` | Valor a ser verificado.         |

### Retorno

Retorna `true` se o valor for NaN, caso contrário retorna `false`.

### Exemplos

```typescript
isNaN(NaN);      // true
isNaN(10);       // false
isNaN('texto');  // false
```

### Notas

- Útil para validações matemáticas e controle de erros.
- Esta função verifica estritamente se o valor é NaN, não se pode ser convertido para NaN.

### Referências
- [MDN: Number.isNaN()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)