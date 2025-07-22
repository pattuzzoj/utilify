# isOnline

A função `isOnline` verifica se o navegador está atualmente conectado à internet.

## Sintaxe

```typescript
isOnline(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo      | Descrição                      |
| --------- | ------------------------------ |
| `boolean` | Verdadeiro se estiver online   |

## Exemplos

```typescript
isOnline();
// => true
```

## Notas

* Útil para adaptar funcionalidades conforme a conectividade.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Navigator/onLine