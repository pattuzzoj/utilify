# isTest

A função `isTest` verifica se o ambiente de execução está em modo de teste.

## Sintaxe

```typescript
isTest(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se o ambiente for de teste, `false` caso contrário        |

## Exemplos

```typescript
isTest();
// => true (quando NODE_ENV ou DENO_ENV for 'test')
// => false (em outros casos)
```

## Notas

* Verifica as variáveis de ambiente `NODE_ENV` e `DENO_ENV`.
* Útil para condicionar execuções específicas de teste.

## Referências

* https://nodejs.org/api/process.html#processenv
* https://deno.com/manual@v1.42.1/runtime