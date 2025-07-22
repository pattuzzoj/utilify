# scrollToElement

A função `scrollToElement` rola suavemente a página até um elemento alvo identificado por seletor ou referência.

## Sintaxe

```typescript
scrollToElement(target: string | HTMLElement, options?: ScrollIntoViewOptions): void;
```

### Parâmetros

| Nome       | Tipo                                   | Descrição                                 |
|------------|----------------------------------------|-------------------------------------------|
| `target`   | `string` \| `HTMLElement`              | Seletor CSS ou elemento alvo              |
| `options`  | `ScrollIntoViewOptions` (opcional)     | Opções de rolagem                         |

### Retorno

| Tipo    | Descrição           |
| ------- | ------------------- |
| `void`  | Não retorna valor   |

## Exemplos

```typescript
scrollToElement("#topo");
// Rola até o elemento com id "topo"

const el = document.getElementById("rodape");
scrollToElement(el, { behavior: "smooth" });
// Rola suavemente até o rodapé
```

## Notas

* Útil para navegação em páginas longas ou âncoras.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView