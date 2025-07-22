## sleep

A função `sleep` retorna uma Promise que é resolvida após um tempo determinado, permitindo pausar a execução assíncrona por um intervalo especificado.

### Sintaxe

```typescript
await sleep(timeout)
```

### Parâmetros

| Parâmetro   | Tipo     | Descrição                                         |
| :-----------| :--------| :------------------------------------------------|
| `timeout`   | `number` | Tempo de espera em milissegundos (não negativo). |

### Retorno

Retorna uma `Promise<void>` que é resolvida após o tempo especificado.

### Exemplos

```typescript
await sleep(1000); // Pausa por 1 segundo

sleep(500).then(() => console.log('Meio segundo se passou!'));
```

### Notas

- Lança um `TypeError` se o valor fornecido não for um número não negativo.
- Útil para atrasos em fluxos assíncronos, testes ou simulação de espera.

### Referências
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)
- [MDN: Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)