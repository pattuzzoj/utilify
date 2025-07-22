## backoff

A função `backoff` executa uma ação assíncrona com tentativas automáticas e atrasos progressivos entre as tentativas, utilizando estratégias de backoff e jitter.

### Sintaxe

```typescript
await backoff(action, options?)
```

### Parâmetros

| Parâmetro    | Tipo         | Descrição                                                                 |
| :------------| :------------| :------------------------------------------------------------------------|
| `action`     | `Function`   | Função assíncrona a ser executada e retentada em caso de erro.           |
| `options`    | `object`     | (Opcional) Configurações avançadas de backoff e jitter.                  |

#### Opções
- `backoffMode` (`'fixed' | 'linear' | 'exponential'`): Estratégia de aumento do atraso (padrão: 'exponential').
- `initialDelay` (`number`): Atraso inicial em ms (padrão: 500).
- `jitterMode` (`'none' | 'full' | 'equal' | 'decorrelated'`): Estratégia de variação aleatória do atraso (padrão: 'full').
- `maxDelay` (`number`): Atraso máximo em ms (padrão: 60000).
- `maxAttempts` (`number`): Número máximo de tentativas (padrão: 5).
- `onRetry` (`Function`): Função chamada a cada retentativa, recebendo o número da tentativa e o atraso atual.

### Retorno

| Tipo         | Descrição                                                              |
| :----------- | :---------------------------------------------------------------------|
| `Promise`    | Resolve com o resultado da ação ou rejeita após todas as tentativas.   |

### Exemplos

```typescript
await backoff(() => fetch('/api/data'), { maxAttempts: 3, backoffMode: 'linear' });
```

### Notas

- Lança erro se os parâmetros forem inválidos.
- Útil para lidar com falhas temporárias em operações assíncronas, como requisições HTTP.

### Referências
- [MDN: Exponential backoff and jitter](https://aws.amazon.com/pt/blogs/architecture/exponential-backoff-and-jitter/)