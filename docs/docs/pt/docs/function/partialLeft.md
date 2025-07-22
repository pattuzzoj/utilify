# partialLeft

Cria uma nova função com argumentos pré-preenchidos à esquerda.

## Sintaxe
```typescript
partialLeft<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R,
  ...partial: P
): (...args: DropFirst<Args> extends P ? [] : DropFirst<Args>) => R
```

## Parâmetros

| Nome        | Tipo                        | Descrição                                   |
|-------------|-----------------------------|---------------------------------------------|
| `callback`  | `(...args: Args) => R`      | Função original a ser parcialmente aplicada.|
| `...partial`| `P`                         | Argumentos a serem pré-preenchidos à esquerda.|

## Retorno

| Tipo                                                    | Descrição                                 |
|---------------------------------------------------------|-------------------------------------------|
| `(...args: DropFirst<Args> extends P ? [] : DropFirst<Args>) => R` | Nova função com os argumentos parciais aplicados. |

## Exemplo
```typescript
const soma = (a: number, b: number, c: number) => a + b + c;
const somaParcial = partialLeft(soma, 1);
somaParcial(2, 3); // 6
```

## Notas
- Lança um `TypeError` se o callback não for função.
- Útil para criar funções especializadas a partir de funções genéricas.

## Referências
- [MDN: Partial application](https://developer.mozilla.org/pt-BR/docs/Glossary/Partial_application)