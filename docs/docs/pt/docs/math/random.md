# random

Gera um número aleatório dentro de um intervalo especificado.

## Sintaxe
```typescript
random(min?: number, max?: number): number
```

## Parâmetros

| Nome   | Tipo      | Descrição                  |
|--------|-----------|----------------------------|
| `min`  | `number`  | Valor mínimo (inclusivo).  |
| `max`  | `number`  | Valor máximo (exclusivo).  |

## Retorno

| Tipo      | Descrição                              |
|-----------|----------------------------------------|
| `number`  | Um número aleatório no intervalo `[min, max)`.


## Exemplo
```typescript
random(); // Exemplo: 0.472
random(1, 10); // Exemplo: 7.384
random(-5, 5); // Exemplo: -2.17
```

## Notas
- Lança `TypeError` se `min` ou `max` não forem números.
- Se apenas `min` for fornecido, gera número entre 0 (inclusivo) e `min` (exclusivo).
- Se `min` for maior ou igual a `max`, retorna sempre `min`.

## Referências
- [MDN: Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
