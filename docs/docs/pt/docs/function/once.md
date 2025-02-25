# once

A função `once` garante que uma função seja chamada apenas uma vez, independentemente de quantas vezes for invocada. Ela retorna uma nova função que, na primeira chamada, executa o callback fornecido e armazena o resultado. Nas chamadas subsequentes, ela retorna o mesmo resultado da primeira execução.

## Sintaxe

```typescript
function once<T>(callback: (...args: any[]) => T): (...args: any[]) => T;
```

### Parâmetros

| Nome        | Tipo                                    | Descrição                                                       |
|-------------|-----------------------------------------|-------------------------------------------------------------------|
| `callback`  | `(...args: any[]) => T`                 | A função que será executada apenas uma vez.                      |

### Retorno

| Tipo               | Descrição                                             |
|--------------------|-------------------------------------------------------|
| `(...args: any[]) => T` | Uma função que, na primeira chamada, executa `callback`, mas nas chamadas subsequentes, retorna o resultado da primeira execução. |

## Exemplos

### Exemplo 1: Executando uma função uma única vez

```typescript
let count = 0;
const incrementOnce = once(() => count++);

console.log(incrementOnce()); // 1
console.log(incrementOnce()); // 1
console.log(incrementOnce()); // 1
```

- A função `incrementOnce` só executa o incremento na primeira chamada.
- Nas chamadas subsequentes, ela retorna o mesmo valor de `count`, sem executar o callback.

### Exemplo 2: Chamando uma função assíncrona uma única vez

```typescript
const fetchData = once(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
});

fetchData().then(data => console.log(data)); // Executa o fetch e retorna os dados
fetchData().then(data => console.log(data)); // Retorna os dados do primeiro fetch sem fazer nova requisição
```

- A função `fetchData` executa a requisição HTTP apenas uma vez.
- Nas chamadas subsequentes, o mesmo resultado da primeira execução é retornado.

## Notas

- O resultado da primeira execução é memorizado e retornado nas chamadas subsequentes.
- `once` é útil em situações onde uma operação precisa ser realizada apenas uma vez, como em inicializações ou carregamento de dados.

## Código Fonte

::: code-group
```typescript
function once<T>(callback: (...args: any[]) => T): (...args: any[]) => T {
  let called = false;
  let result: T;

  return (...args: any[]): T => {
    if (!called) {
      called = true;
      result = callback(...args);
    }

    return result;
  }
}
```

```javascript
function once(callback) {
  let called = false;
  let result;

  return (...args) => {
    if (!called) {
      called = true;
      result = callback(...args);
    }

    return result;
  };
}
```
:::

## Referências

- [Function.prototype](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function)