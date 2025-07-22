# isProd

A função `isProd` verifica se o ambiente de execução está em modo de produção.

## Sintaxe

```typescript
isProd(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se o ambiente for de produção, `false` caso contrário     |

## Exemplos

```typescript
isProd();
// => true (quando NODE_ENV ou DENO_ENV for 'production')
// => false (em outros casos)
```

## Notas

* Verifica as variáveis de ambiente `NODE_ENV` e `DENO_ENV`.
* Útil para condicionar execuções específicas de produção.

## Referências

* https://nodejs.org/api/process.html#processenv
* https://deno.com/manual@v1.42.1/runtime