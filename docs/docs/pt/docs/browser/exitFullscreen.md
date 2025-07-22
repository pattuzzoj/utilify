# exitFullscreen

A função `exitFullscreen` solicita a saída do modo de tela cheia no navegador, se suportado.

## Sintaxe

```typescript
exitFullscreen(): void;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo   | Descrição           |
| ------ | ------------------- |
| `void` | Não retorna valor   |

## Exemplos

```typescript
exitFullscreen();
// Sai do modo tela cheia, se estiver ativo
```

## Notas

* Pode não funcionar em todos os navegadores ou contextos.
* Útil para interfaces que alternam entre tela cheia e modo normal.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Document/exitFullscreen