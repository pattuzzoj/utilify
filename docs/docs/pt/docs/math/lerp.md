# lerp

Realiza a interpolação linear entre dois valores numéricos.

## Sintaxe
```typescript
lerp(start: number, end: number, amount: number): number
```

## Parâmetros

| Nome     | Tipo      | Descrição                                  |
|----------|-----------|--------------------------------------------|
| `start`  | `number`  | Valor inicial.                             |
| `end`    | `number`  | Valor final.                               |
| `amount` | `number`  | Fator de interpolação (geralmente 0 a 1).  |

## Retorno

| Tipo      | Descrição                                 |
|-----------|-------------------------------------------|
| `number`  | Valor interpolado entre `start` e `end`.   |

## Exemplo
```typescript
lerp(0, 10, 0.5); // 5
lerp(10, 20, 0.25); // 12.5
```

## Notas
- Lança `TypeError` se algum argumento não for número.
- Útil para animações, transições e cálculos de valores intermediários.

## Referências
- [MDN: Interpolação linear](https://developer.mozilla.org/pt-BR/docs/Games/Techniques/Linear_interpolation)