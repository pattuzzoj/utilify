# throttle

A função `throttle` limita a taxa de execução de uma função de callback, garantindo que ela seja chamada, no máximo, uma vez a cada intervalo de tempo especificado.

## Sintaxe

```typescript
function throttle(callback: (...args: any[]) => void, wait?: number): (...args: any[]) => void
```

### Parâmetros

| Nome      | Tipo                        | Descrição                                                       |
|-----------|-----------------------------|-----------------------------------------------------------------|
| callback  | `(...args: any[]) => void`  | A função que será limitada em sua taxa de execução.             |
| wait      | `number` (opcional)         | O intervalo de tempo (em milissegundos) para esperar antes de executar novamente. O padrão é `300`. |

### Retorno

| Tipo                        | Descrição                                                   |
|-----------------------------|-----------------------------------------------------------|
| `(...args: any[]) => void`  | Uma versão limitada da função de callback fornecida.       |

## Exemplos

```typescript
// Exemplo: Limitando um evento de redimensionamento (resize)
const aoRedimensionar = () => {
  console.log("Evento de redimensionamento tratado em", new Date());
};

const resizeComThrottle = throttle(aoRedimensionar, 500);

window.addEventListener("resize", resizeComThrottle);
```

## Notas

- A função retornada executará o callback no máximo uma vez por intervalo de tempo especificado.
- Útil para otimizar o desempenho em eventos de alta frequência, como `scroll`, `resize` ou `input`.
- Garante que o callback seja executado com os argumentos mais recentes fornecidos.

## Código Fonte

::: code-group
```typescript
function throttle(callback: (...args: any[]) => void, wait: number = 300): (...args: any[]) => void {
  let timerId: number | null;

  return (...args: any[]): void => {
    if (!timerId) {
      timerId = setTimeout(() => (timerId = null), wait) as any as number;
      callback(...args);
    }
  };
}
```

```javascript
function throttle(callback, wait = 300) {
  let timerId = null;

  return (...args) => {
    if (!timerId) {
      timerId = setTimeout(() => (timerId = null), wait);
      callback(...args);
    }
  };
}
```
:::

## Referências

- [setTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/setTimeout)
- [clearTimeout()](https://developer.mozilla.org/pt-BR/docs/Web/API/clearTimeout)