## defer

A função `defer` agenda a execução de uma função para o próximo ciclo de eventos, permitindo adiar a execução de código de forma assíncrona.

### Sintaxe

```typescript
defer(callback)
```

### Parâmetros

| Parâmetro   | Tipo       | Descrição                                 |
| :-----------| :----------| :-----------------------------------------|
| `callback`  | `Function` | Função a ser executada de forma adiada.   |

### Retorno

Não retorna valor (`void`).

### Exemplos

```typescript
defer(() => console.log('Executado depois!'));
console.log('Executado antes!');
// Saída:
// Executado antes!
// Executado depois!
```

### Notas

- Lança um `TypeError` se o callback não for função.
- Útil para adiar tarefas sem bloquear o fluxo principal.

### Referências
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)