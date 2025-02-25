# debounce

A função `debounce` garante que uma função de callback seja executada apenas após um atraso especificado, limitando a frequência com que pode ser acionada em rápida sucessão. Isso é útil em cenários como limitar chamadas de API ou o tratamento de entradas do usuário.

## Sintaxe

```typescript
function debounce(callback: (...args: any[]) => void, delay: number = 300): (...args: any[]) => void;
```

### Parâmetros

| Nome        | Tipo                      | Descrição                                       |
|-------------|---------------------------|-------------------------------------------------|
| `callback`  | `(...args: any[]) => void` | A função que será executada após o atraso.      |
| `delay`     | `number`                  | O atraso (em milissegundos) antes que o callback seja acionado. O valor padrão é 300ms. |

### Retorno

| Tipo         | Descrição                                   |
|--------------|---------------------------------------------|
| `(...args: any[]) => void` | Uma versão "debounced" da função de callback fornecida. |

## Exemplos

### Exemplo 1: Uso básico de debounce

```typescript
const log = (message: string): void => {
  console.log(message);
};

const debouncedLog = debounce(log, 1000);

debouncedLog('Olá');  // Não será logado imediatamente
debouncedLog('Mundo');  // Cancela a chamada anterior e loga 'Mundo' após 1000ms
```

### Exemplo 2: Debounce para entrada do usuário

```typescript
const handleSearchInput = (query: string): void => {
  console.log(`Procurando por: ${query}`);
};

const debouncedSearch = debounce(handleSearchInput, 500);

// A função de busca só será acionada após 500ms de ausência de digitação
debouncedSearch('maçã');
debouncedSearch('torta de maçã');  // Esta chamada cancela a anterior
```

## Notas

- `debounce` é útil em cenários onde você deseja limitar a taxa com que uma função é executada, como ao lidar com pressionamentos de tecla ou eventos de redimensionamento.
- A função só será acionada após o usuário parar de invocar a função por um período de tempo especificado.

## Código

::: code-group
```typescript
function debounce(callback: (...args: any[]) => void, delay: number = 300): (...args: any[]) => void {
  let timerId: number;

  return (...args: any[]): void => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay) as unknown as number;
  }
}
```

```javascript
function debounce(callback, delay = 300) {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay);
  };
}
```
:::

## Referências

- [setTimeout](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)
- [clearTimeout](https://developer.mozilla.org/pt-BR/docs/Web/API/clearTimeout)