# onVisibilityChange

A função `onVisibilityChange` adiciona um ouvinte para mudanças de visibilidade da aba do navegador.

## Sintaxe

```typescript
onVisibilityChange(listener: () => void): void;
```

### Parâmetros

| Nome        | Tipo      | Descrição                                 |
|-------------|-----------|-------------------------------------------|
| `listener`  | `função`  | Função chamada quando a visibilidade muda |

### Retorno

| Tipo    | Descrição           |
| ------- | ------------------- |
| `void`  | Não retorna valor   |

## Exemplos

```typescript
onVisibilityChange(() => {
  if (document.visibilityState === "hidden") {
    console.log("A aba ficou oculta");
  }
});
```

## Notas

* Útil para pausar ou retomar tarefas conforme a visibilidade da aba.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Page_Visibility_API