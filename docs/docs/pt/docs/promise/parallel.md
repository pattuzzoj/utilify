## parallel

A função `parallel` executa múltiplas funções assíncronas em paralelo e retorna uma Promise resolvida quando todas terminarem.

### Sintaxe

```typescript
await parallel(...callbacks)
```

### Parâmetros

| Parâmetro    | Tipo                | Descrição                                             |
| :------------| :-------------------| :----------------------------------------------------|
| `callbacks`  | `Function[]`        | Lista de funções assíncronas a serem executadas.      |

### Retorno

Retorna uma `Promise` resolvida com um array dos resultados de todas as funções.

### Exemplos

```typescript
await parallel(
  () => fetch('/api/1'),
  () => fetch('/api/2'),
  () => fetch('/api/3')
);

// Ou usando then:
parallel(
  () => fetch('/api/1'),
  () => fetch('/api/2')
).then(results => console.log(results));
```

### Notas

- Lança um `TypeError` se algum dos argumentos não for função.
- Útil para executar tarefas assíncronas simultaneamente e aguardar todas.

### Referências
- [MDN: Promise.all()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)