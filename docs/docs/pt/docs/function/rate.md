# rate

A função `rate` cria um limitador de taxa para um callback, garantindo que ele seja executado no máximo um número específico de vezes dentro de um intervalo de tempo determinado.

## Sintaxe

```typescript
function rate(
  callback: (...args: any[]) => void,
  limit: number,
  interval: number
): (...args: any[]) => boolean;
```

### Parâmetros

| Nome       | Tipo                         | Descrição                                                        |
|------------|------------------------------|------------------------------------------------------------------|
| callback   | `(...args: any[]) => void`   | A função que será executada dentro do limite de taxa.            |
| limit      | `number`                     | Número máximo de execuções permitidas dentro do intervalo.       |
| interval   | `number`                     | Janela de tempo (em milissegundos) para o limite de taxa.        |

### Retorno

| Tipo                          | Descrição                                                                 |
|-------------------------------|---------------------------------------------------------------------------|
| `(...args: any[]) => boolean` | Função limitada que retorna `true` se a execução for permitida e `false` caso contrário. |

## Exemplos

```typescript
const logLimitado = rate(console.log, 3, 1000);

setInterval(() => {
  const permitido = logLimitado("Olá, Mundo!");
  if (!permitido) {
    console.log("Limite de taxa excedido.");
  }
}, 250);
```

Neste exemplo:
- A função `logLimitado` pode ser chamada no máximo 3 vezes em um intervalo de 1 segundo.
- Chamadas além do limite são bloqueadas e retornam `false`.

## Notas

- Útil para limitar chamadas frequentes, como requisições a uma API ou tarefas intensivas.
- O contador de chamadas é resetado após o intervalo especificado.

## Código Fonte

::: code-group
```typescript
function rate(callback: (...args: any[]) => void, limit: number, interval: number): (...args: any[]) => boolean {
  let calls = 0;

  return (...args: any[]): boolean => {
    if (calls < limit) {
      if (calls === 0) {
        setTimeout(() => {
          calls = 0;
        }, interval);
      }

      calls++;
      callback(...args);
      return true;
    }

    return false;
  };
}
```

```javascript
function rate(callback, limit, interval) {
  let calls = 0;

  return (...args) => {
    if (calls < limit) {
      if (calls === 0) {
        setTimeout(() => {
          calls = 0;
        }, interval);
      }

      calls++;
      callback(...args);
      return true;
    }

    return false;
  };
}
```
:::

## Referências

- [setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)