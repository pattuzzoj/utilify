# isShareable

A função `isShareable` verifica se a API de compartilhamento nativa está disponível no navegador.

## Sintaxe

```typescript
isShareable(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo      | Descrição                                     |
| --------- | --------------------------------------------- |
| `boolean` | Verdadeiro se a API de compartilhamento existe |

## Exemplos

```typescript
isShareable();
// => true
```

## Notas

* Útil para condicionar recursos de compartilhamento nativo.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/share