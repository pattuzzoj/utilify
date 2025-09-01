# add

Soma todos os valores numéricos fornecidos como argumentos.

## Sintaxe
```typescript
add(...values: number[]): number
```

## Parâmetros

| Nome        | Tipo        | Descrição                  |
|-------------|-------------|----------------------------|
| `...values` | `number[]`  | Números a serem somados.   |

## Retorno

| Tipo      | Descrição                          |
|-----------|------------------------------------|
| `number`  | A soma de todos os valores fornecidos. |

## Exemplo
```typescript
add(1, 2, 3); // 6
add(); // 0
```

## Notas
- Lança um `TypeError` se algum argumento não for número.
- Retorna 0 se nenhum argumento for fornecido.

## Referências
- [MDN: Operador de adição](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Addition)
