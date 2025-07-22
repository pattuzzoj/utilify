# requestFullscreen

A função `requestFullscreen` solicita que um elemento entre em modo de tela cheia no navegador.

## Sintaxe

```typescript
requestFullscreen(element?: HTMLElement): void;
```

### Parâmetros

| Nome       | Tipo                | Descrição                                                                 |
|------------|---------------------|---------------------------------------------------------------------------|
| `element`  | `HTMLElement` (opcional) | Elemento a ser exibido em tela cheia. Se não informado, usa o body.      |

### Retorno

| Tipo    | Descrição           |
| ------- | ------------------- |
| `void`  | Não retorna valor   |

## Exemplos

```typescript
requestFullscreen();
// Solicita tela cheia para o body

const el = document.getElementById("video");
requestFullscreen(el);
// Solicita tela cheia para o elemento "video"
```

## Notas

* Pode não funcionar em todos os navegadores ou contextos.
* Útil para vídeos, apresentações e experiências imersivas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Element/requestFullscreen