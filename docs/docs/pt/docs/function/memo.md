# memo

Cria uma função memoizada que armazena em cache os resultados de chamadas anteriores.

## Sintaxe
```typescript
memo<T extends (...args: any[]) => any>(callback: T, options?: { cacheTimeout?: number, serializer?: (args: Parameters<T>) => string }): (...args: Parameters<T>) => ReturnType<T>
```

## Parâmetros

| Nome         | Tipo      | Descrição                                                                 |
|--------------|-----------|---------------------------------------------------------------------------|
| `callback`   | `T`       | Função a ser memoizada.                                                  |
| `options`    | `object`  | (Opcional) Opções para memoização.                                       |
| `cacheTimeout`| `number` | (Opcional) Tempo em milissegundos para expirar o cache.                   |
| `serializer` | `function`| (Opcional) Função para serializar os argumentos (padrão: `JSON.stringify`).|

## Retorno

| Tipo                                 | Descrição            |
|--------------------------------------|----------------------|
| `(...args: Parameters<T>) => ReturnType<T>` | Função memoizada. |

## Exemplo
```typescript
const slowFn = (x: number) => x * 2;
const fastFn = memo(slowFn, { cacheTimeout: 1000 });
fastFn(2); // Calcula e armazena
fastFn(2); // Retorna do cache
```

## Notas
- Lança um `TypeError` se os argumentos forem inválidos.
- O cache é baseado na serialização dos argumentos.

## Referências
- [MDN: Memoization](https://developer.mozilla.org/pt-BR/docs/Glossary/Memoization)