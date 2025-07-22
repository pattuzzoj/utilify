# mod

Calcula o módulo (resto) da divisão entre dois números, sempre retornando um valor não negativo.

## Sintaxe
```typescript
mod(dividend: number, divisor: number): number
```

## Parâmetros

| Nome       | Tipo     | Descrição                |
|------------|----------|--------------------------|
| `dividend` | `number` | O número a ser dividido. |
| `divisor`  | `number` | O número pelo qual dividir. |

## Retorno

| Tipo     | Descrição                                 |
|----------|-------------------------------------------|
| `number` | O resultado do módulo, sempre não negativo. |

## Exemplo
```typescript
mod(10, 3); // 1
mod(-10, 3); // 2
mod(10, -3); // -2
```

## Notas
- Lança `TypeError` se algum argumento não for número.
- Lança `Error` se o divisor for zero.
- Garante resultado não negativo para divisores positivos.

## Referências
- [MDN: Operador de resto](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Remainder)