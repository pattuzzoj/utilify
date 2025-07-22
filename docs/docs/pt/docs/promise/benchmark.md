## benchmark

A função `benchmark` mede o tempo médio de execução de uma função síncrona ou assíncrona, útil para análise de performance.

### Sintaxe

```typescript
await benchmark(callback, iterations)
```

### Parâmetros

| Parâmetro     | Tipo         | Descrição                                                    |
| :-------------| :------------| :-----------------------------------------------------------|
| `callback`    | `Function`   | Função a ser executada e medida (pode ser assíncrona).      |
| `iterations`  | `number`     | Número de execuções para calcular a média (>= 1).           |

### Retorno

Retorna uma `Promise<number>` com o tempo médio de execução em milissegundos.

### Exemplos

```typescript
await benchmark(() => fetch('/api/data'), 10); // Mede 10 execuções
```

### Notas

- Lança um `TypeError` se o callback não for função ou iterations não for número válido.
- Útil para comparar performance de diferentes implementações.

### Referências
- [MDN: performance.now()](https://developer.mozilla.org/pt-BR/docs/Web/API/Performance/now)