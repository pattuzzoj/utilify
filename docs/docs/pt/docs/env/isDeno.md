# isDeno

A função `isDeno` verifica se o código está sendo executado no ambiente Deno.

## Sintaxe

```typescript
isDeno(): boolean;
```

### Parâmetros

Esta função não recebe parâmetros.

### Retorno

| Tipo       | Descrição                                                        |
| ---------- | ---------------------------------------------------------------- |
| `boolean`  | `true` se estiver em ambiente Deno, `false` caso contrário       |

## Exemplos

```typescript
isDeno();
// => true (em Deno)
// => false (em outros ambientes)
```

## Notas

* Verifica a existência do objeto global `Deno` e sua propriedade `version`.
* Útil para condicionar execuções específicas de Deno.

## Referências

* https://deno.com/manual@v1.42.1/runtime
