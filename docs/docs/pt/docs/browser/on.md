# on

A função `on` adiciona um ouvinte de evento a um elemento alvo do DOM.

## Sintaxe

```typescript
on<K extends keyof HTMLElementEventMap>(
  target: HTMLElement | Document | Window,
  type: K,
  listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions
): void;
```

### Parâmetros

| Nome       | Tipo                                             | Descrição                                 |
|------------|--------------------------------------------------|-------------------------------------------|
| `target`   | `HTMLElement` \| `Document` \| `Window`          | Elemento alvo para o evento               |
| `type`     | `string`                                         | Tipo do evento (ex: "click")             |
| `listener` | `função`                                         | Função chamada quando o evento ocorre     |
| `options`  | `boolean` \| `AddEventListenerOptions` (opcional) | Opções adicionais para o ouvinte          |

### Retorno

| Tipo    | Descrição           |
| ------- | ------------------- |
| `void`  | Não retorna valor   |

## Exemplos

```typescript
on(window, "resize", () => {
  console.log("Janela redimensionada");
});

on(document, "visibilitychange", () => {
  // ...
});
```

## Notas

* Útil para abstrair a adição de eventos de forma tipada.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener