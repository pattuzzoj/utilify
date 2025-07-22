## retry

A função `retry` executa uma função fornecida e tenta novamente em caso de erro, até um número máximo de tentativas.

### Sintaxe

```typescript
retry(callback, attempts)
```

### Parâmetros

| Parâmetro   | Tipo       | Descrição                                                      |
| :-----------| :----------| :-------------------------------------------------------------|
| `callback`  | `Function` | Função a ser executada, que pode lançar erro.                 |
| `attempts`  | `number`   | Número máximo de tentativas (inteiro positivo).               |

### Retorno

Retorna o valor retornado pela função `callback` se for bem-sucedida em alguma tentativa.
Lança um erro se todas as tentativas falharem.

### Exemplos

```typescript
let count = 0;
const result = retry(() => {
  count++;
  if (count < 3) throw new Error('Falha!');
  return 'Sucesso';
}, 5);
// result: 'Sucesso' (após 3 tentativas)

retry(() => { throw new Error('Sempre falha'); }, 2);
// Lança erro após 2 tentativas
```

### Notas

- Lança um `TypeError` se o callback não for função ou se attempts não for inteiro positivo.
- Útil para operações que podem falhar temporariamente, como requisições de rede.

### Referências
- [MDN: try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN: Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)