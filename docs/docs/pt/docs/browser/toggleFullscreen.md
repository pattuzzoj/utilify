# toggleFullscreen

A função `toggleFullscreen` alterna o modo de tela cheia para um elemento dado.

## Assinatura

```typescript
function toggleFullscreen(elem: HTMLElement): void;
```

### Parâmetros

| Nome  | Tipo         | Descrição                                              |
|-------|--------------|--------------------------------------------------------|
| `elem` | `HTMLElement` | O elemento para alternar o modo de tela cheia.         |

### Retorno

| Tipo   | Descrição |
|--------|-----------|
| `void` | Nenhum.   |

## Exemplos

```typescript
const elem = document.getElementById('myElement');
toggleFullscreen(elem);
```

## Notas

- A função verifica se o modo de tela cheia está habilitado antes de alternar.

## Dependências

- [`isFullscreenEnabled`](./isFullscreenEnabled.md): A função `isFullscreenEnabled` é usada para verificar se o modo de tela cheia está disponível no ambiente.

## Código Fonte

::: code-group
```typescript
import isFullscreenEnabled from './isFullscreenEnabled';

function toggleFullscreen(elem: HTMLElement): void {
  if (!isFullscreenEnabled()) return;

  if (document.fullscreenElement === elem) {
      document.exitFullscreen();
  } else {
      elem.requestFullscreen();
  }
}
```

```javascript
function toggleFullscreen(elem) {
  if (!isFullscreenEnabled()) return;

  if (document.fullscreenElement === elem) {
      document.exitFullscreen();
  } else {
      elem.requestFullscreen();
  }
}
```
:::

## Referências

- [Element.requestFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen)
- [Document.exitFullscreen() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen)