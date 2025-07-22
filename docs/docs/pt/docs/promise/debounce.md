## debounce

A função `debounce` limita a frequência de execução de uma função, adiando sua chamada até que um intervalo de inatividade seja atingido.

### Sintaxe

```typescript
debounce(callback, wait?, options?)
```

### Parâmetros

| Parâmetro   | Tipo       | Descrição                                                                 |
| :-----------| :----------| :------------------------------------------------------------------------|
| `callback`  | `Function` | Função a ser executada de forma controlada.                              |
| `wait`      | `number`   | (Opcional) Tempo de espera em milissegundos (padrão: 300).                |
| `options`   | `object`   | (Opcional) `{ leading, trailing, maxWait }` para controle avançado.       |

#### Opções
- `leading` (`boolean`): Executa no início do intervalo (padrão: `false`).
- `trailing` (`boolean`): Executa ao final do intervalo (padrão: `true`).
- `maxWait` (`number`): Tempo máximo sem execução (em ms).

### Retorno

Retorna uma função debounced com métodos `cancel()` e `flush()`.

### Exemplos

```typescript
const debounced = debounce(() => console.log('Executado!'), 500, { leading: true });
debounced();
debounced(); // Apenas a primeira chamada executa imediatamente
```

### Notas

- Lança erro se `leading` e `trailing` forem ambos `false`.
- Útil para otimizar eventos frequentes como digitação ou redimensionamento.

### Referências
- [MDN: setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)
