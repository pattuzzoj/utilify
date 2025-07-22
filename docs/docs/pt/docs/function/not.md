# not

Cria uma função que retorna o valor booleano invertido do resultado da função fornecida.

## Sintaxe
```typescript
not<T extends (...args: any[]) => boolean>(callback: T): (...args: Parameters<T>) => boolean
```

## Parâmetros

| Nome      | Tipo   | Descrição                        |
|-----------|--------|----------------------------------|
| `callback`| `T`    | Função cujo resultado será invertido. |

## Retorno

| Tipo                                 | Descrição                          |
|--------------------------------------|------------------------------------|
| `(...args: Parameters<T>) => boolean`| Função que retorna o valor booleano invertido. |

## Exemplo
```typescript
const isEven = (x: number) => x % 2 === 0;
const isOdd = not(isEven);
isOdd(3); // true
isOdd(4); // false
```

## Notas
- Lança um `TypeError` se o argumento não for função.
- Útil para criar predicados inversos de forma funcional.

## Referências
- [MDN: Logical NOT](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_NOT)