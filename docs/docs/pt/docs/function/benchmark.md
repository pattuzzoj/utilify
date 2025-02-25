# benchmark

Executa uma função repetidamente para medir seu desempenho, retornando o tempo médio de execução das iterações.

## Sintaxe
```typescript
benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number>
```

### Parâmetros

| Parâmetro   | Tipo                                    | Descrição                                  |
|-------------|-----------------------------------------|--------------------------------------------|
| `callback`  | `() => void \| Promise<void>`            | Função a ser executada e medida. Pode ser uma função síncrona ou assíncrona. |
| `iterations`| `number`                                | Número de vezes que a função será executada (default é 1). |

### Retorno

| Tipo     | Descrição                                      |
|----------|------------------------------------------------|
| `Promise<number>` | Retorna uma promessa que resolve com o tempo médio de execução em milissegundos. |

## Exemplos

```typescript
import { benchmark } from "@utilify/function";

async function example() {
  await new Promise(resolve => setTimeout(resolve, 100));
}

benchmark(example, 3).then(avgTime => {
  console.log(`Tempo médio de execução: ${avgTime}ms`);
});
```

## Notas
- A função `benchmark` permite medir o desempenho de funções síncronas e assíncronas.
- O tempo é medido usando `performance.now()` para maior precisão.

## Dependências
[average](../math/average.md): Usado para calcular a média dos tempos de execução.

## Código Fonte
::: code-group

```typescript
import { average } from "@utilify/math";

function benchmark(callback: () => void | Promise<void>, iterations: number = 1): Promise<number> {
  return new Promise(async (resolve) => {
    const times: number[] = [];

    for (let i = 0; i < iterations; i++) {
      const start = performance.now();

      await callback();

      const end = performance.now();
      times.push(end - start);
    }
    
    resolve(average(times));
  });
}
```

```javascript
import { average } from "@utilify/math";

function benchmark(callback, iterations = 1) {
  return new Promise(async (resolve) => {
    const times = [];

    for (let i = 0; i < iterations; i++) {
      const start = performance.now();

      await callback();

      const end = performance.now();
      times.push(end - start);
    }

    resolve(average(times));
  });
}
```
:::

## Referências
- [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)
- [average](./math.md)