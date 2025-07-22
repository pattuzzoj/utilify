## lock

A função `lock` garante que uma função assíncrona não seja executada simultaneamente, podendo enfileirar chamadas ou rejeitá-las conforme configuração.

### Sintaxe

```typescript
lock(callback, options?)
```

### Parâmetros

| Parâmetro   | Tipo       | Descrição                                                                 |
| :-----------| :----------| :------------------------------------------------------------------------|
| `callback`  | `Function` | Função assíncrona a ser protegida pelo lock.                             |
| `options`   | `object`   | (Opcional) Configurações: `{ queue, onLocked, onError }`.                |

#### Opções
- `queue` (`boolean`): Se `true`, chamadas durante o lock são enfileiradas (padrão: `true`).
- `onLocked` (`Function`): Função chamada quando uma chamada é bloqueada.
- `onError` (`Function`): Função chamada em caso de erro na execução do callback.

### Retorno

Retorna uma função assíncrona que respeita o lock e as opções configuradas.

### Exemplos

```typescript
const lockedFn = lock(async () => {
  await sleep(100);
  console.log('Executado!');
});

lockedFn();
lockedFn(); // Executa em sequência, não simultaneamente
```

### Notas

- Lança erro se o callback não for função.
- Útil para evitar condições de corrida em operações assíncronas.

### Referências
- [MDN: Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)