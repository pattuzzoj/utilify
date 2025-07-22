# partialRight

Cria uma nova função com argumentos pré-preenchidos à direita.

## Sintaxe
```typescript
partialRight<Args extends any[], R, P extends Partial<Args>>(
  callback: (...args: Args) => R | Promise<R>,
  ...partial: P
): (...args: DropLast<Args, P>) => R | Promise<R>
```

## Parâmetros

| Nome        | Tipo                              | Descrição                                   |
|-------------|-----------------------------------|---------------------------------------------|
| `callback`  | `(...args: Args) => R \| Promise<R>` | Função original a ser parcialmente aplicada.|
| `...partial`| `P`                               | Argumentos a serem pré-preenchidos à direita.|

## Retorno

| Tipo                                         | Descrição                                         |
|----------------------------------------------|---------------------------------------------------|
| `(...args: DropLast<Args, P>) => R \| Promise<R>` | Nova função com os argumentos parciais aplicados à direita. |

## Exemplo
```typescript
const concat = (a: string, b: string, c: string) => a + b + c;
const concatParcial = partialRight(concat, "C");
concatParcial("A", "B"); // "ABC"
```

## Notas
- Lança um `TypeError` se o callback não for função.
- Útil para criar funções especializadas a partir de funções genéricas.

## Referências
- [MDN: Partial application](https://developer.mozilla.org/pt-BR/docs/Glossary/Partial_application)