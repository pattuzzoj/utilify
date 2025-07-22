# isServer

A função `isServer` verifica se o código está sendo executado em ambiente de servidor (não navegador).

## Sintaxe

```typescript
isServer(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em ambiente de servidor, `false` caso contrário |

## Exemplos

```typescript
isServer();
// => true (em Node.js, Deno, etc.)
// => false (em navegador)
```

## Notas

* Verifica a ausência dos objetos `window` ou `document`.
* Útil para condicionar execuções específicas de servidor.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Window
* https://developer.mozilla.org/pt-BR/docs/Web/API/Document