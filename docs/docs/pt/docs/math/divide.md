# divide

Divide um número (dividendo) por outro (divisor).

## Sintaxe
```typescript
divide(dividend: number, divisor: number): number
```

## Parâmetros

| Nome        | Tipo      | Descrição                |
|-------------|-----------|--------------------------|
| `dividend`  | `number`  | O número a ser dividido. |
| `divisor`   | `number`  | O número pelo qual dividir. |

## Retorno

| Tipo      | Descrição                |
|-----------|--------------------------|
| `number`  | O resultado da divisão.  |

## Exemplo
```typescript
divide(10, 2); // 5
divide(7, 3); // 2.333...
```

## Notas
- Lança `TypeError` se algum argumento não for número.
- Lança `Error` se o divisor for zero.

## Referências
- [MDN: Operador de divisão](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Division)