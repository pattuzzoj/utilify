# isTabActive

A função `isTabActive` verifica se a aba do navegador está ativa (visível para o usuário).

## Sintaxe

```typescript
isTabActive(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo      | Descrição                      |
| --------- | ------------------------------ |
| `boolean` | Verdadeiro se a aba estiver ativa |

## Exemplos

```typescript
isTabActive();
// => true
```

## Notas

* Útil para pausar ou retomar tarefas com base na visibilidade da aba.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Page_Visibility_API