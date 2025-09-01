## throttle

A função `throttle` limita a frequência com que uma função pode ser executada, garantindo que ela seja chamada no máximo uma vez a cada intervalo de tempo definido.

### Sintaxe

```typescript
throttle(callback, wait, options?)
```

### Parâmetros

| Parâmetro  | Tipo       | Descrição                                                                 |
| :----------| :----------| :------------------------------------------------------------------------|
| `callback` | `Function` | Função a ser executada de forma controlada.                              |
| `wait`     | `number`   | Intervalo mínimo (em milissegundos) entre execuções da função.           |
| `options`  | `object`   | (Opcional) Configurações adicionais: `{ leading, trailing, maxWait }`.   |

#### Opções (`ThrottleOptions`)
- `leading` (`boolean`): Executa na borda inicial do intervalo (padrão: `true`).
- `trailing` (`boolean`): Executa na borda final do intervalo (padrão: `true`).
- `maxWait` (`number`): Tempo máximo sem execução, mesmo com chamadas contínuas.

### Retorno

Retorna uma função "throttled" que pode ser chamada normalmente. Essa função possui métodos auxiliares:
- `cancel()`: Cancela execuções pendentes.
- `flush()`: Executa imediatamente se houver chamada pendente.

### Exemplos

```typescript
const throttledFn = throttle(() => console.log('Executado!'), 1000);
window.addEventListener('resize', throttledFn);

// Cancelar chamadas pendentes
throttledFn.cancel();

// Forçar execução imediata
throttledFn.flush();
```

### Notas

- Lança um `TypeError` se o callback não for função.
- Útil para otimizar eventos de alta frequência como scroll, resize, etc.

### Referências
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)
- [MDN: performance.now()](https://developer.mozilla.org/pt-BR/docs/Web/API/Performance/now)