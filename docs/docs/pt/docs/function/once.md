# once

Cria uma função que só pode ser executada uma vez; chamadas subsequentes retornam o resultado da primeira execução.

## Sintaxe
```typescript
once<T extends (...args: any[]) => any>(callback: T): (...args: Parameters<T>) => ReturnType<T>
```

## Parâmetros

| Nome      | Tipo   | Descrição                                 |
|-----------|--------|-------------------------------------------|
| `callback`| `T`    | Função a ser executada apenas uma vez.    |

## Retorno

| Tipo                                 | Descrição                                                |
|--------------------------------------|----------------------------------------------------------|
| `(...args: Parameters<T>) => ReturnType<T>` | Função que executa `callback` apenas na primeira chamada. |

## Exemplo
```typescript
let count = 0;
const incrementOnce = once(() => ++count);
incrementOnce(); // 1
incrementOnce(); // 1
```

## Notas
- Lança um `TypeError` se o argumento não for função.
- Útil para inicializações, eventos únicos ou operações idempotentes.

## Referências
- [MDN: Idempotence](https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotence)