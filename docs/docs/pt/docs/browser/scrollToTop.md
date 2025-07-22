# scrollToTop

A função `scrollToTop` rola suavemente a página até o topo.

## Sintaxe

```typescript
scrollToTop(options?: ScrollToOptions): void;
```

### Parâmetros

| Nome       | Tipo                        | Descrição                                 |
|------------|-----------------------------|-------------------------------------------|
| `options`  | `ScrollToOptions` (opcional) | Opções de rolagem                        |

### Retorno

| Tipo    | Descrição           |
| ------- | ------------------- |
| `void`  | Não retorna valor   |

## Exemplos

```typescript
scrollToTop();
// Rola até o topo da página

scrollToTop({ behavior: "smooth" });
// Rola suavemente até o topo
```

## Notas

* Útil para navegação rápida em páginas longas.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Window/scrollTo