# isBrowser

A função `isBrowser` verifica se o código está sendo executado em um ambiente de navegador.

## Sintaxe

```typescript
isBrowser(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em ambiente de navegador, `false` caso contrário |

## Exemplos

```typescript
isBrowser();
// => true (em um navegador)
// => false (em Node.js, Deno, etc.)
```

## Notas

* Verifica a existência dos objetos `window` e `document`.
* Útil para condicionar execuções específicas de browser.

## Referências

* https://developer.mozilla.org/pt-BR/docs/Web/API/Window
* https://developer.mozilla.org/pt-BR/docs/Web/API/Document