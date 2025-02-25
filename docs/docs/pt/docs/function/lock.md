# lock

A função `lock` garante que uma função de retorno de chamada (callback) assíncrona seja executada apenas uma vez por vez, evitando execuções simultâneas. Se a função de retorno de chamada já estiver em execução, as novas invocações serão ignoradas até que a execução atual seja concluída.

## Sintaxe

```typescript
function lock(callback: (...args: any[]) => Promise<void>): (...args: any[]) => void;
```

### Parâmetros

| Nome      | Tipo                         | Descrição                                                            |
|-----------|------------------------------|------------------------------------------------------------------------|
| `callback`| `(...args: any[]) => Promise<void>` | A função de retorno de chamada assíncrona que será bloqueada. Ela retorna um `Promise` e aceita qualquer número de argumentos. |

### Retorno

| Tipo                                | Descrição                                                         |
|-------------------------------------|---------------------------------------------------------------------|
| `(...args: any[]) => void`          | Uma função embrulhada que pode ser invocada várias vezes, mas a função de retorno de chamada só será executada uma vez de cada vez. |

## Exemplos

### Exemplo 1: Bloqueando uma função assíncrona

```typescript
async function tarefa() {
  console.log("Tarefa iniciada");
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulando trabalho assíncrono
  console.log("Tarefa finalizada");
}

const tarefaBloqueada = lock(tarefa);

tarefaBloqueada(); // Saída: Tarefa iniciada -> Tarefa finalizada
tarefaBloqueada(); // Nenhuma saída, ignorada pois a tarefa está bloqueada
```

### Exemplo 2: Tratando erros na função bloqueada

```typescript
async function tarefaComErro() {
  console.log("Tarefa iniciada");
  throw new Error("Algo deu errado");
}

const tarefaComErroBloqueada = lock(tarefaComErro);

tarefaComErroBloqueada(); // Saída: Tarefa iniciada -> Callback execution error: Error: Algo deu errado
```

## Notas

- A função `lock` é útil em situações onde múltiplas invocações de uma função assíncrona podem causar problemas (por exemplo, condições de corrida).
- Ela utiliza uma variável de controle (`isLocked`) para rastrear se a função está sendo executada, garantindo que não haja execuções simultâneas.

## Código

::: code-group
```typescript
function lock(callback: (...args: any[]) => Promise<void>): (...args: any[]) => void {
  let isLocked = false;

  return async (...args: any[]): Promise<void> => {
    if (isLocked) return;

    isLocked = true;

    try {
      await callback(...args);
    } catch (error) {
      console.error("Callback execution error:", error);
    } finally {
      isLocked = false;
    }
  }
}
```

```javascript
function lock(callback) {
  let isLocked = false;

  return async (...args) => {
    if (isLocked) return;

    isLocked = true;

    try {
      await callback(...args);
    } catch (error) {
      console.error("Callback execution error:", error);
    } finally {
      isLocked = false;
    }
  }
}
```
:::

## Referências

- [Funções assíncronas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function)
- [Promessas em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises)