# isFullscreenEnabled

A função `isFullscreenEnabled` verifica se a API de tela cheia está disponível no navegador.

## Sintaxe

```typescript
isFullscreenEnabled(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo      | Descrição                                 |
| --------- | ----------------------------------------- |
| `boolean` | Verdadeiro se a API de tela cheia existe   |

## Exemplos

```typescript
isFullscreenEnabled();
// => true
```

## Notas

* Útil para condicionar recursos que dependem de tela cheia.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Fullscreen_API