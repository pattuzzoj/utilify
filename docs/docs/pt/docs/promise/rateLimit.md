## rate

A função `rate` limita o número de execuções de uma função em um determinado intervalo de tempo, útil para controle de chamadas frequentes (rate limiting).

### Sintaxe

```typescript
rate(callback, limit, interval)
```

### Parâmetros

| Parâmetro   | Tipo       | Descrição                                                      |
| :-----------| :----------| :-------------------------------------------------------------|
| `callback`  | `Function` | Função a ser executada.                                       |
| `limit`     | `number`   | Número máximo de execuções permitidas por intervalo.           |
| `interval`  | `number`   | Intervalo de tempo em milissegundos para o limite.             |

### Retorno

Retorna uma função que, ao ser chamada, executa o callback se o limite não foi atingido e retorna `true`. Caso contrário, retorna `false` sem executar o callback.

### Exemplos

```typescript
const limited = rate(() => console.log('Executado!'), 2, 1000);

limited(); // true
limited(); // true
limited(); // false (limite atingido)
// Após 1 segundo, o limite é resetado
```

### Notas

- Lança um `TypeError` se o callback não for função ou se limit/interval não forem números positivos.
- Útil para evitar sobrecarga de recursos ou chamadas excessivas a APIs.

### Referências
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)