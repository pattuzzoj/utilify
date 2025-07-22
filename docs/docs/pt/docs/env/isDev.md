# isDev

A função `isDev` verifica se o ambiente de execução está em modo de desenvolvimento.

## Sintaxe

```typescript
isDev(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se o ambiente for de desenvolvimento, `false` caso contrário |

## Exemplos

```typescript
isDev();
// => true (quando NODE_ENV ou DENO_ENV for 'development')
// => false (em outros casos)
```

## Notas

* Verifica as variáveis de ambiente `NODE_ENV` e `DENO_ENV`.
* Útil para condicionar execuções específicas de desenvolvimento.

## Referências

* https://nodejs.org/api/process.html#processenv
* https://deno.com/manual@v1.42.1/runtime